import { useState } from 'react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            id: 1,
            title: "Airport Transportation",
            shortTitle: "Airport",
            description: "Premium airport transfers with flight monitoring and meet & greet services for seamless travel.",
            detailedDescription: "Our professional airport transportation service ensures punctual arrivals and departures with real-time flight tracking. Enjoy complimentary amenities including bottled water, phone chargers, and WiFi. Available 24/7 with options for executive sedans or luxury SUVs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Corporate Events",
            shortTitle: "Corporate",
            description: "Executive transportation for business meetings, conferences, and corporate functions.",
            detailedDescription: "Impress clients with our discreet corporate transportation service. Our professional chauffeurs understand business etiquette and provide reliable service with vehicles equipped with work amenities including WiFi, charging ports, and privacy partitions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Weddings",
            shortTitle: "Weddings",
            description: "Elegant transportation to make your special day unforgettable.",
            detailedDescription: "Our wedding packages include beautifully decorated vehicles, red carpet service, and professional coordination with your wedding timeline. Choose from our luxury fleet including classic limousines, modern SUVs, or executive sedans.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Special Events",
            shortTitle: "Events",
            description: "Luxury transportation for galas, anniversaries, and important occasions.",
            detailedDescription: "Make your special event memorable with our luxury transportation. Perfect for proms, anniversaries, birthdays, and galas. Our chauffeurs ensure safe, punctual service so you can focus on enjoying your evening.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Bachelor Parties",
            shortTitle: "Bachelor",
            description: "Celebrate in style with our premium party transportation.",
            detailedDescription: "Our party vehicles come equipped with premium sound systems, LED lighting, and amenities to make your celebration unforgettable. Choose from stretch limousines or luxury SUVs with professional chauffeurs who know the best venues in town.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 6,
            title: "Sporting Events",
            shortTitle: "Sports",
            description: "Arrive at the game in luxury with our event transportation.",
            detailedDescription: "Avoid parking hassles and arrive at sporting events in style. Our chauffeurs will drop you at the entrance and be ready for pickup when the game ends. Available for all major stadiums and arenas.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 7,
            title: "Graduations & Proms",
            shortTitle: "Grad/Prom",
            description: "Make milestone events memorable with luxury transportation.",
            detailedDescription: "Our graduation and prom packages include special decorations, photo opportunities, and professional service to make these important events unforgettable. We provide safe transportation for groups of all sizes.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 8,
            title: "Casino Trips",
            shortTitle: "Casino",
            description: "Luxury round-trip transportation to your favorite gaming destinations.",
            detailedDescription: "Enjoy a stress-free casino experience with our premium transportation service. We'll handle the driving while you relax in comfort. Available for all major gaming destinations with options for individual or group transportation.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
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
        <section className="py-16 bg-gray-50 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* SEO-optimized heading with semantic structure */}
                <header className="text-center mb-16">
                    <div className="text-center mb-12">
                        {/* Premium Services Badge */}
                        <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
                            Premium Services
                        </span>

                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">
                            Premium Limousine Services in <span className="text-secondary">Your City</span>
                        </h1>
                    </div>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience luxury transportation for all occasions with our professional chauffeur services.
                        Available for airport transfers, corporate events, weddings, and special occasions.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            <div className="p-6 flex-grow">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-4">
                                    {service.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 mb-6" itemProp="description">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => openModal(service)}
                                    className="text-sm font-medium text-primary hover:text-primary-700 inline-flex items-center group/link"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-primary hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                        aria-label="Book your limousine service now"
                    >
                        Book Your Limousine
                    </a>
                </div>

                {/* Modal with semantic markup */}
                {isModalOpen && selectedService && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 mr-4">
                                            {selectedService.icon}
                                        </div>
                                        <h2
                                            id="modal-title"
                                            className="text-2xl font-bold text-gray-900"
                                        >
                                            {selectedService.title}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-gray-600 p-1"
                                        aria-label="Close modal"
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
                                        <h3 className="font-bold text-lg mb-3">Service Features</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                            <li>Professional, licensed chauffeurs</li>
                                            <li>24/7 availability for most services</li>
                                            <li>Real-time tracking for airport transfers</li>
                                            <li>Complimentary amenities</li>
                                            <li>Flexible scheduling</li>
                                            <li>Discreet and professional service</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#contact"
                                        className="flex-1 bg-primary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full text-center transition-colors duration-300"
                                    >
                                        Book Now
                                    </a>
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-medium py-3 px-6 rounded-full transition-colors duration-300"
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