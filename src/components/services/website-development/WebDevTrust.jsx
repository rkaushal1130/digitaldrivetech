import React from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import projects from '../../../data/projects';
import './WebDevTrust.css';

// Verified website development projects from data/projects.js
const webDevProjects = [
  {
    ...projects.find((p) => p.id === 5),
    type: 'Business Website',
    alt: 'Corporate business website development project by Digital Drive'
  },
  {
    ...projects.find((p) => p.id === 2),
    type: 'Lead Generation Website',
    alt: 'Real estate business website development project by Digital Drive'
  },
  {
    ...projects.find((p) => p.id === 1),
    type: 'E-Commerce Website',
    alt: 'E-commerce website development platform by Digital Drive'
  }
].filter(Boolean);

export default function WebDevTrust() {

  return (
    <section className="webdev-trust-section" id="portfolio-proof">
      <Container>
        <div className="webdev-trust-header">
          <div className="webdev-trust-badge">
            <FolderGit2 size={16} aria-hidden="true" />
            <span>PORTFOLIO & PROOF</span>
          </div>
          <h2>Website Development Projects & Portfolio</h2>
          <p className="webdev-trust-subtitle">
            Explore examples of our website development work and see how we create modern, responsive and business-focused digital experiences.
          </p>
          <p className="webdev-trust-local-note">
            Explore verified portfolio projects engineered by Digital Drive for regional clients in the Tricity and growing enterprises across India.
          </p>
        </div>

        <div className="webdev-trust-grid">
          {webDevProjects.map((project) => (
            <div key={project.id} className="webdev-project-card">
              <div className="webdev-project-thumb">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="webdev-project-img"
                  width="400"
                  height="220"
                  loading="lazy"
                  decoding="async"
                />
                <span className="webdev-project-type-badge">{project.type}</span>
              </div>

              <div className="webdev-project-body">
                <h3 className="webdev-project-title">{project.title}</h3>
                <p className="webdev-project-desc">{project.description}</p>

                <div className="webdev-project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="webdev-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="webdev-trust-cta">
          <Button to="/portfolio">
            View Our Portfolio <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
