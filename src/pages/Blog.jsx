import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SEOHead from '../components/common/SEOHead';
import { getAllArticles } from '../data/blogArticles';
import { BookOpen, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import './Blog.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const allArticles = getAllArticles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Website Development', 'Local Guide'];

  const filteredArticles = selectedCategory === 'All'
    ? allArticles
    : allArticles.filter((article) => article.category === selectedCategory);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digital Insights & Website Development Guides | Digital Drive',
    description: 'Explore comprehensive guides, pricing breakdowns, technical SEO tutorials, and local guides for website development in Mohali and across India.',
    url: 'https://www.digitaldrivetech.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Digital Drive Resource Tech Private Limited',
      url: 'https://www.digitaldrivetech.com/',
      logo: 'https://www.digitaldrivetech.com/images/logo.webp'
    }
  };

  return (
    <div className="blog-page">
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/blog"
        pageTitle="Website Development Guides & Digital Insights | Digital Drive"
        metaTitle="Website Development Guides & Digital Insights | Digital Drive"
        metaDescription="Explore expert guides on website development, cost breakdowns, responsive design, technical SEO, and web development in Mohali by Digital Drive."
        ogTitle="Website Development Guides & Digital Insights | Digital Drive"
        ogDescription="Explore expert guides on website development, cost breakdowns, responsive design, technical SEO, and web development in Mohali by Digital Drive."
        ogUrl="https://www.digitaldrivetech.com/blog"
        ogImage="https://www.digitaldrivetech.com/images/website-development-og.jpg"
        twitterTitle="Website Development Guides & Digital Insights | Digital Drive"
        twitterDescription="Explore expert guides on website development, cost breakdowns, responsive design, technical SEO, and web development in Mohali by Digital Drive."
        structuredData={blogSchema}
      />

      <main id="main-content" className="blog-main">
        {/* HERO SECTION */}
        <section className="blog-hero">
          <Container>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="blog-breadcrumb">
              <ol>
                <li>
                  <Link to="/" title="Home">Home</Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">/</li>
                <li aria-current="page">Blog &amp; Resources</li>
              </ol>
            </nav>

            <div className="blog-hero-header">
              <div className="blog-badge">
                <BookOpen size={16} aria-hidden="true" />
                <span>KNOWLEDGE &amp; INSIGHTS</span>
              </div>
              <h1 className="blog-title">
                Website Development <span>Guides &amp; Resources</span>
              </h1>
              <p className="blog-subtitle">
                Expert insights, transparent cost breakdowns, technical comparisons, and actionable strategies to help businesses build, scale, and optimize high-performing digital solutions.
              </p>

              {/* Service Pillar Link */}
              <div className="blog-pillar-note">
                Looking for tailored development services? Explore our core{' '}
                <Link to="/website-development-company-in-mohali" className="blog-pillar-link" title="Website Development Services in Mohali">
                  Website Development Services
                </Link>{' '}
                page for complete capabilities and project proof.
              </div>
            </div>

            {/* Category Filter */}
            <div className="blog-filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* ARTICLES GRID */}
        <section className="blog-grid-section">
          <Container>
            <div className="blog-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="blog-card">
                  <div className="blog-card-top">
                    <span className="blog-card-category">
                      <Tag size={13} aria-hidden="true" /> {article.category}
                    </span>
                    <span className="blog-card-time">
                      <Clock size={13} aria-hidden="true" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={`/blog/${article.slug}`} title={article.title}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="blog-card-summary">{article.summary}</p>

                  <div className="blog-card-footer">
                    <span className="blog-card-date">
                      <Calendar size={13} aria-hidden="true" /> {article.publishedDate}
                    </span>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="blog-read-link"
                      title={`Read ${article.title}`}
                    >
                      Read Guide <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
