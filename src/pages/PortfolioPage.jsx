import React from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioProjects from '../components/portfolio/PortfolioProjects';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import PortfolioIndustries from '../components/portfolio/PortfolioIndustries';
import PortfolioTestimonials from '../components/portfolio/PortfolioTestimonials';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioStats />
      <PortfolioIndustries />
      <PortfolioTestimonials />
      <PortfolioCTA />
    </>
  );
}
