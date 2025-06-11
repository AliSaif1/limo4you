// src/components/Fleet/VehicleFeature.js
import React from 'react';

const VehicleFeature = ({ feature }) => (
  <li className="flex items-center mb-2">
    <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    {feature}
  </li>
);

export default VehicleFeature;