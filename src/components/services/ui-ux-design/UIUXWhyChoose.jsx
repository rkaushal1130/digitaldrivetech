import React from 'react';
import Container from '../../ui/Container';
import { User, Sparkles, MonitorSmartphone, Target, Clock, Headphones } from 'lucide-react';
import './UIUXWhyChoose.css';

export default function UIUXWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'USER-CENTERED DESIGN',
      description: 'We prioritize user needs to deliver impactful experiences.',
      icon: <User size={28} />,
    },
    {
      id: 2,
      title: 'MODERN & CREATIVE',
      description: 'We create modern, unique, and visually engaging designs.',
      icon: <Sparkles size={28} />,
    },
    {
      id: 3,
      title: 'RESPONSIVE DESIGNS',
      description: 'We ensure perfect experiences across all devices.',
      icon: <MonitorSmartphone size={28} />,
    },
    {
      id: 4,
      title: 'PIXEL-PERFECT',
      description: 'We deliver clean, precise, and high-quality designs.',
      icon: <Target size={28} />,
    },
    {
      id: 5,
      title: 'FAST & ON-TIME',
      description: 'We value your time and deliver within deadlines.',
      icon: <Clock size={28} />,
    },
    {
      id: 6,
      title: 'DEDICATED SUPPORT',
      description: 'We provide ongoing support throughout your project.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section className="uiux-why-section">
      <Container>
        <div className="uiux-why-card">
          <div className="uiux-why-header">
            <h2>WHY CHOOSE US?</h2>
          </div>

          <div className="uiux-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="uiux-why-item">
                <div className="uiux-why-icon">{card.icon}</div>
                <h3 className="uiux-why-title">{card.title}</h3>
                <p className="uiux-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
