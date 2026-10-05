import React from 'react';
import Container from '../ui/Container';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Jaspreet Singh',
    role: 'CEO',
    image: require('../../assets/team_images/Jaspreet.webp'),
  },
  {
    id: 2,
    name: 'HEENA CHANDEL',
    role: 'CEO & Founder',
    image: require('../../assets/team_images/heena_mam.webp'),
  },
  {
    id: 3,
    name: 'Divyansh',
    role: 'Team Lead',
    image: require('../../assets/team_images/Divyansh.jpg'),
  },
  {
    id: 4,
    name: 'Aniket Chaudhary',
    role: 'Full Stack Developer',
    image: require('../../assets/team_images/aniket_image.png'),
  },
  {
    id: 5,
    name: 'Rahul Kaushal',
    role: 'UI/UX Developer',
    image: require('../../assets/team_images/Rahul.png'),
  },
  {
    id: 6,
    name: 'Sonam',
    role: 'Digital Marketing',
    image: require('../../assets/team_images/sonam.webp'),
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <Container>
        <div className="center-head">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Meet The Experts Behind Our Success</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                )}
              </div>
              <div className="team-body">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
