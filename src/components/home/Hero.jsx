import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
//import heroImage from '../../assets/images/heroimage.webp';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Container>
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="hero-badge">
            We Build Digital Solutions
          </div>

           <h1>
            We Build<span> Websites </span>& 
            <span> Mobile Apps </span>
            That Drive Growth
          </h1>


          <p>
            Digital Drive Resource Tech Private Limited is a full-service digital company that helps businesses
            go online with powerful websites, mobile apps and software solutions
            for startups, businesses and enterprises.
          </p>

          <div className="hero-buttons">
            <Button onClick={() => scrollToSection('services')}>Our Services</Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>Contact Us</Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="mockup-container">
            <div className="glow-effect"></div>
            <div className="device-mockup">
              {/* <img src={heroImage} alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup" className="hero-image" /> */}
             <img
  src="/images/heroimage.webp"
  alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup"
  className="hero-image"
  loading="eager"
  fetchPriority="high"
  width="1536"
  height="1024"
/>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
