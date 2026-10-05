import React from 'react';
import Container from '../ui/Container';
import { Target, Eye } from 'lucide-react';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <Container>
        <div className="cards-2">
          <div className="soft-card">
            <div className="soft-icon">
              <Target size={26} />
            </div>
            <div>
              <div className="section-tag">Our Mission</div>
              <h3>Empowering Businesses Through Technology</h3>
              <p>
                Our mission is to deliver innovative and reliable digital solutions
                that help businesses grow, improve efficiency and achieve their goals.
              </p>
            </div>
          </div>

          <div className="soft-card green">
            <div className="soft-icon green-icon">
              <Eye size={26} />
            </div>
            <div>
              <div className="section-tag green-tag">Our Vision</div>
              <h3>To Be A Global Leader In Digital Innovation</h3>
              <p>
                Our vision is to create a better digital future by building smart,
                scalable and user-friendly products for businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
