import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import webDevSchema from '../data/webDevSchema';
import neonDevHeroImg from '../assets/images/services-new-addons/neon-dev-workstation.png';
import WebDevHero from '../components/services/website-development/WebDevHero';
import WebDevAbout from '../components/services/website-development/WebDevAbout';
import WebDevServicesList from '../components/services/website-development/WebDevServicesList';
import WebDevWebsiteTypes from '../components/services/website-development/WebDevWebsiteTypes';
import WebDevAudience from '../components/services/website-development/WebDevAudience';
import WebDevTechStack from '../components/services/website-development/WebDevTechStack';
import WebDevProcess from '../components/services/website-development/WebDevProcess';
import WebDevWhyChoose from '../components/services/website-development/WebDevWhyChoose';
import WebDevTrust from '../components/services/website-development/WebDevTrust';
import WebDevFAQ from '../components/services/website-development/WebDevFAQ';
import WebDevContactBar from '../components/services/website-development/WebDevContactBar';

export default function WebsiteDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="website-development-page">
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/website-development-company-in-mohali"
        pageTitle="Website Development company in Mohali"
        metaTitle="Website Development company in Mohali | DigitalDriveTech"
        metaDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a Website Development company in Mohali, offering result-driven services with transparent reporting to grow your business."
        ogTitle="Website Development company in Mohali | DigitalDriveTech"
        ogDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a Website Development company in Mohali, offering result-driven services with transparent reporting to grow your business."
        ogUrl="https://www.digitaldrivetech.com/website-development-company-in-mohali"
        ogImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        twitterTitle="Website Development company in Mohali | DigitalDriveTech"
        twitterDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a Website Development company in Mohali, offering result-driven services with transparent reporting to grow your business."
        twitterImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        structuredData={webDevSchema}
        preloadImage={neonDevHeroImg}
      />
      <main id="main-content" className="website-development-main">
        <WebDevHero />
        <WebDevAbout />
        <WebDevServicesList />
        <WebDevTechStack />
        <WebDevWebsiteTypes />
        <WebDevAudience />
        <WebDevProcess />
        <WebDevWhyChoose />
        <WebDevTrust />
        <WebDevFAQ />
        <WebDevContactBar />
      </main>
    </div>
  );
}
