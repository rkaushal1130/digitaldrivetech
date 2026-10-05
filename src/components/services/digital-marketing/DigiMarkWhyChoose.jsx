import React from 'react';
import Container from '../../ui/Container';
import { Users, BarChart2, Target, FileText, TrendingUp, Headphones } from 'lucide-react';
import './DigiMarkWhyChoose.css';

export default function DigiMarkWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'EXPERT TEAM',
      description: 'Experienced marketers with proven track records.',
      icon: <Users size={28} />,
    },
    {
      id: 2,
      title: 'DATA-DRIVEN APPROACH',
      description: 'We use analytics & insights to make smarter decisions for better outcomes.',
      icon: <BarChart2 size={28} />,
    },
    {
      id: 3,
      title: 'CUSTOM STRATEGIES',
      description: 'Tailored strategies that align with your unique business goals.',
      icon: <Target size={28} />,
    },
    {
      id: 4,
      title: 'TRANSPARENT REPORTING',
      description: 'Clear reports and regular updates to keep you informed.',
      icon: <FileText size={28} />,
    },
    {
      id: 5,
      title: 'RESULT ORIENTED',
      description: 'Focused on delivering measurable results and real business growth.',
      icon: <TrendingUp size={28} />,
    },
    {
      id: 6,
      title: 'DEDICATED SUPPORT',
      description: '24/7 support to ensure your success at every step.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section className="digimark-why-section">
      <Container>
        <div className="digimark-why-card">
          <div className="digimark-why-header">
            <h2>WHY CHOOSE US?</h2>
          </div>

          <div className="digimark-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="digimark-why-item">
                <div className="digimark-why-icon">{card.icon}</div>
                <h3 className="digimark-why-title">{card.title}</h3>
                <p className="digimark-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
