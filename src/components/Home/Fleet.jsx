import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LIMOUSINES = [
  {
    id: 1,
    name: "Executive Stretch Limousine",
    image: "https://www.limo4all.ca/Executive-Limo.png",
    capacity: "6 passengers",
    maxPassengers: 6,
    features: [
      "Plush leather seating",
      "Premium sound system",
      "LED mood lighting",
      "Champagne service"
    ],
    note: "Minimum 3 hour booking",
    availability: "InStock",
    url: "https://www.limo4all.ca/fleet#executive-stretch",
    priceValidUntil: "2025-12-31"
  },
  {
    id: 2,
    name: "Luxury Party Limousine",
    image: "https://www.limo4all.ca/Party-Limo.png",
    capacity: "12 passengers",
    maxPassengers: 12,
    features: [
      "Extended luxury interior",
      "State-of-the-art entertainment",
      "Mini bar setup",
      "Privacy partitions"
    ],
    note: "Ideal for weddings and celebrations",
    availability: "InStock",
    url: "https://www.limo4all.ca/fleet#party-limo",
    priceValidUntil: "2025-12-31"
  },
  {
    id: 3,
    name: "Chevrolet Suburban",
    image: "./Chevrolet-Suburban.png",
    capacity: "6 passengers",
    maxPassengers: 6,
    features: [
      "Spacious SUV luxury",
      "Premium leather seating",
      "Advanced climate control",
      "Ample cargo space"
    ],
    note: "Great for airport transfers",
    availability: "https://schema.org/InStock",
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 31,
      bestRating: 5,
      worstRating: 1
    }
  },
];

const Fleet = () => {
  const navigate = useNavigate();
  const handleViewFleet = () => navigate('/fleet');

  return (
    <section
      className="py-20 bg-background mt-6"
      id="fleet"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <meta itemProp="name" content="Limo4All Luxury Fleet Collection" />
      <meta itemProp="description" content="Premium fleet of luxury limousines and executive vehicles in Toronto & Hamilton" />
      <link itemProp="url" content="https://www.limo4all.ca/fleet" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block bg-primary text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Premium Fleet Selection
          </span>
          <h1 className="text-4xl font-bold text-text-primary mb-4 font-display">
            Our <span className="text-secondary">Luxury</span> Vehicle Collection
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary mx-auto" itemProp="description">
            Experience the pinnacle of luxury transportation with our exceptional fleet of limousines and executive vehicles in Toronto & Hamilton.
            Each vehicle is meticulously maintained and serviced to ensure your complete satisfaction and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {LIMOUSINES.map((limo) => (
            <div
              key={limo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={limo.image}
                  alt={`${limo.name} luxury vehicle service in Toronto & Hamilton`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {limo.capacity}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-3 font-display" itemProp="name">
                  {limo.name}
                </h2>
                <div itemProp="description">
                  <ul className="mb-6 space-y-3">
                    {limo.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <div itemScope itemType="https://schema.org/Offer" itemProp="offers">
                      <link itemProp="availability" href={`https://schema.org/${limo.availability}`} />
                      <link itemProp="url" content={limo.url} />
                      {limo.note && (
                        <span className="block text-xs text-text-secondary mt-1" itemProp="description">
                          {limo.note}
                        </span>
                      )}
                    </div>
                    <Link
                      to={"/contact#contact-form"}
                      className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                      aria-label={`Reserve ${limo.name}`}
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleViewFleet}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            aria-label="View complete fleet details"
          >
            View Complete Fleet Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;