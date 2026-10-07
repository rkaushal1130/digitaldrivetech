import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEOHead from '../components/common/SEOHead';
import { getArticleBySlug, getRelatedArticles } from '../data/blogArticles';
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Building,
  CheckCircle2
} from 'lucide-react';
import './BlogArticle.css';

const LINK_RULES = [
  { phrase: 'professional website development services', to: '/website-development', title: 'Professional Website Development Services' },
  { phrase: 'SEO-friendly website development services', to: '/website-development', title: 'SEO-Friendly Website Development Services' },
  { phrase: 'e-commerce website development solutions', to: '/website-development', title: 'E-Commerce Website Development Solutions' },
  { phrase: 'website development services in Mohali', to: '/website-development', title: 'Website Development Services in Mohali' },
  { phrase: 'website development and redesign services', to: '/website-development', title: 'Website Development & Redesign Services' },
  { phrase: 'our website development services', to: '/website-development', title: 'Our Website Development Services' },
  { phrase: 'learn more about our website development services', to: '/website-development', title: 'Website Development Services' },
  { phrase: 'custom website development', to: '/website-development', title: 'Custom Website Development' },
  { phrase: 'responsive website development', to: '/website-development', title: 'Responsive Website Development' },
  { phrase: 'professional website development', to: '/website-development', title: 'Professional Website Development' },
  { phrase: 'website development services', to: '/website-development', title: 'Website Development Services' },
  { phrase: 'verified portfolio projects', to: '/portfolio', title: 'Our Portfolio Projects' },
  { phrase: 'verified portfolios', to: '/portfolio', title: 'Our Portfolio' },
  { phrase: 'UI/UX designs', to: '/ui-ux-design', title: 'UI/UX Design Services' },
  { phrase: 'UI/UX design', to: '/ui-ux-design', title: 'UI/UX Design Services' },
  { phrase: 'custom web applications', to: '/software-development', title: 'Custom Web Applications' },
  { phrase: 'custom web application', to: '/software-development', title: 'Custom Web Applications' },
  { phrase: 'technical SEO', to: '/digital-marketing', title: 'Digital Marketing & Technical SEO' },
];

function formatTextWithLinks(text) {
  if (typeof text !== 'string') return text;

  for (const rule of LINK_RULES) {
    const idx = text.toLowerCase().indexOf(rule.phrase.toLowerCase());
    if (idx !== -1) {
      const before = text.slice(0, idx);
      const matched = text.slice(idx, idx + rule.phrase.length);
      const after = text.slice(idx + rule.phrase.length);
      return (
        <>
          {before}
          <Link to={rule.to} className="article-inline-link" title={rule.title}>
            {matched}
          </Link>
          {after}
        </>
      );
    }
  }
  return text;
}

