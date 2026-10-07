import React from 'react';
import Container from '../../ui/Container';
import {
  Store,
  Rocket,
  Building2,
  Briefcase,
  ShoppingBag,
  UserCheck
} from 'lucide-react';
import './WebDevServicesList.css';
import './WebDevAudience.css';

export default function WebDevAudience() {
  const audienceSegments = [
    {
      id: 1,
      icon: <Store size={26} />,
      title: 'Small & Local Businesses',
      description: (
        <>
          Build a credible online presence that clearly showcases your services, operating details and contact information so local customers in Mohali, Chandigarh and surrounding areas can find and contact you easily.
        </>
      )
    },
    {
      id: 2,
      icon: <Rocket size={26} />,
      title: 'Startups & New Ventures',
      description: (
        <>
          Launch a modern, agile website designed to communicate your unique value proposition, validate your solution in the market, and scale smoothly as your user base and product scope expand.
        </>
      )
    },
    {
      id: 3,
      icon: <Building2 size={26} />,
      title: 'Corporate & Established Brands',
      description: (
        <>
          Establish an authoritative digital identity with multi-tier service architectures, robust security, team profiles, and structured information designed for enterprise clients and partners.
        </>
      )
    },
    {
      id: 4,
      icon: <Briefcase size={26} />,
      title: 'Service-Based Companies',
      description: (
        <>
          Streamline client inquiries, showcase detailed service packages, feature verified client work, and provide clear paths for prospective customers to request proposals or schedule consultations.
        </>
      )
    },
    {
      id: 5,
      icon: <ShoppingBag size={26} />,
      title: 'E-Commerce & Retail Stores',
      description: (
        <>
          Sell products online through responsive storefronts featuring intuitive catalog navigation, fast product filtering, secure shopping carts, and seamless payment gateway processing.
        </>
      )
    },
    {
      id: 6,
      icon: <UserCheck size={26} />,
      title: 'Consultants & Professionals',
      description: (
        <>
          Strengthen your personal brand with an elegant website highlighting your credentials, published insights, client testimonials, and speaking engagements to build trust in your expertise.
        </>
      )
    }
  ];

  return (
    <section className="webdev-audience-section" id="target-audience">
      <Container>
        <div className="webdev-services-list-header">
          <span className="webdev-section-eyebrow">WHO WE BUILD FOR</span>
          <h2>Who Can Benefit From Our Website Development Services?</h2>
          <p className="webdev-services-list-intro">
            From local businesses establishing an online presence to growing startups and corporate brands expanding their digital reach, our website development services are tailored to the distinct operational needs of each organization.
          </p>
        </div>

        <div className="webdev-services-cards-grid">
          {audienceSegments.map((item) => (
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
