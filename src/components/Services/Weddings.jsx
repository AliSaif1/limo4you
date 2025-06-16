import { Link } from 'react-router-dom';

const Weddings = () => {
    return (
        <section className="py-16 bg-white mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Wedding Transportation
                    </h1>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Elegant transportation to make your special day unforgettable.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg mx-auto mb-12">
                        <p>Our wedding packages include beautifully decorated vehicles, red carpet service, and professional coordination with your wedding timeline. Choose from our luxury fleet including classic limousines, modern SUVs, or executive sedans.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Decorated vehicles</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Red carpet service</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Professional coordination</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Bridal party packages</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Flexible scheduling</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-primary hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                        >
                            Book Wedding Transportation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weddings;