import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Weddings = () => {
    return (
        <>
            <Helmet>
                <title>Luxury Wedding Transportation in Toronto & Hamilton | Limo4All</title>
                <meta name="description" content="Make your wedding day unforgettable with our premium bridal transportation services. Classic limousines, luxury SUVs, and professional coordination for your special day." />
                <meta property="og:title" content="Premium Wedding Transportation | Limo4All" />
                <meta property="og:description" content="Elegant wedding transportation services in Toronto and Hamilton with beautifully decorated vehicles and red carpet service." />
                <meta property="og:url" content="https://www.limo4all.ca/services/weddings" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.limo4all.ca/services/weddings" />
            </Helmet>

            {/* Microdata Structured Data */}
            <div itemScope itemType="http://schema.org/Service" className="sr-only">
                <meta itemProp="name" content="Premium Wedding Transportation in Toronto & Hamilton" />
                <meta itemProp="description" content="Luxury bridal transportation with decorated vehicles, red carpet service, and professional coordination for weddings in the GTA." />
                <link itemProp="url" content="https://www.limo4all.ca/services/weddings" />
                <meta itemProp="serviceType" content="Wedding Transportation" />

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
                    <meta itemProp="name" content="Wedding Transportation Packages" />
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Bridal Limousine Package" />
                            <meta itemProp="description" content="Classic stretch limousine with decorations and red carpet service" />
                        </div>
                    </div>
                    <div itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                        <div itemProp="itemOffered" itemScope itemType="http://schema.org/Service">
                            <meta itemProp="name" content="Wedding Party SUV Package" />
                            <meta itemProp="description" content="Luxury SUVs for bridal party transportation" />
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

            {/* Hero Section */}
            <section className="relative bg-gray-100 pt-28 pb-20 mt-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Premium Wedding Service
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Luxury <span className="text-primary">Wedding Transportation</span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Make your special day unforgettable with our elegant bridal vehicles and professional service
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

            {/* Main Content */}
            <section className="py-16 bg-white mt-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Benefits Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Your Perfect Wedding Transportation
                            </h2>
                            <div className="w-16 h-1 bg-primary mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                                    title: "Decorated Vehicles",
                                    description: "Beautifully adorned limousines and luxury cars for your special day"
                                },
                                {
                                    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                                    title: "Red Carpet Service",
                                    description: "Elegant arrivals with our signature red carpet treatment"
                                },
                                {
                                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                    title: "Timely Coordination",
                                    description: "Professional coordination with your wedding timeline"
                                },
                                {
                                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    title: "Bridal Party Packages",
                                    description: "Transportation solutions for the entire wedding party"
                                },
                                {
                                    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                    title: "Premium Fleet",
                                    description: "Classic limousines, modern SUVs, and executive sedans"
                                },
                                {
                                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                    title: "24/7 Support",
                                    description: "Dedicated wedding coordinator available throughout your planning"
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

                    {/* Testimonials */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Loved by Toronto Couples
                            </h2>
                            <div className="w-16 h-1 bg-primary mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    quote: "Our wedding limo was absolutely stunning! The red carpet service made us feel like royalty on our special day.",
                                    author: "Jessica & Michael, Married June 2023",
                                    rating: 5
                                },
                                {
                                    quote: "The coordination was flawless - our bridal party arrived right on schedule and the vehicles were beautifully decorated.",
                                    author: "Sarah & David, Married August 2023",
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
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Wedding Transportation?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Contact us today to discuss your wedding transportation needs and receive a customized quote.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/contact#contact-form"
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

export default Weddings;