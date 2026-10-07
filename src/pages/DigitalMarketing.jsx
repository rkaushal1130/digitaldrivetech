import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import digitalMarketingSchema from '../data/digitalMarketingSchema';
import digiMarkHeroImg from '../assets/images/services-new-addons/Digital Marketing (2).webp';
import DigiMarkHero from '../components/services/digital-marketing/DigiMarkHero';
import DigiMarkServicesList from '../components/services/digital-marketing/DigiMarkServicesList';
import DigiMarkTechStack from '../components/services/digital-marketing/DigiMarkTechStack';
import DigiMarkProcess from '../components/services/digital-marketing/DigiMarkProcess';
import DigiMarkWhyChoose from '../components/services/digital-marketing/DigiMarkWhyChoose';
import DigiMarkFAQ from '../components/services/digital-marketing/DigiMarkFAQ';
import DigiMarkContactBar from '../components/services/digital-marketing/DigiMarkContactBar';

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="digital-marketing-page">
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/digital-marketing-company-in-mohali"
        pageTitle="digital marketing company in Mohali"
        metaTitle="digital marketing company in Mohali | DigitalDriveTech"
        metaDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a digital marketing company in Mohali, offering result-driven services with transparent reporting to grow your business."
        ogTitle="digital marketing company in Mohali | DigitalDriveTech"
        ogDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a digital marketing company in Mohali, offering result-driven services with transparent reporting to grow your business."
        ogUrl="https://www.digitaldrivetech.com/digital-marketing-company-in-mohali"
        ogImage="https://www.digitaldrivetech.com/images/digital-marketing-og.jpg"
        twitterTitle="digital marketing company in Mohali | DigitalDriveTech"
        twitterDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a digital marketing company in Mohali, offering result-driven services with transparent reporting to grow your business."
        twitterImage="https://www.digitaldrivetech.com/images/digital-marketing-og.jpg"
        structuredData={digitalMarketingSchema}
        preloadImage={digiMarkHeroImg}
      />
      <main id="main-content" className="digital-marketing-main">
        <DigiMarkHero />
        <DigiMarkServicesList />
        <DigiMarkTechStack />
        <DigiMarkProcess />
        <DigiMarkWhyChoose />
        <DigiMarkFAQ />
        <DigiMarkContactBar />
      </main>
    </div>
  );
}
