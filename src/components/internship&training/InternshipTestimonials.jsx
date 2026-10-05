import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container';
import studentTestimonials from '../../data/studentTestimonials';
import './InternshipTestimonials.css';

export default function InternshipTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % studentTestimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % studentTestimonials.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getPrevIndex = () => (activeIndex - 1 + studentTestimonials.length) % studentTestimonials.length;
  const getNextIndex = () => (activeIndex + 1) % studentTestimonials.length;

  const prevTestimonial = studentTestimonials[getPrevIndex()];
  const activeTestimonial = studentTestimonials[activeIndex];
  const nextTestimonial = studentTestimonials[getNextIndex()];

  const renderStars = (rating) => '★'.repeat(rating);

  const CardComponent = ({ testimonial, position }) => (
    <div className={`featured-card featured-card-${position}`}>
      <div className="featured-card-inner">
        <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-user">
          <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
          <div className="user-info">
            <h5>{testimonial.name}</h5>
            <span>{testimonial.position}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-carousel-section">
      <Container>
        <div className="section-title">
          <p >What Our Students Say</p>
          <h2>Student Success Stories</h2>
          <p className="carousel-subtitle">Real experiences from students who transformed their careers</p>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Left Arrow */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            type="button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Carousel Track */}
          <div
            className="carousel-track"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {!isMobile && <CardComponent testimonial={prevTestimonial} position="left" />}
            <CardComponent testimonial={activeTestimonial} position="center" />
            {!isMobile && <CardComponent testimonial={nextTestimonial} position="right" />}
          </div>

          {/* Right Arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            aria-label="Next testimonial"
            type="button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="carousel-pagination">
          {studentTestimonials.map((testimonial, idx) => (
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
