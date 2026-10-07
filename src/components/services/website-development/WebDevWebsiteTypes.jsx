import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import {
  Building2,
  Building,
  Rocket,
  Briefcase,
  ShoppingBag,
  Settings,
  Layout,
  Code2
} from 'lucide-react';
import './WebDevServicesList.css';
import './WebDevWebsiteTypes.css';

export default function WebDevWebsiteTypes() {
  const websiteTypes = [
    {
      id: 1,
      icon: <Building2 size={26} />,
      title: 'Business Websites',
      description: (
        <>
          Informative, conversion-focused websites that present your company, core services, operating location and contact details so prospective clients can learn about your business and get in touch easily.
        </>
      )
    },
    {
      id: 2,
      icon: <Building size={26} />,
      title: 'Corporate Websites',
      description: (
        <>
          Structured corporate web platforms designed to communicate company divisions, leadership, corporate governance, career opportunities and enterprise capabilities with clear multi-level navigation.
        </>
      )
    },
    {
      id: 3,
      icon: <Rocket size={26} />,
      title: 'Startup Websites',
      description: (
        <>
          Dynamic, modern web experiences built to highlight your product or service, communicate unique value propositions, and capture early signups or business inquiries as your startup grows.
        </>
      )
    },
    {
      id: 4,
      icon: <Briefcase size={26} />,
      title: 'Portfolio Websites',
      description: (
        <>
          Visual showcase websites for agencies, designers, architects and professionals to display completed{' '}
          <Link to="/portfolio" title="View Our Portfolio" className="webdev-inline-link">
            portfolio projects
          </Link>
          , case studies, credentials and client outcomes.
        </>
      )
    },
    {
      id: 5,
      icon: <ShoppingBag size={26} />,
      title: 'E-commerce Websites',
      description: (
        <>
          Digital storefronts equipped with catalog management, product search, shopping carts, secure payment gateways and mobile-friendly checkout flows to sell products online.
        </>
      )
    },
    {
      id: 6,
      icon: <Settings size={26} />,
      title: 'Service-Based Websites',
      description: (
        <>
          Dedicated websites for professional service firms that clearly detail their{' '}
          <Link to="/services" title="Our Services" className="webdev-inline-link">
            service offerings
          </Link>
          , generate qualified inquiries, and make client consultation bookings straightforward.
        </>
      )
    },
    {
      id: 7,
      icon: <Layout size={26} />,
      title: 'Landing Pages',
      description: (
        <>
          Focused conversion landing pages designed around a specific marketing campaign, service offer, or product launch with clear messaging, benefit highlights and prominent calls to action.
        </>
      )
    },
    {
      id: 8,
      icon: <Code2 size={26} />,
      title: 'Custom Web Applications',
      description: (
        <>
          Interactive{' '}
          <Link to="/software-development" title="Software & Web Application Development" className="webdev-inline-link">
            web applications
          </Link>{' '}
          and business dashboards engineered around custom database architectures, user roles, APIs and internal operational workflows.
        </>
      )
    }
  ];

  return (
    <section className="webdev-website-types-section" id="website-types">
      <Container>
        <div className="webdev-services-list-header">
          <span className="webdev-section-eyebrow">WHAT WE BUILD</span>
          <h2>Types of Websites We Build</h2>
          <p className="webdev-services-list-intro">
            Every business has different goals, customers and requirements. We develop websites based on the purpose of your business, from professional company websites and portfolios to online stores and custom web applications.
          </p>
        </div>

        <div className="webdev-types-cards-grid">
          {websiteTypes.map((item) => (
            <div key={item.id} className="webdev-service-item-card">
              <div className="webdev-service-item-top">
                <div className="webdev-service-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="webdev-service-item-num">0{item.id}</span>
              </div>
              <h3 className="webdev-service-item-title">{item.title}</h3>
              <p className="webdev-service-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
