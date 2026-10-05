import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
//import heroImage from '../../assets/images/abouthero.webp';
import './ServicesHero.css';
import { useNavigate } from 'react-router-dom';

export default function ServicesHero() {
  const navigate = useNavigate();
  return (
    <section className="services-hero">
      <div className="services-hero-bg-art"></div>
      <Container>
        <div className="services-hero-grid">
          <div className="services-hero-content">
            <span className="services-eyebrow">Our Services</span>
            <h1>Powerful Solutions For Your Business</h1>
            <p>
              We deliver innovative, reliable and scalable digital solutions that help businesses grow, automate
              and succeed in the digital world.
            </p>
            <div className="services-hero-btns">
              <Button onClick={() => navigate('/contact#contact-form')}>Get Free Consultation</Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>View Portfolio</Button>
            </div>
          </div>
          {/* <div className="services-hero-image">
            <img src={heroImage} alt="Digital Solutions" />
          </div> */}
          <div className="services-hero-visual">
            <div className="services-glow"></div>
             <div className="device-mockup">
              <img
  src="/images/abouthero.webp"
  alt="About Digital Drive Resource Tech"
  className="hero-image"
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
