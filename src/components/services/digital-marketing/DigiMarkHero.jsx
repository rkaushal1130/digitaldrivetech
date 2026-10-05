import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Target, TrendingUp, Users, Award, DollarSign, Settings, ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import digiMarkHeroImg from '../../../assets/images/services-new-addons/Digital Marketing (2).webp';
import './DigiMarkHero.css';

export default function DigiMarkHero() {
  const navigate = useNavigate();

  const highlightPills = [
    { icon: <Target size={18} />, label: 'Targeted Strategies' },
    { icon: <TrendingUp size={18} />, label: 'Measurable Results' },
    { icon: <Users size={18} />, label: 'Audience Focused' },
    { icon: <Award size={18} />, label: 'Brand Growth' },
    { icon: <DollarSign size={18} />, label: 'ROI Driven' },
    { icon: <Settings size={18} />, label: 'Support & Optimization' },
  ];

  return (
    <section className="digimark-hero">
      <div className="digimark-hero-bg-glow"></div>
      <Container>
        <div className="digimark-hero-grid">
          <div className="digimark-hero-content">
            <div className="digimark-brand-badge">
              <img src={logoImage} alt="Digital Drive Resource Tech" className="digimark-brand-logo" />
              <div className="digimark-brand-text">
                <span className="digimark-brand-name">DIGITAL DRIVE</span>
                <span className="digimark-brand-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <span className="digimark-brand-slogan">Driving Digital Innovation</span>
              </div>
            </div>

            <h1 className="digimark-main-title">
              DIGITAL <span>MARKETING</span>
            </h1>

            <p className="digimark-tagline">Maximize Reach. Drive Engagement. Grow Your Business.</p>

            <p className="digimark-description">
              We create data-driven digital marketing strategies that help you reach the right audience, increase brand visibility, generate quality leads, and boost conversions.
            </p>

            <div className="digimark-pills-row">
              {highlightPills.map((pill, idx) => (
                <div key={idx} className="digimark-pill">
                  <span className="digimark-pill-icon">{pill.icon}</span>
                  <span className="digimark-pill-label">{pill.label}</span>
                </div>
              ))}
            </div>

            <div className="digimark-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="digimark-hero-visual">
            <div className="digimark-glow-sphere"></div>
            <div className="digimark-hero-image-container">
              <img
                src={digiMarkHeroImg}
                alt="Digital Marketing Digital Drive"
                className="digimark-hero-right-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
