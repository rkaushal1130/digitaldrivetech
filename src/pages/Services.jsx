import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import WhyChooseServices from '../components/services/WhyChooseServices';
import ServicesProcess from '../components/services/ServicesProcess';
import TechStack from '../components/services/TechStack';
import ServicesCTA from '../components/services/ServicesCTA';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/services"
        pageTitle="Web, App & Digital Solutions - DigitalDriveTech"
        metaTitle="Web, App & Digital Solutions | DigitalDriveTech Services"
        metaDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) services, including website development, mobile apps, software, UI/UX, e-commerce, digital marketing, and professional courses."
        ogTitle="Web, App & Digital Solutions | DigitalDriveTech Services"
        ogDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) services, including website development, mobile apps, software, UI/UX, e-commerce, digital marketing, and professional courses."
        ogUrl="https://www.digitaldrivetech.com/services"
        ogImage="https://www.digitaldrivetech.com/images/abouthero.webp"
        twitterTitle="Web, App & Digital Solutions | DigitalDriveTech Services"
        twitterDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) services, including website development, mobile apps, software, UI/UX, e-commerce, digital marketing, and professional courses."
        twitterImage="https://www.digitaldrivetech.com/images/abouthero.webp"
      />
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseServices />
      <ServicesProcess />
      <TechStack />
      <ServicesCTA />
    </>
  );
}
