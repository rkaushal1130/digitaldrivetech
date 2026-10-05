import React from 'react';
import Container from '../../ui/Container';
import { Smartphone, Gauge, Layout, ShieldCheck } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import './MobileDevAbout.css';

export default function MobileDevAbout() {
  const aboutFeatures = [
    {
      id: 1,
      icon: <Smartphone size={28} />,
      title: 'Custom Mobile App Development',
      description: 'Tailored mobile solutions for Android and iOS to meet your business goals.',
    },
    {
      id: 2,
      icon: <Gauge size={28} />,
      title: 'Performance & Scalability',
      description: 'High-performance apps built to handle growth and deliver speed.',
    },
    {
      id: 3,
      icon: <Layout size={28} />,
      title: 'UI/UX Design',
      description: 'Engaging and intuitive designs that provide exceptional user experience.',
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: 'Secure & Reliable Apps',
      description: 'We follow industry best practices to ensure data security and reliability.',
    },
  ];

  return (
    <section className="mobiledev-about-section">
      <Container>
        <div className="mobiledev-about-card">
          <div className="mobiledev-about-grid">
            <div className="mobiledev-about-brand-col">
              <div className="mobiledev-about-logo-wrapper">
                <img src={logoImage} alt="Digital Drive Resource Tech Logo" className="mobiledev-about-logo" />
                <h2 className="mobiledev-about-company-name">DIGITAL DRIVE</h2>
                <span className="mobiledev-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="mobiledev-about-divider"></div>
                <p className="mobiledev-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="mobiledev-about-content-col">
              <div className="mobiledev-about-header">
                <span className="mobiledev-about-eyebrow">ABOUT OUR MOBILE APP DEVELOPMENT SERVICES</span>
                <p className="mobiledev-about-intro">
                  We build custom mobile applications that are fast, secure, scalable, and tailored to your business needs. From idea to launch, we turn your vision into a powerful mobile experience.
                </p>
              </div>

              <div className="mobiledev-about-features-grid">
                {aboutFeatures.map((feature) => (
                  <div key={feature.id} className="mobiledev-about-feature-item">
                    <div className="mobiledev-about-feature-icon">{feature.icon}</div>
                    <div className="mobiledev-about-feature-text">
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
