import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Constants
const TIME_SLOTS = (() => {
  const slots = [];
  for (let hour = 8; hour <= 20; hour += 3) {
    const endHour = hour + 3;
    slots.push(`${hour}:00 - ${endHour}:00`);
  }
  return slots;
})();

const LIMOUSINES = [
  {
    id: 1,
    name: "Executive Stretch Limousine",
    image: "https://www.limo4all.ca/Executive-Limo.png",
    capacity: "8-10 passengers",
    maxPassengers: 10,
    features: [
      "Plush leather seating",
      "Premium sound system",
      "LED mood lighting",
      "Champagne service"
    ],
    price: 150,
    priceCurrency: "USD",
    note: "Minimum 3 hour booking",
    availability: "InStock",
    url: "https://www.limo4all.ca/fleet#executive-stretch",
    priceValidUntil: "2025-12-31"
  },
  {
    id: 2,
    name: "Luxury Party Limousine",
    image: "https://www.limo4all.ca/Party-Limo.png",
    capacity: "12-14 passengers",
    maxPassengers: 14,
    features: [
      "Extended luxury interior",
      "State-of-the-art entertainment",
      "Mini bar setup",
      "Privacy partitions"
    ],
    price: 200,
    priceCurrency: "USD",
    note: "Ideal for weddings and celebrations",
    availability: "InStock",
    url: "https://www.limo4all.ca/fleet#party-limo",
    priceValidUntil: "2025-12-31"
  },
  {
    id: 3,
    name: "Luxury Sedan",
    image: "https://www.limo4all.ca/Sedan.png",
    capacity: "3 passengers",
    maxPassengers: 3,
    features: [
      "Executive class comfort",
      "WiFi connectivity",
      "Workstation setup",
      "Discreet professional service"
    ],
    price: 120,
    priceCurrency: "USD",
    note: "Perfect for corporate travel",
    availability: "InStock",
    url: "https://www.limo4all.ca/fleet#luxury-sedan",
    priceValidUntil: "2025-12-31"
  }
];

