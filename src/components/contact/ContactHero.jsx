import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ContactHero.css';
import { useNavigate } from 'react-router-dom';
//import heroImage from '../../assets/images/ContactHero.webp';
export default function ContactHero() {
  const navigate = useNavigate();
  return (
    <section className="contact-hero">
      <Container>
        <div className="contact-hero-inner">
          <div className="contact-hero-text">
            <div className="contact-eyebrow">CONTACT US</div>
            <h1>Let's Build Something <span>Amazing</span> Together</h1>
            <p>
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            <div className="contact-hero-btns">
              <Button onClick={() => navigate('/contact#contact-form')}>Get Free Quote</Button>
              <Button variant="outline">Call Us Now</Button>
            </div>
          </div>
          <div className="contact-hero-visual">
            <div className="contact-glow"></div>
            <div className="device-mockup">
              <img
                src="/images/ContactHero.webp"
                alt="Contact Digital Drive Resource Tech"
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
