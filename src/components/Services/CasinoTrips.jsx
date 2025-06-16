import { Link } from 'react-router-dom';

const CasinoTrips = () => {
    return (
        <section className="py-16 bg-white mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Casino Trips Transportation
                    </h1>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Luxury round-trip transportation to your favorite gaming destinations.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg mx-auto mb-12">
                        <p>Enjoy a stress-free casino experience with our premium transportation service. We'll handle the driving while you relax in comfort. Available for all major gaming destinations with options for individual or group transportation.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Round-trip service</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Flexible scheduling</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Complimentary amenities</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Group discounts</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">VIP casino drop-off</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-primary hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                        >
                            Book Casino Trip Transportation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasinoTrips;