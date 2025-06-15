import { Car, ShieldCheck, Star, Users, Clock, MapPin, ChevronRight } from 'lucide-react';

function About() {
  return (
    <div className="bg-white min-h-screen mt-20">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="./luxury-interior.png"
          alt="Luxury limousine interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-6 shadow-lg">
            Since 2010
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
            Redefining <span className="text-secondary">Luxury</span> Travel
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Where exceptional service meets uncompromising comfort
          </p>
        </div>
      </div>

      {/* Our Story - Modern Timeline Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
            <div className="space-y-12 pl-8 lg:pl-12">
              <div className="relative">
                <div className="absolute -left-12 -top-2 h-6 w-6 rounded-full bg-secondary border-4 border-white shadow-lg hidden lg:block"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Our <span className="text-primary">Journey</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2010 with a single Lincoln Town Car, Limo4All has grown into the region's premier luxury transportation provider through relentless focus on service excellence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-12 -top-2 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-lg hidden lg:block"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">The Vision</h3>
                <p className="text-gray-600">
                  Founder Michael Reynolds believed every journey should be as memorable as the destination. This philosophy continues to guide our commitment to creating exceptional experiences.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-12 -top-2 h-6 w-6 rounded-full bg-secondary border-4 border-white shadow-lg hidden lg:block"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Today</h3>
                <p className="text-gray-600">
                  With a fleet of 50+ luxury vehicles and a team of professional chauffeurs, we serve corporate clients, celebrities, and special events across the tri-state area.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1601584115227-04b3a8a9a3e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Limo4All founder with first vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end p-8">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
                <blockquote className="text-gray-800 italic">
                  "We don't just drive you places - we deliver experiences that leave lasting impressions."
                </blockquote>
                <p className="mt-2 font-medium text-primary">— Michael Reynolds, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - Card Grid */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 shadow-md">
              Our Promise
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              Core <span className="text-secondary">Values</span>
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-secondary" />,
                title: "Excellence",
                description: "We pursue perfection in every detail, from vehicle maintenance to client interactions."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
                title: "Integrity",
                description: "Honest pricing, transparent policies, and ethical business practices."
              },
              {
                icon: <Users className="w-8 h-8 text-secondary" />,
                title: "Client Focus",
                description: "Your satisfaction is our ultimate measure of success."
              },
              {
                icon: <Car className="w-8 h-8 text-secondary" />,
                title: "Reliability",
                description: "Flawless execution from booking to final destination."
              },
              {
                icon: <Clock className="w-8 h-8 text-secondary" />,
                title: "Punctuality",
                description: "We value your time as much as you do."
              },
              {
                icon: <MapPin className="w-8 h-8 text-secondary" />,
                title: "Local Expertise",
                description: "Decades of experience navigating the region's routes and venues."
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Showcase - Interactive Cards */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 shadow-md">
              Our Fleet
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              Luxury <span className="text-secondary">Vehicles</span>
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meticulously maintained and equipped with premium amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Executive Sedans",
                description: "Mercedes S-Class, BMW 7 Series, Audi A8",
                features: ["WiFi", "Privacy partition", "Workstation"],
                image: "./Sedan.png"
              },
              {
                name: "Premium SUVs",
                description: "Cadillac Escalade, Lincoln Navigator, Mercedes GLS",
                features: ["7-passenger", "Climate control", "Entertainment"],
                image: "./GMC-Yukon.png"
              },
              {
                name: "Stretch Limousines",
                description: "10-14 passenger luxury coaches",
                features: ["LED lighting", "Premium bar", "Entertainment"],
                image: "./Executive-Limo.png"
              },
            ].map((vehicle, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex flex-col justify-end p-8">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-white font-bold text-2xl mb-2 font-serif">{vehicle.name}</h3>
                    <p className="text-gray-300 mb-4">{vehicle.description}</p>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-200">
                          <ChevronRight className="w-4 h-4 text-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Explore Full Fleet
            </button>
          </div>
        </div>
      </div>

      {/* Service Area - Modern Split Layout - Mobile Friendly */}
      <div className="bg-gray-900 text-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 md:mb-6 shadow-md">
                Coverage Area
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-serif">
                Serving <span className="text-secondary">Your Region</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">Metropolitan Coverage</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Serving all major airports, hotels, and venues within a 100-mile radius including:
                    </p>
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 md:columns-2 md:gap-x-8">
                      {['Downtown', 'Financial District', 'Airport Zone', 'Theater District', 'Convention Center', 'University Area', 'Waterfront', 'Suburban Hubs'].map((area, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm md:text-base">
                          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-secondary mr-1 md:mr-2" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">24/7 Availability</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Round-the-clock service for early flights or late-night events with guaranteed on-time performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-secondary/30 md:border-2 order-1 lg:order-2">
              <img
                src="./metro-area.png"
                alt="Service area map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA - Elegant Centered Layout */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-6 shadow-md">
            Ready to Ride
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
            Experience the <span className="text-secondary">Limo4All</span> Difference
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            Book your luxury transportation today and travel with the confidence of professional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
              Book Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-primary font-medium py-3 px-8 rounded-lg border border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center">
              Contact Us
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;