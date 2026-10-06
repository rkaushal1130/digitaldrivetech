import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import './WebDevPricing.css';

export default function WebDevPricing() {
  const navigate = useNavigate();

  // Pricing guide cards with clear TODO placeholders as per Rule 8
  const pricingPlans = [
    {
      title: 'Basic Business Website',
      scope: '5-10 pages',
      // TODO: Replace ₹[X] - ₹[X] with verified starting pricing range for Basic Business Website
      priceDisplay: '₹[X] - ₹[X]',
      description: 'Ideal for small businesses and local service providers needing a solid digital presence.',
      features: [
        'Responsive mobile-first design',
        'Contact form & Google Maps integration',
        'SEO fundamentals included',
        'Social media integration',
        'Speed optimization'
      ]
    },
    {
      title: 'WordPress / CMS Website',
      scope: 'Dynamic & Editable',
      // TODO: Replace ₹[X] - ₹[X] with verified pricing range for WordPress / CMS Website
      priceDisplay: '₹[X] - ₹[X]',
      popular: true,
      description: 'Perfect for content-driven businesses wanting complete control to edit pages and blog posts.',
      features: [
        'Custom WordPress theme & styling',
        'Easy content management system',
        'Blog / news publishing engine',
        'SEO-ready structure & schema',
        'Admin dashboard training'
      ]
    },
    {
      title: 'E-commerce Website',
      scope: 'Online Store & Catalog',
      // TODO: Replace ₹[X] - ₹[X] with verified pricing range for E-commerce Website
      priceDisplay: '₹[X] - ₹[X]',
      description: 'Full-featured online shop built on Shopify, WooCommerce, or custom platforms.',
      features: [
        'Secure payment gateway integration',
        'Product & inventory management',
        'Cart, checkout & discount engine',
        'Order tracking & automated notifications',
        'Mobile commerce optimization'
      ]
    },
    {
      title: 'Custom Web Application',
      scope: 'Tailor-Made SaaS & Portals',
      // TODO: Replace ₹[X]+ with verified starting pricing for Custom Web Applications
      priceDisplay: '₹[X]+',
      description: 'Scalable web applications built with React, Next.js, Node.js, Python, or Laravel.',
      features: [
        'Custom business logic & workflows',
        'API development & integrations',
        'Role-based authentication & database',
        'High performance architecture',
        'Dedicated technical support'
      ]
    }
  ];

  return (
    <section className="webdev-pricing-section" id="website-development-cost">
      <Container>
        <div className="webdev-pricing-header">
          <span className="webdev-section-eyebrow">TRANSPARENT PRICING GUIDE</span>
          <h2>How Much Does Website Development Cost in India?</h2>
          <p className="webdev-pricing-intro">
            The cost of website development depends on the number of pages, design complexity, features, and integrations. Here is a general guide to help plan your investment. For complete plan comparisons, visit our{' '}
            <Link to="/pricing" title="Detailed Web Development Pricing Plans" className="webdev-inline-link">
              pricing
            </Link>{' '}
            page.
          </p>
        </div>

        <div className="webdev-pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`webdev-pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="webdev-popular-badge">Most Popular</span>}
              <div className="webdev-pricing-top">
                <h3 className="webdev-plan-title">{plan.title}</h3>
                <span className="webdev-plan-scope">{plan.scope}</span>
                <div className="webdev-price-val">
                  <span className="webdev-price-num">{plan.priceDisplay}</span>
                </div>
                <p className="webdev-plan-desc">{plan.description}</p>
              </div>

              <div className="webdev-plan-divider"></div>

              <ul className="webdev-plan-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <CheckCircle2 size={16} className="webdev-feat-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="webdev-plan-cta">
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => navigate('/contact')}
                  className="webdev-plan-btn"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="webdev-pricing-note-box">
          <div className="webdev-pricing-note-content">
            <HelpCircle size={22} className="webdev-note-icon" />
            <p>
              Contact us for an exact quote based on your requirements. Consultation is free.
            </p>
          </div>
          <Button onClick={() => navigate('/contact')}>
            Get Custom Quote <ArrowRight size={16} style={{ marginLeft: '6px' }} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
