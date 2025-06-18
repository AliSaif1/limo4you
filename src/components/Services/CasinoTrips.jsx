import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CasinoTrips = () => {
    return (
        <>
            <Helmet>
                <title>Premium Casino Trip Transportation | Luxury Limos & Party Buses | Limo4All</title>
                <meta name="description" content="Toronto's premier casino transportation service to Niagara Falls, Rama, and Fallsview. Enjoy VIP treatment with our luxury limousines and party buses for your gaming getaway." />
                <meta property="og:title" content="Luxury Casino Transportation | Niagara Falls & Rama Trips | Limo4All" />
                <meta property="og:description" content="Travel in style to your favorite casinos with our premium limousines and party buses. Round-trip service with VIP drop-off and onboard amenities." />
                <meta property="og:url" content="https://www.limo4all.ca/services/casino-trips" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/casino-trips" />
                <meta name="keywords" content="casino limo Toronto, Niagara Falls casino transportation, Rama casino trip, luxury casino bus, VIP casino limo, group casino transportation" />
            </Helmet>

            {/* Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Casino Transportation Services" />
                <meta itemProp="description" content="Luxury limousines and party buses for casino trips to Niagara Falls, Rama, and Fallsview with VIP service and onboard amenities." />
                <link itemProp="url" content="https://www.limo4all.ca/services/casino-trips" />
                <meta itemProp="serviceType" content="Casino Transportation" />
                <meta itemProp="areaServed" content="Toronto, Hamilton, GTA" />

                <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="image" content="https://www.limo4all.ca/images/casino-limo.jpg" />
                    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                        <meta itemProp="streetAddress" content="123 Main St" />
                        <meta itemProp="addressLocality" content="Toronto" />
                        <meta itemProp="addressRegion" content="ON" />
                        <meta itemProp="postalCode" content="M5V 3L9" />
                        <meta itemProp="addressCountry" content="CA" />
                    </div>
                    <meta itemProp="priceRange" content="$$-$$$" />
                </div>

                <div itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                    <meta itemProp="name" content="Casino Trip Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Premium Limousine Package" />
                            <meta itemProp="description" content="Luxury limo for up to 10 people with VIP casino drop-off" />
                            <meta itemProp="price" content="199" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Casino Party Bus" />
                            <meta itemProp="description" content="Spacious party bus for groups of 20-30 with entertainment system" />
                            <meta itemProp="price" content="399" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Booking Button - Unchanged */}
            <div className="fixed bottom-6 left-6 z-50">
                <Link
                    to="/contact"
                    className="bg-primary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full shadow-xl transition-all duration-300 flex items-center animate-bounce"
                    aria-label="Book Corporate Transportation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Book Now
                </Link>
            </div>

            {/* Enhanced Hero Section */}
            <section className="relative bg-gray-700 pt-32 pb-28 overflow-hidden mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Luxury limousine at casino entrance"
                        className="w-full h-full object-cover opacity-50"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-red-900 opacity-75"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            VIP Casino Experience
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="text-primary-300">Luxury</span> Casino Transportation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Arrive at your favorite casinos in style with our premium limousines and party buses
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Book Your Trip
                            </Link>
                            <Link
                                to="#destinations"
                                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                            >
                                View Destinations
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="py-20 bg-white" id="destinations">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Popular Casino Destinations
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide premium transportation to all major gaming destinations in Ontario
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Niagara Fallsview</h3>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Approx. 1.5 hours from Toronto</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>VIP entrance drop-off</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Flexible return times</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1592520113018-180c8bc831c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Casino Rama</h3>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Approx. 1.25 hours from Toronto</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Preferred valet service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Overnight packages available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Elements Casino</h3>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Approx. 1 hour from Toronto</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Priority parking access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Group discounts available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Casino Transportation
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We make your casino trip effortless and luxurious from start to finish
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">VIP Treatment</h3>
                            <p className="text-gray-600 text-center">Priority drop-off at casino entrances and preferred parking locations</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Player Perks</h3>
                            <p className="text-gray-600 text-center">Complimentary amenities and potential casino rewards for our clients</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Flexible Returns</h3>
                            <p className="text-gray-600 text-center">Stay as long as you want - we'll be ready when you are</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Showcase Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Casino Transportation Fleet
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Luxury vehicles designed for gaming getaways
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1550547126-5a1a758b2a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Premium Limousines</h3>
                                <div className="flex items-center mb-4">
                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-gray-600">Capacity: 6-10 people</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Plush leather interiors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Complimentary bottled water</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>VIP casino drop-off</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-primary hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                                >
                                    Book Limousine
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Casino Party Buses</h3>
                                <div className="flex items-center mb-4">
                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-gray-600">Capacity: 20-30 people</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Premium sound system</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Built-in coolers and glass holders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>LED mood lighting</span>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-primary hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                                >
                                    Book Party Bus
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                            Hear from casino enthusiasts who've traveled with us
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
                                "The limo service made our casino trip so much more enjoyable. No driving stress and we arrived feeling like high rollers!"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Michael T.</div>
                                <div className="ml-2 text-sm text-primary-200">Regular Casino Visitor</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "Our group of 12 uses Limo4All for every Rama trip. The party bus is perfect for our celebrations and the drivers know all the best routes."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Sarah K.</div>
                                <div className="ml-2 text-sm text-primary-200">Group Organizer</div>
                            </div>
                        </div>
                        <div className="bg-primary-800 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "The VIP drop-off at Fallsview is worth every penny. No waiting in line and we get treated like celebrities every time."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">David R.</div>
                                <div className="ml-2 text-sm text-primary-200">High Limit Player</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready for Your Casino Adventure?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book your luxury transportation today and travel to the casino in style
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Instant Quote
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
        </>
    );
};

export default CasinoTrips;