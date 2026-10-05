import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Monitor, Gauge, ShieldCheck, TrendingUp, Code2, ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import webDevHeroImg from '../../../assets/images/services-new-addons/web.webp';
import './WebDevHero.css';

export default function WebDevHero() {
  const navigate = useNavigate();

  const highlightPills = [
    { icon: <Monitor size={18} />, label: 'Responsive Design' },
    { icon: <Gauge size={18} />, label: 'High Performance' },
    { icon: <ShieldCheck size={18} />, label: 'Secure & Reliable' },
    { icon: <TrendingUp size={18} />, label: 'SEO Optimized' },
    { icon: <Code2 size={18} />, label: 'Clean & Modern Code' },
  ];

  return (
    <section className="webdev-hero">
      <div className="webdev-hero-bg-glow"></div>
      <Container>
        <div className="webdev-hero-grid">
          <div className="webdev-hero-content">
            <div className="webdev-brand-badge">
              <img src={logoImage} alt="Digital Drive Resource Tech" className="webdev-brand-logo" />
              <div className="webdev-brand-text">
                <span className="webdev-brand-name">DIGITAL DRIVE</span>
                <span className="webdev-brand-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <span className="webdev-brand-slogan">Driving Digital Innovation</span>
              </div>
            </div>

            <h1 className="webdev-main-title">
              WEB <span>DEVELOPMENT</span>
            </h1>

            <p className="webdev-tagline">Build Modern. Perform Better. Grow Faster.</p>

            <p className="webdev-description">
              We design and develop fast, secure, and scalable websites that deliver exceptional user experiences and drive measurable business results.
            </p>

            <div className="webdev-pills-row">
              {highlightPills.map((pill, idx) => (
                <div key={idx} className="webdev-pill">
                  <span className="webdev-pill-icon">{pill.icon}</span>
                  <span className="webdev-pill-label">{pill.label}</span>
                </div>
              ))}
            </div>

            <div className="webdev-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="webdev-hero-visual">
            <div className="webdev-glow-sphere"></div>
            <div className="webdev-hero-image-container">
              <img
                src={webDevHeroImg}
                alt="Web Development Digital Drive"
                className="webdev-hero-right-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
