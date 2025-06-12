import { useNavigate } from 'react-router-dom';

const Fleet = () => {
  const navigate = useNavigate();
  const limousines = [
    {
      id: 1,
      name: "Executive Stretch Limousine",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      capacity: "8-10 passengers",
      features: [
        "Plush leather seating", 
        "Premium sound system",
        "LED mood lighting",
        "Champagne service"
      ],
      price: "$150/hour",
      note: "Minimum 3 hour booking"
    },
    {
      id: 2,
      name: "Luxury Party Limousine",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      capacity: "12-14 passengers",
      features: [
        "Extended luxury interior",
        "State-of-the-art entertainment",
        "Mini bar setup",
        "Privacy partitions"
      ],
      price: "$200/hour",
      note: "Ideal for weddings and celebrations"
    },
    {
      id: 3,
      name: "Premium Sedan Limousine",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      capacity: "3 passengers",
      features: [
        "Executive class comfort", 
        "WiFi connectivity",
        "Workstation setup",
        "Discreet professional service"
      ],
      price: "$120/hour",
      note: "Perfect for corporate travel"
    }
  ];

  const handleViewFleet = () => {
    navigate('/fleet');
  };

  return (
    <section className="py-20 bg-gray-50 mt-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Exclusive Fleet
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our <span className="text-gold-600">Limousine</span> Collection
          </h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the pinnacle of luxury transportation with our exceptional fleet of limousines. 
            Each vehicle is meticulously maintained and serviced to ensure your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {limousines.map((limo) => (
            <div key={limo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={limo.image} 
                  alt={limo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {limo.capacity}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{limo.name}</h3>
                <ul className="mb-6 space-y-3">
                  {limo.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-gold-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-2xl font-bold text-gray-900">{limo.price}</span>
                      {limo.note && <span className="block text-xs text-gray-500 mt-1">{limo.note}</span>}
                    </div>
                    <button className="bg-black hover:bg-gold-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleViewFleet}
            className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Complete Fleet Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;