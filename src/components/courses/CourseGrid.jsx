import React, { useState, useCallback } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import courses from '../../data/courses';
import './CourseGrid.css';

export default function CourseGrid() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = useCallback((course) => {
    setSelectedCourse(course);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedCourse(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <section className="course-grid-section">
      <Container>
        <SectionTitle
          tag="Transform Your Career Today"
          title="Master In-Demand Skills Across Multiple Domains"
        />
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => openModal(course)}
            />
          ))}
        </div>
      </Container>

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={closeModal} />
      )}
    </section>
  );
}
