const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Corporate Client",
    content:
      "The service was impeccable. The driver was professional and arrived 10 minutes early. Will definitely use again for our executives.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wedding Client",
    content:
      "Made our wedding day transportation seamless. The stretch limo was pristine and the driver went above and beyond.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Airport Transfer",
    content:
      "Perfect for my business trips. Always reliable and the WiFi in the car helps me stay productive.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-secondary text-primary-dark rounded-full tracking-wider">
            CLIENT TESTIMONIALS
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Trusted Luxury Transportation Experiences
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Rated 4.8/5 stars by our corporate and private clients in Toronto
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-primary-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col h-full"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* ✅ Item reviewed: Product (now includes review + aggregateRating inside) */}
              <div
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/Product"
                className="sr-only"
              >
                <meta
                  itemProp="name"
                  content={
                    testimonial.id === 1
                      ? "Executive Stretch Limousine"
                      : testimonial.id === 2
                        ? "Luxury Party Limousine"
                        : "Luxury Sedan"
                  }
                />
                <meta itemProp="description" content="Premium chauffeur-driven vehicle by Limo4All." />

                {/* ✅ Add aggregateRating (for validation) */}
                <div
                  itemProp="aggregateRating"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="reviewCount" content="1" />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                </div>

                {/* ✅ Add single review (for validation) */}
                <div itemProp="review" itemScope itemType="https://schema.org/Review">
                  <meta itemProp="reviewBody" content={testimonial.content} />
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                  </div>
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content={testimonial.name} />
                  </div>
                </div>

                {/* Brand Info */}
                <div
                  itemProp="brand"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <meta itemProp="name" content="Limo4All" />
                  <meta itemProp="telephone" content="+1-647-123-4567" />
                  <meta itemProp="priceRange" content="$$" />
                  <meta itemProp="image" content="https://www.limo4all.ca/logo.png" />
                  <div
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <meta itemProp="streetAddress" content="250 Front Street W" />
                    <meta itemProp="addressLocality" content="Toronto" />
                    <meta itemProp="addressRegion" content="ON" />
                    <meta itemProp="postalCode" content="M5V 3G5" />
                    <meta itemProp="addressCountry" content="CA" />
                  </div>
                </div>
              </div>

              {/* Existing visual review content */}
              <div
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
                className="flex mb-5"
              >
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-secondary" : "text-gray-600"
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-6 relative flex-grow">
                <div className="absolute -top-4 -left-4 text-5xl text-secondary opacity-20 font-serif">
                  "
                </div>
                <p
                  className="relative z-10 text-base pl-4 italic"
                  itemProp="reviewBody"
                >
                  "{testimonial.content}"
                </p>
              </blockquote>

              <div
                className="border-t border-gray-700 pt-5 mt-auto"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name" className="font-bold">
                  {testimonial.name}
                </span>
                <span className="text-gray-400 text-sm block">
                  {testimonial.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;