import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingCompare from '../components/pricing/PricingCompare';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingCTA from '../components/pricing/PricingCTA';

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/pricing"
        pageTitle="Digital Services & Plans - DigitalDriveTech"
        metaTitle="DigitalDriveTech Pricing | Digital Services in Mohali"
        metaDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) pricing for website, mobile app, software, e-commerce, and digital marketing services for businesses in Mohali and beyond."
        ogTitle="DigitalDriveTech Pricing | Digital Services in Mohali"
        ogDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) pricing for website, mobile app, software, e-commerce, and digital marketing services for businesses in Mohali and beyond."
        ogUrl="https://www.digitaldrivetech.com/pricing"
        ogImage="https://www.digitaldrivetech.com/images/PricingHero.webp"
        twitterTitle="DigitalDriveTech Pricing | Digital Services in Mohali"
        twitterDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) pricing for website, mobile app, software, e-commerce, and digital marketing services for businesses in Mohali and beyond."
        twitterImage="https://www.digitaldrivetech.com/images/PricingHero.webp"
      />
      <PricingHero />
      <PricingPlans />
      <PricingCompare />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