export default function BlogArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    url: `https://www.digitaldrivetech.com/blog/${article.slug}`,
    datePublished: '2025-01-15T09:00:00+05:30',
    dateModified: '2025-01-15T09:00:00+05:30',
    author: {
      '@type': 'Organization',
      name: 'Digital Drive Resource Tech Private Limited',
      url: 'https://www.digitaldrivetech.com/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Digital Drive Resource Tech Private Limited',
      url: 'https://www.digitaldrivetech.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.digitaldrivetech.com/images/logo.webp'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.digitaldrivetech.com/blog/${article.slug}`
    }
  };

  return (
    <div className="blog-article-page">
      <SEOHead
        pageUrl={`https://www.digitaldrivetech.com/blog/${article.slug}`}
        pageTitle={`${article.metaTitle} | Digital Drive`}
        metaTitle={`${article.metaTitle} | Digital Drive`}
        metaDescription={article.metaDescription}
        ogTitle={`${article.metaTitle} | Digital Drive`}
        ogDescription={article.metaDescription}
        ogUrl={`https://www.digitaldrivetech.com/blog/${article.slug}`}
        ogImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        twitterTitle={`${article.metaTitle} | Digital Drive`}
        twitterDescription={article.metaDescription}
        structuredData={articleSchema}
      />

      <main id="main-content" className="blog-article-main">
        {/* ARTICLE HEADER / HERO */}
        <header className="blog-article-hero">
          <Container>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="article-breadcrumb">
              <ol>
                <li>
                  <Link to="/" title="Home">Home</Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" title="Blog">Blog</Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                <li aria-current="page">{article.title}</li>
              </ol>
            </nav>

            <div className="article-hero-inner">
              <div className="article-category-badge">
                <Tag size={14} aria-hidden="true" />
                <span>{article.category}</span>
              </div>

              {/* Single H1 on Page */}
              <h1 className="article-main-title">{article.title}</h1>

              <div className="article-meta-row">
                <span className="article-meta-item">
                  <Building size={14} aria-hidden="true" /> Published by Digital Drive Tech Team
                </span>
                <span className="meta-dot" aria-hidden="true">•</span>
                <span className="article-meta-item">
                  <Calendar size={14} aria-hidden="true" /> {article.publishedDate}
                </span>
                <span className="meta-dot" aria-hidden="true">•</span>
                <span className="article-meta-item">
                  <Clock size={14} aria-hidden="true" /> {article.readTime}
                </span>
              </div>
            </div>
          </Container>
        </header>

        {/* ARTICLE BODY */}
        <section className="blog-article-body-section">
          <Container>
            <div className="article-layout">
              <div className="article-content-wrapper">
                {/* Lead Text */}
                {article.leadText && (
                  <div className="article-lead-box">
                    <p>{article.leadText}</p>
                  </div>
                )}

                {/* Content Sections */}
                {article.sections && article.sections.map((sec, sIdx) => (
                  <section key={sIdx} className="article-content-block">
                    <h2>{sec.h2}</h2>

                    {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{formatTextWithLinks(p)}</p>
                    ))}

                    {/* Optional Subsections */}
                    {sec.h3s && sec.h3s.map((sub, subIdx) => (
                      <div key={subIdx} className="article-sub-block">
                        <h3>{sub.title}</h3>
                        <p>{formatTextWithLinks(sub.content)}</p>
                      </div>
                    ))}

                    {/* Optional Bullet List */}
                    {sec.bulletList && (
                      <ul className="article-bullet-list">
                        {sec.bulletList.map((item, bIdx) => (
                          <li key={bIdx}>
                            <CheckCircle2 size={18} className="bullet-check-icon" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Optional Comparison / Pricing Table */}
                    {sec.table && (
                      <div className="article-table-container">
                        <table className="article-data-table">
                          <thead>
                            <tr>
                              {sec.table.headers.map((th, thIdx) => (
                                <th key={thIdx}>{th}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sec.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}

                {/* Specific FAQs If Present */}
                {article.faqs && article.faqs.length > 0 && (
                  <section className="article-faq-section" aria-label="Frequently Asked Questions">
                    <div className="article-faq-header">
                      <HelpCircle size={22} className="faq-icon" aria-hidden="true" />
                      <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="article-faq-list">
                      {article.faqs.map((faq, fIdx) => {
                        const isOpen = openFaqIndex === fIdx;
                        return (
                          <div key={fIdx} className={`article-faq-item ${isOpen ? 'open' : ''}`}>
                            <h3>
                              <button
                                type="button"
                                className="article-faq-toggle"
                                onClick={() => toggleFaq(fIdx)}
                                aria-expanded={isOpen}
                              >
                                <span>{faq.q}</span>
                                <ChevronDown size={18} className="faq-chevron" aria-hidden="true" />
                              </button>
                            </h3>
                            {isOpen && (
                              <div className="article-faq-answer">
                                <p>{faq.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Verified Author & Organization Attribution */}
                <div className="article-author-card">
                  <div className="author-card-badge">VERIFIED IT COMPANY</div>
                  <h3 className="author-name">Digital Drive Resource Tech Private Limited</h3>
                  <p className="author-bio">
                    Digital Drive is an established IT and website development company based in Mohali, Punjab. We engineer high-performance websites, custom web applications, mobile apps, and digital solutions for growing enterprises across Chandigarh, Punjab, and India.
                  </p>
                  <p className="author-location">
                    📍 Office No. 507, 5th Floor, E-257, Veerji Tower, Phase 8B, Industrial Area, Sector 74, Mohali, Punjab 160071
                  </p>
                </div>

                {/* CTA Card Leading to Main Service Page */}
                {article.cta && (
                  <div className="article-cta-box">
                    <div className="article-cta-glow" aria-hidden="true"></div>
                    <h2>{article.cta.heading}</h2>
                    <p>{article.cta.text}</p>
                    <div className="article-cta-btn-wrapper">
                      <Button to={article.cta.buttonLink}>
                        {article.cta.buttonText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                      </Button>
                      <Button variant="outline" to="/contact">
                        Contact Us Today
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* RELATED CLUSTER ARTICLES (INTERNAL TOPICAL CROSS-LINKING) */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="article-related-section">
            <Container>
              <div className="related-section-header">
                <span className="related-eyebrow">CONTINUE EXPLORING</span>
                <h2>Related Website Development Guides</h2>
                <p>
                  Deepen your understanding with our companion guides on costs, responsive architecture, and web technology.
                </p>
              </div>

              <div className="related-articles-grid">
                {relatedArticles.map((rel) => (
                  <article key={rel.id} className="related-card">
                    <span className="related-cat">{rel.category}</span>
                    <h3 className="related-title">
                      <Link to={`/blog/${rel.slug}`} title={rel.title}>
                        {rel.title}
                      </Link>
                    </h3>
                    <p className="related-summary">{rel.summary}</p>
                    <Link to={`/blog/${rel.slug}`} className="related-link">
                      Read Guide <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
    </div>
  );
}
