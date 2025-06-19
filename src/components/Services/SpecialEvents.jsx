import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SpecialEvents = () => {
    return (
        <>
            <Helmet>
                <title>Premier Special Event Transportation in Toronto & Hamilton | Limo4All</title>
                <meta name="description" content="Elevate your special occasions with our luxury event transportation. Perfect for galas, anniversaries, proms, and milestone celebrations across the GTA." />
                <meta property="og:title" content="Luxury Special Event Transportation | Limo4All" />
                <meta property="og:description" content="Make every occasion memorable with our premium event transportation services in Toronto and Hamilton. Professional chauffeurs and elegant vehicles." />
                <meta property="og:url" content="https://www.limo4all.ca/services/special-events" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/special-events" />
                <meta name="keywords" content="special event transportation, luxury limo Toronto, anniversary limo, prom transportation, gala limo service, milestone celebration transport" />
            </Helmet>

            {/* Microdata Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Special Event Transportation in Toronto & Hamilton" />
                <meta itemProp="description" content="Luxury transportation services for galas, anniversaries, proms, and milestone celebrations with professional chauffeurs and elegant vehicles." />
                <link itemProp="url" content="https://www.limo4all.ca/services/special-events" />
                <meta itemProp="serviceType" content="Special Event Transportation" />

                <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="image" content="https://www.limo4all.ca/logo.png" />
                    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                        <meta itemProp="streetAddress" content="123 Main St" />
                        <meta itemProp="addressLocality" content="Toronto" />
                        <meta itemProp="addressRegion" content="ON" />
                        <meta itemProp="postalCode" content="M5V 3L9" />
                        <meta itemProp="addressCountry" content="CA" />
                    </div>
                    <meta itemProp="priceRange" content="$$$" />
                </div>

                <div itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                    <meta itemProp="name" content="Special Event Transportation Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Luxury Limousine Package" />
                            <meta itemProp="description" content="Elegant stretch limousine perfect for anniversaries and galas" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Party Bus Package" />
                            <meta itemProp="description" content="Spacious party buses for group celebrations and events" />
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

            {/* Updated Hero Section for Special Events */}
            <section className="relative bg-gray-100 pt-28 pb-20 mt-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Special Occasions
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Premium <span className="text-primary">Event Transportation</span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Make your milestone moments extraordinary with our luxury vehicles and impeccable service
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact#contact-form"
                                className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
                            >
                                Book Your Ride
                            </Link>
                            <Link
                                to="/fleet"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                            >
                                View Our Fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white mt-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Special Events Transportation
                        </h1>
                        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Luxury transportation for galas, anniversaries, proms, and milestone celebrations across Toronto and Hamilton.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg mx-auto mb-12">
                            <p>Elevate your special occasion with our premium transportation services. Whether it's an anniversary celebration, prom night, gala event, or any milestone moment, our luxury vehicles and professional chauffeurs ensure you arrive in style and comfort.</p>
                            <p>We specialize in creating unforgettable transportation experiences for all your important events, with attention to detail that matches the significance of your occasion.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Event Transportation Features</h2>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Diverse luxury vehicle selection</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Experienced event chauffeurs</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Custom decorations available</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Group transportation solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Flexible event scheduling</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Red carpet service available</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/contact#contact-form"
                                className="inline-block bg-primary hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialEvents;