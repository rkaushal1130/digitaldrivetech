import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Monitor, Gauge, ShieldCheck, TrendingUp, Code2, ArrowRight } from 'lucide-react';
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
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="webdev-breadcrumb">
          <ol>
            <li>
              <Link to="/" title="Home">Home</Link>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">/</li>
            <li>
              <Link to="/services" title="Services">Services</Link>
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
              Digital Drive provides professional website development services in Mohali and across India. We build fast, secure, mobile-friendly and SEO-ready websites for businesses, startups, e-commerce brands and organizations.
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
                alt="Website development services by Digital Drive in Mohali"
                className="webdev-hero-right-img"
                width="520"
                height="420"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
