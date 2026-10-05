

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
// import { scrollToSection } from '../../utils/scrollUtils';
import './AboutCTA.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AboutCTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const ../assets/images/Protfolio-images/ = () => {
  //   if (location.pathname === '/') {
  //     scrollToSection('contact');
  //   } else {
  //     navigate('/');
  //     setTimeout(() => {
  //       scrollToSection('contact');
  //     }, 100);
  //   }
  // };

  return (
    <div className="portfolio-cta-wrap">
      <Container>
        <div className="portfolio-cta">
          <div className="portfolio-cta-left">
            <div className="portfolio-cta-rocket">🚀</div>
            <div>
              <h2>Have A Project In Mind?</h2>
              <p>Let's build something amazing together.</p>
            </div>
          </div>

          <div className="portfolio-cta-right">
            <Button onClick={() => navigate('/contact#contact-form')}>
              Get a Free Quote
            </Button>

            <Button
              variant="outline"
              onClick={handleContactClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}