import React, { useState } from 'react';
import Container from '../../ui/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './WebDevFAQ.css';

const faqData = [
  {
    id: 1,
    question: 'How long does website development take?',
    answer:
      'A basic business website typically takes 2 to 4 weeks. E-commerce websites and custom web applications usually take 6 to 12 weeks depending on features and complexity.'
  },
  {
    id: 2,
    question: 'How much does website development cost?',
    answer:
      'Cost depends on the type of website and features required. We offer transparent, affordable pricing for startups and established businesses. Contact us for a free quote.'
  },
  {
    id: 3,
    question: 'Will my website be mobile-friendly and SEO-ready?',
    answer:
      'Yes. Every website we build is fully responsive and includes SEO fundamentals: clean code, fast loading speed, proper heading structure, metadata, and schema markup.'
  },
  {
    id: 4,
    question: 'Which technology is best for my website?',
    answer:
      'It depends on your goals. WordPress suits content-driven sites, Shopify and WooCommerce suit online stores, and React or Next.js suit custom, high-performance applications. We recommend the best fit after a free consultation.'
  },
  {
    id: 5,
    question: 'Do you provide support after the website is launched?',
    answer:
      'Yes. We provide ongoing support and maintenance including updates, backups, security monitoring, and technical help.'
  },
  {
    id: 6,
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can redesign or rebuild your current website while preserving your existing search rankings through proper redirects and SEO migration.'
  },
  {
    id: 7,
    question: 'Do you work with clients outside Mohali?',
    answer:
      'Yes. We work with businesses across India and internationally. Our process is fully remote-friendly.'
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
            <HelpCircle size={16} />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2>Website Development FAQs</h2>
          <p className="webdev-faq-subtitle">
            Get clear, upfront answers regarding timelines, costs, technology choices, and post-launch maintenance.
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
                <button
                  type="button"
                  className="webdev-faq-question-btn"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`webdev-faq-ans-${faq.id}`}
                >
                  <h3 className="webdev-faq-question-text">{faq.question}</h3>
                  <span className="webdev-faq-icon-wrapper">
                    <ChevronDown size={20} className="webdev-faq-chevron" />
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`webdev-faq-ans-${faq.id}`}
                    className="webdev-faq-answer"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
