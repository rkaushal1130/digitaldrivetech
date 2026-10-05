import React from 'react';
import Container from '../../ui/Container';
import { Code2, Monitor, Smartphone, Cloud, Settings, Database, ShieldCheck, Wrench } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import './SoftDevAbout.css';

export default function SoftDevAbout() {
  const aboutFeatures = [
    {
      id: 1,
      icon: <Code2 size={28} />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements.',
    },
    {
      id: 2,
      icon: <Monitor size={28} />,
      title: 'Web Application Development',
      description: 'Scalable, secure, and feature-rich web applications using modern technologies.',
    },
    {
      id: 3,
      icon: <Smartphone size={28} />,
      title: 'Mobile Application Development',
      description: 'Cross-platform mobile apps for Android and iOS that deliver great user experience.',
    },
    {
      id: 4,
      icon: <Cloud size={28} />,
      title: 'Cloud Software Development',
      description: 'Cloud-native applications that ensure flexibility, scalability, and efficiency.',
    },
    {
      id: 5,
      icon: <Settings size={28} />,
      title: 'Enterprise Software Solutions',
      description: 'Robust enterprise solutions to streamline processes and improve productivity.',
    },
    {
      id: 6,
      icon: <Database size={28} />,
      title: 'Database Design & Development',
      description: 'Efficient database architecture and management for secure and fast data handling.',
    },
    {
      id: 7,
      icon: <ShieldCheck size={28} />,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure performance, security, and reliability.',
    },
    {
      id: 8,
      icon: <Wrench size={28} />,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your systems running smoothly.',
    },
  ];

  return (
    <section className="softdev-about-section">
      <Container>
        <div className="softdev-about-card">
          <div className="softdev-about-grid">
            <div className="softdev-about-brand-col">
              <div className="softdev-about-logo-wrapper">
                <img src={logoImage} alt="Digital Drive Resource Tech Logo" className="softdev-about-logo" />
                <h2 className="softdev-about-company-name">DIGITAL DRIVE</h2>
                <span className="softdev-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="softdev-about-divider"></div>
                <p className="softdev-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="softdev-about-content-col">
              <div className="softdev-about-header">
                <span className="softdev-about-eyebrow">ABOUT OUR SOFTWARE DEVELOPMENT SERVICES</span>
                <p className="softdev-about-intro">
                  We deliver end-to-end software development services tailored to your business needs. From ideation to deployment, we build solutions that are reliable, efficient, and future-ready.
                </p>
              </div>

              <div className="softdev-about-features-grid">
                {aboutFeatures.map((feature) => (
                  <div key={feature.id} className="softdev-about-feature-item">
                    <div className="softdev-about-feature-icon">{feature.icon}</div>
                    <div className="softdev-about-feature-text">
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
