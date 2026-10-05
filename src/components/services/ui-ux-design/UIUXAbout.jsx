import React from 'react';
import Container from '../../ui/Container';
import { Search, LayoutGrid, Paintbrush, Users, Play, Layers, Smartphone, Globe } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import './UIUXAbout.css';

export default function UIUXAbout() {
  const aboutFeatures = [
    {
      id: 1,
      icon: <Search size={28} />,
      title: 'User Research',
      description: 'We understand your users, their needs, and pain points to create meaningful solutions.',
    },
    {
      id: 2,
      icon: <LayoutGrid size={28} />,
      title: 'Wireframing',
      description: 'We create clear and structured wireframes to define layout, flow, and functionality.',
    },
    {
      id: 3,
      icon: <Paintbrush size={28} />,
      title: 'UI Design',
      description: 'We design visually appealing interfaces that reflect your brand and engage users.',
    },
    {
      id: 4,
      icon: <Users size={28} />,
      title: 'UX Design',
      description: 'We focus on seamless user journeys to ensure a smooth and satisfying experience.',
    },
    {
      id: 5,
      icon: <Play size={28} />,
      title: 'Interactive Prototyping',
      description: 'We build interactive prototypes to test ideas and validate user flows early.',
    },
    {
      id: 6,
      icon: <Layers size={28} />,
      title: 'Design Systems',
      description: 'We create reusable components and style guides for consistency and scalability.',
    },
    {
      id: 7,
      icon: <Smartphone size={28} />,
      title: 'Mobile App UI',
      description: 'We design beautiful and user-friendly mobile interfaces for Android and iOS.',
    },
    {
      id: 8,
      icon: <Globe size={28} />,
      title: 'Website UI',
      description: 'We design modern, responsive and conversion-focused website interfaces.',
    },
  ];

  return (
    <section className="uiux-about-section">
      <Container>
        <div className="uiux-about-card">
          <div className="uiux-about-grid">
            <div className="uiux-about-brand-col">
              <div className="uiux-about-logo-wrapper">
                <img src={logoImage} alt="Digital Drive Resource Tech Logo" className="uiux-about-logo" />
                <h2 className="uiux-about-company-name">DIGITAL DRIVE</h2>
                <span className="uiux-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="uiux-about-divider"></div>
                <p className="uiux-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="uiux-about-content-col">
              <div className="uiux-about-header">
                <span className="uiux-about-eyebrow">ABOUT OUR UI/UX DESIGN SERVICES</span>
                <p className="uiux-about-intro">
                  We design intuitive, engaging, and user-friendly digital experiences that not only look great but also deliver results. Our research-driven design process ensures that every pixel serves a purpose.
                </p>
              </div>

              <div className="uiux-about-features-grid">
                {aboutFeatures.map((feature) => (
                  <div key={feature.id} className="uiux-about-feature-item">
                    <div className="uiux-about-feature-icon">{feature.icon}</div>
                    <div className="uiux-about-feature-text">
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
