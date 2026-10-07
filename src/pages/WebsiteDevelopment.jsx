import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import webDevSchema from '../data/webDevSchema';
import webDevHeroImg from '../assets/images/services-new-addons/web.webp';
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
        pageUrl="https://www.digitaldrivetech.com/website-development"
        pageTitle="Website Development Services | Website Development Company in Mohali"
        metaTitle="Website Development Company in Mohali | Website Development Services | DigitalDriveTech"
        metaDescription="Boost your online growth with Digital Drive Resource Tech Private Limited (DigitalDriveTech), a leading website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications, and e-commerce stores tailored to your business goals."
        ogTitle="Website Development Company in Mohali | Website Development Services | DigitalDriveTech"
        ogDescription="Boost your online growth with Digital Drive Resource Tech Private Limited (DigitalDriveTech), a leading website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications, and e-commerce stores tailored to your business goals."
        ogUrl="https://www.digitaldrivetech.com/website-development"
        ogImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        twitterTitle="Website Development Company in Mohali | Website Development Services | DigitalDriveTech"
        twitterDescription="Boost your online growth with Digital Drive Resource Tech Private Limited (DigitalDriveTech), a leading website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications, and e-commerce stores tailored to your business goals."
        twitterImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        structuredData={webDevSchema}
        preloadImage={webDevHeroImg}
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
