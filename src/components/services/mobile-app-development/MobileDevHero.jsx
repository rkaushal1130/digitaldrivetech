import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Smartphone, Gauge, ShieldCheck, Layers, CheckCircle2, Headphones, ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import mobileDevHeroImg from '../../../assets/images/services-new-addons/mobile.webp';
import './MobileDevHero.css';

export default function MobileDevHero() {
  const navigate = useNavigate();

  const highlightPills = [
    { icon: <Smartphone size={18} />, label: 'User-Centric Design' },
    { icon: <Gauge size={18} />, label: 'High Performance' },
    { icon: <ShieldCheck size={18} />, label: 'Secure & Reliable' },
    { icon: <Layers size={18} />, label: 'Scalable Solutions' },
    { icon: <CheckCircle2 size={18} />, label: 'Quality Assurance' },
    { icon: <Headphones size={18} />, label: 'Support & Maintenance' },
  ];

  return (
    <section className="mobiledev-hero">
      <div className="mobiledev-hero-bg-glow"></div>
      <Container>
        <div className="mobiledev-hero-grid">
          <div className="mobiledev-hero-content">
            <div className="mobiledev-brand-badge">
              <img src={logoImage} alt="Digital Drive Resource Tech" className="mobiledev-brand-logo" />
              <div className="mobiledev-brand-text">
                <span className="mobiledev-brand-name">DIGITAL DRIVE</span>
                <span className="mobiledev-brand-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <span className="mobiledev-brand-slogan">Driving Digital Innovation</span>
              </div>
            </div>

            <h1 className="mobiledev-main-title">
              MOBILE APP <span>DEVELOPMENT</span>
            </h1>

            <p className="mobiledev-tagline">Innovative Apps. Seamless Experiences. Real Impact.</p>

            <p className="mobiledev-description">
              We design and develop powerful, scalable, and user-friendly mobile applications for Android and iOS platforms that engage users, drive business growth, and deliver real value.
            </p>

            <div className="mobiledev-pills-row">
              {highlightPills.map((pill, idx) => (
                <div key={idx} className="mobiledev-pill">
                  <span className="mobiledev-pill-icon">{pill.icon}</span>
                  <span className="mobiledev-pill-label">{pill.label}</span>
                </div>
              ))}
            </div>

            <div className="mobiledev-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="mobiledev-hero-visual">
            <div className="mobiledev-glow-sphere"></div>
            <div className="mobiledev-hero-image-container">
              <img
                src={mobileDevHeroImg}
                alt="Mobile App Development Digital Drive"
                className="mobiledev-hero-right-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
