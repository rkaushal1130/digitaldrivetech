import React, { useState } from 'react';
import OverviewTab from './OverviewTab';
import CurriculumTab from './CurriculumTab';
import ProjectsTab from './ProjectsTab';
import CareerTab from './CareerTab';
import './CourseTabs.css';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'curriculum', label: 'Curriculum' },
  { key: 'projects', label: 'Projects' },
  { key: 'career', label: 'Career Opportunities' },
];

export default function CourseTabs({ course }) {
  const [activeTab, setActiveTab] = useState('overview');

  function renderTabContent() {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab overview={course.overview} />;
      case 'curriculum':
        return <CurriculumTab curriculum={course.curriculum} />;
      case 'projects':
        return <ProjectsTab projects={course.projects} />;
      case 'career':
        return <CareerTab career={course.careerOpportunities} />;
      default:
        return null;
    }
  }

  return (
    <div className="course-tabs">
      <div className="course-tabs-header" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`course-tabs-btn ${activeTab === tab.key ? 'course-tabs-btn--active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="course-tabs-content">
        {renderTabContent()}
      </div>
    </div>
  );
}
