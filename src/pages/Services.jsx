import { useState } from 'react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            title: "Airport Limousine Service",
            description: "Arrive in ultimate luxury with our executive airport transfers. Our chauffeurs monitor flights in real-time and provide meet & greet services for a seamless experience.",
            detailedDescription: "Our airport limousine service ensures a stress-free journey to and from the airport. Enjoy complimentary Wi-Fi, bottled water, and real-time flight tracking. Available 24/7 for all major airports with various vehicle options to suit your needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-blue-50"
        },
        {
            title: "Corporate Limousine",
            description: "Impress clients with our premium corporate limousine service. Professional chauffeurs, discreet service, and impeccable vehicles for business meetings and events.",
            detailedDescription: "Make the right impression with our corporate limousine service. Our professional chauffeurs are trained in business etiquette and discretion. Vehicles are equipped with work amenities including charging ports, Wi-Fi, and privacy partitions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            bgColor: "bg-gray-50"
        },
        {
            title: "Wedding Limousine",
            description: "Make your special day unforgettable with our elegant wedding limousines. Champagne service, red carpet treatment, and professional coordination included.",
            detailedDescription: "Your wedding transportation should be as special as your big day. Our wedding packages include decorated vehicles, complimentary champagne, red carpet service, and professional coordination with your wedding timeline.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            bgColor: "bg-pink-50"
        },
        {
            title: "Evening & Special Events",
            description: "Arrive in style for galas, proms, and nights out with our luxury limousines. Safe, sophisticated transportation with professional chauffeurs.",
            detailedDescription: "Make your special event even more memorable with our luxury transportation. Perfect for proms, anniversaries, birthdays, and galas. Our chauffeurs ensure safe, punctual service so you can focus on enjoying your evening.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            bgColor: "bg-purple-50"
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <section className="py-24 bg-white mt-16">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        Luxury Transportation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                        Exclusive <span className="text-gold-600">Limousine</span> Services
                    </h2>
                    <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience uncompromising luxury with our premium limousine fleet. Professional chauffeurs, discreet service, and attention to every detail ensure an exceptional journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-10 rounded-lg transition-all duration-300 ease-in-out ${service.bgColor} border border-gray-100 relative overflow-hidden flex flex-col h-full`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-gold-600 mb-8 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif group-hover:text-gold-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => openModal(service)}
                                        className="inline-flex items-center text-black font-medium hover:text-gold-600 transition-colors group/link"
                                    >
                                        Explore service
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-black hover:bg-gold-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 hover:scale-[1.02]"
                    >
                        Book Your Limousine Now
                    </a>
                </div>

                {/* Modal/Popup */}
                {isModalOpen && selectedService && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center">
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${selectedService.bgColor.replace('50', '100')} text-gold-600 mr-4`}>
                                            {selectedService.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 font-serif">
                                            {selectedService.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedService.detailedDescription}
                                    </p>

                                    <div className="pt-4 mt-6 border-t border-gray-200">
                                        <h4 className="font-bold text-lg mb-3">Service Highlights</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                            <li>Professional, licensed chauffeurs</li>
                                            <li>24/7 availability</li>
                                            <li>Real-time flight tracking (airport services)</li>
                                            <li>Complimentary amenities</li>
                                            <li>Flexible scheduling</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#contact"
                                        className="flex-1 bg-black hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300"
                                    >
                                        Book Now
                                    </a>
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 border border-gray-300 hover:border-black text-gray-700 hover:text-black font-medium py-3 px-6 rounded-full transition-all duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;