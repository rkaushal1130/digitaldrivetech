import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import { scrollToSection } from '../../utils/scrollUtils';
import logoImage from '../../assets/icons/logo.png';
import './Navbar.css';

const WHATSAPP_PHONE = '918699477148';
const WHATSAPP_MESSAGE = `Hello 
Digital Drive Tech Team,

  I hope you’re doing well. I’m interested in exploring your digital services and would like to discuss my requirements with your team. I’m looking for a reliable solution for my project and would appreciate more information about your services,available solutions, pricing, and the overall process.
Please feel free to connect with me and guide me regarding the best solution for my requirements.
Thank you, and I look forward to hearing from you.

Best regards`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="whatsapp-icon"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handlePortfolioClick = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleTechnologiesClick = () => {
    navigate('/technologies');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handlePricingClick = () => {
    navigate('/pricing');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <Container>
        <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : 'transparent'}`}>
          <nav className="navbar">
            <img
              src={logoImage}
              alt="Digital Drive Resource Tech Private Limited"
              className="logo-image"
              onClick={() => navigate('/')}
            />

            <ul className="nav-links desktop-nav">
              <li><button onClick={() => handleNavClick('home')} className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>Home</button></li>
              <li><button onClick={handleAboutClick} className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}>About Us</button></li>
              <li><button onClick={handleServicesClick} className={`nav-button ${location.pathname === '/services' ? 'active' : ''}`}>Services</button></li>
              <li><button onClick={handlePortfolioClick} className={`nav-button ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</button></li>
              <li><button onClick={handleTechnologiesClick} className={`nav-button ${location.pathname === '/technologies' ? 'active' : ''}`}>Technologies</button></li>
              <li><button onClick={handlePricingClick} className={`nav-button ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</button></li>
              <li><button onClick={handleContactClick} className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</button></li>
              <li><button onClick={() => { navigate('/internship-training-in-mohali'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }} className={`nav-button ${location.pathname === '/internship-training-in-mohali' || location.pathname === '/internship-training' ? 'active' : ''}`}>Internship &amp; Training</button></li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn desktop-whatsapp"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            <button
              className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>

          <div
            id="mobile-menu"
            className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="mobile-nav-links">
              <li><button onClick={() => handleNavClick('home')} className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>Home</button></li>
              <li><button onClick={handleAboutClick} className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}>About Us</button></li>
              <li><button onClick={handleServicesClick} className={`nav-button ${location.pathname === '/services' ? 'active' : ''}`}>Services</button></li>
              <li><button onClick={handlePortfolioClick} className={`nav-button ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</button></li>
              <li><button onClick={handleTechnologiesClick} className={`nav-button ${location.pathname === '/technologies' ? 'active' : ''}`}>Technologies</button></li>
              <li><button onClick={handlePricingClick} className={`nav-button ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</button></li>
              <li><button onClick={handleContactClick} className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</button></li>
              <li><button onClick={() => { navigate('/internship-training-in-mohali'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }} className={`nav-button ${location.pathname === '/internship-training-in-mohali' || location.pathname === '/internship-training' ? 'active' : ''}`}>Internship &amp; Training</button></li>
            </ul>
            <div className="mobile-cta-wrapper">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn mobile-whatsapp"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Chat with us on WhatsApp"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
