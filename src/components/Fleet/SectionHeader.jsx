// src/components/Fleet/SectionHeader.js
import React from 'react';
import { SECTION_TITLE } from './types';

const SectionHeader = () => (
  <div className="text-center mb-16">
    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
      {SECTION_TITLE.tagline}
    </span>
    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
      {SECTION_TITLE.heading.split(SECTION_TITLE.highlightedText)[0]}
      <span className="text-secondary">{SECTION_TITLE.highlightedText}</span>
    </h2>
    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
      {SECTION_TITLE.description}
    </p>
  </div>
);

export default SectionHeader;