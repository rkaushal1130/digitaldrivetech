import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Users, Layout, Palette, MousePointerClick, CheckCircle, ArrowRight } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import uiuxHeroImg from '../../../assets/images/services-new-addons/UI/UX.png';
import './UIUXHero.css';

export default function UIUXHero() {
  const navigate = useNavigate();

  const highlightPills = [
    { icon: <Users size={18} />, label: 'User Research' },
    { icon: <Layout size={18} />, label: 'Wireframing & Prototyping' },
    { icon: <Palette size={18} />, label: 'Visual Design' },
    { icon: <MousePointerClick size={18} />, label: 'Interactive Design' },
    { icon: <CheckCircle size={18} />, label: 'Usability Testing' },
  ];

  return (
    <section className="uiux-hero">
      <div className="uiux-hero-bg-glow"></div>
      <Container>
        <div className="uiux-hero-grid">
          <div className="uiux-hero-content">
            <div className="uiux-brand-badge">
              <img src={logoImage} alt="Digital Drive Resource Tech" className="uiux-brand-logo" />
              <div className="uiux-brand-text">
                <span className="uiux-brand-name">DIGITAL DRIVE</span>
                <span className="uiux-brand-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <span className="uiux-brand-slogan">Driving Digital Innovation</span>
              </div>
            </div>

            <h1 className="uiux-main-title">
              UI/UX <span>DESIGN</span>
            </h1>

            <p className="uiux-tagline">Designing Intuitive Experiences. Creating Impactful Interfaces.</p>

            <p className="uiux-description">
              We craft user-centered designs that are visually stunning, highly functional, and tailored to your business goals. Our UI/UX solutions enhance user satisfaction and drive meaningful engagement.
            </p>

            <div className="uiux-pills-row">
              {highlightPills.map((pill, idx) => (
                <div key={idx} className="uiux-pill">
                  <span className="uiux-pill-icon">{pill.icon}</span>
                  <span className="uiux-pill-label">{pill.label}</span>
                </div>
              ))}
            </div>

            <div className="uiux-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          <div className="uiux-hero-visual">
            <div className="uiux-glow-sphere"></div>
            <div className="uiux-hero-image-container">
              <img
                src={uiuxHeroImg}
                alt="UI/UX Design Digital Drive"
                className="uiux-hero-right-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
