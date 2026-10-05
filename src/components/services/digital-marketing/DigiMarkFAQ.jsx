import React, { useState } from 'react';
import Container from '../../ui/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './DigiMarkFAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Q1. What is digital marketing?',
    content: (
      <p>
        Digital marketing means promoting a business, product, service, or brand online. It includes platforms like Google, social media, websites, email, and online ads.
      </p>
    ),
  },
  {
    id: 2,
    question: 'Q2. How can digital marketing help my business?',
    content: (
      <p>
        At Digital Drive Resource Tech Private Limited (DigitalDriveTech), we first analyse your business and understand its requirements, then plan and implement a strategy. Digital marketing can improve online visibility, reach a relevant audience, build brand awareness, attract website traffic, and generate quality leads.
      </p>
    ),
  },
  {
    id: 3,
    question: 'Q3. Why is digital marketing important?',
    content: (
      <>
        <p>
          Today, many people use the internet and social media to find information, products, and services. So, businesses need to have an online presence.
        </p>
        <p>
          Digital marketing helps you reach more people, increase brand awareness, connect with customers, and grow your business online.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: 'Q4. How long does digital marketing take to show results?',
    content: (
      <>
        <p>
          It depends on your business, industry, goals, and the type of marketing you choose.
        </p>
        <p>
          SEO usually takes time and needs regular work. Paid ads can bring results faster, but the results can vary from business to business.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: 'Q5. Can digital marketing help generate leads?',
    content: (
      <>
        <p>
          Yes, digital marketing can help you get new leads through both organic and paid methods.
        </p>
        <div className="digimark-faq-lead-types">
          <div className="digimark-faq-lead-item">
            <span className="digimark-faq-lead-badge organic">Organic Leads</span>
            <p>These leads come through regular efforts like SEO and social media. They usually take time but can give long-term results.</p>
          </div>
          <div className="digimark-faq-lead-item">
            <span className="digimark-faq-lead-badge paid">Paid Leads</span>
            <p>Paid ads can help you reach the right people and get leads faster.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 6,
    question: 'Q6. How do I choose the right digital marketing company for my business?',
    content: (
      <p>
        Choose a company that understands your business, listens to your goals, gives you the right plan, communicates clearly, and shows you the results of its work.
      </p>
    ),
  },
  {
    id: 7,
    question: 'Q7. How can I get started with digital marketing services?',
    content: (
      <p>
        You can contact Digital Drive Resource Tech Private Limited (DigitalDriveTech) and tell us about your business, goals, and requirements. We will understand your needs and suggest the right digital marketing plan for you.
      </p>
    ),
  },
  {
    id: 8,
    question: 'Q8. Can digital marketing help a new business build its online presence?',
    content: (
      <>
        <p>
          Yes. Digital Drive Resource Tech Private Limited (DigitalDriveTech) helps businesses of all types build their online presence.
        </p>
        <p>
          Digital marketing can help a new business reach the right people, increase brand awareness, and take its first step toward building a strong online presence.
        </p>
      </>
    ),
  },
];

export default function DigiMarkFAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumnFaqs = faqData.filter((_, idx) => idx % 2 === 0);
  const rightColumnFaqs = faqData.filter((_, idx) => idx % 2 === 1);

  const renderFaqItem = (faq) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`digimark-faq-item ${isOpen ? 'open' : ''}`}
      >
        <button
          type="button"
          className="digimark-faq-question"
          onClick={() => toggleFAQ(faq.id)}
          aria-expanded={isOpen}
        >
          <span className="digimark-faq-q-text">{faq.question}</span>
          <span className="digimark-faq-icon-wrapper">
            <ChevronDown size={18} className="digimark-faq-chevron" />
          </span>
        </button>
        {isOpen && (
          <div className="digimark-faq-answer">
            {faq.content}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="digimark-faq-section" id="faq">
      <Container>
        <div className="digimark-faq-header">
          <div className="digimark-faq-badge">
            <HelpCircle size={16} />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="digimark-faq-title">
            Digital Marketing <span>FAQs</span>
          </h2>
          <p className="digimark-faq-subtitle">
            Find answers to commonly asked questions about our digital marketing solutions, strategies, and growth process.
          </p>
        </div>

        <div className="digimark-faq-grid">
          <div className="digimark-faq-column">
            {leftColumnFaqs.map(renderFaqItem)}
          </div>
          <div className="digimark-faq-column">
            {rightColumnFaqs.map(renderFaqItem)}
          </div>
        </div>
      </Container>
    </section>
  );
}
