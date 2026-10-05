import React from 'react';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';
import './WhyChooseServices.css';

const whyChooseData = [
  { id: 1, icon: 'Users', label: 'Experienced Team' },
  { id: 2, icon: 'Settings', label: 'Custom Solutions' },
  { id: 3, icon: 'Clock', label: 'On-Time Delivery' },
  { id: 4, icon: 'Tag', label: 'Affordable Pricing' },
  { id: 5, icon: 'Zap', label: 'Latest Technologies' },
  { id: 6, icon: 'Headphones', label: 'Dedicated Support' },
];

export default function WhyChooseServices() {
  return (
    <section className="why-choose-services">
      <Container>
        <div className="why-choose-header">Why Choose Digital Drive Resource Tech Private Limited?</div>
        <div className="why-choose-grid">
          {whyChooseData.map((item) => {
            const Icon = LucideIcons[item.icon];
            return (
              <div key={item.id} className="why-choose-item">
                <div className="why-choose-icon">
                  {Icon ? <Icon size={24} /> : item.icon}
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
