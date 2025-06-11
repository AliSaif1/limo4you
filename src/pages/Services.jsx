const Services = () => {
    const services = [
        {
            title: "Airport Transfers",
            description: "Seamless airport transportation with flight tracking and meet & greet service",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-accent/10"
        },
        {
            title: "Corporate Events",
            description: "Professional transportation for executives and business meetings",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            bgColor: "bg-secondary/10"
        },
        {
            title: "Weddings",
            description: "Elegant bridal party transportation with champagne service",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            bgColor: "bg-primary-light/10"
        },
        {
            title: "Night Out",
            description: "Safe, luxurious rides for your special evenings out",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            bgColor: "bg-accent-light/10"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                        Exceptional <span className="text-secondary">Transportation</span> Solutions
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Premium services tailored to exceed your expectations with comfort and style
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${service.bgColor}`}
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white text-secondary mb-6">
                                {service.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-text-secondary">{service.description}</p>
                            <a
                                href="#"
                                className="mt-4 inline-flex items-center text-accent font-medium hover:text-accent-light transition-colors"
                            >
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;