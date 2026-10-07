import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Monitor, Gauge, ShieldCheck, TrendingUp, Code2, ArrowRight } from 'lucide-react';
import neonDevHeroImg from '../../../assets/images/services-new-addons/neon-dev-workstation.png';
import './WebDevHero.css';

export default function WebDevHero() {
  const highlightPills = [
    { icon: <Monitor size={18} />, label: 'Responsive Design' },
    { icon: <Gauge size={18} />, label: 'High Performance' },
    { icon: <ShieldCheck size={18} />, label: 'Secure & Reliable' },
    { icon: <TrendingUp size={18} />, label: 'SEO Optimized' },
    { icon: <Code2 size={18} />, label: 'Clean & Modern Code' },
  ];

  return (
    <section className="webdev-hero">
      {/* Background Neon Developer Workstation Media Layer */}
      <div className="webdev-hero-bg-layer" aria-hidden="true">
        <img
          src={neonDevHeroImg}
          alt=""
          className="webdev-hero-bg-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="webdev-hero-bg-overlay"></div>
      </div>

      <div className="webdev-hero-bg-glow" aria-hidden="true"></div>

      <Container className="webdev-hero-container">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="webdev-breadcrumb">
          <ol>
            <li>
              <Link to="/" title="Home">Home</Link>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">/</li>
            <li aria-current="page">Website Development</li>
          </ol>
        </nav>

        <div className="webdev-hero-grid">
          <div className="webdev-hero-content">
            <h1 className="webdev-main-title">
              Website <span>Development</span> Company in Mohali
            </h1>

            <p className="webdev-tagline">Build Modern. Perform Better. Grow Faster.</p>

            <p className="webdev-description">
              Digital Drive provides professional website development services in Mohali and serves businesses across Chandigarh, Punjab and India. We build fast, secure, mobile-friendly and SEO-ready websites for businesses, startups, e-commerce brands and organizations.
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
              <Button to="/contact">
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" to="/portfolio">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
