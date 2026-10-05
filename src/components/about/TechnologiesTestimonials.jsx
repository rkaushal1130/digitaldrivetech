import React from 'react';
import Container from '../ui/Container';
import { useTestimonials } from '../../hooks/useTestimonials';
import { getInitials } from '../../utils/getInitials';
import './TechnologiesTestimonials.css';
import html5Icon from '../../assets/icons/SVG ICONS/html-5.svg';
import css3Icon from '../../assets/icons/SVG ICONS/css3.svg';
import jsIcon from '../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import reactIcon from '../../assets/icons/SVG ICONS/react-svgrepo-com.svg';
import nextIcon from '../../assets/icons/SVG ICONS/next-dot-js-svgrepo-com.svg';
import nodeIcon from '../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import laravelIcon from '../../assets/icons/SVG ICONS/Laravel.svg';
import phpIcon from '../../assets/icons/SVG ICONS/php-svgrepo-com.svg';
import mysqlIcon from '../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

const technologies = [
  { id: 1, logo: html5Icon, name: 'HTML' },
  { id: 2, logo: css3Icon, name: 'CSS' },
  { id: 3, logo: jsIcon, name: 'JavaScript' },
  { id: 4, logo: reactIcon, name: 'React' },
  { id: 5, logo: nextIcon, name: 'Next.js' },
  { id: 6, logo: nodeIcon, name: 'Node.js' },
  { id: 7, logo: laravelIcon, name: 'Laravel' },
  { id: 8, logo: phpIcon, name: 'PHP' },
  { id: 9, logo: mysqlIcon, name: 'MySQL' },
  { id: 10, logo: firebaseIcon, name: 'Firebase' },
];

export default function TechnologiesTestimonials() {
  const { testimonials, loading } = useTestimonials();

  const renderStars = (rating) => '★'.repeat(rating);

  // Show loading state only on first visit (no cache)
  if (loading && testimonials.length === 0) {
    return (
      <section className="tech-testimonials-section">
        <Container>
          <div className="tech-testimonials-wrapper">
            <div className="tech-panel">
              <div className="section-tag">Technologies We Use</div>
              <h3 className="section-heading">Tech Stack</h3>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <div key={tech.id} className="tech-item">
                    <div className="tech-logo">
                      <img src={tech.logo} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials-panel">
              <div className="section-tag">What Our Clients Say</div>
              <h3 className="section-heading">Testimonials</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '12px' }}>Loading testimonials...</p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Safety check: need at least 1 testimonial
  if (testimonials.length === 0) {
    return (
      <section className="tech-testimonials-section">
        <Container>
          <div className="tech-testimonials-wrapper">
            <div className="tech-panel">
              <div className="section-tag">Technologies We Use</div>
              <h3 className="section-heading">Tech Stack</h3>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <div key={tech.id} className="tech-item">
                    <div className="tech-logo">
                      <img src={tech.logo} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials-panel">
              <div className="section-tag">What Our Clients Say</div>
              <h3 className="section-heading">Testimonials</h3>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="tech-testimonials-section">
      <Container>
        <div className="tech-testimonials-wrapper">
          <div className="tech-panel">
            <div className="section-tag">Technologies We Use</div>
            <h3 className="section-heading">Tech Stack</h3>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.id} className="tech-item">
                  <div className="tech-logo">
                    <img src={tech.logo} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-panel">
            <div className="section-tag">What Our Clients Say</div>
            <h3 className="section-heading">Testimonials</h3>
            <div className="testimonial-grid">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                  <div className="testimonial-content">
                    <div className="stars">{renderStars(testimonial.rating)}</div>
                    <p className="testimonial-quote">{testimonial.text || testimonial.review}</p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="client-avatar-initials">
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="client-info">
                      <strong className="client-name">{testimonial.name}</strong>
                      <span className="client-role">{testimonial.position || testimonial.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
