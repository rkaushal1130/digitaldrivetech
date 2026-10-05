import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import './TechnologiesCTA.css';
import { useNavigate, useLocation } from 'react-router-dom';
// import { scrollToSection } from '../../utils/scrollUtils';
export default function TechnologiesCTA() {
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
    <div className="technologies-cta-wrap">
      <Container>
        <div className="technologies-cta">
          <div className="technologies-cta-left">
            <div className="technologies-cta-rocket"><Icon name="rocket" /></div>
            <div>
              <h2>Ready To Build Something Amazing?</h2>
              <p>We use the best technologies to turn your ideas into success.</p>
            </div>
          </div>
          <div className="technologies-cta-right">
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
