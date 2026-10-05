import React from 'react';
import Container from '../ui/Container';
import projects from '../../data/projects';
import './PortfolioProjects.css';

export default function PortfolioProjects() {
  return (
    <section className="portfolio-projects" id="portfolio-projects">
      <Container>
        <div className="portfolio-sec-label">Featured Projects</div>
        <h2 className="portfolio-sec-title">Recent Work</h2>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-pcard">
              <div className="portfolio-thumb">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-thumb-img"
                />
              </div>

              <div className="portfolio-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}