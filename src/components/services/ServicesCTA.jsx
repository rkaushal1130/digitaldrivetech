

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ServicesCTA.css';
// import { scrollToSection } from '../../utils/scrollUtils';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ServicesCTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const handleQuoteClick = () => {
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
              <p>Let's build your next digital success story together.</p>
            </div>
          </div>
          <div className="portfolio-cta-right">
            <Button onClick={() => navigate('/contact#contact-form')}>Get a Free Quote</Button>
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
