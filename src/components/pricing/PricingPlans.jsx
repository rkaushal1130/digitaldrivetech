import React, { useState } from 'react';
import Container from '../ui/Container';
import './PricingPlans.css';

const plansData = [
  {
    id: 1,
    name: 'Basic',
    description: 'Perfect for startups and small businesses.',
    price: '₹9,999',
    period: '/ project',
    features: [
      'Up to 5 Pages Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '1 Month Support',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Standard',
    description: 'Best for growing businesses and professional websites.',
    price: '₹19,999',
    period: '/ project',
    features: [
      'Up to 10 Pages Website',
      'Responsive & Modern Design',
      'Advanced SEO Setup',
      'Speed Optimization',
      'Contact Form & Live Chat',
      '3 Months Support',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Premium',
    description: 'For businesses that need advanced features and custom solutions.',
    price: '₹34,999',
    period: '/ project',
    features: [
      'Unlimited Pages',
      'Custom Design',
      'Advanced SEO & Analytics',
      'Speed & Security Optimization',
      'CMS Integration',
      '6 Months Support',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <section className="pricing-plans-section">
      <Container>
        <div className="pricing-plans-header">
          <div className="section-tag">Our Pricing Plans</div>
          <h2 className="section-title">Affordable Plans, Premium Results</h2>
          <p className="section-description">No hidden charges. Pay for what you need.</p>
        </div>
        <div className="pricing-plans-grid">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-plan ${selectedPlan === plan.id ? 'popular' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
              style={{ cursor: 'pointer' }}
            >
              {plan.popular && <div className="pricing-badge-popular">MOST POPULAR</div>}
              <h3>{plan.name}</h3>
              <p className="pricing-plan-desc">{plan.description}</p>
              <div className="pricing-plan-price">
                {plan.price} <span>{plan.period}</span>
              </div>
              <ul className="pricing-plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="pricing-check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`pricing-plan-btn ${selectedPlan === plan.id ? 'popular-btn' : ''}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
