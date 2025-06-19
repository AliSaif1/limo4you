import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CorporateReservationModal from '../CorporateReservationModal';

const BachelorParties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const openModal = (vehicle) => {
        setSelectedVehicle(vehicle);
        setIsModalOpen(true);
    };

    return (
        <>
            <Helmet>
                <title>Ultimate Bachelor Party Transportation in Toronto | Limo & Party Bus</title>
                <meta name="description" content="Toronto's premier bachelor party transportation with luxury limos, party buses, and experienced chauffeurs. Perfect for bar hopping, casino trips, and nightlife adventures." />
                <meta property="og:title" content="Bachelor Party Limos & Party Buses | Limo4All Toronto" />
                <meta property="og:description" content="Make your bachelor party unforgettable with our premium party vehicles, professional chauffeurs, and customized itineraries for the ultimate night out." />
                <meta property="og:url" content="https://www.limo4all.ca/services/bachelor-parties" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/bachelor-parties" />
                <meta name="keywords" content="bachelor party transportation, Toronto party bus, limo for bachelor party, nightclub limo service, bar hopping transportation, luxury party vehicles" />
            </Helmet>

            {/* Enhanced Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Bachelor Party Transportation Services in Toronto" />
                <meta itemProp="description" content="Premium party vehicles including stretch limousines and party buses for bachelor celebrations with professional chauffeurs and customized itineraries." />
                <link itemProp="url" content="https://www.limo4all.ca/services/bachelor-parties" />
                <meta itemProp="serviceType" content="Bachelor Party Transportation" />
                <meta itemProp="areaServed" content="Toronto, Hamilton, GTA" />
                <meta itemProp="isRelatedTo" content="Nightlife Transportation" />

                <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="image" content="https://www.limo4all.ca/images/bachelor-party-limo.jpg" />
                    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                        <meta itemProp="streetAddress" content="123 Main St" />
                        <meta itemProp="addressLocality" content="Toronto" />
                        <meta itemProp="addressRegion" content="ON" />
                        <meta itemProp="postalCode" content="M5V 3L9" />
                        <meta itemProp="addressCountry" content="CA" />
                    </div>
                    <meta itemProp="priceRange" content="$$-$$$" />
                    <meta itemProp="openingHours" content="Mo-Su 00:00-24:00" />
                </div>

                <div itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                    <meta itemProp="name" content="Bachelor Party Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Premium Party Bus Package" />
                            <meta itemProp="description" content="Spacious party bus with dance pole, premium sound system, and LED lighting for groups of 20-30 people" />
                            <meta itemProp="price" content="150" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Luxury Limo Package" />
                            <meta itemProp="description" content="Stretch limousine with premium amenities for groups of 8-12 people" />
                            <meta itemProp="price" content="120" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Booking Button - Hidden on mobile, visible on lg screens */}
            <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
                <Link
                    to="/contact#contact-form"
                    className="bg-primary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full shadow-xl transition-all duration-300 flex items-center animate-bounce"
                    aria-label="Book Corporate Transportation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Contact Now
                </Link>
            </div>

            {/* Enhanced Hero Section */}
            <section className="relative bg-gray-900 pt-32 pb-28 overflow-hidden mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Bachelor party celebration in limousine"
                        className="w-full h-full object-cover opacity-50"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-primary-900 opacity-75"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Ultimate Bachelor Party Experience
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="text-primary-300">Toronto's #1</span> Bachelor Party Transportation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Luxury party buses, stretch limos, and expert chauffeurs to create an unforgettable night out
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact#contact-form"
                                className="bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Book Your Ride
                            </Link>
                            <Link
                                to="/fleet"
                                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                            >
                                Explore Our Fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white" id="vehicles">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Ultimate Bachelor Party Ride
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our party vehicles are equipped with everything you need for an epic celebration on wheels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Premium Sound Systems</h3>
                            <p className="text-gray-600 text-center">Bluetooth-enabled, concert-quality audio with subwoofers to keep the party going all night long</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">LED Mood Lighting</h3>
                            <p className="text-gray-600 text-center">Customizable color-changing lighting to set the perfect atmosphere for your celebration</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Local Expert Chauffeurs</h3>
                            <p className="text-gray-600 text-center">Drivers who know all the best bars, clubs, and hidden gems in Toronto's nightlife scene</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Section */}
            <div id="vehicles" className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our Corporate Fleet
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our selection of premium vehicles perfect for business travel
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            id: 1,
                            name: "Executive Sedans",
                            description: "Mercedes E-Class, BMW 5 Series, Audi A6",
                            features: ["WiFi & charging ports", "Spacious interiors", "Privacy partitions"],
                            price: "From $85/hour",
                            src: "/Sedan.png",
                            maxPassengers: 3
                        },
                        {
                            id: 2,
                            name: "Luxury SUVs",
                            description: "Cadillac Escalade, Lincoln Navigator, Mercedes GLS",
                            features: ["Ample luggage space", "Premium sound system", "Tinted windows"],
                            price: "From $110/hour",
                            src: "/GMC-Yukon.png",
                            maxPassengers: 6
                        },
                        {
                            id: 3,
                            name: "Stretch Limousines",
                            description: "10-passenger luxury limos",
                            features: ["LED mood lighting", "Premium bar setup", "Privacy divider"],
                            price: "From $150/hour",
                            src: "/Executive-Limo.png",
                            maxPassengers: 10
                        }
                    ].map((vehicle) => (
                        <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
                            <div className={`h-48 ${vehicle.id === 1 ? 'bg-blue-50' : vehicle.id === 2 ? 'bg-gray-50' : 'bg-purple-50'} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                <img
                                    src={vehicle.src}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-4 left-4 bg-white text-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    {vehicle.price}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                                <ul className="space-y-2 mb-4">
                                    {vehicle.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => openModal(vehicle)}
                                    className="inline-block w-full text-center bg-primary hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
                                >
                                    Book This Vehicle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                            Don't just take our word for it - hear from bachelor parties we've helped create unforgettable memories for
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "The party bus made my bachelor party legendary! The sound system was insane and our chauffeur knew all the best spots in the city."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Mike T.</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "From the moment we stepped into the limo, we knew it was going to be an epic night. The ice and glasses were ready to go!"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">David R.</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "Our chauffeur was amazing - he took care of everything and even helped coordinate with the venues. 10/10 would book again!"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">James K.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Plan Your Epic Bachelor Party?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our team will help you create the perfect transportation plan for your celebration
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact#contact-form"
                            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Book Now
                        </Link>
                        <a
                            href="tel:+16471234567"
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Reservation Modal */}
            <CorporateReservationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedLimo={selectedVehicle}
            />
        </>
    );
};

export default BachelorParties;