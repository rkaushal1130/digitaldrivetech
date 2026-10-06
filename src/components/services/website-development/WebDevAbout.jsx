import React from 'react';
import { Link } from 'react-router-dom';
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
      description:
        'Mobile-friendly layouts that provide a consistent experience across phones, tablets and desktops.',
    },
    {
      id: 2,
      icon: <Code2 size={28} />,
      title: 'Custom Website Solutions',
      description:
        'Websites built around your business requirements instead of forcing your business into a generic template.',
    },
    {
      id: 3,
      icon: <TrendingUp size={28} />,
      title: 'Performance & SEO Ready',
      description: (
        <>
          Clean implementation, optimized assets and{' '}
          <Link
            to="/digital-marketing"
            title="Digital Marketing and SEO Services"
            className="webdev-about-inline-link"
          >
            SEO fundamentals
          </Link>{' '}
          that help create a strong technical foundation.
        </>
      ),
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: 'Secure & Scalable',
      description:
        'A development approach designed for reliable performance, future updates and business growth.',
    },
  ];

  return (
    <section className="webdev-about-section">
      <Container>
        <div className="webdev-about-card">
          <div className="webdev-about-grid">
            <div className="webdev-about-brand-col">
              <div className="webdev-about-logo-wrapper">
                <img
                  src={logoImage}
                  alt="Digital Drive Resource Tech Private Limited logo"
                  className="webdev-about-logo"
                  width="64"
                  height="64"
                  loading="lazy"
                />
                <div className="webdev-about-company-name">DIGITAL DRIVE</div>
                <span className="webdev-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="webdev-about-divider"></div>
                <p className="webdev-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="webdev-about-content-col">
              <div className="webdev-about-header">
                <h2 className="webdev-about-eyebrow">About Our Website Development Services</h2>
                <p className="webdev-about-intro">
                  We build high-quality websites designed around your business goals, target audience and long-term growth. Our website development services focus on responsive design, performance, security, usability and SEO fundamentals so your website works effectively across phones, tablets and desktops.
                </p>
                <p className="webdev-about-intro">
                  From professional business websites and corporate websites to e-commerce stores and custom web applications for businesses in Mohali and across India, we select the right development approach for each project. Our goal is to create websites that are easy to use, fast to load and ready to support your business online.
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
