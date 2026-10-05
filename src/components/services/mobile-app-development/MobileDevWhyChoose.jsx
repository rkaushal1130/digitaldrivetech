import React from 'react';
import Container from '../../ui/Container';
import { Users, Code2, Rocket, Tag, Headphones } from 'lucide-react';
import './MobileDevWhyChoose.css';

export default function MobileDevWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'EXPERIENCED TEAM',
      description: 'Skilled developers with proven expertise.',
      icon: <Users size={28} />,
    },
    {
      id: 2,
      title: 'CLEAN & MODERN CODE',
      description: 'High-quality code for long-term success.',
      icon: <Code2 size={28} />,
    },
    {
      id: 3,
      title: 'ON-TIME DELIVERY',
      description: 'We deliver on time, every time.',
      icon: <Rocket size={28} />,
    },
    {
      id: 4,
      title: 'AFFORDABLE PRICING',
      description: 'Best solutions within your budget.',
      icon: <Tag size={28} />,
    },
    {
      id: 5,
      title: 'DEDICATED SUPPORT',
      description: '24/7 support for your peace of mind.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section className="mobiledev-why-section">
      <Container>
        <div className="mobiledev-why-card">
          <div className="mobiledev-why-header">
            <h2>WHY CHOOSE US?</h2>
          </div>

          <div className="mobiledev-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="mobiledev-why-item">
                <div className="mobiledev-why-icon">{card.icon}</div>
                <h3 className="mobiledev-why-title">{card.title}</h3>
                <p className="mobiledev-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
