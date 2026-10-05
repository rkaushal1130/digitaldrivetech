import React from 'react';
import Container from '../../ui/Container';
import { Users, Code2, Rocket, Tag, Headphones } from 'lucide-react';
import './WebDevWhyChoose.css';

export default function WebDevWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'EXPERIENCED DEVELOPERS',
      description: 'Skilled and certified professionals.',
      icon: <Users size={28} />,
    },
    {
      id: 2,
      title: 'CLEAN & SCALABLE CODE',
      description: 'High-quality code for long-term growth.',
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
    <section className="webdev-why-section">
      <Container>
        <div className="webdev-why-card">
          <div className="webdev-why-header">
            <h2>WHY CHOOSE US?</h2>
          </div>

          <div className="webdev-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="webdev-why-item">
                <div className="webdev-why-icon">{card.icon}</div>
                <h3 className="webdev-why-title">{card.title}</h3>
                <p className="webdev-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
