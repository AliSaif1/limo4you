import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GraduationsProms = () => {
    return (
        <>
            <Helmet>
                <title>Luxury Graduation & Prom Transportation in Toronto | Limo4All</title>
                <meta name="description" content="Toronto's premier graduation and prom transportation service. Luxury limousines and party buses for unforgettable milestone celebrations with safe, professional service." />
                <meta property="og:title" content="Graduation & Prom Limo Services | Luxury Transportation | Limo4All" />
                <meta property="og:description" content="Make your special night unforgettable with our premium prom and graduation transportation packages, including decorations and photo opportunities." />
                <meta property="og:url" content="https://www.limo4all.ca/services/graduations-proms" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/graduations-proms" />
                <meta name="keywords" content="prom limo Toronto, graduation transportation, luxury prom car, safe grad transportation, party bus for prom, limo service for grads" />
            </Helmet>

            {/* Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Graduation & Prom Transportation Services in Toronto" />
                <meta itemProp="description" content="Premium limousines and party buses for graduation and prom celebrations with professional chauffeurs, decorations, and photo services." />
                <link itemProp="url" content="https://www.limo4all.ca/services/graduations-proms" />
                <meta itemProp="serviceType" content="Special Event Transportation" />
                <meta itemProp="areaServed" content="Toronto, Hamilton, GTA" />

                <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="image" content="https://www.limo4all.ca/images/prom-limo.jpg" />
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
                    <meta itemProp="name" content="Graduation & Prom Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Elegant Prom Limousine" />
                            <meta itemProp="description" content="Stretch limousine with decorations for up to 10 people" />
                            <meta itemProp="price" content="129" />
                            <meta itemProp="priceCurrency" content="CAD" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Graduation Party Bus" />
                            <meta itemProp="description" content="Spacious party bus for groups of 20-30 graduates" />
                            <meta itemProp="price" content="299" />
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
            <section className="relative bg-gray-900 pt-32 pb-28 overflow-hidden mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Graduates celebrating in caps and gowns"
                        className="w-full h-full object-cover opacity-50"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-75"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Milestone Celebrations
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="text-primary-300">Graduation & Prom</span> Transportation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Make your special night unforgettable with our luxury vehicles and professional service
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Book Your Ride
                            </Link>
                            <Link
                                to="#packages"
                                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                            >
                                View Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Perfect Celebration Ride
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our specialized services make your graduation or prom night extra special
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Custom Decorations</h3>
                            <p className="text-gray-600 text-center">School colors, balloons, and personalized touches to match your event theme</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">School Pickup/Dropoff</h3>
                            <p className="text-gray-600 text-center">Convenient transportation directly from your school to the venue and back</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Photo Opportunities</h3>
                            <p className="text-gray-600 text-center">Red carpet service and perfect backdrops for your milestone photos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Showcase Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Graduation & Prom Fleet
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose the perfect vehicle for your special occasion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1550547126-5a1a758b2a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Elegant Limousines</h3>
                                <div className="flex items-center mb-4">
                                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-gray-600">Capacity: 8-12 people</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Custom school color lighting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Complimentary red carpet service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Chilled bottled water included</span>
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

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1599398054069-510a65a03177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Graduation Party Buses</h3>
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
                                        <span>Premium sound system for celebrations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Built-in coolers for beverages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Professional chaperone available</span>
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

            {/* Safety Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Safe & Responsible Transportation
                            </h2>
                            <div className="w-16 h-1 bg-white mb-6"></div>
                            <p className="text-lg mb-8">
                                We prioritize safety for all our graduation and prom clients with:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Fully licensed and insured vehicles</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Professional chauffeurs with clean records</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>24/7 dispatch monitoring</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-white mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Parent notification system available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear from students and parents about their experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "The limo made my daughter's prom night so special! The decorations matched her dress perfectly and the photos turned out amazing."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Lisa M.</div>
                                <div className="ml-2 text-sm text-gray-500">Parent</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "Our graduation party bus was the highlight of the night! The driver was professional and the bus had everything we needed."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Jason T.</div>
                                <div className="ml-2 text-sm text-gray-500">Graduate</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 mr-2">
                                    ★★★★★
                                </div>
                            </div>
                            <blockquote className="text-lg italic mb-6">
                                "As a school administrator, I recommend Limo4All for all our prom transportation needs. They're reliable and safety-conscious."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="font-bold">Mr. Wilson</div>
                                <div className="ml-2 text-sm text-gray-500">School Administrator</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Book Your Special Event?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Limited vehicles available during peak prom and graduation season - reserve yours today
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get a Quote
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

export default GraduationsProms;