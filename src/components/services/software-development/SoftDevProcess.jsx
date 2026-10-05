import React from 'react';
import Container from '../../ui/Container';
import { ClipboardList, Layers, Code2, Settings, CloudUpload, Headphones } from 'lucide-react';
import './SoftDevProcess.css';

export default function SoftDevProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'REQUIREMENT ANALYSIS',
      description: 'Understanding your business goals, specifications, and project requirements.',
      icon: <ClipboardList size={26} />,
    },
    {
      stepNumber: '02',
      title: 'SYSTEM DESIGN & ARCHITECTURE',
      description: 'Designing robust database schemas, APIs, and scalable software architecture.',
      icon: <Layers size={26} />,
    },
    {
      stepNumber: '03',
      title: 'DEVELOPMENT',
      description: 'Building secure, clean, and modular code with modern programming best practices.',
      icon: <Code2 size={26} />,
    },
    {
      stepNumber: '04',
      title: 'TESTING & QA',
      description: 'Performing rigorous functional, performance, security, and integration testing.',
      icon: <Settings size={26} />,
    },
    {
      stepNumber: '05',
      title: 'DEPLOYMENT & CI/CD',
      description: 'Deploying the application to staging and production using automated pipelines.',
      icon: <CloudUpload size={26} />,
    },
    {
      stepNumber: '06',
      title: 'SUPPORT & MAINTENANCE',
      description: 'Providing ongoing monitoring, performance tuning, and technical support.',
      icon: <Headphones size={26} />,
    },
  ];

  return (
    <section className="softdev-process-section">
      <Container>
        <div className="softdev-process-card">
          <div className="softdev-process-header">
            <h2>OUR DEVELOPMENT PROCESS</h2>
          </div>

          <div className="softdev-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="softdev-process-step">
                <div className="softdev-step-circle-wrapper">
                  <div className="softdev-step-circle">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="softdev-step-line"></div>}
                </div>
                <div className="softdev-step-content">
                  <span className="softdev-step-number">{step.stepNumber}.</span>
                  <h3 className="softdev-step-title">{step.title}</h3>
                  <p className="softdev-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
