// src/components/Fleet/Fleet.js
import React from 'react';
import SectionHeader from '../components/Fleet/SectionHeader';
import FleetGrid from '../components/Fleet/FleetGrid';

const Fleet = () => {
  return (
    <section className="py-20 bg-background/50" id="fleet">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <FleetGrid />
      </div>
    </section>
  );
};

export default Fleet;