import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Calendar, Clock, MapPin, User, Plus, ChevronLeft, Check } from 'lucide-react';

// Constants
const MAX_SLOTS_PER_DAY = 10;
const BUFFER_TIME = 30; // minutes
const VEHICLE_TYPES = [
  { id: 'sedan', name: 'Sedan', capacity: 4, icon: '🚗', price: 120 },
  { id: 'suv', name: 'SUV', capacity: 6, icon: '🚙', price: 150 },
  { id: 'van', name: 'Van', capacity: 8, icon: '🚐', price: 200 }
];

// Helper functions
const generateTimeSlots = () => {
  return Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, '0')}:00`;
  });
};

const validateForm = (formData, bookedSlots) => {
  const errors = {};
  
  if (!formData.vehicleType) errors.vehicleType = 'Please select a vehicle';
  if (!formData.date) errors.date = 'Please select a date';
  if (!formData.time) errors.time = 'Please select a time';
  if (!formData.pickup) errors.pickup = 'Pickup location is required';
  if (!formData.destination) errors.destination = 'Destination is required';
  
  if (formData.date && bookedSlots.length >= MAX_SLOTS_PER_DAY) {
    errors.date = 'No available slots for this date';
  }
  
  if (formData.time && !isTimeSlotAvailable(formData.time, formData.duration, bookedSlots)) {
    errors.time = 'This time slot is no longer available';
  }
  
  return errors;
};

const isTimeSlotAvailable = (timeToCheck, duration, bookedSlots) => {
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

// Components
const VehicleSelection = ({ formData, setFormData, errors }) => {
  return (
    <div className="space-y-4 mb-8">
      {VEHICLE_TYPES.map(vehicle => (
        <button
          key={vehicle.id}
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, vehicleType: vehicle.id }))}
          className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
            formData.vehicleType === vehicle.id
              ? 'border-secondary bg-secondary/10 ring-2 ring-secondary/30'
              : 'border-gray-200 hover:border-secondary/50'
          }`}
        >
          <span className="text-2xl">{vehicle.icon}</span>
          <div className="text-left">
            <div className="font-bold text-text-primary">{vehicle.name}</div>
            <div className="text-sm text-text-secondary">{vehicle.capacity} passengers</div>
          </div>
          {formData.vehicleType === vehicle.id && (
            <div className="ml-auto bg-secondary text-white p-1 rounded-full">
              <Check size={16} />
            </div>
          )}
        </button>
      ))}
      {errors.vehicleType && <p className="text-red-500 text-sm mt-2">{errors.vehicleType}</p>}
    </div>
  );
};

