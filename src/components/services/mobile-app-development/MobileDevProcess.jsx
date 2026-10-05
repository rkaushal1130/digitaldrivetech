import React from 'react';
import Container from '../../ui/Container';
import { ClipboardList, Edit3, Code2, Settings, Rocket, Headphones } from 'lucide-react';
import './MobileDevProcess.css';

export default function MobileDevProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'DISCOVERY',
      description: 'Understanding your ideas, goals and requirements.',
      icon: <ClipboardList size={26} />,
    },
    {
      stepNumber: '02',
      title: 'UI/UX DESIGN',
      description: 'Creating user-friendly wireframes and designs.',
      icon: <Edit3 size={26} />,
    },
    {
      stepNumber: '03',
      title: 'DEVELOPMENT',
      description: 'Building robust and scalable application solutions.',
      icon: <Code2 size={26} />,
    },
    {
      stepNumber: '04',
      title: 'TESTING',
      description: 'Testing for quality, performance and security.',
      icon: <Settings size={26} />,
    },
    {
      stepNumber: '05',
      title: 'DEPLOYMENT',
      description: 'Launching the app on Play Store and App Store.',
      icon: <Rocket size={26} />,
    },
    {
      stepNumber: '06',
      title: 'SUPPORT',
      description: 'Ongoing support and maintenance for smooth performance.',
      icon: <Headphones size={26} />,
    },
  ];

  return (
    <section className="mobiledev-process-section">
      <Container>
        <div className="mobiledev-process-card">
          <div className="mobiledev-process-header">
            <h2>OUR DEVELOPMENT PROCESS</h2>
          </div>

          <div className="mobiledev-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="mobiledev-process-step">
                <div className="mobiledev-step-circle-wrapper">
                  <div className="mobiledev-step-circle">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="mobiledev-step-line"></div>}
                </div>
                <div className="mobiledev-step-content">
                  <span className="mobiledev-step-number">{step.stepNumber}.</span>
                  <h3 className="mobiledev-step-title">{step.title}</h3>
                  <p className="mobiledev-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
