import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './PortfolioHero.css';
import { useNavigate } from 'react-router-dom';
//import heroImage from '../../assets/images/PortHeroImage.webp';
export default function PortfolioHero() {
  const navigate = useNavigate();
  return (
    <section className="portfolio-hero">
      <Container>
        <div className="portfolio-hero-inner">
          <div className="portfolio-hero-text">
            <div className="portfolio-eyebrow">OUR PORTFOLIO</div>
            <h1>Projects That<br />Deliver <span>Results</span></h1>
            <p>
              We create innovative websites, mobile applications and software solutions that help businesses grow
              and succeed in the digital world.
            </p>
            <div className="portfolio-hero-btns">
              <Button onClick={() => {
                const el = document.getElementById('portfolio-projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>View Projects</Button>
              <Button variant="outline" onClick={() => navigate('/contact#contact-form')}>Get Free Quote</Button>
            </div>
          </div>
          <div className="portfolio-hero-visual">
            <div className="portfolio-glow"></div>
           <div className="device-mockup">

              <img
  src="/images/PortHeroImage.webp"
  alt="Portfolio Projects"
  className="port-hero-image"
  loading="lazy"
  width="1536"
  height="1024"
/>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
