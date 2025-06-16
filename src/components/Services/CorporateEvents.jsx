import { Link } from 'react-router-dom';

const CorporateEvents = () => {
    return (
        <section className="py-16 bg-white mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Corporate Events Transportation
                    </h1>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Executive transportation for business meetings, conferences, and corporate functions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg mx-auto mb-12">
                        <p>Impress clients with our discreet corporate transportation service. Our professional chauffeurs understand business etiquette and provide reliable service with vehicles equipped with work amenities including WiFi, charging ports, and privacy partitions.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Discreet professional service</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Business-class vehicles</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Onboard work amenities</span>
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
                                <span className="text-gray-700">Multi-stop itineraries</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-primary hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                        >
                            Book Corporate Transportation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateEvents;