// src/components/Fleet/types.js
export const FLEET = [
  {
    id: 'sedan-01',
    name: 'Executive Sedan',
    category: 'Business Class',
    description: 'Perfect for corporate travel with premium comfort and privacy',
    features: ['WiFi', 'Charging ports', 'Climate control', 'Leather seats'],
    image: '/images/sedan.jpg',
    priceRange: '$$',
    passengers: 3
  },
  {
    id: 'suv-01',
    name: 'Luxury SUV',
    category: 'Premium Class',
    description: 'Spacious and powerful for groups or family transportation',
    features: ['Ample legroom', 'Entertainment system', 'Privacy partition', 'Refreshments'],
    image: '/images/suv.jpg',
    priceRange: '$$$',
    passengers: 6
  },
  {
    id: 'limo-01',
    name: 'Stretch Limousine',
    category: 'Luxury Class',
    description: 'The ultimate in luxury transportation for special occasions',
    features: ['LED mood lighting', 'Premium sound system', 'Minibar', 'Sunroof'],
    image: '/images/limo.jpg',
    priceRange: '$$$$',
    passengers: 10
  },
  {
    id: 'van-01',
    name: 'Executive Van',
    category: 'Group Transport',
    description: 'Comfortable transportation for larger corporate groups',
    features: ['Conference seating', 'Work tables', 'Onboard WiFi', 'Storage space'],
    image: '/images/van.jpg',
    priceRange: '$$$',
    passengers: 12
  }
];

export const SECTION_TITLE = {
  tagline: 'Our Fleet',
  heading: 'Premium Vehicle Selection',
  highlightedText: 'Selection',
  description: 'Experience luxury and comfort with our meticulously maintained vehicles'
};