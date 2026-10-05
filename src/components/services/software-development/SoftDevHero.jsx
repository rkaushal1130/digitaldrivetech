import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Code2, ShieldCheck, GitFork, Gauge, Cloud, Headphones, ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import softDevHeroImg from '../../../assets/images/services-new-addons/Software.webp';
import './SoftDevHero.css';

export default function SoftDevHero() {
  const navigate = useNavigate();

  const highlightPills = [
    { icon: <Code2 size={18} />, label: 'Custom Solutions' },
    { icon: <ShieldCheck size={18} />, label: 'Secure & Reliable' },
    { icon: <GitFork size={18} />, label: 'Scalable Architecture' },
    { icon: <Gauge size={18} />, label: 'High Performance' },
    { icon: <Cloud size={18} />, label: 'Cloud Ready' },
    { icon: <Headphones size={18} />, label: 'Support & Maintenance' },
  ];

  return (
    <section className="softdev-hero">
      <div className="softdev-hero-bg-glow"></div>
      <Container>
        <div className="softdev-hero-grid">
          <div className="softdev-hero-content">
            <div className="softdev-brand-badge">
              <img src={logoImage} alt="Digital Drive Resource Tech" className="softdev-brand-logo" />
              <div className="softdev-brand-text">
                <span className="softdev-brand-name">DIGITAL DRIVE</span>
                <span className="softdev-brand-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <span className="softdev-brand-slogan">Driving Digital Innovation</span>
              </div>
            </div>

            <h1 className="softdev-main-title">
              SOFTWARE <span>DEVELOPMENT</span>
            </h1>

            <p className="softdev-tagline">Custom Solutions. Scalable Architecture. Real Results.</p>

            <p className="softdev-description">
              We build robust, secure, and scalable software solutions that empower businesses, streamline operations, and drive digital transformation.
            </p>

            <div className="softdev-pills-row">
              {highlightPills.map((pill, idx) => (
                <div key={idx} className="softdev-pill">
                  <span className="softdev-pill-icon">{pill.icon}</span>
                  <span className="softdev-pill-label">{pill.label}</span>
                </div>
              ))}
            </div>

            <div className="softdev-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="softdev-hero-visual">
            <div className="softdev-glow-sphere"></div>
            <div className="softdev-hero-image-container">
              <img
                src={softDevHeroImg}
                alt="Software Development Digital Drive"
                className="softdev-hero-right-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
