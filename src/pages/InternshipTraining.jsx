import React from 'react';
import InternshipHero from '../components/internship&training/InternshipHero';
import CourseGrid from '../components/courses/CourseGrid';
import ProgramHighlights from '../components/internship&training/ProgramHighlights';
import InternshipInfo from '../components/internship&training/InternshipInfo';
import InternshipTestimonials from '../components/internship&training/InternshipTestimonials';
import InternshipStats from '../components/internship&training/InternshipStats';
import InternshipConnect from '../components/internship&training/InternshipConnect';

export default function InternshipTraining() {
  return (
    <>
      <InternshipHero />
      <CourseGrid />
      <ProgramHighlights />
      <InternshipInfo />
      <InternshipTestimonials />
      <InternshipStats />
      <InternshipConnect />
    </>
  );
}
