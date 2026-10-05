import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import { useTestimonials } from '../../hooks/useTestimonials';
import { getInitials } from '../../utils/getInitials';
import './Testimonials.css';

// Module-level component so React reuses the same DOM nodes across renders.
// Defining it inside the component body remounts the cards on every render
// and destroys the CSS slide transition.
const renderStars = (rating) => '★'.repeat(rating);

const CardComponent = ({ testimonial, position }) => (
  <div className={`featured-card featured-card-${position}`}>
    <div className="featured-card-inner">
      <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
      <p className="testimonial-text">{testimonial.text || testimonial.review}</p>
      <div className="testimonial-user">
        <div className="testimonial-avatar">
          {getInitials(testimonial.name)}
        </div>
        <div className="user-info">
          <h5>{testimonial.name}</h5>
          <span>{testimonial.position || testimonial.designation}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const { testimonials, loading } = useTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset activeIndex if it's out of bounds
  useEffect(() => {
    if (testimonials.length > 0 && activeIndex >= testimonials.length) {
      setActiveIndex(0);
    }
  }, [testimonials.length, activeIndex]);

  useEffect(() => {
    if (!isAutoPlay || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const getPrevIndex = () => (activeIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (activeIndex + 1) % testimonials.length;

  const prevTestimonial = testimonials[getPrevIndex()];
  const activeTestimonial = testimonials[activeIndex];
  const nextTestimonial = testimonials[getNextIndex()];

  // Show loading state only on first visit (no cache)
  if (loading && testimonials.length === 0) {
    return (
      <section className="testimonials-carousel-section">
        <Container>
          <div className="section-title">
            <p className="tag">Clients Feedback</p>
            <h2>What Our Clients Say</h2>
            <p className="carousel-subtitle">Loading testimonials...</p>
          </div>
        </Container>
      </section>
    );
  }

  // Safety check: need at least 1 testimonial
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="testimonials-carousel-section">
      <Container>
        <div className="section-title">
          <p className="tag">Clients Feedback</p>
          <h2>What Our Clients Say</h2>
          <p className="carousel-subtitle">Real experiences from businesses we've helped</p>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            type="button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {!isMobile && <CardComponent key="left" testimonial={prevTestimonial} position="left" />}
            <CardComponent key="center" testimonial={activeTestimonial} position="center" />
            {!isMobile && <CardComponent key="right" testimonial={nextTestimonial} position="right" />}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            aria-label="Next testimonial"
            type="button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-pagination">
          {testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              className={`pagination-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === activeIndex}
              type="button"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
