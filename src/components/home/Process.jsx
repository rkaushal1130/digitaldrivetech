import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import processSteps from '../../data/processSteps';
import * as LucideIcons from 'lucide-react';
import './Process.css';

export default function Process() {
  return (
    <Container>
      <section id="process">
        <div className="process">
          <div>
            <SectionTitle
              tag="Our Process"
              title="Our Development Process"
              description="We follow a simple and effective process to deliver successful projects."
            />
          </div>

          <div className="process-steps">
            {processSteps.map((step) => {
              const Icon = LucideIcons[step.icon];
              return (
                <div key={step.id} className="step">
                  <div className="step-circle">
                    {Icon ? <Icon size={24} /> : <i className={step.icon}></i>}
                  </div>
                  <h5>{step.number}</h5>
                  <h6>{step.title}</h6>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
