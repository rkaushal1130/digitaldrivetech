import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';
import './ServicesGrid.css';

const servicesData = [
  {
    id: 1,
    icon: 'Monitor',
    title: 'Website Development',
    path: '/services/website-development',
    description: 'We build modern, responsive and SEO-friendly websites that help you build a strong online presence and grow your business.',
  },
  {
    id: 2,
    icon: 'Smartphone',
    title: 'Mobile App Development',
    path: '/services/mobile-app-development',
    description: 'We create high-performance mobile applications for Android and iOS with smooth user experience and scalable architecture.',
  },
  {
    id: 3,
    icon: 'Palette',
    title: 'UI/UX Design',
    path: '/services/ui-ux-design',
    description: 'We design intuitive and engaging user experiences that make your digital products simple, attractive and effective.',
  },
  {
    id: 4,
    icon: 'Code2',
    title: 'Software Development',
    path: '/services/software-development',
    description: 'We develop custom software solutions that automate processes, improve efficiency and solve complex business challenges.',
  },
  {
    id: 5,
    icon: 'Megaphone',
    title: 'Digital Marketing',
    path: '/services/digital-marketing',
    description: 'From SEO to Social Media, we help you increase visibility, generate leads and grow your brand online.',
  },
  {
    id: 6,
    icon: 'Headphones',
    title: 'Maintenance & Support',
    path: '/contact',
    description: 'We provide 24/7 support, regular updates and performance optimization to keep your systems secure and running smoothly.',
  },
];

export default function ServicesGrid() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="services-section">
      <Container>
        <div className="services-section-header">
          <span className="services-section-eyebrow">What We Offer</span>
          <h2>Our Professional Services</h2>
        </div>
        <div className="services-section-grid">
          {servicesData.map((service) => {
            const Icon = LucideIcons[service.icon];
            return (
              <div
                key={service.id}
                className="services-section-card"
                onClick={() => handleCardClick(service.path)}
                style={{ cursor: 'pointer' }}
              >
                <div className="services-section-icon">
                  {Icon ? <Icon size={24} /> : service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="services-section-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(service.path);
                  }}
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
