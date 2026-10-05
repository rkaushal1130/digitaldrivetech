import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Code2, Briefcase, Award, Users, FileText, Sparkles } from 'lucide-react';
import './InternshipHero.css';

export default function InternshipHero() {
  return (
    <section className="internship-hero">
      <div className="internship-hero-bg"></div>
      <Container>
        <div className="internship-hero-grid">
          <div className="internship-hero-content">
            <p className="internship-hero-tag">Industrial Training & Internship Program</p>
            <h1>
              Learn. Implement.<br />
              <span className="gradient-text">Lead Your Future.</span>
            </h1>
            <p className="internship-hero-desc">
              Gain practical skills by working on live projects and real-time scenarios
              under the guidance of industry experts.
            </p>
            <div className="internship-hero-features">
              <div className="hero-feature">
                <div className="feature-icon blue"><Code2 size={16} /></div>
                <span>Live Projects</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon green"><Briefcase size={16} /></div>
                <span>Placement Assistance</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon orange"><Award size={16} /></div>
                <span>Industry Certificate</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon blue"><Users size={16} /></div>
                <span>Expert Mentorship</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon red"><FileText size={16} /></div>
                <span>Internship Letter</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon green"><Sparkles size={16} /></div>
                <span>Resume Building Support</span>
              </div>
            </div>
            <div className="internship-hero-buttons">
              <Button onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply Now <i className="fas fa-arrow-right"></i>
              </Button>
              <Button variant="outline" className="hero-outline-btn" href="https://drive.google.com/uc?export=download&id=1mtQ9oTW6jYoahs3IdE8rzU84jtkYeJxC">
                Download Brochure <i className="fas fa-download"></i>
              </Button>
            </div>
          </div>

          <div className="internship-hero-image">
            <div className="hero-mockup-container">
              <div className="hero-glow-effect"></div>
              <div className="hero-device-mockup">
                <img
                  src="/images/internshipHero.webp"
                  alt="Internship Training Program - Students Learning"
                  className="hero-image"
                  loading="lazy"
                  width="1536"
                  height="1024"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
