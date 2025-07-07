import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LIMOUSINES = [
  {
    id: 1,
    name: "Executive Stretch Limousine",
    image: "/Executive-Limo.png",
    capacity: "6 passengers",
    maxPassengers: 6,
    features: [
      "Plush leather seating",
      "Premium sound system",
      "LED mood lighting",
      "Champagne service"
    ],
    note: "Minimum 3 hour booking",
    availability: "https://schema.org/InStock",
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 42,
      bestRating: 5,
      worstRating: 1
    }
  },
  {
    id: 2,
    name: "Luxury Party Limousine",
    image: "./Party-Limo.png",
    capacity: "12 passengers",
    maxPassengers: 12,
    features: [
      "Extended luxury interior",
      "State-of-the-art entertainment",
      "Mini bar setup",
      "Privacy partitions"
    ],
    note: "Ideal for weddings and celebrations",
    availability: "https://schema.org/InStock",
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 36,
      bestRating: 5,
      worstRating: 1
    }
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
  {
    id: 4,
    name: "GMC Yukon",
    image: "./GMC-Yukon.png",
    capacity: "6 passengers",
    maxPassengers: 6,
    features: [
      "Premium Denali trim",
      "Heated and ventilated seats",
      "High-end infotainment",
      "Quiet cabin experience"
    ],
    note: "Popular for family events",
    availability: "https://schema.org/InStock",
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 25,
      bestRating: 5,
      worstRating: 1
    }
  },
  {
    id: 5,
    name: "Cadillac Escalade",
    image: "./Escalade.png",
    capacity: "6 passengers",
    maxPassengers: 6,
    features: [
      "Ultimate luxury SUV",
      "Handcrafted interior",
      "Premium entertainment system",
      "Massage seating options"
    ],
    note: "Executive class transportation",
    availability: "https://schema.org/InStock",
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 39,
      bestRating: 5,
      worstRating: 1
    }
  },
  // {
  //   id: 6,
  //   name: "Luxury Sedan",
  //   image: "./Sedan.png",
  //   capacity: "3 passengers",
  //   maxPassengers: 3,
  //   features: [
  //     "Executive class comfort",
  //     "WiFi connectivity",
  //     "Workstation setup",
  //     "Discreet professional service"
  //   ],
  //   note: "Perfect for corporate travel",
  //   availability: "https://schema.org/InStock",
  //   aggregateRating: {
  //     ratingValue: 4.8,
  //     reviewCount: 28,
  //     bestRating: 5,
  //     worstRating: 1
  //   }
  // }
];

