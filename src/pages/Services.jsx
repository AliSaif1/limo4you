const Services = () => {
    const services = [
        {
            title: "Airport Limousine Service",
            description: "Arrive in ultimate luxury with our executive airport transfers. Our chauffeurs monitor flights in real-time and provide meet & greet services for a seamless experience.",
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
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            bgColor: "bg-purple-50"
        }
    ];

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
                            className={`p-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-3 ${service.bgColor} border border-gray-100`}
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-gold-600 mb-8 shadow-md">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <a
                                href="#"
                                className="mt-4 inline-flex items-center text-black font-medium hover:text-gold-600 transition-colors group"
                            >
                                Explore service
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a 
                        href="#contact" 
                        className="inline-block bg-black hover:bg-gold-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Book Your Limousine Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;