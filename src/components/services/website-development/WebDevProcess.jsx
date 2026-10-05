import React from 'react';
import Container from '../../ui/Container';
import { ClipboardList, Edit3, Code2, Settings, CloudUpload, Headphones } from 'lucide-react';
import './WebDevProcess.css';

export default function WebDevProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'REQUIREMENT ANALYSIS',
      description: 'Understanding your business goals and project requirements.',
      icon: <ClipboardList size={26} />,
    },
    {
      stepNumber: '02',
      title: 'UI/UX DESIGN',
      description: 'Creating wireframes and modern designs for better experience.',
      icon: <Edit3 size={26} />,
    },
    {
      stepNumber: '03',
      title: 'DEVELOPMENT',
      description: 'Building clean, efficient and responsive code with best practices.',
      icon: <Code2 size={26} />,
    },
    {
      stepNumber: '04',
      title: 'TESTING',
      description: 'Testing for performance, functionality, security and compatibility.',
      icon: <Settings size={26} />,
    },
    {
      stepNumber: '05',
      title: 'DEPLOYMENT',
      description: 'Launching your website on secure and reliable servers.',
      icon: <CloudUpload size={26} />,
    },
    {
      stepNumber: '06',
      title: 'SUPPORT & MAINTENANCE',
      description: 'Providing ongoing support, updates and maintenance for smooth performance.',
      icon: <Headphones size={26} />,
    },
  ];

  return (
    <section className="webdev-process-section">
      <Container>
        <div className="webdev-process-card">
          <div className="webdev-process-header">
            <h2>OUR DEVELOPMENT PROCESS</h2>
          </div>

          <div className="webdev-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="webdev-process-step">
                <div className="webdev-step-circle-wrapper">
                  <div className="webdev-step-circle">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="webdev-step-line"></div>}
                </div>
                <div className="webdev-step-content">
                  <span className="webdev-step-number">{step.stepNumber}.</span>
                  <h3 className="webdev-step-title">{step.title}</h3>
                  <p className="webdev-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
