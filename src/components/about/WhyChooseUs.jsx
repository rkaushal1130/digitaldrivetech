import React from 'react';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';
import './WhyChooseUs.css';

const services = [
  { id: 1, icon: 'Monitor', title: 'Website Development' },
  { id: 2, icon: 'Smartphone', title: 'Mobile App Development' },
  { id: 3, icon: 'Palette', title: 'UI/UX Design' },
  { id: 4, icon: 'ShoppingCart', title: 'E-Commerce Solutions' },
  { id: 5, icon: 'Megaphone', title: 'Digital Marketing' },
  { id: 6, icon: 'Code2', title: 'Software Development' },
  { id: 7, icon: 'Layers', title: 'CMS Development' },
  { id: 8, icon: 'Headphones', title: 'Maintenance & Support' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <Container>
        <div className="cards-split">
          <div className="feature-panel">
            <div>
              <div className="section-tag">Why Choose Us?</div>
              <h2 className="section-title">Why Businesses Choose Digital Drive Resource Tech Private Limited</h2>
              <ul>
                <li>Experienced and skilled team</li>
                <li>Custom solutions tailored to your needs</li>
                <li>On-time delivery and 24/7 support</li>
                <li>Affordable pricing with no hidden costs</li>
                <li>Focus on quality and client satisfaction</li>
              </ul>
            </div>

            <div className="illus-box">
              <div className="floating-dot a"><LucideIcons.Cloud size={20} /></div>
              <div className="floating-dot b"><LucideIcons.Lock size={20} /></div>
              <div className="floating-dot c"><LucideIcons.Settings size={20} /></div>
              <div className="floating-dot d"><LucideIcons.Smartphone size={20} /></div>
              <div className="illus-laptop"></div>
            </div>
          </div>

          <div className="service-panel">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">What We Do</h2>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = LucideIcons[service.icon];
                return (
                  <div key={service.id} className="service-item">
                    <div className="service-icon">
                      {Icon ? <Icon size={24} /> : service.icon}
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
