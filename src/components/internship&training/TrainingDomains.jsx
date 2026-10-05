import React from 'react';
import Container from '../ui/Container';
import './TrainingDomains.css';

export default function TrainingDomains() {
  const domains = [
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      skills: ['SEO', 'Social Media Marketing', 'Google Ads', 'Content Marketing', 'Lead Generation', 'Email Marketing']
    },
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Responsive Design', 'Website Maintenance']
    },
    {
      icon: 'fas fa-users',
      title: 'HR & Recruitment',
      skills: ['Recruitment Process', 'Resume Screening', 'Interview Coordination', 'Employee Documentation', 'HR Policies']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Accounts & Finance',
      skills: ['Tally Prime', 'GST Basics', 'Accounting Entries', 'Financial Reporting', 'Bank Reconciliation']
    },
    {
      icon: 'fas fa-robot',
      title: 'AI & Automation',
      skills: ['ChatGPT', 'AI Tools', 'Business Automation', 'Productivity Tools', 'Workflow Automation']
    }
  ];

  return (
    <section className="training-section">
      <Container>
        <div className="section-title">
          <p className="tag">Transform Your Career Today</p>
          <h2>Master In-Demand Skills Across Multiple Domains</h2>
        </div>
        <div className="domains-grid">
          {domains.map((domain, idx) => (
            <div key={idx} className="domain-card">
              <div className="domain-icon">
                <i className={domain.icon}></i>
              </div>
              <h3>{domain.title}</h3>
              <ul>
                {domain.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
