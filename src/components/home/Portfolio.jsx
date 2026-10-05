import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import projects from '../../data/projects';
import stats from '../../data/stats';
import '../portfolio/PortfolioProjects.css';
import './Portfolio.css';

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <Container>
      <section id="portfolio">
        <div className="home-projects">
          <SectionTitle
            tag="Our Work"
            title="Some Of Our Recent Projects"
          />

          <div className="portfolio-grid">
            {projects.slice(0, 3).map((project) => (
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

          <div className="portfolio-view-more">
            <Button onClick={() => navigate('/portfolio')}>
              View All Projects
            </Button>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
