import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import WhyChooseServices from '../components/services/WhyChooseServices';
import ServicesProcess from '../components/services/ServicesProcess';
import TechStack from '../components/services/TechStack';
import ServicesCTA from '../components/services/ServicesCTA';

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseServices />
      <ServicesProcess />
      <TechStack />
      <ServicesCTA />
    </>
  );
}
