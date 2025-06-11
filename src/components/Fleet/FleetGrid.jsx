// src/components/Fleet/FleetGrid.js
import React from 'react';
import VehicleCard from './VehicleCard';
import { FLEET } from './types';

const FleetGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {FLEET.map((vehicle) => (
      <VehicleCard key={vehicle.id} {...vehicle} />
    ))}
  </div>
);

export default FleetGrid;