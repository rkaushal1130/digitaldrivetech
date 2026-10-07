import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './WebDevFAQ.css';

const faqData = [
  {
    id: 1,
    question: 'What is website development and what does it include?',
    answer: (
      <>
        Website development is the process of planning, designing, building, testing and maintaining a website or web application. It includes frontend and backend engineering, responsive design, performance optimization, and the technical implementation required to create a fast, secure and user-friendly online presence for your business.
      </>
    )
  },
  {
    id: 2,
    question: 'How much does website development cost and how long does it take?',
    answer: (
      <>
        Website development cost and timelines depend on the project's scope, including page count, custom features, design complexity and technical integrations. A standard business website generally requires less time than a custom web application or e-commerce platform.{' '}
        <Link to="/contact" className="webdev-faq-inline-link" title="Contact Digital Drive for an estimate">
          Contact Digital Drive
        </Link>{' '}
        with your project requirements for an accurate timeline and estimate.
      </>
    )
  },
  {
    id: 3,
    question: 'Do you provide responsive and SEO-friendly website development?',
    answer: (
      <>
        Yes. Every website we build features responsive website development that adapts seamlessly across mobile, tablet and desktop devices. We also implement an SEO-ready technical foundation, including clean code, semantic structure, fast page speeds and{' '}
        <Link to="/digital-marketing-company-in-mohali" className="webdev-faq-inline-link" title="Digital Marketing & SEO Services">
          on-page SEO
        </Link>{' '}
        fundamentals to support search engine visibility.
      </>
    )
  },
  {
    id: 4,
    question: 'Can you develop e-commerce websites and redesign existing sites?',
    answer: (
      <>
        Yes. Digital Drive develops tailored e-commerce website solutions with product management, shopping carts, secure checkout and payment integrations. We also provide website redesign services to modernize outdated websites, improving user experience, mobile responsiveness and technical performance while preserving your established brand identity and content.
      </>
    )
  },
  {
    id: 5,
    question: 'Do you provide website maintenance and post-launch support?',
    answer: (
      <>
        Yes. We provide ongoing website maintenance and post-launch technical support based on your business requirements. This includes software updates, performance monitoring, security checkups, technical troubleshooting and feature enhancements so your website continues running smoothly.
      </>
    )
  },
  {
    id: 6,
    question: 'Do you provide website development services in Mohali and how can I get started?',
    answer: (
      <>
        Yes. Digital Drive provides professional website development services in Mohali and works with businesses across Chandigarh, Punjab and throughout India. To get started,{' '}
        <Link to="/contact" className="webdev-faq-inline-link" title="Contact Digital Drive">
          share your business requirements
        </Link>
        , website goals and preferred features with our team, and we will guide you on the appropriate development approach for your project.
      </>
    )
  }
];

export default function WebDevFAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="webdev-faq-section" id="faq">
      <Container>
        <div className="webdev-faq-header">
          <div className="webdev-faq-badge">
            <HelpCircle size={16} aria-hidden="true" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2>Frequently Asked Questions About Website Development</h2>
          <p className="webdev-faq-subtitle">
            Find clear answers to common questions about our website development process, pricing factors, timelines and technical standards.
          </p>
        </div>

        <div className="webdev-faq-container">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`webdev-faq-item ${isOpen ? 'open' : ''}`}
              >
                <h3 className="webdev-faq-item-heading">
                  <button
                    type="button"
                    id={`webdev-faq-btn-${faq.id}`}
                    className="webdev-faq-question-btn"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`webdev-faq-ans-${faq.id}`}
                  >
                    <span className="webdev-faq-question-text">{faq.question}</span>
                    <span className="webdev-faq-icon-wrapper" aria-hidden="true">
                      <ChevronDown size={20} className="webdev-faq-chevron" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`webdev-faq-ans-${faq.id}`}
                  role="region"
                  aria-labelledby={`webdev-faq-btn-${faq.id}`}
                  className="webdev-faq-answer"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
