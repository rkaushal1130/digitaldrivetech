import React from 'react';
import Container from '../../ui/Container';
import { Search, UserCheck, Compass, Palette, PlayCircle, CheckSquare } from 'lucide-react';
import './UIUXProcess.css';

export default function UIUXProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'RESEARCH',
      description: 'We analyze your goals, audience, and market to get key insights.',
      icon: <Search size={26} />,
    },
    {
      stepNumber: '02',
      title: 'USER PERSONA',
      description: 'We create user personas to understand user behavior and needs.',
      icon: <UserCheck size={26} />,
    },
    {
      stepNumber: '03',
      title: 'WIREFRAMING',
      description: 'We structure the layout and define the flow of the experience.',
      icon: <Compass size={26} />,
    },
    {
      stepNumber: '04',
      title: 'UI DESIGN',
      description: 'We design stunning interfaces that align with your brand.',
      icon: <Palette size={26} />,
    },
    {
      stepNumber: '05',
      title: 'PROTOTYPING',
      description: 'We build interactive prototypes to test and validate ideas.',
      icon: <PlayCircle size={26} />,
    },
    {
      stepNumber: '06',
      title: 'TESTING & HANDOFF',
      description: 'We test usability and deliver final designs ready for development.',
      icon: <CheckSquare size={26} />,
    },
  ];

  return (
    <section className="uiux-process-section">
      <Container>
        <div className="uiux-process-card">
          <div className="uiux-process-header">
            <h2>OUR DESIGN PROCESS</h2>
          </div>

          <div className="uiux-process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="uiux-process-step">
                <div className="uiux-step-circle-wrapper">
                  <div className="uiux-step-circle">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && <div className="uiux-step-line"></div>}
                </div>
                <div className="uiux-step-content">
                  <span className="uiux-step-number">{step.stepNumber}.</span>
                  <h3 className="uiux-step-title">{step.title}</h3>
                  <p className="uiux-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
