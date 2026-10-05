import React from 'react';
import Container from '../ui/Container';
import { Search, ClipboardList, Code2, CheckCircle2, CloudUpload, Target } from 'lucide-react';
import './TechnologiesProcess.css';

const processSteps = [
  {
    id: 1,
    icon: <Search size={22} />,
    number: '01',
    title: 'Research',
    description: 'We research and select the best technologies.',
  },
  {
    id: 2,
    icon: <ClipboardList size={22} />,
    number: '02',
    title: 'Plan',
    description: 'We plan the architecture and tech stack.',
  },
  {
    id: 3,
    icon: <Code2 size={22} />,
    number: '03',
    title: 'Develop',
    description: 'We build with clean and efficient code.',
  },
  {
    id: 4,
    icon: <CheckCircle2 size={22} />,
    number: '04',
    title: 'Test',
    description: 'We test for performance, security and quality.',
  },
  {
    id: 5,
    icon: <CloudUpload size={22} />,
    number: '05',
    title: 'Deploy',
    description: 'We deploy and deliver scalable solutions.',
  },
  {
    id: 6,
    icon: <Target size={22} />,
    number: '06',
    title: 'Support',
    description: 'We provide ongoing support and updates.',
  },
];

export default function TechnologiesProcess() {
  return (
    <section className="technologies-process">
      <Container>
        <div className="technologies-process-label">Our Technology Process</div>
        <div className="technologies-steps">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="technologies-step">
                <div className="technologies-step-dot">{step.icon}</div>
                <div className="technologies-step-num">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="technologies-step-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