const DateSelection = ({ formData, setFormData, bookedSlots, errors }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="date"
          name="date"
          className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary ${
            errors.date ? 'border-red-500' : 'border-gray-200'
          }`}
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}

      {formData.date && (
        <div className="bg-primary/5 p-4 rounded-lg mt-4">
          <p className="text-sm text-text-primary">
            <span className="font-bold">{bookedSlots.length}</span> of <span className="font-bold">{MAX_SLOTS_PER_DAY}</span> slots booked for {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${
                bookedSlots.length >= MAX_SLOTS_PER_DAY ? 'bg-red-500' : 'bg-secondary'
              }`}
              style={{ width: `${(bookedSlots.length / MAX_SLOTS_PER_DAY) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const TimeSelection = ({ formData, setFormData, bookedSlots, showCustomTime, setShowCustomTime, customTime, setCustomTime, errors }) => {
  const availableSlots = generateTimeSlots().filter(slot => 
    isTimeSlotAvailable(slot, formData.duration, bookedSlots)
  );

  const handleCustomTimeSubmit = () => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(customTime)) {
      alert("Please enter a valid time in HH:MM format");
      return;
    }

    if (!isTimeSlotAvailable(customTime, formData.duration, bookedSlots)) {
      alert("This time overlaps with an existing booking. Please choose a different time.");
      return;
    }

    setFormData(prev => ({ ...prev, time: customTime }));
    setShowCustomTime(false);
    setCustomTime('');
  };

  return (
    <>
      {showCustomTime ? (
        <div className="space-y-4">
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="time"
              className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary ${
                errors.time ? 'border-red-500' : 'border-gray-200'
              }`}
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
              required
              step="3600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Duration (hours)</label>
            <select
              name="duration"
              className="w-full pl-4 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            >
              {[1, 2, 3, 4].map(hours => (
                <option key={hours} value={hours}>{hours} hour{hours !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={() => setShowCustomTime(false)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-text-primary font-medium py-3 px-4 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCustomTimeSubmit}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-xl transition"
            >
              Confirm Time
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {availableSlots.map(slot => (
              <button
                key={slot}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                className={`py-3 px-4 rounded-xl border-2 transition-all ${
                  formData.time === slot
                    ? 'bg-secondary text-white border-secondary ring-2 ring-secondary/30'
                    : 'bg-white text-text-primary border-gray-200 hover:border-secondary/50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
          {errors.time && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.time}</p>}

          <button
            onClick={() => setShowCustomTime(true)}
            className="text-primary hover:text-secondary flex items-center text-sm mb-6"
          >
            <Plus size={16} className="mr-1" />
            Need a custom time? Click here
          </button>
        </>
      )}
    </>
  );
};

const TripDetails = ({ formData, setFormData, errors }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Pickup Location</label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="pickup"
            placeholder="Enter pickup address"
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary ${
              errors.pickup ? 'border-red-500' : 'border-gray-200'
            }`}
            value={formData.pickup}
            onChange={(e) => setFormData(prev => ({ ...prev, pickup: e.target.value }))}
            required
          />
        </div>
        {errors.pickup && <p className="text-red-500 text-sm mt-2">{errors.pickup}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Destination</label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="destination"
            placeholder="Enter destination address"
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary ${
              errors.destination ? 'border-red-500' : 'border-gray-200'
            }`}
            value={formData.destination}
            onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
            required
          />
        </div>
        {errors.destination && <p className="text-red-500 text-sm mt-2">{errors.destination}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Passengers</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select
            name="passengers"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-text-primary appearance-none"
            value={formData.passengers}
            onChange={(e) => setFormData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
          >
            {[...Array(8).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1} passenger{i !== 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

const BookingSummary = ({ formData, loading, onBack, onSubmit }) => {
  const selectedVehicle = VEHICLE_TYPES.find(v => v.id === formData.vehicleType);
  const totalPrice = selectedVehicle ? selectedVehicle.price * formData.duration : 0;

  return (
    <div className="bg-primary/5 p-6 rounded-xl sticky top-8">
      <h3 className="font-bold text-text-primary text-lg mb-4">Booking Summary</h3>
      <div className="space-y-3 text-text-secondary mb-6">
        <p className="flex justify-between">
          <span>Vehicle:</span>
          <span className="font-medium text-text-primary">
            {selectedVehicle?.name || 'Not selected'}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Date:</span>
          <span className="font-medium text-text-primary">
            {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Not selected'}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Time:</span>
          <span className="font-medium text-text-primary">
            {formData.time || 'Not selected'}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Duration:</span>
          <span className="font-medium text-text-primary">
            {formData.duration} hour{formData.duration !== 1 ? 's' : ''}
          </span>
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-text-primary">Estimated Price:</span>
          <span className="font-bold text-secondary text-xl">
            ${selectedVehicle?.price || 0} × {formData.duration} = ${totalPrice}
          </span>
        </div>
      </div>

      <div className="flex space-x-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-text-primary font-medium py-4 px-6 rounded-xl transition"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className={`flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-xl transition ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
};

// Main Component
const BookingForm = () => {
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
  const [errors, setErrors] = useState({});

  // Fetch booked slots when date changes
  useEffect(() => {
    if (formData.date) {
      const fetchBookedSlots = async () => {
        try {
          const bookingsRef = collection(db, 'bookings');
          const q = query(bookingsRef, where('date', '==', formData.date));
          const snapshot = await getDocs(q);

          setBookedSlots(snapshot.empty ? [] : snapshot.docs.map(doc => doc.data()));
        } catch (error) {
          console.error("Error fetching booked slots:", error);
          setBookedSlots([]);
        }
      };

      fetchBookedSlots();
    }
  }, [formData.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm(formData, bookedSlots);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
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
      setErrors({});
    } catch (error) {
      alert(error.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = () => {
    // Validate current step before proceeding
    let stepErrors = {};
    
    if (step === 1) {
      if (!formData.vehicleType) stepErrors.vehicleType = 'Please select a vehicle';
      if (!formData.date) stepErrors.date = 'Please select a date';
      if (bookedSlots.length >= MAX_SLOTS_PER_DAY) {
        stepErrors.date = 'No available slots for this date';
      }
    } else if (step === 2) {
      if (!formData.time) stepErrors.time = 'Please select a time';
      if (formData.time && !isTimeSlotAvailable(formData.time, formData.duration, bookedSlots)) {
        stepErrors.time = 'This time slot is no longer available';
      }
    }
    
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors).length === 0) {
      setStep(prev => prev + 1);
    }
  };

  // Step 1: Vehicle and Date Selection
  if (step === 1) {
    return (
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl mx-auto my-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Select Your Vehicle</h2>
            <p className="text-text-secondary mb-6">Choose the perfect vehicle for your journey</p>
            <VehicleSelection formData={formData} setFormData={setFormData} errors={errors} />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Select Date</h2>
            <p className="text-text-secondary mb-6">When would you like your ride?</p>
            <DateSelection formData={formData} setFormData={setFormData} bookedSlots={bookedSlots} errors={errors} />

            <button
              onClick={handleNextStep}
              disabled={!formData.date || !formData.vehicleType || bookedSlots.length >= MAX_SLOTS_PER_DAY}
              className={`w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition ${
                !formData.date || !formData.vehicleType || bookedSlots.length >= MAX_SLOTS_PER_DAY ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next: Select Time
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Time Selection
  if (step === 2) {
    return (
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl mx-auto my-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <button
              onClick={() => setStep(1)}
              className="text-primary hover:text-secondary flex items-center text-sm mb-6"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to vehicle selection
            </button>

            <h2 className="text-3xl font-bold text-text-primary mb-2">Select Time</h2>
            <p className="text-text-secondary mb-6">Choose your preferred time slot</p>

            <TimeSelection
              formData={formData}
              setFormData={setFormData}
              bookedSlots={bookedSlots}
              showCustomTime={showCustomTime}
              setShowCustomTime={setShowCustomTime}
              customTime={customTime}
              setCustomTime={setCustomTime}
              errors={errors}
            />
          </div>

          <div className="md:w-1/2 flex flex-col">
            <div className="bg-primary/5 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-text-primary text-lg mb-3">Your Selection</h3>
              <div className="space-y-2 text-text-secondary">
                <p className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-medium text-text-primary">
                    {VEHICLE_TYPES.find(v => v.id === formData.vehicleType)?.name || 'Not selected'}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium text-text-primary">
                    {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Not selected'}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-text-primary font-medium py-4 px-6 rounded-xl transition"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.time}
                  className={`flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-xl transition ${
                    !formData.time ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Next: Trip Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Trip Details
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl mx-auto my-8 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <button
            onClick={() => setStep(2)}
            className="text-primary hover:text-secondary flex items-center text-sm mb-6"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to time selection
          </button>

          <h2 className="text-3xl font-bold text-text-primary mb-2">Trip Details</h2>
          <p className="text-text-secondary mb-6">Enter your pickup and destination information</p>
          <TripDetails formData={formData} setFormData={setFormData} errors={errors} />
        </div>

        <div className="md:w-1/2">
          <BookingSummary
            formData={formData}
            loading={loading}
            onBack={() => setStep(2)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;