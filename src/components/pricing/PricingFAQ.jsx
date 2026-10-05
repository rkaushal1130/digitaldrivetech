import React, { useState } from 'react';
import Container from '../ui/Container';
import './PricingFAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Can I upgrade my plan later?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time to suit your business needs. When you upgrade, you only pay the difference between your current plan and the new one, and the additional features are activated right away with no downtime.',
  },
  {
    id: 2,
    question: 'Do you provide domain and hosting?',
    answer:
      'Yes, we can help you with domain registration and reliable hosting as per your requirements. We offer fast, secure, SSL-enabled hosting and can also manage renewals, backups and email setup so everything stays in one place.',
  },
  {
    id: 3,
    question: 'How long does a project take?',
    answer:
      'Project timelines depend on the size and complexity. A basic website usually takes 1-2 weeks, while larger custom projects may take 4-6 weeks. We share a clear timeline before starting and always deliver on time.',
  },
  {
    id: 4,
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we provide dedicated support and maintenance after project delivery. This includes bug fixes, security updates, performance monitoring and content changes, with support durations ranging from 1 to 6 months depending on your plan.',
  },
];

export default function PricingFAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="pricing-faq-section">
      <Container>
        <div className="pricing-faq-header">
          <div className="section-tag">Frequently Asked Questions</div>
          <h2 className="section-title">Have Questions? We've Got Answers</h2>
        </div>
        <div className="pricing-faq-grid">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`pricing-faq-item ${openId === faq.id ? 'open' : ''}`}
            >
              <div className="pricing-faq-question" onClick={() => toggleFAQ(faq.id)}>
                <span>{faq.question}</span>
                <span className="pricing-faq-arrow">▼</span>
              </div>
              {openId === faq.id && (
                <div className="pricing-faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
