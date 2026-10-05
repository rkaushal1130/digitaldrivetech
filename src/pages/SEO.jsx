import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import {
  Search,
  TrendingUp,
  Code2,
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Layers,
  ArrowDown,
  Eye,
  Users,
  Award,
} from 'lucide-react';
import './SEO.css';

export default function SEO() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const howItWorks = [
    {
      id: 1,
      icon: <Search size={24} />,
      title: 'Crawling & Indexing',
      description:
        'Search engines crawl your website, then analyse and index its pages so they can appear in relevant search results.',
    },
    {
      id: 2,
      icon: <Code2 size={24} />,
      title: 'Assisting Web Crawlers',
      description: 'SEO helps crawlers to understand your website structure and content hierarchy clearly.',
    },
    {
      id: 3,
      icon: <FileText size={24} />,
      title: 'Keywords & Useful Content',
      description:
        'Through relevant keywords and useful content, helps match pages with queries and appear in search results.',
    },
    {
      id: 4,
      icon: <Settings2Icon size={24} />,
      title: 'Technical Optimization',
      description:
        'Technical optimization helps search engines to access, navigate, and understand your website effortlessly.',
    },
  ];

  const businessGrowthPoints = [
    {
      id: 1,
      icon: <Eye size={24} />,
      title: 'Enhances Online Visibility',
      description: 'Ranks your pages higher on search engine result pages, ensuring your business gets noticed first.',
    },
    {
      id: 2,
      icon: <Users size={24} />,
      title: 'Helps Attract Relevant Traffic',
      description: 'Draws prospective customers actively searching for your specific products, services, or solutions.',
    },
    {
      id: 3,
      icon: <Award size={24} />,
      title: 'Supports Brand Visibility',
      description: 'Builds authority and credibility within your industry across key regional and global queries.',
    },
    {
      id: 4,
      icon: <TrendingUp size={24} />,
      title: 'Assists in Generating Leads Over Time',
      description: 'Creates a sustainable, compounding engine of high-intent organic inquiries and conversions.',
    },
  ];

  const seoServices = [
    {
      id: 1,
      name: 'On-Page SEO',
      icon: <FileText size={26} />,
      badge: 'Content & Meta',
      description:
        'We Optimize your content and elements on your website, so they follow Google guidelines and appear in relevant search results when users search for related queries.',
    },
    {
      id: 2,
      name: 'Off-Page SEO',
      icon: <Globe size={26} />,
      badge: 'Authority & Backlinks',
      description:
        'We perform activities outside your website to build authority, relevance, and visibility across authoritative digital spaces.',
    },
    {
      id: 3,
      name: 'Technical SEO',
      icon: <Code2 size={26} />,
      badge: 'Architecture & Speed',
      description:
        'We improve the technical aspects of your website so that it helps search engines crawl, understand, and index your website properly.',
    },
    {
      id: 4,
      name: 'Local SEO',
      icon: <MapPin size={26} />,
      badge: 'Geo-Targeted Rankings',
      description:
        'We are optimising your online presence to appear in relevant location-based searches and Google Maps listings.',
    },
  ];

  const row1Steps = [
    { num: '01', title: 'Business Analysis' },
    { num: '02', title: 'Business Understanding' },
    { num: '03', title: 'Audience & Keyword Research' },
    { num: '04', title: 'SEO & Content Strategy' },
  ];

  const row2Steps = [
    { num: '05', title: 'SEO Execution' },
    { num: '06', title: 'Performance Tracking' },
    { num: '07', title: 'Optimisation' },
    { num: '08', title: 'Continuous Improvement' },
  ];

  return (
    <div className="seo-page">
      {/* HERO SECTION */}
      <section className="seo-hero">
        <div className="seo-hero-glow"></div>
        <Container>
          <div className="seo-hero-grid">
            <div className="seo-hero-content">
              <div className="seo-keyword-badge">
                <MapPin size={16} />
                <span>SEO Company in Mohali</span>
              </div>

              <h1 className="seo-main-title">
                SEO <span>(Search Engine Optimization)</span>
              </h1>

              <p className="seo-lead">
                SEO (Search Engine Optimization) is a process of improving website visibility in organic search results. Are you looking for an SEO company in Mohali?
              </p>

              <div className="seo-hero-desc">
                <p>
                  It can help your business improve its organic visibility and appear in relevant Google search results. SEO is a long-term process that can gradually improve your website’s visibility, organic traffic, and online presence.
                </p>
                <p>
                  This is possible with a reliable Search Engine Optimisation company in Mohali. So, your wait is over. At <strong>Digital Drive Resource Tech Private Limited (DigitalDriveTech)</strong>, you can get reliable SEO services in Mohali.
                </p>
                <p>
                  First, we analyse your business and understand its requirements, then plan content and strategies tailored to your business that help promote or grow it naturally through digital channels while attracting relevant visitors.
                </p>
              </div>

              <div className="seo-hero-actions">
                <Button onClick={() => navigate('/contact')}>
                  Get Complimentary SEO Audit <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </Button>
                <Button variant="outline" onClick={() => {
                  const el = document.getElementById('seo-services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Our SEO Services
                </Button>
              </div>
            </div>

            <div className="seo-hero-visual">
              <div className="seo-visual-card">
                <div className="seo-visual-header">
                  <div className="seo-search-bar">
                    <Search size={16} className="seo-search-icon" />
                    <span>Best SEO Company in Mohali</span>
                    <span className="seo-badge-tag">#1 Organic Rank</span>
                  </div>
                </div>

                <div className="seo-metrics-grid">
                  <div className="seo-metric-box">
                    <span className="seo-metric-num">+240%</span>
                    <span className="seo-metric-label">Organic Traffic</span>
                  </div>
                  <div className="seo-metric-box">
                    <span className="seo-metric-num">Top 3</span>
                    <span className="seo-metric-label">Google Rankings</span>
                  </div>
                  <div className="seo-metric-box">
                    <span className="seo-metric-num">100%</span>
                    <span className="seo-metric-label">White-Hat SEO</span>
                  </div>
                  <div className="seo-metric-box">
                    <span className="seo-metric-num">4.5x</span>
                    <span className="seo-metric-label">Lead Conversion</span>
                  </div>
                </div>

                <div className="seo-visual-footer">
                  <div className="seo-check-item">
                    <CheckCircle2 size={16} color="#34d399" />
                    <span>Google Core Web Vitals Optimized</span>
                  </div>
                  <div className="seo-check-item">
                    <CheckCircle2 size={16} color="#34d399" />
                    <span>Data-Driven Keyword Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW DOES IT WORK SECTION */}
      <section className="seo-how-section">
        <Container>
          <div className="seo-section-header">
            <span className="seo-section-eyebrow">MECHANICS & ENGINE</span>
            <h2 className="seo-section-title">How Does It Work?</h2>
            <p className="seo-section-subtitle">
              Understanding how search engine crawlers explore, interpret, and index your website.
            </p>
          </div>

          <div className="seo-how-grid">
            {howItWorks.map((item) => (
              <div key={item.id} className="seo-how-card">
                <div className="seo-how-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW SEO ASSISTS IN BUSINESS GROWTH */}
      <section className="seo-growth-section">
        <Container>
          <div className="seo-section-header">
            <span className="seo-section-eyebrow">REAL BUSINESS IMPACT</span>
            <h2 className="seo-section-title">How Does SEO Assist in Business Growth?</h2>
            <p className="seo-section-subtitle">
              SEO provides compounded value that turns search interest into measurable business expansion.
            </p>
          </div>

          <div className="seo-growth-grid">
            {businessGrowthPoints.map((point) => (
              <div key={point.id} className="seo-growth-card">
                <div className="seo-growth-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OUR SEO SERVICES */}
      <section className="seo-services-section" id="seo-services-section">
        <Container>
          <div className="seo-section-header">
            <span className="seo-section-eyebrow">FULL-SPECTRUM OPTIMIZATION</span>
            <h2 className="seo-section-title">Our SEO Services</h2>
            <p className="seo-section-subtitle">
              Comprehensive SEO methodologies tailored to every layer of your digital presence.
            </p>
          </div>

          <div className="seo-services-grid">
            {seoServices.map((service) => (
              <div key={service.id} className="seo-service-card">
                <div className="seo-service-card-top">
                  <div className="seo-service-icon-box">{service.icon}</div>
                  <span className="seo-service-badge">{service.badge}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OUR SEO PROCESS */}
      <section className="seo-process-section">
        <Container>
          <div className="seo-section-header">
            <span className="seo-section-eyebrow">STRUCTURED ROADMAP</span>
            <h2 className="seo-section-title">Our SEO Process</h2>
            <p className="seo-section-subtitle">
              A systematic, transparent process engineered to produce sustainable rankings and traffic.
            </p>
          </div>

          <div className="seo-process-wrapper">
            {/* ROW 1: Steps 01 to 04 */}
            <div className="seo-process-row">
              {row1Steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="seo-process-step-card">
                    <div className="seo-step-num">{step.num}</div>
                    <h4>{step.title}</h4>
                  </div>
                  {idx < row1Steps.length - 1 && (
                    <div className="seo-process-arrow-cell">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CONNECTOR BETWEEN ROW 1 & ROW 2 */}
            <div className="seo-process-turn-connector">
              <div className="seo-turn-line"></div>
              <div className="seo-turn-badge">
                <span>Phase 2: Execution & Continuous Growth</span>
                <ArrowDown size={16} />
              </div>
              <div className="seo-turn-line"></div>
            </div>

            {/* ROW 2: Steps 05 to 08 */}
            <div className="seo-process-row">
              {row2Steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="seo-process-step-card">
                    <div className="seo-step-num">{step.num}</div>
                    <h4>{step.title}</h4>
                  </div>
                  {idx < row2Steps.length - 1 && (
                    <div className="seo-process-arrow-cell">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="seo-cta-section">
        <Container>
          <div className="seo-cta-card">
            <div className="seo-cta-content">
              <span className="seo-cta-tag">GET STARTED</span>
              <h2>Get Your Complimentary SEO Audit Today</h2>
              <p>
                Ready to improve your business's online visibility? Contact Digital Drive Resource Tech Private Limited to discuss your SEO requirements.
              </p>
              <div className="seo-cta-buttons">
                <Button onClick={() => navigate('/contact')}>
                  Claim Free Audit <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function Settings2Icon(props) {
  return <Layers {...props} />;
}
