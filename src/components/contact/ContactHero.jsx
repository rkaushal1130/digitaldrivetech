import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ContactHero.css';
import { useNavigate, Link } from 'react-router-dom';
//import heroImage from '../../assets/images/ContactHero.webp';
export default function ContactHero() {
  const navigate = useNavigate();
  return (
    <section className="contact-hero">
      <Container>
        <div className="contact-hero-inner">
          <div className="contact-hero-text">
            <div className="contact-eyebrow">CONTACT US</div>
            <h1>Contact <span>Us</span></h1>
            <p>
              Looking to discuss{' '}
              <Link
                to="/website-development-company-in-mohali"
                style={{ color: '#60a5fa', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                title="Website Development Services in Mohali"
              >
                website development
              </Link>
              , mobile apps, or custom digital solutions? We're here to help and answer any questions you might have.
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
