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
        pageTitle="Website Development Company in Mohali | Digital Drive Tech"
        metaTitle="Website Development Company in Mohali | Digital Drive Tech"
        metaDescription="Digital Drive is a trusted website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications and e-commerce stores across Chandigarh, Punjab and India."
        ogTitle="Website Development Company in Mohali | Digital Drive Tech"
        ogDescription="Digital Drive is a trusted website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications and e-commerce stores across Chandigarh, Punjab and India."
        ogUrl="https://www.digitaldrivetech.com/website-development"
        ogImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        twitterTitle="Website Development Company in Mohali | Digital Drive Tech"
        twitterDescription="Digital Drive is a trusted website development company in Mohali. We build fast, secure, SEO-friendly websites, custom web applications and e-commerce stores across Chandigarh, Punjab and India."
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
