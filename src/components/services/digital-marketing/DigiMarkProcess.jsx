import React from 'react';
import Container from '../../ui/Container';
import { ClipboardList, Search, Compass, Megaphone, LineChart, Settings } from 'lucide-react';
import './DigiMarkProcess.css';

export default function DigiMarkProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'RESEARCH',
      description: 'Understand your business, audience, and competitors.',
      icon: <ClipboardList size={26} />,
    },
    {
      stepNumber: '02',
      title: 'ANALYSIS',
      description: 'Analyze data to identify opportunities and challenges.',
      icon: <Search size={26} />,
    },
    {
      stepNumber: '03',
      title: 'STRATEGY',
      description: 'Create a customized marketing strategy for your goals.',
      icon: <Compass size={26} />,
    },
    {
      stepNumber: '04',
      title: 'EXECUTION',
      description: 'Implement campaigns across the right channels.',
      icon: <Megaphone size={26} />,
    },
    {
      stepNumber: '05',
      title: 'MONITORING',
      description: 'Track performance and measure key metrics in real-time.',
      icon: <LineChart size={26} />,
    },
    {
      stepNumber: '06',
      title: 'OPTIMIZATION',
      description: 'Optimize campaigns for better results and higher ROI.',
      icon: <Settings size={26} />,
    },
  ];

  return (
    <section className="digimark-process-section">
      <Container>
        <div className="digimark-process-card">
          <div className="digimark-process-header">
            <h2>OUR DIGITAL MARKETING PROCESS</h2>
          </div>

          <div className="digimark-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="digimark-process-step">
                <div className="digimark-step-circle-wrapper">
                  <div className="digimark-step-circle">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="digimark-step-line"></div>}
                </div>
                <div className="digimark-step-content">
                  <span className="digimark-step-number">{step.stepNumber}.</span>
                  <h3 className="digimark-step-title">{step.title}</h3>
                  <p className="digimark-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
