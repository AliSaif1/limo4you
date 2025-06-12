// src/components/Fleet/VehicleCard.js
import React from 'react';
import VehicleFeature from './VehicleFeature';

// Sample image URLs that will actually display
const VEHICLE_IMAGES = {
  sedan: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  suv: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  limo: 'https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  van: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

const getVehicleImage = (category) => {
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('sedan')) return VEHICLE_IMAGES.sedan;
  if (lowerCategory.includes('suv')) return VEHICLE_IMAGES.suv;
  if (lowerCategory.includes('limo')) return VEHICLE_IMAGES.limo;
  return VEHICLE_IMAGES.van;
};

const VehicleCard = ({
  name,
  category,
  description,
  features,
  priceRange,
  passengers
}) => {
  const imageUrl = getVehicleImage(category);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col border border-gray-100 hover:border-accent/20">
      {/* Image with gradient overlay */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={`${name} vehicle`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={192}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full mb-2 font-medium tracking-wide">
              {category}
            </span>
            <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">
              {name}
            </h3>
          </div>
          <span className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium flex items-center">
            {Array.from({ length: priceRange.length }).map((_, i) => (
              <span key={i}>$</span>
            ))}
          </span>
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Features section */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Key Features
          </h4>
          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600">
            {features.map((feature, index) => (
              <VehicleFeature key={`feature-${index}`} feature={feature} />
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {passengers} {passengers > 1 ? 'passengers' : 'passenger'}
          </div>
          <button className="text-accent font-medium hover:text-accent-dark transition-colors flex items-center group">
            <span className="mr-1">View details</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;