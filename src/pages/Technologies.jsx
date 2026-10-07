import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import TechnologiesHero from '../components/technologies/TechnologiesHero';
import TechnologiesGrid from '../components/technologies/TechnologiesGrid';
import TechnologiesWhy from '../components/technologies/TechnologiesWhy';
import TechnologiesProcess from '../components/technologies/TechnologiesProcess';
import TechnologiesCTA from '../components/technologies/TechnologiesCTA';

export default function Technologies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/technologies"
        pageTitle="Technologies We Use - DigitalDriveTech"
        metaTitle="Technologies We Use | DigitalDriveTech"
        metaDescription="Explore the technologies used by Digital Drive Resource Tech Private Limited (DigitalDriveTech) for website, mobile app, software, e-commerce, and custom digital development projects."
        ogTitle="Technologies We Use | DigitalDriveTech"
        ogDescription="Explore the technologies used by Digital Drive Resource Tech Private Limited (DigitalDriveTech) for website, mobile app, software, e-commerce, and custom digital development projects."
        ogUrl="https://www.digitaldrivetech.com/technologies"
        ogImage="https://www.digitaldrivetech.com/images/technologiesHero.webp"
        twitterTitle="Technologies We Use | DigitalDriveTech"
        twitterDescription="Explore the technologies used by Digital Drive Resource Tech Private Limited (DigitalDriveTech) for website, mobile app, software, e-commerce, and custom digital development projects."
        twitterImage="https://www.digitaldrivetech.com/images/technologiesHero.webp"
      />
      <TechnologiesHero />
      <TechnologiesGrid />
      <TechnologiesWhy />
      <TechnologiesProcess />
      <TechnologiesCTA />
    </>
  );
}
