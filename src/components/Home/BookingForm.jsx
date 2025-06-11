import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Calendar, Clock, MapPin, User, Plus, ChevronLeft } from 'lucide-react';

const BookingForm = () => {
  // Form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: 1,
    duration: 1
  });
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCustomTime, setShowCustomTime] = useState(false);
  const [customTime, setCustomTime] = useState('');

  // Constants
  const MAX_SLOTS_PER_DAY = 10;
  const BUFFER_TIME = 30; // minutes
  const VEHICLE_TYPES = [
    { id: 'sedan', name: 'Sedan', capacity: 4 },
    { id: 'suv', name: 'SUV', capacity: 6 },
    { id: 'van', name: 'Van', capacity: 8 }
  ];

  // Generate standard time slots (8:00 AM to 8:00 PM)
  const standardTimeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  // Fetch booked slots when date changes
  useEffect(() => {
    if (formData.date) {
      fetchBookedSlots(formData.date);
    }
  }, [formData.date]);

  const fetchBookedSlots = async (selectedDate) => {
    try {
      const bookingsRef = collection(db, 'bookings');
      const q = query(bookingsRef, where('date', '==', selectedDate));
      const snapshot = await getDocs(q);

      setBookedSlots(snapshot.empty ? [] : snapshot.docs.map(doc => doc.data()));
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setBookedSlots([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isTimeSlotAvailable = (timeToCheck, duration = formData.duration) => {
    const [hours, minutes] = timeToCheck.split(':').map(Number);
    const checkTime = hours * 60 + minutes;
    const checkEndTime = checkTime + (duration * 60);

    return !bookedSlots.some(slot => {
      const [slotHours, slotMinutes] = slot.time.split(':').map(Number);
      const slotTime = slotHours * 60 + slotMinutes;
      const slotEndTime = slotTime + ((slot.duration || 1) * 60);

      return (
        (checkTime < slotEndTime + BUFFER_TIME) &&
        (checkEndTime > slotTime - BUFFER_TIME)
      );
    });
  };

  const handleCustomTimeSubmit = () => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(customTime)) {
      alert("Please enter a valid time in HH:MM format");
      return;
    }

    if (!isTimeSlotAvailable(customTime)) {
      alert("This time overlaps with an existing booking. Please choose a different time.");
      return;
    }

    setFormData(prev => ({ ...prev, time: customTime }));
    setShowCustomTime(false);
    setCustomTime('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (bookedSlots.length >= MAX_SLOTS_PER_DAY) {
        throw new Error(`Maximum bookings (${MAX_SLOTS_PER_DAY}) reached for this day.`);
      }

      if (!isTimeSlotAvailable(formData.time)) {
        throw new Error("This time slot is no longer available.");
      }

      const bookingsRef = collection(db, 'bookings');
      await addDoc(bookingsRef, {
        ...formData,
        duration: parseInt(formData.duration),
        passengers: parseInt(formData.passengers),
        createdAt: new Date()
      });

      alert("Booking successful!");
      setFormData({
        vehicleType: '',
        pickup: '',
        destination: '',
        date: '',
        time: '',
        passengers: 1,
        duration: 1
      });
      setStep(1);
    } catch (error) {
      alert(error.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const availableSlots = standardTimeSlots.filter(slot => isTimeSlotAvailable(slot));

  // Step 1: Vehicle and Date Selection
  if (step === 1) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Vehicle & Date</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
          <div className="grid grid-cols-3 gap-3">
            {VEHICLE_TYPES.map(vehicle => (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, vehicleType: vehicle.id }))}
                className={`py-3 px-2 rounded-lg border transition-all ${formData.vehicleType === vehicle.id
                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                <div className="text-sm font-medium">{vehicle.name}</div>
                <div className="text-xs text-gray-500">{vehicle.capacity} passengers</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Choose a date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              name="date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        {formData.date && (
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {bookedSlots.length}/{MAX_SLOTS_PER_DAY} slots booked for {new Date(formData.date).toLocaleDateString()}
            </p>
          </div>
        )}

        <button
          onClick={() => setStep(2)}
          disabled={!formData.date || !formData.vehicleType}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition ${!formData.date || !formData.vehicleType ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Next: Select Time
        </button>
      </div>
    );
  }

  // Step 2: Time Selection
  if (step === 2) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setStep(1)}
            className="text-gray-600 hover:text-blue-600 flex items-center text-sm"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">Select Time</h2>
          <div className="w-6"></div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">Available Time Slots</label>
            <button
              onClick={() => setShowCustomTime(true)}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
            >
              <Plus size={14} className="mr-1" />
              Custom Time
            </button>
          </div>

          {showCustomTime ? (
            <div className="space-y-4">
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="time"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  required
                  step="3600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours)</label>
                <select
                  name="duration"
                  className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.duration}
                  onChange={handleInputChange}
                >
                  {[1, 2, 3, 4].map(hours => (
                    <option key={hours} value={hours}>{hours} hour{hours !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCustomTime(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCustomTimeSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Confirm Time
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {availableSlots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                  className={`py-3 px-2 rounded-lg border transition-all ${formData.time === slot
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400'
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setStep(1)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            disabled={!formData.time}
            className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition ${!formData.time ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            Next: Trip Details
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Trip Details
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setStep(2)}
          className="text-gray-600 hover:text-blue-600 flex items-center text-sm"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">Trip Details</h2>
        <div className="w-6"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="pickup"
              placeholder="Enter pickup address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.pickup}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="destination"
              placeholder="Enter destination address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.destination}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <select
              name="passengers"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              value={formData.passengers}
              onChange={handleInputChange}
            >
              {[...Array(8).keys()].map(i => (
                <option key={i + 1} value={i + 1}>{i + 1} passenger{i !== 0 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Booking Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Vehicle: {VEHICLE_TYPES.find(v => v.id === formData.vehicleType)?.name || 'Not selected'}</p>
              <p>Date: {new Date(formData.date).toLocaleDateString()}</p>
              <p>Time: {formData.time}</p>
              <p>Duration: {formData.duration} hour{formData.duration !== 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;