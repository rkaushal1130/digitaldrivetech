import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Award, Users, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import './WebDevTrust.css';

export default function WebDevTrust() {
  const navigate = useNavigate();

  // Metrics with placeholders as specified in Section 3.4 and Rule 8
  const trustStats = [
    {
      id: 1,
      // TODO: Replace [X]+ with verified number of websites delivered
      value: '[X]+',
      label: 'Websites Delivered',
      icon: <CheckCircle size={22} />
    },
    {
      id: 2,
      // TODO: Replace [X]+ with verified number of happy clients
      value: '[X]+',
      label: 'Happy Clients',
      icon: <Users size={22} />
    },
    {
      id: 3,
      // TODO: Replace [X] with verified years of experience
      value: '[X]',
      label: 'Years of Experience',
      icon: <Award size={22} />
    }
  ];

  /*
   * TODO: Add verified client logos in this section.
   * TODO: Add 2-3 real client testimonials with verified names, companies, and photos.
   * NOTE: Never add fake reviews or unverified aggregateRating.
   */

  return (
    <section className="webdev-trust-section" id="proof">
      <Container>
        <div className="webdev-trust-header">
          <span className="webdev-section-eyebrow">PROVEN TRACK RECORD</span>
          <h2>Trusted by Businesses Across India</h2>
          <p className="webdev-trust-subtitle">
            [X]+ websites delivered | [X]+ happy clients | [X] years of experience
          </p>
        </div>

        {/* STATS COUNTERS */}
        <div className="webdev-trust-stats-grid">
          {trustStats.map((stat) => (
            <div key={stat.id} className="webdev-trust-stat-box">
              <div className="webdev-trust-stat-icon">{stat.icon}</div>
              <div className="webdev-trust-stat-value">{stat.value}</div>
              <div className="webdev-trust-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CLIENT LOGOS & TESTIMONIALS PLACEHOLDER CONTAINER */}
        <div className="webdev-trust-showcase">
          <div className="webdev-trust-notice">
            <Shield size={24} className="webdev-trust-shield-icon" />
            <div className="webdev-trust-notice-text">
              <h3>Client Partnerships & Verified Reviews</h3>
              <p>
                We build long-term relationships with businesses across Punjab, Chandigarh, and all of India. Verified client testimonials and enterprise partner case studies can be explored in our portfolio.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/portfolio')}
              className="webdev-trust-portfolio-btn"
            >
              View Portfolio <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
