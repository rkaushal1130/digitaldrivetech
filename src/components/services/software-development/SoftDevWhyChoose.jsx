import React from 'react';
import Container from '../../ui/Container';
import { Users, Code2, Rocket, ShieldCheck, Headphones } from 'lucide-react';
import './SoftDevWhyChoose.css';

export default function SoftDevWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'EXPERIENCED DEVELOPERS',
      description: 'Skilled and certified professionals.',
      icon: <Users size={28} />,
    },
    {
      id: 2,
      title: 'ROBUST & SCALABLE ARCHITECTURE',
      description: 'Engineered for long-term growth and reliability.',
      icon: <Code2 size={28} />,
    },
    {
      id: 3,
      title: 'ON-TIME DELIVERY',
      description: 'We follow agile methodologies to deliver on time.',
      icon: <Rocket size={28} />,
    },
    {
      id: 4,
      title: 'SECURE & COMPLIANT',
      description: 'Top-tier security standards built into the core.',
      icon: <ShieldCheck size={28} />,
    },
    {
      id: 5,
      title: '24/7 SUPPORT',
      description: 'Dedicated support for your peace of mind.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section className="softdev-why-section">
      <Container>
        <div className="softdev-why-card">
          <div className="softdev-why-header">
            <h2>WHY CHOOSE US?</h2>
          </div>

          <div className="softdev-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="softdev-why-item">
                <div className="softdev-why-icon">{card.icon}</div>
                <h3 className="softdev-why-title">{card.title}</h3>
                <p className="softdev-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
