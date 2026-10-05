import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
//import officeImage from '../../assets/images/Office.webp';
import './AboutHero.css';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default function AboutHero() {
  const navigate = useNavigate();
  return (
    <Container>
      <section className="about-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">About Us</div>
            <h1>
              We Build Digital <span className="accent">Solutions</span> That Drive Growth
            </h1>
            <p>
              Digital Drive Resource Tech Private Limited is a full-service digital company that helps businesses go online with powerful
              websites, mobile apps and software solutions. We combine creativity, technology and strategy to
              deliver measurable results.
            </p>
            <div className="hero-actions">
              <Button onClick={() => navigate('/services')}>Our Services</Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>Contact Us</Button>
            </div>
          </div>

          <div className="hero-media">
            {/* <img
              src={officeImage}
              alt="Office team at work"
            /> */}
            <img
  src="/images/Office.webp"
  alt="Office"
  
  loading="eager"
  fetchPriority="high"
  
/>
          </div>

          <div className="hero-side">
            <div className="focus-item">
              <div className="icon-badge">
                <Users size={22} />
              </div>
              <div>
                <h4>Customer Focused</h4>
                <p>We put our clients first and build lasting relationships.</p>
              </div>
            </div>

            <div className="focus-item">
              <div className="icon-badge">
                <Target size={22} />
              </div>
              <div>
                <h4>Result Oriented</h4>
                <p>We focus on delivering results that matter.</p>
              </div>
            </div>

            <div className="focus-item">
              <div className="icon-badge">
                <Lightbulb size={22} />
              </div>
              <div>
                <h4>Innovation Driven</h4>
                <p>We use latest technology and creative ideas.</p>
              </div>
            </div>

            <div className="focus-item">
              <div className="icon-badge">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4>Quality Assured</h4>
                <p>We follow best practices to ensure top quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
