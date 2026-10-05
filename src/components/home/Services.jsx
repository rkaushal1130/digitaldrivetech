import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import services from '../../data/services';
import * as LucideIcons from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <Container>
      <section id="services">
        <SectionTitle
          tag="What We Do"
          title="Our Services"
          description="We provide end-to-end digital services to help your business grow and succeed."
        />

        <div className="services-grid">
          {services.map((service) => {
            const Icon = LucideIcons[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {Icon ? <Icon size={24} /> : <i className={service.icon}></i>}
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