const StepIndicator = ({ currentStep }) => (
  <div className="flex justify-center mb-8">
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
        <span className="font-medium">1</span>
      </div>
      <div className={`w-16 h-1 mx-2 ${currentStep === 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
        <span className="font-medium">2</span>
      </div>
    </div>
  </div>
);

const CloseButton = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    aria-label="Close modal"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

const ModalHeader = ({ selectedLimo }) => (
  <>
    <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
      Reserve {selectedLimo?.name}
    </h2>
    <p className="text-text-secondary mb-6 text-center text-sm">{selectedLimo?.capacity}</p>
  </>
);

const ReservationSummary = ({ selectedLimo, formData }) => (
  <div className="mt-6 space-y-3">
    <h3 className="font-bold text-lg">Reservation Summary</h3>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
        <p className="font-medium">{selectedLimo?.name}</p>
        <p className="text-sm text-text-secondary">${selectedLimo?.price}/hour</p>
      </div>
      <div className="space-y-1 text-sm">
        <p><span className="font-medium text-text-primary">Capacity:</span> {selectedLimo?.capacity}</p>
        <p><span className="font-medium text-text-primary">Date:</span> {formData.date}</p>
        <p><span className="font-medium text-text-primary">Time:</span> {formData.slot}</p>
        <p><span className="font-medium text-text-primary">Contact:</span> {formData.email || formData.phone}</p>
      </div>
    </div>
  </div>
);

const ConfirmationMessage = ({ onClose }) => (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-2">Reservation Confirmed!</h3>
    <p className="text-text-secondary mb-6">We've sent the details to your email. Our team will contact you shortly.</p>
    <button
      onClick={onClose}
      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
    >
      Close
    </button>
  </div>
);

const Fleet = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedLimo, setSelectedLimo] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    date: '',
    slot: '',
    pickup: '',
    destination: '',
    passengers: 1
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleViewFleet = () => navigate('/fleet');

  const handleReserveClick = (limo) => {
    setSelectedLimo(limo);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      email: '',
      phone: '',
      name: '',
      date: '',
      slot: '',
      pickup: '',
      destination: '',
      passengers: 1
    });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    const errors = {};
    if (!formData.email || !formData.phone) errors.contact = 'Either email or phone number is required';
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.slot) errors.slot = 'Time slot is required';

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) setCurrentStep(2);
  };

  const handlePrevStep = () => setCurrentStep(1);

  const validateForm = () => {
    const errors = {};
    if (!formData.pickup) errors.pickup = 'Pickup location is required';
    if (!formData.destination) errors.destination = 'Destination is required';
    if (formData.passengers > selectedLimo.maxPassengers) {
      errors.passengers = `Maximum ${selectedLimo.maxPassengers} passengers allowed`;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError(null);

    try {
      // Save to Firestore
      await addDoc(collection(db, 'reservations'), {
        vehicleType: selectedLimo.name,
        ...formData,
        createdAt: new Date(),
        status: 'pending'
      });

      // Send email notification
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pickup: formData.pickup,
          destination: formData.destination,
          date: formData.date,
          slot: formData.slot,
          passengers: formData.passengers,
          vehicleType: selectedLimo.name,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send confirmation email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Reservation error:', error);
      setApiError({
        title: "Reservation Failed",
        message: error.message || "There was an error processing your reservation.",
        details: "Please try again or contact support if the problem persists."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const renderStepOne = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
      {formErrors.contact && <p className="text-red-500 text-sm -mt-3">{formErrors.contact}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            min={new Date().toISOString().split('T')[0]}
          />
          {formErrors.date && <p className="text-red-500 text-sm -mt-3">{formErrors.date}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Time Slot</label>
          <select
            name="slot"
            value={formData.slot}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
          >
            <option value="">Select time</option>
            {TIME_SLOTS.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
          {formErrors.slot && <p className="text-red-500 text-sm -mt-3">{formErrors.slot}</p>}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={handleNextStep}
          className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!formData.date || !formData.slot || (!formData.email && !formData.phone)}
        >
          Continue to Trip Details
        </button>
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Pickup Location</label>
        <input
          type="text"
          name="pickup"
          value={formData.pickup}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Where should we pick you up?"
        />
        {formErrors.pickup && <p className="text-red-500 text-sm -mt-3">{formErrors.pickup}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">Destination</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Where are you going?"
        />
        {formErrors.destination && <p className="text-red-500 text-sm -mt-3">{formErrors.destination}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Number of Passengers (max {selectedLimo?.maxPassengers})
        </label>
        <input
          type="number"
          name="passengers"
          min="1"
          max={selectedLimo?.maxPassengers}
          value={formData.passengers}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        {formErrors.passengers && <p className="text-red-500 text-sm -mt-3">{formErrors.passengers}</p>}
      </div>

      <ReservationSummary selectedLimo={selectedLimo} formData={formData} />

      <div className="pt-2 flex justify-between gap-4">
        <button
          type="button"
          onClick={handlePrevStep}
          className="flex-1 py-3 border border-gray-300 rounded-lg text-text-primary hover:bg-gray-50 transition-colors font-medium"
          disabled={isLoading}
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center"
          disabled={isLoading}
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );

  return (
    <section
      className="py-20 bg-background mt-6"
      id="fleet"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <meta itemProp="name" content="Limo4All Luxury Fleet Collection" />
      <meta itemProp="description" content="Premium fleet of luxury limousines and executive vehicles in Toronto & Hamilton" />
      <link itemProp="url" content="https://www.limo4all.ca/fleet" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block bg-primary text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Premium Fleet Selection
          </span>
          <h1 className="text-4xl font-bold text-text-primary mb-4 font-display">
            Our <span className="text-secondary">Luxury</span> Vehicle Collection
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary mx-auto" itemProp="description">
            Experience the pinnacle of luxury transportation with our exceptional fleet of limousines and executive vehicles in Toronto & Hamilton.
            Each vehicle is meticulously maintained and serviced to ensure your complete satisfaction and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {LIMOUSINES.map((limo) => (
            <div
              key={limo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={limo.image}
                  alt={`${limo.name} luxury vehicle service in Toronto & Hamilton`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {limo.capacity}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-3 font-display" itemProp="name">
                  {limo.name}
                </h2>
                <div itemProp="description">
                  <ul className="mb-6 space-y-3">
                    {limo.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <div itemScope itemType="https://schema.org/Offer" itemProp="offers">
                      <meta itemProp="priceCurrency" content={limo.priceCurrency} />
                      <meta itemProp="price" content={limo.price} />
                      <meta itemProp="priceValidUntil" content={limo.priceValidUntil} />
                      <link itemProp="availability" href={`https://schema.org/${limo.availability}`} />
                      <link itemProp="url" content={limo.url} />
                      <span className="block text-2xl font-bold text-text-primary">
                        ${limo.price}/hour
                      </span>
                      {limo.note && (
                        <span className="block text-xs text-text-secondary mt-1" itemProp="description">
                          {limo.note}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleReserveClick(limo)}
                      className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                      aria-label={`Reserve ${limo.name}`}
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleViewFleet}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            aria-label="View complete fleet details"
          >
            View Complete Fleet Details
          </button>
        </div>
      </div>

      {/* Reservation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Reservation Form"
      >
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}

        <div className={`bg-white rounded-xl p-6 max-w-md mx-auto relative ${isLoading ? 'opacity-70' : ''}`}>
          <CloseButton onClose={closeModal} />

          {isSubmitted ? (
            <ConfirmationMessage onClose={closeModal} />
          ) : (
            <>
              <StepIndicator currentStep={currentStep} />
              <ModalHeader selectedLimo={selectedLimo} />
              <form onSubmit={handleSubmit}>
                {currentStep === 1 ? renderStepOne() : renderStepTwo()}
              </form>
            </>
          )}
        </div>
      </Modal>

      {/* Error Modal */}
      {apiError && (
        <Modal
          isOpen={!!apiError}
          onRequestClose={() => setApiError(null)}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Error Message"
        >
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mt-1">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">{apiError.title}</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>{apiError.message}</p>
                  {apiError.details && <p className="mt-2 text-gray-500">{apiError.details}</p>}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => setApiError(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(4px);
        }
        
        .modal {
          background: transparent;
          outline: none;
          max-height: 90vh;
          overflow-y: auto;
          width: 100%;
          max-width: 32rem;
        }

        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          backdrop-filter: blur(2px);
        }

        .loading-spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: rgba(6, 0, 47, 0.1);
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`
      }</style>
    </section>
  );
};

export default Fleet;