const Fleet = () => {

  return (
    <>
      <Helmet>
        <title>Our Fleet | Limo4All</title>
        <link rel="canonical" href="https://www.limo4all.ca/fleet" />
        <meta
          name="description"
          content="Explore our premium limousine fleet in Toronto & Hamilton, featuring luxury sedans, SUVs, and party limos."
        />
      </Helmet>

      <section className="py-20 bg-background mt-20" id="fleet" itemScope itemType="https://schema.org/ProductCollection">
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
              <article
                key={limo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                itemScope
                itemType="http://schema.org/Product"
              >
                {/* Executive Stretch Limousine */}
                <meta itemProp="mpn" content="LIMO4ALL-MPN-1" />
                <meta itemProp="name" content="Executive Stretch Limousine" />
                <meta itemProp="image" content="https://www.limo4all.ca/Executive-Limo.png" />
                <meta itemProp="description" content="Plush leather seating, Premium sound system, LED mood lighting, Champagne service" />

                <div itemProp="brand" itemScope itemType="http://schema.org/Brand" className="sr-only">
                  <meta itemProp="name" content="Limo4All" />
                </div>

                <div itemProp="offers" itemScope itemType="http://schema.org/Offer" className="sr-only">
                  <meta itemProp="price" content="150.00" />
                  <meta itemProp="priceCurrency" content="USD" />
                  <link itemProp="availability" href="https://schema.org/InStock" />
                  <meta itemProp="url" content="https://www.limo4all.ca/#fleet-1" />
                  <meta itemProp="priceValidUntil" content="2025-12-31" />
                  <meta itemProp="shippingDetails" content="https://schema.org/PickupInStore" />
                </div>

                <div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating" className="sr-only">
                  <meta itemProp="ratingValue" content="4.8" />
                  <meta itemProp="reviewCount" content="42" />
                  <meta itemProp="bestRating" content="5.0" />
                  <meta itemProp="worstRating" content="1.0" />
                </div>

                <div itemProp="review" itemScope itemType="http://schema.org/Review" className="sr-only">
                  <meta itemProp="reviewBody" content="Clients have rated this vehicle highly for comfort and luxury features." />
                  <div itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                    <meta itemProp="ratingValue" content="4.8" />
                    <meta itemProp="bestRating" content="5.0" />
                    <meta itemProp="worstRating" content="1.0" />
                  </div>
                  <div itemProp="author" itemScope itemType="http://schema.org/Person">
                    <meta itemProp="name" content="Verified Customer" />
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/ProductCollection" className="sr-only">
                  <meta itemProp="name" content="Limo4All Luxury Fleet Collection" />
                  <link itemProp="url" content="https://www.limo4all.ca/#fleet" />

                  {/* Collection-level metadata */}
                  <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
                    <meta itemProp="name" content="Limo4All" />
                  </div>

                  <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Limo4All" />
                    <meta itemProp="telephone" content="+16471234567" />
                    <meta itemProp="address" content="123 Main St, Toronto, ON, Canada" />
                    <meta itemProp="priceRange" content="$$$" />
                  </div>

                  {/* Individual products */}
                  <div itemProp="hasProduct" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="mpn" content="LIMO4ALL-MPN-2" />
                    <meta itemProp="name" content="Luxury Party Limousine" />
                    <meta itemProp="image" content="https://www.limo4all.ca/Party-Limo.png" />
                    <meta itemProp="description" content="Extended luxury interior, State-of-the-art entertainment, Mini bar setup, Privacy partitions" />

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="price" content="200.00" />
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="https://schema.org/InStock" />
                      <meta itemProp="url" content="https://www.limo4all.ca/#fleet-2" />
                      <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <meta itemProp="ratingValue" content="4.9" />
                      <meta itemProp="reviewCount" content="36" />
                    </div>
                  </div>

                  <div itemProp="hasProduct" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="mpn" content="LIMO4ALL-MPN-3" />
                    <meta itemProp="name" content="Luxury Sedan" />
                    <meta itemProp="image" content="https://www.limo4all.ca/Sedan.png" />
                    <meta itemProp="description" content="Executive class comfort, WiFi connectivity, Workstation setup, Discreet professional service" />

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="price" content="120.00" />
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="https://schema.org/InStock" />
                      <meta itemProp="url" content="https://www.limo4all.ca/#fleet-3" />
                      <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <meta itemProp="ratingValue" content="4.8" />
                      <meta itemProp="reviewCount" content="28" />
                    </div>
                  </div>

                  <div itemProp="hasProduct" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="mpn" content="LIMO4ALL-MPN-4" />
                    <meta itemProp="name" content="Chevrolet Suburban" />
                    <meta itemProp="image" content="https://www.limo4all.ca/Chevrolet-Suburban.png" />
                    <meta itemProp="description" content="Spacious SUV luxury, Premium leather seating, Advanced climate control, Ample cargo space" />

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="price" content="130.00" />
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="https://schema.org/InStock" />
                      <meta itemProp="url" content="https://www.limo4all.ca/#fleet-4" />
                      <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <meta itemProp="ratingValue" content="4.9" />
                      <meta itemProp="reviewCount" content="31" />
                    </div>
                  </div>

                  <div itemProp="hasProduct" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="mpn" content="LIMO4ALL-MPN-5" />
                    <meta itemProp="name" content="GMC Yukon" />
                    <meta itemProp="image" content="https://www.limo4all.ca/GMC-Yukon.png" />
                    <meta itemProp="description" content="Premium Denali trim, Heated and ventilated seats, High-end infotainment, Quiet cabin experience" />

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="price" content="140.00" />
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="https://schema.org/InStock" />
                      <meta itemProp="url" content="https://www.limo4all.ca/#fleet-5" />
                      <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <meta itemProp="ratingValue" content="4.7" />
                      <meta itemProp="reviewCount" content="25" />
                    </div>
                  </div>

                  <div itemProp="hasProduct" itemScope itemType="https://schema.org/Product">
                    <meta itemProp="mpn" content="LIMO4ALL-MPN-6" />
                    <meta itemProp="name" content="Cadillac Escalade" />
                    <meta itemProp="image" content="https://www.limo4all.ca/Escalade.png" />
                    <meta itemProp="description" content="Ultimate luxury SUV, Handcrafted interior, Premium entertainment system, Massage seating options" />

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="price" content="160.00" />
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="https://schema.org/InStock" />
                      <meta itemProp="url" content="https://www.limo4all.ca/#fleet-6" />
                      <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                      <meta itemProp="ratingValue" content="4.7" />
                      <meta itemProp="reviewCount" content="39" />
                    </div>
                  </div>
                </div>

                {/* Visible Content */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={limo.image}
                    alt={`${limo.name} luxury vehicle service in Toronto & Hamilton`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                      {limo.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-3 font-display">
                    {limo.name}
                  </h2>
                  <ul className="mb-6 space-y-3">
                    {limo.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-text-secondary">
                        <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-2xl font-bold text-text-primary">
                          {limo.price}
                        </span>
                        {limo.note && (
                          <span className="block text-xs text-text-secondary mt-1">
                            {limo.note}
                          </span>
                        )}
                      </div>
                      <Link
                        to={'/contact#contact-form'}
                        className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                        aria-label={`Reserve ${limo.name}`}
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;