import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Calendar, Clock, MapPin, User, ChevronLeft, Car, Smartphone, Mail, X } from 'lucide-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

// Constants
const VEHICLE_TYPES = [
  { id: 'sedan', name: 'Sedan', capacity: 3, icon: '🚗', price: 75 },
  { id: 'suv', name: 'SUV', capacity: 6, icon: '🚙', price: 100 },
  { id: 'stretch-limo', name: 'Stretch Limousine', capacity: 10, icon: '🚘', price: 150 },
  { id: 'party-limo', name: 'Party Limousine', capacity: 14, icon: '🎉', price: 200 }
];

const MINIMUM_DURATION = 3; // 3 hours minimum

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Reservation</h3>
          <p className="text-gray-600 mb-6">Are you sure you want to submit this reservation request?</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Components
const VehicleSelection = ({ formData, setFormData, errors, onNext }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Car className="text-primary" size={24} />
        <span>1. Select Vehicle Type</span>
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {VEHICLE_TYPES.map(vehicle => (
          <button
            key={vehicle.id}
            type="button"
            onClick={() => {
              setFormData(prev => ({
                ...prev,
                vehicleType: vehicle.id,
                passengers: Math.min(prev.passengers, vehicle.capacity)
              }));
            }}
            className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-2 ${formData.vehicleType === vehicle.id
              ? 'border-primary bg-primary/10 ring-1 ring-primary/30'
              : 'border-gray-200 hover:border-primary/50'
              }`}
          >
            <span className="text-2xl">{vehicle.icon}</span>
            <div className="text-center">
              <div className="font-semibold text-gray-800 text-sm">{vehicle.name}</div>
              <div className="text-xs text-gray-500">{vehicle.capacity} passengers max</div>
            </div>
            {vehicle.price > 0 && (
              <div className="text-sm font-semibold text-gray-800 mt-1">
                ${vehicle.price}/hour
              </div>
            )}
          </button>
        ))}
      </div>

      {errors.vehicleType && <p className="text-red-500 text-xs mt-2">{errors.vehicleType}</p>}

      <div className="mt-6 flex justify-end">
        <button
          onClick={onNext}
          disabled={!formData.vehicleType}
          className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.vehicleType ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const getTimeSlots = (selectedDate) => {
  if (!selectedDate) return [];

  const slots = [];
  const now = new Date();
  const selected = new Date(selectedDate);

  for (let hour = 8; hour <= 20; hour += 3) {
    const endHour = hour + 3;

    // Skip slots if selected date is today and the slot has already passed
    if (
      selected.toDateString() === now.toDateString() &&
      now.getHours() >= endHour
    ) {
      continue;
    }

    const slot = `${hour}:00 - ${endHour}:00`;
    slots.push(slot);
  }

  return slots;
};

const DateTimeSelection = ({ formData, setFormData, errors, onNext, onBack }) => {
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to midnight for date-only comparison

      if (selectedDate < today) {
        // Date is before today — disallow it
        setAvailableSlots([]);
        setFormData((prev) => ({
          ...prev,
          date: value,
          slot: '',
          time: '',
        }));
        return;
      }

      // Date is today or future — allow slots
      setAvailableSlots(getTimeSlots(value));
      setFormData((prev) => ({
        ...prev,
        date: value,
        slot: '',
        time: '',
      }));
      return;
    }

    if (name === 'slot') {
      setFormData((prev) => ({
        ...prev,
        slot: value,
        time: value,
        duration: 3,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary/80 flex items-center text-sm mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to vehicle selection
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Calendar className="text-primary" size={24} />
        <span>2. Select Date & Time</span>
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              name="date"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />
            <select
              name="slot"
              value={formData.time}
              onChange={handleInputChange}
              disabled={!formData.date}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-gray-800"
            >
              <option value="">{!formData.date ? 'Select date first' : 'Select time'}</option>
              {availableSlots.length > 0 ? (
                availableSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))
              ) : (
                formData.date && <option disabled>No slots available</option>
              )}
            </select>
          </div>

          {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!formData.date || !formData.time}
          className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.date || !formData.time ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const TripDetails = ({ formData, setFormData, errors, onNext, onBack }) => {
  const selectedVehicle = VEHICLE_TYPES.find(v => v.id === formData.vehicleType);
  const maxPassengers = selectedVehicle ? selectedVehicle.capacity : 1;
  const passengerOptions = Array.from({ length: maxPassengers }, (_, i) => i + 1);

  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary/80 flex items-center text-sm mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to date & time selection
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <MapPin className="text-primary" size={24} />
        <span>3. Trip Details</span>
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="pickup"
              placeholder="Enter pickup address"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.pickup ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.pickup}
              onChange={(e) => setFormData(prev => ({ ...prev, pickup: e.target.value }))}
              required
            />
          </div>
          {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="destination"
              placeholder="Enter destination address"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.destination ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.destination}
              onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
              required
            />
          </div>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              name="passengers"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 appearance-none"
              value={formData.passengers}
              onChange={(e) => setFormData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
            >
              {passengerOptions.map(num => (
                <option key={num} value={num}>{num} passenger{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          {errors.passengers && <p className="text-red-500 text-xs mt-1">{errors.passengers}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!formData.pickup || !formData.destination}
          className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.pickup || !formData.destination ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const ContactDetails = ({ formData, setFormData, errors, onNext, onBack }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary/80 flex items-center text-sm mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to trip details
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <User className="text-primary" size={24} />
        <span>4. Your Contact Information</span>
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!formData.name || !formData.email || !formData.phone}
          className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.name || !formData.email || !formData.phone ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Review Reservation
        </button>
      </div>
    </div>
  );
};

const ReservationSummary = ({ formData, onSubmit, onBack }) => {
  const selectedVehicle = VEHICLE_TYPES.find(v => v.id === formData.vehicleType);
  const totalPrice = selectedVehicle ? selectedVehicle.price * MINIMUM_DURATION : 0;

  const calculateEndTime = (startTime) => {
    if (!startTime) return '';
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + MINIMUM_DURATION;
    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary/80 flex items-center text-sm mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to contact details
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Calendar className="text-primary" size={24} />
        <span>5. Review Your Reservation</span>
      </h2>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-800 text-lg mb-4 border-b pb-2">Reservation Details</h3>

        <div className="space-y-3 text-gray-600 mb-6 text-sm">
          <p className="flex justify-between">
            <span>Vehicle:</span>
            <span className="font-medium text-gray-800">
              {selectedVehicle?.name || 'Not selected'}
            </span>
          </p>

          {formData.date && (
            <p className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium text-gray-800">
                {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </p>
          )}

          {formData.time && (
            <>
              <p className="flex justify-between">
                <span>Start Time:</span>
                <span className="font-medium text-gray-800">
                  {formData.time}
                </span>
              </p>
              <p className="flex justify-between">
                <span>End Time:</span>
                <span className="font-medium text-gray-800">
                  {calculateEndTime(formData.time)}
                </span>
              </p>
            </>
          )}

          <p className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium text-gray-800">
              {MINIMUM_DURATION} hours
            </span>
          </p>

          <p className="flex justify-between">
            <span>Passengers:</span>
            <span className="font-medium text-gray-800">
              {formData.passengers}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Pickup:</span>
            <span className="font-medium text-gray-800">
              {formData.pickup}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Destination:</span>
            <span className="font-medium text-gray-800">
              {formData.destination}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Contact Name:</span>
            <span className="font-medium text-gray-800">
              {formData.name}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Contact Email:</span>
            <span className="font-medium text-gray-800">
              {formData.email}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Contact Phone:</span>
            <span className="font-medium text-gray-800">
              {formData.phone}
            </span>
          </p>
        </div>

        {selectedVehicle?.price > 0 && (
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">Estimated Price:</span>
              <span className="font-bold text-primary text-lg">
                ${totalPrice}
              </span>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
          <p className="text-blue-800 text-xs">
            Your reservation will be confirmed after we verify availability. We'll contact you for payment details.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition"
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
};

const BookingSummary = ({ formData }) => {
  const selectedVehicle = VEHICLE_TYPES.find(v => v.id === formData.vehicleType);
  const totalPrice = selectedVehicle ? selectedVehicle.price * MINIMUM_DURATION : 0;

  const calculateEndTime = (startTime) => {
    if (!startTime) return '';
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + MINIMUM_DURATION;
    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-6">
      <h3 className="font-bold text-gray-800 text-lg mb-4 border-b pb-2">Reservation Summary</h3>

      <div className="space-y-3 text-gray-600 mb-6 text-sm">
        <p className="flex justify-between">
          <span>Vehicle:</span>
          <span className="font-medium text-gray-800">
            {selectedVehicle?.name || 'Not selected'}
          </span>
        </p>

        {formData.date && (
          <p className="flex justify-between">
            <span>Date:</span>
            <span className="font-medium text-gray-800">
              {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
          </p>
        )}

        {formData.time && (
          <>
            <p className="flex justify-between">
              <span>Start Time:</span>
              <span className="font-medium text-gray-800">
                {formData.time}
              </span>
            </p>
            <p className="flex justify-between">
              <span>End Time:</span>
              <span className="font-medium text-gray-800">
                {calculateEndTime(formData.time)}
              </span>
            </p>
          </>
        )}

        <p className="flex justify-between">
          <span>Duration:</span>
          <span className="font-medium text-gray-800">
            {MINIMUM_DURATION} hours
          </span>
        </p>

        <p className="flex justify-between">
          <span>Passengers:</span>
          <span className="font-medium text-gray-800">
            {formData.passengers}
          </span>
        </p>
      </div>

      {selectedVehicle?.price > 0 && (
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800">Estimated Price:</span>
            <span className="font-bold text-primary text-lg">
              ${totalPrice}
            </span>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
        <p className="text-blue-800 text-xs">
          Your reservation will be confirmed after we verify availability. We'll contact you for payment details.
        </p>
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
    endTime: '',
    passengers: 1,
    duration: MINIMUM_DURATION,
    name: '',
    email: '',
    phone: ''
  });
  const [bookedSlots,] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async () => {
    setShowConfirmation(false);
    setLoading(true);
    setShowSuccess(false);
    setApiError(null);

    try {
      // Try to send email first (critical operation)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pickup: formData.pickup,
          destination: formData.destination,
          date: formData.date,
          time: formData.time,
          passengers: formData.passengers
        }),
      });

      if (!response.ok) {
        throw new Error('Email failed');
      }

      // Only save to Firebase if email succeeded (backup only)
      const bookingsRef = collection(db, 'reservations');
      await addDoc(bookingsRef, {
        ...formData,
        duration: MINIMUM_DURATION,
        passengers: parseInt(formData.passengers),
        createdAt: new Date(),
        status: 'booked',
        endTime: calculateEndTime(formData.time)
      });

      // Success - reset form
      setShowSuccess(true);
      setFormData({
        vehicleType: '',
        pickup: '',
        destination: '',
        date: '',
        time: '',
        endTime: '',
        passengers: 1,
        duration: MINIMUM_DURATION,
        name: '',
        email: '',
        phone: ''
      });
      setStep(1);

    } catch (error) {
      setApiError({
        title: "Booking Failed",
        message: "We couldn't process your booking. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateEndTime = (startTime) => {
    if (!startTime) return '';
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + MINIMUM_DURATION;
    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    // Validate current step before proceeding
    let stepErrors = {};

    if (step === 1 && !formData.vehicleType) {
      stepErrors.vehicleType = 'Please select a vehicle';
    } else if (step === 2) {
      if (!formData.date) stepErrors.date = 'Please select a date';
      if (!formData.time) stepErrors.time = 'Please select a time';
    } else if (step === 3) {
      if (!formData.pickup) stepErrors.pickup = 'Pickup location is required';
      if (!formData.destination) stepErrors.destination = 'Destination is required';
    } else if (step === 4) {
      if (!formData.name) stepErrors.name = 'Name is required';
      if (!formData.email) stepErrors.email = 'Email is required';
      if (!formData.phone) stepErrors.phone = 'Phone number is required';
    }

    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const resetForm = () => {
    setShowSuccess(false);
  };

  return (
    <div id="booking-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Luxury Vehicle Reservation</h1>
            <p className="text-gray-600">Complete the form below to check availability</p>
          </div>

          {showSuccess ? (
            <div className="text-center py-12">
              <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reservation Request Submitted!</h2>
              <p className="text-gray-600 mb-6">We'll contact you shortly to confirm availability and payment details.</p>
              <button
                onClick={resetForm}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                {/* Step 1: Vehicle Selection */}
                {step === 1 && (
                  <VehicleSelection
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    onNext={handleNext}
                  />
                )}

                {/* Step 2: Date & Time Selection */}
                {step === 2 && (
                  <DateTimeSelection
                    formData={formData}
                    setFormData={setFormData}
                    bookedSlots={bookedSlots}
                    errors={errors}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {/* Step 3: Trip Details */}
                {step === 3 && (
                  <TripDetails
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <ContactDetails
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {/* Step 5: Reservation Summary (shown on small screens) */}
                {step === 5 && (
                  <ReservationSummary
                    formData={formData}
                    onSubmit={() => setShowConfirmation(true)}
                    onBack={handleBack}
                  />
                )}
              </div>

              {/* Show summary on large screens for steps 1-4 */}
              {step < 5 && (
                <div className="hidden lg:block lg:w-1/3">
                  <BookingSummary formData={formData} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleSubmit}
      />

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-3 text-gray-800">Processing your reservation...</span>
            </div>
          </div>
        </div>
      )}

      {/* Single Error Modal */}
      {apiError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">{apiError.title}</h3>
              <p className="mt-2 text-gray-600">{apiError.message}</p>
              <div className="mt-4">
                <button
                  onClick={() => setApiError(null)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;