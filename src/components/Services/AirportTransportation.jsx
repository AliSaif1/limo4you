import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AirportTransportation = () => {
    const scrollToRates = () => {
        const element = document.getElementById('rates');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>Premium Airport Transportation in Toronto & Hamilton | Limo4All</title>
                <meta name="description" content="Reliable luxury airport transfers to Pearson (YYZ), Billy Bishop (YTZ), and Hamilton (YHM) airports. 24/7 service with flight monitoring." />
                <meta property="og:title" content="Premium Airport Transportation in Toronto & Hamilton | Limo4All" />
                <meta property="og:description" content="Reliable luxury airport transfers to Pearson (YYZ), Billy Bishop (YTZ), and Hamilton (YHM) airports. 24/7 service with flight monitoring." />
                <meta property="og:url" content="https://www.limo4all.ca/services/airport-transportation" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/airport-transportation" />
            </Helmet>

            {/* Microdata Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Airport Transportation in Toronto & Hamilton" />
                <meta itemProp="description" content="Reliable luxury airport transfers to Pearson (YYZ), Billy Bishop (YTZ), and Hamilton (YHM) airports. 24/7 service with flight monitoring and meet & greet." />
                <link itemProp="url" content="https://www.limo4all.ca/services/airport-transportation" />
                <meta itemProp="serviceType" content="Airport Transportation" />

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

                    <div itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates">
                        <meta itemProp="latitude" content="43.6532" />
                        <meta itemProp="longitude" content="-79.3832" />
                    </div>

                    <div itemProp="openingHoursSpecification" itemScope itemType="http://schema.org/OpeningHoursSpecification">
                        <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday" />
                        <meta itemProp="opens" content="00:00" />
                        <meta itemProp="closes" content="23:59" />
                    </div>

                    <div itemProp="areaServed" itemScope itemType="http://schema.org/City">
                        <meta itemProp="name" content="Toronto" />
                    </div>
                    <div itemProp="areaServed" itemScope itemType="http://schema.org/City">
                        <meta itemProp="name" content="Hamilton" />
                    </div>
                </div>

                <div itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                    <meta itemProp="name" content="Airport Transportation Services" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Pearson Airport Transfer" />
                            <meta itemProp="description" content="Luxury transportation to Toronto Pearson International Airport (YYZ)" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Billy Bishop Airport Transfer" />
                            <meta itemProp="description" content="Executive service to Billy Bishop Toronto City Airport (YTZ)" />
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

            {/* Page Content */}
            <section className="py-16 bg-white mt-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Modern Hero Section */}
                    <div className="relative overflow-hidden bg-gray-900">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 z-0 opacity-20">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>

                        {/* Hero content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                                    <span className="block">Premium Airport</span>
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
                                        Transfers in Toronto
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10">
                                    Stress-free luxury transportation with real-time flight tracking and professional chauffeurs
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link
                                        to="/contact#contact-form"
                                        className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-secondary hover:bg-secondary-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        aria-label="Book Airport Transfer Now"
                                    >
                                        Book Your Ride
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <button
                                        onClick={scrollToRates}
                                        className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:bg-opacity-10 border-white border-opacity-50 transition-all duration-300 transform hover:-translate-y-1"
                                        aria-label="View Rates"
                                    >
                                        View Pricing
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Airport Cards Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16 mt-6">
                        {/* Pearson Airport Card */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="h-48 bg-blue-50 relative overflow-hidden">
                                <img
                                    src='/pearson.png'
                                    alt='Pearson Airport'
                                    className="w-full h-full object-cover object-center"
                                    style={{ objectPosition: 'center 30%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">Pearson Airport (YYZ)</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">25-35 minutes from downtown Toronto</p>
                                <p className="text-primary font-medium text-lg">From $90</p>
                            </div>
                        </div>

                        {/* Billy Bishop Airport Card */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="h-48 bg-green-50 relative overflow-hidden">
                                <img
                                    src='/BillyBishop.png'
                                    alt='Billy Bishop Airport'
                                    className="w-full h-full object-cover object-center"
                                    style={{ objectPosition: 'center 30%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">Billy Bishop (YTZ)</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">10 minutes from downtown Toronto</p>
                                <p className="text-primary font-medium text-lg">From $75</p>
                            </div>
                        </div>

                        {/* Hamilton Airport Card */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="h-48 bg-purple-50 relative overflow-hidden">
                                <img
                                    src='/Hamilton.png'
                                    alt='Hamilton Airport (YHM)'
                                    className="w-full h-full object-cover object-center"
                                    style={{ objectPosition: 'center 30%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">Hamilton (YHM)</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">45-60 minutes from Toronto</p>
                                <p className="text-primary font-medium text-lg">From $150</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Limo4All</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Flight Tracking",
                                    desc: "Real-time monitoring for perfect timing",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                },
                                {
                                    title: "Meet & Greet",
                                    desc: "Personalized arrivals experience",
                                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                },
                                {
                                    title: "24/7 Service",
                                    desc: "Available for all flight times",
                                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                },
                                {
                                    title: "Luxury Fleet",
                                    desc: "Sedans, SUVs, and limousines",
                                    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                },
                                {
                                    title: "Complimentary Amenities",
                                    desc: "WiFi, water, phone chargers",
                                    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                },
                                {
                                    title: "Corporate Accounts",
                                    desc: "Detailed billing available",
                                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rates Section */}
                    <div id="rates" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2">Pearson (YYZ)</h3>
                                    <p className="text-4xl font-bold text-primary mb-4">$90+</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Downtown Toronto</li>
                                        <li>Mississauga</li>
                                        <li>Brampton</li>
                                    </ul>
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2">Billy Bishop (YTZ)</h3>
                                    <p className="text-4xl font-bold text-primary mb-4">$75+</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Downtown Toronto</li>
                                        <li>Midtown</li>
                                        <li>Etobicoke</li>
                                    </ul>
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2">Hamilton (YHM)</h3>
                                    <p className="text-4xl font-bold text-primary mb-4">$150+</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Downtown Toronto</li>
                                        <li>Oakville</li>
                                        <li>Burlington</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
                                <p className="text-gray-600">All prices include GST and gratuity. Contact us for corporate rates.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready for Your Luxury Transfer?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Experience the Limo4All difference with our premium airport transportation service.
                        </p>
                        <Link
                            to="/contact#contact-form"
                            className="inline-block bg-primary hover:bg-primary-700 text-white font-bold py-4 px-12 rounded-full transition-colors duration-300 text-lg shadow-lg"
                            aria-label="Book Your Airport Transfer Now"
                        >
                            Book Now
                        </Link>
                        <p className="mt-4 text-gray-600">Serving Toronto, Hamilton, and surrounding areas</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AirportTransportation;