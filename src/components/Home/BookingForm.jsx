import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Calendar, Clock, MapPin, User, ChevronLeft, Car, Smartphone, Mail, X, Plane } from 'lucide-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

// Constants
const VEHICLE_TYPES = [
  { id: 'suv', name: 'SUV', capacity: 6, icon: '🚙', price: 100, originalPrice: 120 },
];

// Add this with the other constants at the top of the file
const AIRPORT_OPTIONS = [
  { id: 'yyz', name: 'Toronto Pearson International Airport (YYZ)', price: 120, originalPrice: 140 },
  { id: 'ytz', name: 'Billy Bishop Toronto City Airport (YTZ)', price: 100, originalPrice: 120 },
  { id: 'yhm', name: 'John C. Munro Hamilton International Airport (YHM)', price: 150, originalPrice: 170 },
];

const MINIMUM_DURATION = 3; // 3 hours minimum
const MINIMUM_PREPARATION_HOURS = 4; // 4 hours minimum between booking and pickup (configurable)

const getOntarioDateTime = () => {
  const now = new Date();

  const options = {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-CA', options);
  const parts = formatter.formatToParts(now);

  const getPart = (type) => parts.find(p => p.type === type)?.value;

  return new Date(
    `${getPart('year')}-${getPart('month')}-${getPart('day')}T${getPart('hour')}:${getPart('minute')}:${getPart('second')}`
  );
};

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
const VehicleDateTimeSelection = ({ formData, setFormData, errors, onNext }) => {
  const [pickupTimeOptions, setPickupTimeOptions] = useState([]);
  const [dropoffTimeOptions, setDropoffTimeOptions] = useState([]);

  useEffect(() => {
    if (formData.date) {
      generateTimeOptions();
    }
  }, [formData.date]);

  useEffect(() => {
    if (formData.pickupTime) {
      generateDropoffTimeOptions();
    }
  }, [formData.pickupTime]);

  const generateTimeOptions = () => {
    const selectedDate = new Date(formData.date);
    const ontarioNow = getOntarioDateTime();

    const selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const ontarioDateOnly = new Date(ontarioNow.getFullYear(), ontarioNow.getMonth(), ontarioNow.getDate());

    const isToday = selectedDateOnly.getTime() === ontarioDateOnly.getTime();

    const options = [];

    // Prepare time with 4-hour buffer
    const minTime = new Date(ontarioNow.getTime() + MINIMUM_PREPARATION_HOURS * 60 * 60 * 1000);

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const optionTime = new Date(selectedDate);
        optionTime.setHours(hour, minute, 0, 0);

        if (isToday && optionTime < minTime) {
          continue; // skip times before 4-hour window
        }

        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(timeString);
      }
    }

    setPickupTimeOptions(options);
  };

  const generateDropoffTimeOptions = () => {
    if (!formData.pickupTime || !formData.date) return;

    const [pickupHour, pickupMinute] = formData.pickupTime.split(':').map(Number);

    const pickupDate = new Date(formData.date);
    pickupDate.setHours(pickupHour, pickupMinute, 0, 0);

    const minDropoffTime = new Date(pickupDate.getTime() + MINIMUM_DURATION * 60 * 60 * 1000); // +4 hrs
    const maxDropoffTime = new Date(pickupDate.getTime() + 24 * 60 * 60 * 1000); // +24 hrs

    const options = [];
    const current = new Date(minDropoffTime);

    while (current <= maxDropoffTime) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      options.push(timeString);
      current.setMinutes(current.getMinutes() + 30);
    }

    setDropoffTimeOptions(options);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAirportPickupChange = (e) => {
    const isAirportPickup = e.target.value === 'yes';
    setFormData(prev => ({ ...prev, isAirportPickup }));
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Car className="text-primary" size={24} />
        <span>1. Vehicle & Time</span>
      </h2>

      <div className="space-y-6">
        {/* Airport Pickup Question */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Is it Airport pick up?</h3>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAirportPickup"
                value="yes"
                checked={formData.isAirportPickup === true}
                onChange={handleAirportPickupChange}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAirportPickup"
                value="no"
                checked={formData.isAirportPickup === false}
                onChange={handleAirportPickupChange}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              No
            </label>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Vehicle Type</h3>
          <div className="grid grid-cols-1 gap-3">
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
                className={`p-4 rounded-lg border transition-all flex flex-col items-center gap-2 ${formData.vehicleType === vehicle.id
                  ? 'border-primary bg-primary/10 ring-1 ring-primary/30'
                  : 'border-gray-200 hover:border-primary/50'
                  }`}
              >
                <span className="text-2xl">{vehicle.icon}</span>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">{vehicle.name}</div>
                  <div className="text-sm text-gray-500">{vehicle.capacity} passengers max</div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm line-through text-gray-500">${vehicle.originalPrice}/hr</span>
                  <span className="text-lg font-semibold text-primary">${vehicle.price}/hr</span>
                </div>
              </button>
            ))}
          </div>
          {errors.vehicleType && <p className="text-red-500 text-xs mt-2">{errors.vehicleType}</p>}
        </div>

        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {formData.isAirportPickup ? 'Arrival Date' : 'Date'}
          </h3>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              name="date"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.date}
              onChange={handleInputChange}
              min={getOntarioDateTime().toISOString().split('T')[0]} // ✅ Uses Ontario-local date as minimum
              required
            />
          </div>

          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}

          <p className="text-xs text-gray-500 mt-1">
            {formData.date && new Date(formData.date).toDateString() === new Date(getOntarioDateTime()).toDateString()
              ? `Pickup time must be at least ${MINIMUM_PREPARATION_HOURS} hours from now`
              : 'Select your pickup date'}
          </p>
        </div>

        {/* Pickup Time Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {formData.isAirportPickup ? 'Arrival Time' : 'Pickup Time'}
          </h3>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />
            <select
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              disabled={!formData.date}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-gray-800"
            >
              <option value="">{!formData.date ? 'Select date first' : 'Select pickup time'}</option>
              {pickupTimeOptions.length > 0 ? (
                pickupTimeOptions.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))
              ) : (
                formData.date && <option disabled>No available times for selected date</option>
              )}
            </select>
          </div>
          {errors.pickupTime && <p className="text-red-500 text-xs mt-1">{errors.pickupTime}</p>}
        </div>

        {/* Dropoff Time Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {formData.isAirportPickup ? 'Flight Number' : 'Dropoff Time'}
          </h3>
          <div className="relative">
            {formData.isAirportPickup ? (
              <>
                <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="flightNumber"
                  placeholder="Enter flight number"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.flightNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  value={formData.flightNumber || ''}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />
                <select
                  name="dropoffTime"
                  value={formData.dropoffTime}
                  onChange={handleInputChange}
                  disabled={!formData.pickupTime}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-gray-800"
                >
                  <option value="">{!formData.pickupTime ? 'Select pickup time first' : 'Select dropoff time'}</option>
                  {dropoffTimeOptions.length > 0 ? (
                    dropoffTimeOptions.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))
                  ) : (
                    formData.pickupTime && <option disabled>No available times after selected pickup</option>
                  )}
                </select>
              </>
            )}
          </div>
          {errors.dropoffTime && !formData.isAirportPickup && <p className="text-red-500 text-xs mt-1">{errors.dropoffTime}</p>}
          {errors.flightNumber && formData.isAirportPickup && <p className="text-red-500 text-xs mt-1">{errors.flightNumber}</p>}
          {formData.pickupTime && formData.dropoffTime && !formData.isAirportPickup && (
            <p className="text-xs text-gray-500 mt-1">
              Duration: {calculateDuration(formData.pickupTime, formData.dropoffTime)} hours
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onNext}
            disabled={
              !formData.vehicleType ||
              !formData.date ||
              !formData.pickupTime ||
              (!formData.isAirportPickup && !formData.dropoffTime) ||
              (formData.isAirportPickup && !formData.flightNumber)
            }
            className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.vehicleType ||
              !formData.date ||
              !formData.pickupTime ||
              (!formData.isAirportPickup && !formData.dropoffTime) ||
              (formData.isAirportPickup && !formData.flightNumber) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const LocationPassengers = ({ formData, setFormData, errors, onNext, onBack }) => {
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);

  const handleLocationInput = async (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear suggestions if input is too short
    if (value.length <= 2) {
      if (name === 'pickup') {
        setPickupSuggestions([]);
        setShowPickupSuggestions(false);
      } else {
        setDestinationSuggestions([]);
        setShowDestinationSuggestions(false);
      }
      return;
    }

    try {
      // Mock response when no API key is provided or in test environment
      if (!process.env.REACT_APP_GOOGLE_MAPS_API_KEY || process.env.NODE_ENV === 'test') {
        const mockSuggestions = [
          { description: `${value} (Mock Suggestion 1)` },
          { description: `${value} (Mock Suggestion 2)` }
        ];

        if (name === 'pickup') {
          setPickupSuggestions(mockSuggestions);
          setShowPickupSuggestions(true);
        } else {
          setDestinationSuggestions(mockSuggestions);
          setShowDestinationSuggestions(true);
        }
        return;
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      const suggestions = data.predictions || [];

      if (name === 'pickup') {
        setPickupSuggestions(suggestions);
        setShowPickupSuggestions(true);
      } else {
        setDestinationSuggestions(suggestions);
        setShowDestinationSuggestions(true);
      }

    } catch (error) {
      console.error('Location suggestion error:', error);
      // Fail silently - don't show suggestions but don't break the UI
      if (name === 'pickup') {
        setPickupSuggestions([]);
        setShowPickupSuggestions(false);
      } else {
        setDestinationSuggestions([]);
        setShowDestinationSuggestions(false);
      }
    }
  };

  const selectSuggestion = (suggestion, field) => {
    setFormData(prev => ({ ...prev, [field]: suggestion.description }));
    if (field === 'pickup') {
      setShowPickupSuggestions(false);
    } else {
      setShowDestinationSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        <MapPin className="text-primary" size={24} />
        <span>2. Pickup & Destination</span>
      </h2>

      <div className="space-y-6">
        {/* Pickup Location */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {formData.isAirportPickup ? 'Arrival Airport' : 'Pickup Location'}
          </h3>
          {formData.isAirportPickup ? (
            <select
              name="pickup"
              value={formData.pickup}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.pickup ? 'border-red-500' : 'border-gray-300'
                }`}
              required
            >
              <option value="">Select airport</option>
              {AIRPORT_OPTIONS.map(airport => (
                <option key={airport.id} value={airport.name}>
                  {airport.name} (${airport.price} flat rate)
                </option>
              ))}
            </select>
          ) : (
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="pickup"
                placeholder="Enter pickup address"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.pickup ? 'border-red-500' : 'border-gray-300'
                  }`}
                value={formData.pickup}
                onChange={handleLocationInput}
                onFocus={() => setShowPickupSuggestions(true)}
                onBlur={() => setTimeout(() => setShowPickupSuggestions(false), 200)}
                required
              />
              {showPickupSuggestions && pickupSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {pickupSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => selectSuggestion(suggestion, 'pickup')}
                    >
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
        </div>

        {/* Destination */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Destination</h3>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="destination"
              placeholder="Enter destination address"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.destination ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.destination}
              onChange={handleLocationInput}
              onFocus={() => setShowDestinationSuggestions(true)}
              onBlur={() => setTimeout(() => setShowDestinationSuggestions(false), 200)}
              required
            />
            {showDestinationSuggestions && destinationSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                {destinationSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => selectSuggestion(suggestion, 'destination')}
                  >
                    {suggestion.description}
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>

        {/* Passengers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Passengers</h3>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              name="passengers"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 appearance-none"
              value={formData.passengers}
              onChange={handleInputChange}
            >
              {Array.from({ length: VEHICLE_TYPES[0].capacity }, (_, i) => i + 1).map(num => (
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

const ContactDetails = ({ formData, setFormData, setErrors, errors, onNext, onBack }) => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (name === 'phone' && value && !validatePhone(value)) {
      setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary/80 flex items-center text-sm mb-6"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to location details
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <User className="text-primary" size={24} />
        <span>3. Your Contact Information</span>
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
            onChange={handleInputChange}
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
              placeholder="Your email address (e.g. example@gmail.com)"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          {formData.email && !validateEmail(formData.email) && !errors.email && (
            <p className="text-yellow-600 text-xs mt-1">Please enter a valid email address</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number (e.g. 123-456-7890)"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          {formData.phone && !validatePhone(formData.phone) && !errors.phone && (
            <p className="text-yellow-600 text-xs mt-1">Please enter a valid phone number</p>
          )}
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
          disabled={!formData.name || !formData.email || !formData.phone || !validateEmail(formData.email) || !validatePhone(formData.phone)}
          className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition ${!formData.name || !formData.email || !formData.phone || !validateEmail(formData.email) || !validatePhone(formData.phone)
            ? 'opacity-50 cursor-not-allowed' : ''
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
  const selectedAirport = formData.isAirportPickup
    ? AIRPORT_OPTIONS.find(a => formData.pickup.includes(a.name))
    : null;

  const duration = formData.isAirportPickup ? 1 : calculateDuration(formData.pickupTime, formData.dropoffTime);

  const totalPrice = formData.isAirportPickup
    ? (selectedAirport?.price || 0)
    : (selectedVehicle?.price || 0) * duration;

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
        <span>4. Review Your Reservation</span>
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
              <span>{formData.isAirportPickup ? 'Arrival Date' : 'Date'}:</span>
              <span className="font-medium text-gray-800">
                {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </p>
          )}

          {formData.pickupTime && (
            <p className="flex justify-between">
              <span>{formData.isAirportPickup ? 'Arrival Time' : 'Pickup Time'}:</span>
              <span className="font-medium text-gray-800">
                {formData.pickupTime}
              </span>
            </p>
          )}

          {formData.isAirportPickup && formData.flightNumber && (
            <p className="flex justify-between">
              <span>Flight Number:</span>
              <span className="font-medium text-gray-800">
                {formData.flightNumber}
              </span>
            </p>
          )}

          {!formData.isAirportPickup && formData.dropoffTime && (
            <p className="flex justify-between">
              <span>Dropoff Time:</span>
              <span className="font-medium text-gray-800">
                {formData.dropoffTime}
              </span>
            </p>
          )}

          {!formData.isAirportPickup && formData.pickupTime && formData.dropoffTime && (
            <p className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium text-gray-800">
                {duration} hours
              </span>
            </p>
          )}

          <p className="flex justify-between">
            <span>Passengers:</span>
            <span className="font-medium text-gray-800">
              {formData.passengers}
            </span>
          </p>

          <p className="flex justify-between">
            <span>{formData.isAirportPickup ? 'Arrival Airport' : 'Pickup'}:</span>
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
              <div className="flex items-center gap-2">
                <span className="text-sm line-through text-gray-500">${selectedVehicle.originalPrice * duration}</span>
                <span className="font-bold text-primary text-lg">
                  ${totalPrice}
                </span>
              </div>
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
  const selectedAirport = formData.isAirportPickup
    ? AIRPORT_OPTIONS.find(a => formData.pickup.includes(a.name))
    : null;

  const duration = formData.isAirportPickup ? 1 : calculateDuration(formData.pickupTime, formData.dropoffTime);

  const totalPrice = formData.isAirportPickup
    ? (selectedAirport?.price || 0)
    : (selectedVehicle?.price || 0) * duration;

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
            <span>{formData.isAirportPickup ? 'Arrival Date' : 'Date'}:</span>
            <span className="font-medium text-gray-800">
              {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
          </p>
        )}

        {formData.pickupTime && (
          <p className="flex justify-between">
            <span>{formData.isAirportPickup ? 'Arrival Time' : 'Pickup Time'}:</span>
            <span className="font-medium text-gray-800">
              {formData.pickupTime}
            </span>
          </p>
        )}

        {formData.isAirportPickup && formData.flightNumber && (
          <p className="flex justify-between">
            <span>Flight Number:</span>
            <span className="font-medium text-gray-800">
              {formData.flightNumber}
            </span>
          </p>
        )}

        {!formData.isAirportPickup && formData.dropoffTime && (
          <p className="flex justify-between">
            <span>Dropoff Time:</span>
            <span className="font-medium text-gray-800">
              {formData.dropoffTime}
            </span>
          </p>
        )}

        {!formData.isAirportPickup && formData.pickupTime && formData.dropoffTime && (
          <p className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium text-gray-800">
              {duration} hours
            </span>
          </p>
        )}

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
            <div className="flex items-center gap-2">
              <span className="text-sm line-through text-gray-500">${selectedVehicle.originalPrice * duration}</span>
              <span className="font-bold text-primary text-lg">
                ${totalPrice}
              </span>
            </div>
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

function calculateDuration(startTime, endTime) {
  if (!startTime || !endTime) return 0;

  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const now = new Date(); // Base date
  const startDate = new Date(now);
  startDate.setHours(startHour, startMinute, 0, 0);

  const endDate = new Date(now);
  endDate.setHours(endHour, endMinute, 0, 0);

  // If end time is earlier than start, assume it's on the next day
  if (endDate <= startDate) {
    endDate.setDate(endDate.getDate() + 1);
  }

  const diffMs = endDate - startDate;
  return Math.round((diffMs / (1000 * 60 * 60)) * 10) / 10; // hours, rounded to 1 decimal
}

// Main Component
const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: 'suv',
    pickup: '',
    destination: '',
    date: '',
    pickupTime: '',
    dropoffTime: '',
    flightNumber: '',
    passengers: 1,
    name: '',
    email: '',
    phone: '',
    isAirportPickup: false
  });
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
      const selectedVehicle = VEHICLE_TYPES.find(v => v.id === formData.vehicleType);
      const selectedAirport = formData.isAirportPickup
        ? AIRPORT_OPTIONS.find(a => formData.pickup.includes(a.name))
        : null;
      const duration = formData.isAirportPickup ? 1 : calculateDuration(formData.pickupTime, formData.dropoffTime);
      const totalPrice = formData.isAirportPickup
        ? (selectedAirport?.price || 0)
        : (selectedVehicle?.price || 0) * duration;

      // Prepare data for API and Firebase
      const bookingData = {
        ...formData,
        duration: duration,
        passengers: parseInt(formData.passengers),
        createdAt: new Date(),
        status: 'received',
        price: totalPrice,
        originalPrice: selectedVehicle.originalPrice * duration,
        discount: selectedVehicle.originalPrice * duration - totalPrice
      };

      // Send to your API endpoint
      const apiResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (!apiResponse.ok) {
        throw new Error('API booking failed');
      }

      // Save to Firebase as backup
      const bookingsRef = collection(db, 'reservations');
      await addDoc(bookingsRef, bookingData);

      // Success - reset form
      setShowSuccess(true);
      setFormData({
        vehicleType: 'suv',
        pickup: '',
        destination: '',
        date: '',
        pickupTime: '',
        dropoffTime: '',
        flightNumber: '',
        passengers: 1,
        name: '',
        email: '',
        phone: '',
        isAirportPickup: false
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

  const handleNext = () => {
    // Validate current step before proceeding
    let stepErrors = {};

    if (step === 1) {
      if (!formData.vehicleType) stepErrors.vehicleType = 'Please select a vehicle';
      if (!formData.date) stepErrors.date = 'Please select a date';
      if (!formData.pickupTime) stepErrors.pickupTime = 'Please select pickup time';
      if (!formData.isAirportPickup && !formData.dropoffTime) stepErrors.dropoffTime = 'Please select dropoff time';
      if (formData.isAirportPickup && !formData.flightNumber) stepErrors.flightNumber = 'Please enter flight number';
    } else if (step === 2) {
      if (!formData.pickup) stepErrors.pickup = 'Pickup location is required';
      if (!formData.destination) stepErrors.destination = 'Destination is required';
    } else if (step === 3) {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Luxury SUV Reservation</h1>
            <p className="text-gray-600">Complete the form below to book your SUV</p>
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
            <div
              className={`flex flex-col lg:flex-row gap-8 ${step === 4 ? 'lg:justify-center' : ''
                }`}
            >
              <div className={`${step === 4 ? 'lg:w-full max-w-3xl mx-auto' : 'lg:w-2/3'}`}>
                {/* Step 1: Vehicle & DateTime Selection */}
                {step === 1 && (
                  <VehicleDateTimeSelection
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    onNext={handleNext}
                  />
                )}

                {/* Step 2: Location & Passengers */}
                {step === 2 && (
                  <LocationPassengers
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <ContactDetails
                    formData={formData}
                    setFormData={setFormData}
                    setErrors={setErrors}
                    errors={errors}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {/* Step 4: Reservation Summary */}
                {step === 4 && (
                  <ReservationSummary
                    formData={formData}
                    onSubmit={() => setShowConfirmation(true)}
                    onBack={handleBack}
                  />
                )}
              </div>

              {/* Sidebar for steps 1–3 only */}
              {step < 4 && (
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