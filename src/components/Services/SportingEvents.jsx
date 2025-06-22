import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SportingEvents = () => {
    return (
        <>
            <Helmet>
                <title>Premium Sports Event Transportation in Toronto | Game Day Limo & Party Bus</title>
                <meta name="description" content="Toronto's top-rated sports event transportation for Raptors, Maple Leafs, Blue Jays, and more. Luxury vehicles with direct stadium access, perfect for groups and corporate outings." />
                <meta property="og:title" content="Sports Game Transportation | Luxury Limos & Buses | Limo4All" />
                <meta property="og:description" content="Arrive at Toronto sporting events in style with our premium transportation services. Skip the parking hassles with direct stadium drop-off and pickup." />
                <meta property="og:url" content="https://www.limo4all.ca/services/sporting-events" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/sporting-events" />
                <meta name="keywords" content="sports event transportation, Toronto game day limo, stadium transportation, Raptors limo service, Blue Jays party bus, Maple Leafs transportation" />
            </Helmet>

            {/* Enhanced Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Sports Event Transportation in Toronto" />
                <meta itemProp="description" content="Luxury transportation services for sporting events including direct stadium access, group transportation, and tailgate packages for all major Toronto sports teams." />
                <link itemProp="url" content="https://www.limo4all.ca/services/sporting-events" />
                <meta itemProp="serviceType" content="Sports Event Transportation" />
                <meta itemProp="areaServed" content="Toronto, Hamilton, GTA" />
                <meta itemProp="isRelatedTo" content="Sports Venue Transportation" />

                <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="image" content="https://www.limo4all.ca/images/sports-limo.jpg" />
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
                    <meta itemProp="name" content="Sports Event Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Stadium Express Package" />
                            <meta itemProp="description" content="Direct stadium drop-off and pickup for groups up to 6 people" />
                            <meta itemProp="price" content="99" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Team Spirit Party Bus" />
                            <meta itemProp="description" content="Premium party bus for groups of 20-30 with team decorations and coolers" />
                            <meta itemProp="price" content="250" />
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
            <section className="relative bg-gray pt-32 pb-28 overflow-hidden mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80"
                        alt="Fans celebrating at sports stadium"
                        className="w-full h-full object-cover opacity-50"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-75"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Game Day Experience
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="text-primary-300">Toronto Sports</span> Event Transportation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Arrive at the game in style with our premium transportation and direct stadium access
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

            {/* Teams Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Serving All Major Toronto Teams
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide premium transportation to all major sporting venues in the GTA
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Blue_Jays_logo.svg/1200px-Toronto_Blue_Jays_logo.svg.png"
                                alt="Toronto Blue Jays Logo"
                                className="h-20 mx-auto mb-4 object-contain" />
                            <h3 className="text-xl font-bold mb-2">Blue Jays</h3>
                            <p className="text-gray-600">Rogers Centre</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png"
                                alt="Toronto Maple Leafs Logo"
                                className="h-20 mx-auto mb-4 object-contain" />
                            <h3 className="text-xl font-bold mb-2">Maple Leafs</h3>
                            <p className="text-gray-600">Scotiabank Arena</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Toronto_Raptors_logo.svg/1200px-Toronto_Raptors_logo.svg.png"
                                alt="Toronto Raptors Logo"
                                className="h-20 mx-auto mb-4 object-contain" />
                            <h3 className="text-xl font-bold mb-2">Raptors</h3>
                            <p className="text-gray-600">Scotiabank Arena</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Toronto_FC_logo.svg/1200px-Toronto_FC_logo.svg.png"
                                alt="Toronto FC Logo"
                                className="h-20 mx-auto mb-4 object-contain" />
                            <h3 className="text-xl font-bold mb-2">Toronto FC</h3>
                            <p className="text-gray-600">BMO Field</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Sports Transportation
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We make game day transportation effortless so you can focus on the action
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Direct Stadium Access</h3>
                            <p className="text-gray-600 text-center">Priority drop-off zones get you closer to the gates than regular parking</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Timely Pickups</h3>
                            <p className="text-gray-600 text-center">Our chauffeurs monitor game progress to ensure perfect pickup timing</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Tailgate Packages</h3>
                            <p className="text-gray-600 text-center">Pre-game setups with coolers, team decorations, and audio systems</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Fan Experiences
                        </h2>
                        <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                            Hear from sports fans who've elevated their game day with our transportation
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
                                "Our Raptors playoff experience was perfect thanks to the limo service. No parking stress and we arrived feeling like VIPs!"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Sarah K.</div>
                                <div className="ml-2 text-sm text-primary-200">Raptors Fan</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "The party bus for our Jays game bachelor party was incredible. The sound system played the game broadcast perfectly during our post-game celebration."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Michael T.</div>
                                <div className="ml-2 text-sm text-primary-200">Blue Jays Fan</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "Our corporate group uses Limo4All for every Leafs game. The service is consistently excellent and our clients love it."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">David R.</div>
                                <div className="ml-2 text-sm text-primary-200">Corporate Account</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready for Game Day?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your sports event transportation today and enjoy the game stress-free
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact#contact-form"
                            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="tel:+16473131786"
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SportingEvents;