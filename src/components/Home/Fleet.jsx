const vehicles = [
  {
    id: 1,
    name: "Executive Sedan",
    image: "/sedan.jpg",
    capacity: "3 passengers",
    features: ["WiFi", "Bottled water", "Phone chargers"],
    price: "$85/hour",
  },
  {
    id: 2,
    name: "Stretch Limousine",
    image: "/limo.jpg",
    capacity: "8 passengers",
    features: ["LED lighting", "Premium sound", "Mini bar"],
    price: "$120/hour",
  },
  {
    id: 3,
    name: "Luxury SUV",
    image: "/suv.jpg",
    capacity: "6 passengers",
    features: ["Spacious interior", "Climate control", "Privacy partition"],
    price: "$95/hour",
  },
];

const Fleet = () => {
  return (
    <section className="py-16 bg-background mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Our Luxury Fleet</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Choose from our premium selection of vehicles to match your style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                <p className="text-secondary mb-4">{vehicle.capacity}</p>
                <ul className="mb-4 space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-text-secondary">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{vehicle.price}</span>
                  <button className="text-accent hover:text-accent-light font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;