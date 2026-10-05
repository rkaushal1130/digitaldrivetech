import React from 'react';
import TechnologiesHero from '../components/technologies/TechnologiesHero';
import TechnologiesGrid from '../components/technologies/TechnologiesGrid';
import TechnologiesWhy from '../components/technologies/TechnologiesWhy';
import TechnologiesProcess from '../components/technologies/TechnologiesProcess';
import TechnologiesCTA from '../components/technologies/TechnologiesCTA';

export default function Technologies() {
  return (
    <>
      <TechnologiesHero />
      <TechnologiesGrid />
      <TechnologiesWhy />
      <TechnologiesProcess />
      <TechnologiesCTA />
    </>
  );
}
