import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingCompare from '../components/pricing/PricingCompare';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingCTA from '../components/pricing/PricingCTA';

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingCompare />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
