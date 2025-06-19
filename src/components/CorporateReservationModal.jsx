import { useState } from 'react';
import Modal from 'react-modal';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path as needed

const TIME_SLOTS = (() => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour += 3) {
        const endHour = hour + 3;
        slots.push(`${hour}:00 - ${endHour}:00`);
    }
    return slots;
})();

const ReservationModal = ({ isOpen, onClose, selectedLimo }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        slot: '',
        pickup: '',
        destination: '',
        passengers: 1,
        company: '',
        specialRequests: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
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

    const handleNextStep = () => {
        if (!formData.date || !formData.slot || (!formData.email && !formData.phone)) {
            setFormErrors({ contact: 'Please provide at least one contact method' });
            return;
        }
        setCurrentStep(2);
    };

    const handlePrevStep = () => {
        setCurrentStep(1);
    };

    const resetModal = () => {
        setCurrentStep(1);
        setIsSubmitted(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            slot: '',
            pickup: '',
            destination: '',
            passengers: 1,
            company: '',
            specialRequests: ''
        });
        setFormErrors({});
        onClose();
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={resetModal}
                className="modal"
                overlayClassName="modal-overlay"
                contentLabel="Corporate Reservation Form"
                ariaHideApp={false}
            >
                {isLoading && (
                    <div className="loading-overlay">
                        <div className="loading-spinner"></div>
                    </div>
                )}

                <div className={`bg-white rounded-xl p-6 max-w-md mx-auto relative ${isLoading ? 'opacity-70' : ''}`}>
                    <CloseButton onClose={resetModal} />

                    {isSubmitted ? (
                        <ConfirmationMessage onClose={resetModal} />
                    ) : (
                        <>
                            <StepIndicator currentStep={currentStep} />
                            <ModalHeader selectedLimo={selectedLimo} />
                            <form onSubmit={handleSubmit}>
                                {currentStep === 1 ? (
                                    <StepOne
                                        formData={formData}
                                        formErrors={formErrors}
                                        handleInputChange={handleInputChange}
                                        handleNextStep={handleNextStep}
                                        TIME_SLOTS={TIME_SLOTS}
                                    />
                                ) : (
                                    <StepTwo
                                        formData={formData}
                                        formErrors={formErrors}
                                        handleInputChange={handleInputChange}
                                        handlePrevStep={handlePrevStep}
                                        selectedLimo={selectedLimo}
                                        isLoading={isLoading}
                                    />
                                )}
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
        </>
    );
};

// Sub-components
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

const ConfirmationMessage = ({ onClose }) => (
    <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Reservation Confirmed!</h3>
        <p className="text-gray-600 mb-6">We've sent the details to your email. Our team will contact you shortly.</p>
        <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
            Close
        </button>
    </div>
);

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

const ModalHeader = ({ selectedLimo }) => (
    <>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Reserve {selectedLimo?.name}
        </h2>
        <p className="text-gray-600 mb-6 text-center text-sm">{selectedLimo?.description}</p>
    </>
);

const StepOne = ({ formData, formErrors, handleInputChange, handleNextStep, TIME_SLOTS }) => (
    <div className="space-y-5">
        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your full name"
                required
            />
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your company name (optional)"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number *</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                    required
                />
            </div>
        </div>
        {formErrors.contact && <p className="text-red-500 text-sm -mt-3">{formErrors.contact}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Date *</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    min={new Date().toISOString().split('T')[0]}
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Time Slot *</label>
                <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                    required
                >
                    <option value="">Select time</option>
                    {TIME_SLOTS.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className="pt-2">
            <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!formData.date || !formData.slot || !formData.email || !formData.phone || !formData.name}
            >
                Continue to Trip Details
            </button>
        </div>
    </div>
);

const StepTwo = ({ formData, formErrors, handleInputChange, handlePrevStep, selectedLimo, isLoading }) => (
    <div className="space-y-5">
        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Pickup Location *</label>
            <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Where should we pick you up?"
                required
            />
            {formErrors.pickup && <p className="text-red-500 text-sm mt-1">{formErrors.pickup}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Destination *</label>
            <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Where are you going?"
                required
            />
            {formErrors.destination && <p className="text-red-500 text-sm mt-1">{formErrors.destination}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
                Number of Passengers * (max {selectedLimo?.maxPassengers})
            </label>
            <input
                type="number"
                name="passengers"
                min="1"
                max={selectedLimo?.maxPassengers}
                value={formData.passengers}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
            />
            {formErrors.passengers && <p className="text-red-500 text-sm mt-1">{formErrors.passengers}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Special Requests</label>
            <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Any special requirements?"
                rows="3"
            />
        </div>

        <ReservationSummary selectedLimo={selectedLimo} formData={formData} />

        <div className="pt-2 flex justify-between gap-4">
            <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                disabled={isLoading}
            >
                Back
            </button>
            <button
                type="submit"
                className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    "Confirm Reservation"
                )}
            </button>
        </div>
    </div>
);

const ReservationSummary = ({ selectedLimo, formData }) => (
    <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">Reservation Summary</h4>
        <div className="space-y-2 text-sm">
            <div className="flex justify-between">
                <span className="text-gray-600">Vehicle:</span>
                <span className="font-medium">{selectedLimo?.name}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">Company:</span>
                <span className="font-medium">{formData.company || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{formData.date || 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{formData.slot || 'Not selected'}</span>
            </div>
        </div>
    </div>
);

export default ReservationModal;