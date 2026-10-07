import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { ClipboardList, Edit3, Code2, Settings, CloudUpload, Headphones, ArrowRight } from 'lucide-react';
import './WebDevProcess.css';

export default function WebDevProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Requirement Analysis',
      description: 'We review your business model, target audience, technical specifications, content requirements and project scope before development begins.',
      icon: <ClipboardList size={26} />,
    },
    {
      stepNumber: '02',
      title: 'UI/UX Design & Architecture',
      description: (
        <>
          We design intuitive page layouts and wireframes focused on{' '}
          <Link to="/ui-ux-design" title="UI/UX Design Services" className="webdev-process-inline-link">
            user experience
          </Link>
          , ensuring clear visual hierarchy, simple navigation and straightforward calls to action.
        </>
      ),
      icon: <Edit3 size={26} />,
    },
    {
      stepNumber: '03',
      title: 'Frontend & Backend Development',
      description: "Our developers write clean, modular frontend and backend code, integrating scalable databases, APIs and content structures using modern development standards.",
      icon: <Code2 size={26} />,
    },
    {
      stepNumber: '04',
      title: 'Testing & Optimization',
      description: 'We conduct cross-device and cross-browser testing to verify responsive design, form validations, interactive features, page speed and technical SEO readiness.',
      icon: <Settings size={26} />,
    },
    {
      stepNumber: '05',
      title: 'Production Deployment',
      description: 'After final review and approval, we configure the production hosting environment, connect custom domain settings, verify SSL security and deploy the website.',
      icon: <CloudUpload size={26} />,
    },
    {
      stepNumber: '06',
      title: 'Maintenance & Support',
      description: 'Following deployment, we provide dependable maintenance, regular software updates, security monitoring and feature enhancements as your business requirements evolve.',
      icon: <Headphones size={26} />,
    },
  ];

  return (
    <section className="webdev-process-section" id="process">
      <Container>
        <div className="webdev-process-card">
          <div className="webdev-process-header">
            <h2>Our Website Development Process</h2>
            <p className="webdev-process-intro">
              Our website development process is designed to keep every project clear, organized and focused on business goals. From understanding your requirements to launching the finished website, we follow a structured approach to design, development, testing and deployment.
            </p>
          </div>

          <div className="webdev-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="webdev-process-step">
                <div className="webdev-step-circle-wrapper">
                  <div className="webdev-step-circle" aria-hidden="true">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="webdev-step-line" aria-hidden="true"></div>}
                </div>
                <div className="webdev-step-content">
                  <span className="webdev-step-number">{step.stepNumber}.</span>
                  <h3 className="webdev-step-title">{step.title}</h3>
                  <p className="webdev-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="webdev-process-cta">
            <Button to="/contact">
              Start Your Website Project <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
