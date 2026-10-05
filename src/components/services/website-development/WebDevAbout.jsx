import React from 'react';
import Container from '../../ui/Container';
import { Monitor, Code2, TrendingUp, ShieldCheck } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import './WebDevAbout.css';

export default function WebDevAbout() {
  const aboutFeatures = [
    {
      id: 1,
      icon: <Monitor size={28} />,
      title: 'Modern & Responsive Design',
      description: 'Clean, attractive, and mobile-friendly designs that provide an excellent user experience.',
    },
    {
      id: 2,
      icon: <Code2 size={28} />,
      title: 'Custom & Scalable Solutions',
      description: 'Tailored solutions that are secure, scalable, and built to grow with your business.',
    },
    {
      id: 3,
      icon: <TrendingUp size={28} />,
      title: 'Performance & SEO Optimized',
      description: 'Fast-loading websites built with SEO best practices to rank higher and deliver better performance.',
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: 'Reliable & Future-Ready',
      description: 'We use the latest technologies and industry standards to build websites that are future-ready.',
    },
  ];

  return (
    <section className="webdev-about-section">
      <Container>
        <div className="webdev-about-card">
          <div className="webdev-about-grid">
            <div className="webdev-about-brand-col">
              <div className="webdev-about-logo-wrapper">
                <img src={logoImage} alt="Digital Drive Resource Tech Logo" className="webdev-about-logo" />
                <h2 className="webdev-about-company-name">DIGITAL DRIVE</h2>
                <span className="webdev-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="webdev-about-divider"></div>
                <p className="webdev-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="webdev-about-content-col">
              <div className="webdev-about-header">
                <span className="webdev-about-eyebrow">ABOUT OUR WEB DEVELOPMENT SERVICES</span>
                <p className="webdev-about-intro">
                  We build high-quality, responsive, and user-friendly websites tailored to your business needs. From static websites to complex web applications and eCommerce platforms, we deliver solutions that are modern, scalable, secure, and built for success.
                </p>
              </div>

              <div className="webdev-about-features-grid">
                {aboutFeatures.map((feature) => (
                  <div key={feature.id} className="webdev-about-feature-item">
                    <div className="webdev-about-feature-icon">{feature.icon}</div>
                    <div className="webdev-about-feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
