import { Car, ShieldCheck, Star, Users, Clock, MapPin } from 'lucide-react';

function About() {
  return (
    <div className="bg-background min-h-screen mt-20">
      {/* Hero Section */}
      <div className="bg-primary py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          About Limo4You
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Luxury transportation redefined. Experience the pinnacle of comfort, style, and reliability.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              Founded in 2010, Limo4You began with a single luxury vehicle and a vision to transform
              transportation in the region. What started as a small family business has grown into
              the premier luxury chauffeur service with a fleet of over 50 vehicles.
            </p>
            <p className="text-lg text-text-secondary mb-6">
              Our founder, Michael Reynolds, believed that every journey should be as memorable as
              the destination. This philosophy continues to drive our commitment to excellence in
              every aspect of our service.
            </p>
            <div className="bg-accent-light p-4 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-medium">
                "We don't just drive you places - we deliver experiences that leave lasting impressions."
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Limo4You founder with first vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-primary-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300">
            These principles guide every decision we make and every service we provide
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star className="w-10 h-10 text-secondary" />,
              title: "Excellence",
              description: "We pursue perfection in every detail, from vehicle maintenance to client interactions."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
              title: "Integrity",
              description: "Honest pricing, transparent policies, and ethical business practices."
            },
            {
              icon: <Users className="w-10 h-10 text-secondary" />,
              title: "Customer Focus",
              description: "Your satisfaction is our ultimate measure of success."
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary text-center mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">
            Our Luxury Fleet
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meticulously maintained vehicles equipped with premium amenities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Executive Sedans",
              description: "Perfect for business travel or airport transfers",
              image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
              name: "Premium SUVs",
              description: "Spacious comfort for groups up to 6 passengers",
              image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
              name: "Stretch Limousines",
              description: "Make your special occasion unforgettable",
              image: "https://images.unsplash.com/photo-1601584115227-04b3a8a9a3e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
          ].map((vehicle, index) => (
            <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-1">{vehicle.name}</h3>
                  <p className="text-gray-300">{vehicle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-accent hover:bg-accent-light text-white font-medium py-3 px-8 rounded-lg transition">
            View Full Fleet
          </button>
        </div>
      </div>

      {/* Service Area */}
      <div className="bg-primary-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-12 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Limo4You service area map"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Our Service Area
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Metropolitan Coverage</h3>
                    <p className="text-gray-300">
                      Serving all major airports, hotels, and venues within a 100-mile radius
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">24/7 Availability</h3>
                    <p className="text-gray-300">
                      Round-the-clock service for early flights or late-night events
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Car className="w-6 h-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Special Events</h3>
                    <p className="text-gray-300">
                      Weddings, proms, corporate events - we handle all special occasions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold text-primary mb-6">
          Ready to Experience Luxury Travel?
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          Book your ride today and discover why Limo4You is the preferred choice for discerning clients.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-secondary hover:bg-secondary-light text-primary font-medium py-3 px-8 rounded-lg transition">
            Book Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-lg border border-gray-300 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;