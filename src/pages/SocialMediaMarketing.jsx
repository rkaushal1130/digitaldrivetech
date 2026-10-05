import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import {
  Share2,
  Heart,
  MessageCircle,
  Image,
  Video,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  MapPin,
  Camera,
  CheckCircle2,
  Building2,
  Eye,
  BarChart2,
} from 'lucide-react';
import './SocialMediaMarketing.css';

export default function SocialMediaMarketing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareableFormats = [
    { label: 'Photos', icon: <Camera size={18} /> },
    { label: 'Videos', icon: <Video size={18} /> },
    { label: 'Posts', icon: <Image size={18} /> },
    { label: 'Offers', icon: <Sparkles size={18} /> },
    { label: 'Business Updates', icon: <Building2 size={18} /> },
    { label: 'Helpful Information', icon: <CheckCircle2 size={18} /> },
    { label: 'Reels & Stories', icon: <Heart size={18} /> },
  ];

  const benefits = [
    { id: 1, title: 'Increase Brand Awareness', icon: <Eye size={22} />, desc: 'Ensure prospective customers recognize and recall your brand whenever they scroll.' },
    { id: 2, title: 'Reach the Right Audience', icon: <Target size={22} />, desc: 'Precision demographic and interest targeting to reach people genuinely interested in your offerings.' },
    { id: 3, title: 'Cost-Effective Marketing', icon: <DollarSign size={22} />, desc: 'Maximize your marketing budget with high-engagement social strategies and smart ad spend.' },
    { id: 4, title: 'Build Customer Relationships', icon: <Heart size={22} />, desc: 'Nurture two-way communication and lasting customer loyalty through regular conversations.' },
    { id: 5, title: 'Increase Website Traffic', icon: <TrendingUp size={22} />, desc: 'Channel engaged social followers into active website visitors and conversion paths.' },
    { id: 6, title: 'Generate Leads & Sales', icon: <BarChart2 size={22} />, desc: 'Turn social attention and engagement into qualified inquiries, bookings, and revenue.' },
    { id: 7, title: 'Understand Customers Better', icon: <Users size={22} />, desc: 'Gather direct feedback and sentiment insights to fine-tune your products and messaging.' },
    { id: 8, title: 'Build Trust', icon: <ShieldCheck size={22} />, desc: 'A credible, consistent, and active social profile builds confidence with first-time buyers.' },
  ];

  const smmSteps = [
    {
      num: '01',
      title: 'Define Goals',
      desc: 'Set clear goals such as increasing brand awareness, reaching a specific audience, generating enquiries, or improving engagement.',
      icon: <Target size={22} />,
    },
    {
      num: '02',
      title: 'Know Your Audience',
      desc: "Understand your audience's interests, needs, problems, behaviour, location, and other relevant factors.",
      icon: <Users size={22} />,
    },
    {
      num: '03',
      title: 'Create and Share Content',
      desc: 'Share valuable content such as posts, reels, stories, videos, offers, business updates, and helpful information.',
      icon: <Camera size={22} />,
    },
    {
      num: '04',
      title: 'Engage and Interact',
      desc: 'Respond to comments and messages and build relationships with your audience.',
      icon: <MessageCircle size={22} />,
    },
    {
      num: '05',
      title: 'Analyse and Optimise',
      desc: 'Track content performance, understand what works, and use the results to improve future content and campaigns.',
      icon: <BarChart2 size={22} />,
    },
  ];

  return (
    <div className="smm-page">
      {/* HERO SECTION */}
      <section className="smm-hero">
        <div className="smm-hero-glow"></div>
        <Container>
          <div className="smm-hero-grid">
            <div className="smm-hero-content">
              <div className="smm-keyword-badge">
                <MapPin size={16} />
                <span>Social Media Marketing in Mohali</span>
              </div>

              <h1 className="smm-main-title">
                SOCIAL MEDIA <span>MARKETING</span>
              </h1>

              <p className="smm-tagline">
                Build Awareness. Reach the Right Audience. Connect with Potential Customers.
              </p>

              <div className="smm-hero-desc">
                <p>
                  In this competitive digital environment, are you struggling to grow your products, services, or business online? Do you want more people to discover your business, reach the right audience, and connect with your brand on social media? Are you looking for an affordable social media marketing company in Mohali?
                </p>
                <p>
                  Social media marketing can help your business build awareness, reach the right audience, and connect with potential customers. At <strong>Digital Drive Resource Tech Private Limited (DigitalDriveTech)</strong>, we provide social media marketing services in Mohali based on your business requirements and goals. Our approach focuses on understanding your business first and then creating a suitable social media strategy and content plan.
                </p>
              </div>

              <div className="smm-hero-actions">
                <Button onClick={() => navigate('/contact')}>
                  Get Free Social Media Audit <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const el = document.getElementById('smm-how-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore How It Works
                </Button>
              </div>
            </div>

            <div className="smm-hero-visual">
              <div className="smm-social-preview-card">
                <div className="smm-card-header">
                  <div className="smm-avatar-circle">DDR</div>
                  <div>
                    <h4>Digital Drive Resource Tech</h4>
                    <span>@digitaldrivetech • Mohali</span>
                  </div>
                  <span className="smm-live-tag">Active Growth</span>
                </div>

                <div className="smm-card-body">
                  <p>
                    Connecting businesses with their ideal audience through captivating reels, stories, and data-backed campaigns. 🚀
                  </p>
                  <div className="smm-post-stats">
                    <div className="smm-stat-item">
                      <Heart size={16} color="#ef4444" />
                      <span>24.8K Likes</span>
                    </div>
                    <div className="smm-stat-item">
                      <MessageCircle size={16} color="#3b82f6" />
                      <span>1.4K Comments</span>
                    </div>
                    <div className="smm-stat-item">
                      <Share2 size={16} color="#10b981" />
                      <span>3.2K Shares</span>
                    </div>
                  </div>
                </div>

                <div className="smm-growth-banner">
                  <TrendingUp size={18} />
                  <span>Avg. 380% Higher Reach across Meta & Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT IS SOCIAL MEDIA MARKETING */}
      <section className="smm-what-section">
        <Container>
          <div className="smm-what-card">
            <div className="smm-what-text">
              <span className="smm-section-eyebrow">OVERVIEW & SCOPE</span>
              <h2 className="smm-section-title">What is Social Media Marketing?</h2>
              <p className="smm-what-desc">
                Social media marketing is the process of promoting a business, product, or service through social media platforms to reach and engage with the right audience. Businesses use platforms such as Facebook, Instagram, LinkedIn, and other relevant platforms to connect with people.
              </p>

              <div className="smm-formats-box">
                <h4>What can you share on these platforms?</h4>
                <div className="smm-formats-pills">
                  {shareableFormats.map((fmt, i) => (
                    <div key={i} className="smm-format-pill">
                      {fmt.icon}
                      <span>{fmt.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="smm-what-highlight">
                <Sparkles size={22} className="smm-sparkle-icon" />
                <p>
                  <strong>Main Goal:</strong> The main goal of social media marketing is to reach the right people, build trust, strengthen relationships, and help your business grow digitally.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SMM FOR SMALL BUSINESS */}
      <section className="smm-small-biz-section">
        <Container>
          <div className="smm-small-biz-grid">
            <div className="smm-small-biz-info">
              <span className="smm-section-eyebrow">SCALABLE REACH</span>
              <h2>Social Media Marketing for Small Business</h2>
              <p>
                Social media marketing for small businesses can help smaller businesses build an online presence and connect with potential customers without depending only on traditional marketing methods.
              </p>
              <p>
                Small businesses can use social media to showcase their products or services, share useful information, communicate with customers, and build awareness around their brand. The right strategy depends on the business, target audience, goals, budget, and type of products or services.
              </p>
            </div>

            <div className="smm-small-biz-card">
              <div className="smm-biz-card-badge">TAILORED FOR GROWTH</div>
              <h3>Empowering Local & Growing Businesses</h3>
              <ul className="smm-biz-list">
                <li><CheckCircle2 size={18} color="#34d399" /> Low entry barrier with flexible budget controls</li>
                <li><CheckCircle2 size={18} color="#34d399" /> Build direct community & customer affinity</li>
                <li><CheckCircle2 size={18} color="#34d399" /> Compete effectively with established competitors</li>
                <li><CheckCircle2 size={18} color="#34d399" /> Fast-paced testing for offers & promos</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY IS IT IMPORTANT & BENEFITS */}
      <section className="smm-benefits-section">
        <Container>
          <div className="smm-section-header">
            <span className="smm-section-eyebrow">STRATEGIC ADVANTAGE</span>
            <h2 className="smm-section-title">Why is Social Media Marketing Important, and How Does It Help a Business Grow?</h2>
            <p className="smm-section-subtitle">
              In today's digital world, social media has become an important way for businesses to connect with their audience. People use platforms such as Facebook, Instagram, LinkedIn, and others to discover businesses, products, services, ideas, and information. Through social media marketing, your business can reach relevant audiences, build a stronger digital presence, and create opportunities to connect with potential customers.
            </p>
          </div>

          <div className="smm-benefits-grid">
            {benefits.map((b) => (
              <div key={b.id} className="smm-benefit-card">
                <div className="smm-benefit-icon-box">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* INSTAGRAM MARKETING SPOTLIGHT */}
      <section className="smm-insta-section">
        <Container>
          <div className="smm-insta-card">
            <div className="smm-insta-badge">VISUAL STORYTELLING</div>
            <h2>Instagram Marketing</h2>
            <p>
              Instagram marketing can help businesses showcase their products, services, ideas, and brand through visual content. Businesses can use Instagram posts, reels, stories, videos, and other relevant content formats to connect with their audience.
            </p>
            <p className="smm-insta-sub">
              The right Instagram marketing approach depends on your business goals, audience, content, and overall social media strategy.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW DOES IT WORK (5 STEPS) */}
      <section className="smm-how-section" id="smm-how-works">
        <Container>
          <div className="smm-section-header">
            <span className="smm-section-eyebrow">OUR 5-STEP WORKFLOW</span>
            <h2 className="smm-section-title">How Does Social Media Marketing Work?</h2>
            <p className="smm-section-subtitle">
              A structured lifecycle designed to turn casual social scrollers into loyal, paying brand advocates.
            </p>
          </div>

          <div className="smm-steps-grid">
            {smmSteps.map((step) => (
              <div key={step.num} className="smm-step-card">
                <div className="smm-step-top">
                  <div className="smm-step-icon">{step.icon}</div>
                  <span className="smm-step-num">{step.num}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US IN MOHALI */}
      <section className="smm-why-section">
        <Container>
          <div className="smm-why-card">
            <div className="smm-section-header left-align">
              <span className="smm-section-eyebrow">THE DIGITALDRIVETECH EDGE</span>
              <h2 className="smm-section-title">Why Choose Our Social Media Marketing Services in Mohali?</h2>
            </div>

            <div className="smm-why-content">
              <p className="smm-why-highlight">
                Your customers are already spending time on social media. The real question is: <strong>will they notice your business?</strong>
              </p>
              <p>
                At <strong>Digital Drive Resource Tech Private Limited (DigitalDriveTech)</strong>, we help businesses use social media to become more visible, memorable, and accessible to their target audience.
              </p>
              <p>
                Every business is different and requires different content, strategy, and planning based on its requirements. We first understand your business, audience, goals, and services. Then, we plan relevant content and social media activities according to those requirements.
              </p>
              <p>
                We create relevant reels, posts, stories, and promotional content that make your business easier to understand and remember.
              </p>
              <p>
                Consistency also matters on social media. Regular updates help your audience stay connected with your brand and give customers opportunities to ask questions, share opinions, and communicate with your business.
              </p>
              <p>
                We also learn from your results and analyse how your content performs. These insights help us understand what your audience responds to and improve future content and campaigns.
              </p>
              <p className="smm-why-summary">
                Whether you are a small business or an established company, our SMM services in Mohali are planned around your business goals and audience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="smm-cta-section">
        <Container>
          <div className="smm-cta-card">
            <span className="smm-cta-tag">GET STARTED</span>
            <h2>Get Your Free Social Media Audit Today</h2>
            <p>
              Ready to grow your brand, engage your audience, and build a powerful social presence? Connect with Digital Drive Resource Tech Private Limited today.
            </p>
            <div className="smm-cta-btn-wrap">
              <Button onClick={() => navigate('/contact')}>
                Claim Free Social Media Audit <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
