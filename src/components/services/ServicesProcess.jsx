import React from 'react';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';
import './ServicesProcess.css';

const processSteps = [
  {
    id: 1,
    icon: 'Search',
    number: '01',
    title: 'Discover',
    description: 'We understand your requirements and business goals.',
  },
  {
    id: 2,
    icon: 'ClipboardList',
    number: '02',
    title: 'Plan',
    description: 'We plan project strategy, timeline and set the right roadmap.',
  },
  {
    id: 3,
    icon: 'Palette',
    number: '03',
    title: 'Design',
    description: 'We design modern, clean and user-friendly interfaces.',
  },
  {
    id: 4,
    icon: 'Monitor',
    number: '04',
    title: 'Develop',
    description: 'We build fast, secure and scalable solutions.',
  },
  {
    id: 5,
    icon: 'ShieldCheck',
    number: '05',
    title: 'Test',
    description: 'We test everything carefully to deliver a perfect product.',
  },
  {
    id: 6,
    icon: 'Rocket',
    number: '06',
    title: 'Launch',
    description: 'We launch final product and provide ongoing support.',
  },
];

export default function ServicesProcess() {
  return (
    <section className="services-process">
      <Container>
        <div className="services-process-header">
          <span className="services-process-eyebrow">Our Development Process</span>
          <h2>How We Work</h2>
        </div>
        <div className="services-process-grid">
          <div className="services-process-arrow"></div>
          {processSteps.map((step) => {
            const Icon = LucideIcons[step.icon];
            return (
              <div key={step.id} className="services-process-step">
                <div className="services-process-circle">
                  {Icon ? <Icon size={24} /> : step.icon}
                </div>
                <span className="services-step-num">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
