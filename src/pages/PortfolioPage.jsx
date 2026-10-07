import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioProjects from '../components/portfolio/PortfolioProjects';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import PortfolioIndustries from '../components/portfolio/PortfolioIndustries';
import PortfolioTestimonials from '../components/portfolio/PortfolioTestimonials';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/portfolio"
        pageTitle="Our Digital Projects & Work - DigitalDriveTech"
        metaTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        metaDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
        ogTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        ogDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
        ogUrl="https://www.digitaldrivetech.com/portfolio"
        ogImage="https://www.digitaldrivetech.com/images/PortHeroImage.webp"
        twitterTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        twitterDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
        twitterImage="https://www.digitaldrivetech.com/images/PortHeroImage.webp"
      />
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioStats />
      <PortfolioIndustries />
      <PortfolioTestimonials />
      <PortfolioCTA />
    </>
  );
}
