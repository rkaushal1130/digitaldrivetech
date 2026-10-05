import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
import logoImage from '../../assets/icons/logo.png';
import './Navbar.css';

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
              <li><button onClick={() => { navigate('/internship-training'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }} className={`nav-button ${location.pathname === '/internship-training' ? 'active' : ''}`}>Internship &amp; Training</button></li>
            </ul>

            <Button onClick={handleContactClick} className="desktop-cta">Get a Free Quote</Button>

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
              <li><button onClick={() => { navigate('/internship-training'); window.scrollTo(0, 0); setIsMobileMenuOpen(false); }} className={`nav-button ${location.pathname === '/internship-training' ? 'active' : ''}`}>Internship &amp; Training</button></li>
            </ul>
            <div className="mobile-cta-wrapper">
              <Button onClick={handleContactClick} className="mobile-cta">Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
