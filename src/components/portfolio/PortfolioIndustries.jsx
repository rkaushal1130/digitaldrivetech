import React from 'react';
import Container from '../ui/Container';
import './PortfolioIndustries.css';
import realEstateIcon from '../../assets/icons/Portfolio SVG/realestate.svg';
import ecommerceIcon from '../../assets/icons/Portfolio SVG/shopping-cart-svgrepo-com.svg';
import healthcareIcon from '../../assets/icons/Portfolio SVG/emergency-health-healthcare-hospital-kit-medical-svgrepo-com.svg';
import educationIcon from '../../assets/icons/Portfolio SVG/education-graduate-learning-svgrepo-com.svg';
import hospitalityIcon from '../../assets/icons/Portfolio SVG/dinner-svgrepo-com.svg';
import technologyIcon from '../../assets/icons/Portfolio SVG/technology.svg';
const industriesData = [
  { id: 1, icon: realEstateIcon, name: 'Real Estate' },
  { id: 2, icon: ecommerceIcon, name: 'E-Commerce' },
  { id: 3, icon: healthcareIcon, name: 'Healthcare' },
  { id: 4, icon: educationIcon, name: 'Education' },
  { id: 5, icon: hospitalityIcon, name: 'Hospitality' },
  { id: 6, icon: technologyIcon, name: 'Technology' },
];

export default function PortfolioIndustries() {
  return (
    <section className="portfolio-industries">
      <Container>
        <div className="portfolio-sec-label">Industries We Serve</div>
        <div className="portfolio-ind-grid">
          {industriesData.map((industry) => (
            <div key={industry.id} className="portfolio-ind">
              <div className="portfolio-ind-ico">
                <img src={industry.icon} alt={industry.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
