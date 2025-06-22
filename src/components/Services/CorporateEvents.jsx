import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CorporateEvents = () => {
    return (
        <>
            <Helmet>
                <title>Premium Corporate Transportation in Toronto | Limo4All</title>
                <meta name="description" content="Executive transportation for business meetings, conferences, and corporate functions. Professional chauffeurs with business-class amenities." />
                <meta property="og:title" content="Premium Corporate Transportation | Limo4All" />
                <meta property="og:description" content="Executive transportation for business meetings, conferences, and corporate functions in Toronto and Hamilton." />
                <meta property="og:url" content="https://www.limo4all.ca/services/corporate-events" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/corporate-events" />
            </Helmet>

            {/* Microdata Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Corporate Transportation in Toronto" />
                <meta itemProp="description" content="Executive transportation for business meetings, conferences, and corporate functions with professional chauffeurs and business-class amenities." />
                <link itemProp="url" content="https://www.limo4all.ca/services/corporate-events" />
                <meta itemProp="serviceType" content="Corporate Transportation" />

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
            </div>

            {/* Sticky Booking Button - Hidden on mobile, visible on lg screens */}
            <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
                <Link
                    to={'/contact#contact-form'}
                    className="bg-primary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full shadow-xl transition-all duration-300 flex items-center animate-bounce"
                    aria-label="Book Corporate Transportation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Book Now
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gray-100 pt-28 pb-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Premium Corporate Service
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Executive <span className="text-primary">Transportation</span> for Business
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Professional chauffeurs, premium vehicles, and discreet service for your corporate needs in Toronto
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to={'/contact#contact-form'}
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

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Benefits Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Why Choose Our Corporate Service
                            </h2>
                            <div className="w-16 h-1 bg-primary mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                    title: "Discretion Guaranteed",
                                    description: "Professional chauffeurs trained in corporate etiquette and confidentiality"
                                },
                                {
                                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                    title: "24/7 Availability",
                                    description: "Always available for early meetings or late-night arrivals"
                                },
                                {
                                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                    title: "Punctuality Promise",
                                    description: "On-time guarantee with real-time traffic monitoring"
                                },
                                {
                                    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                    title: "Premium Fleet",
                                    description: "Executive sedans, luxury SUVs, and stretch limousines"
                                },
                                {
                                    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                                    title: "Business Amenities",
                                    description: "WiFi, charging ports, privacy partitions, and bottled water"
                                },
                                {
                                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    title: "Corporate Accounts",
                                    description: "Detailed billing and volume discounts available"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-primary hover:-translate-y-1">
                                    <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                                    <p className="text-gray-600 text-center">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

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
                                        <Link
                                            to={'/contact#contact-form'}
                                            className="inline-block w-full text-center bg-primary hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
                                        >
                                            Book This Vehicle
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Trusted by Toronto's Leading Companies
                            </h2>
                            <div className="w-16 h-1 bg-primary mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    quote: "Limo4All has been our preferred transportation provider for corporate events. Their professionalism is unmatched.",
                                    author: "Sarah Johnson, VP at Financial Firm",
                                    rating: 5
                                },
                                {
                                    quote: "The discreet service and premium vehicles make all the difference when hosting important clients.",
                                    author: "Michael Chen, Director at Tech Company",
                                    rating: 5
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <blockquote className="text-lg italic text-gray-700 mb-4">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-900 rounded-xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Corporate Travel?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Contact us today to discuss your corporate transportation needs and receive a customized quote.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to={'/contact#contact-form'}
                                    className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                                >
                                    Book Now
                                </Link>
                                <Link
                                    to="tel:+16473131786"
                                    className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                                >
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CorporateEvents;