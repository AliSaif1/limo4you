// src/components/Fleet/VehicleCard.js
import React from 'react';
import VehicleFeature from './VehicleFeature';

const VehicleCard = ({ 
  name, 
  category, 
  description, 
  features, 
  image, 
  priceRange, 
  passengers 
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="font-display text-xl font-bold text-primary">{name}</h3>
        </div>
        <span className="bg-accent/10 text-accent text-sm px-2 py-1 rounded-full">
          {priceRange}
        </span>
      </div>
      
      <p className="text-text-secondary mb-4">{description}</p>
      
      <div className="border-t border-gray-100 pt-4 mb-4">
        <h4 className="font-semibold text-primary mb-3">Features</h4>
        <ul className="text-sm text-text-secondary">
          {features.map((feature, index) => (
            <VehicleFeature key={`feature-${index}`} feature={feature} />
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center text-text-secondary">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {passengers} passengers
        </div>
        <button className="text-accent font-medium hover:text-accent-light transition-colors">
          View details
          <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default VehicleCard;