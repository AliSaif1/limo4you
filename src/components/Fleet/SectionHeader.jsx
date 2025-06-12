// src/components/Services/SectionHeader.js
import React from 'react';
import { SECTION_TITLE } from './types';

const SectionHeader = () => (
  <div className="text-center mb-20">
    <span className="inline-block bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
      {SECTION_TITLE.tagline}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
      {SECTION_TITLE.heading.split(SECTION_TITLE.highlightedText)[0]}
      <span className="text-gold-600">{SECTION_TITLE.highlightedText}</span>
    </h2>
    <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      {SECTION_TITLE.description}
    </p>
  </div>
);

export default SectionHeader;