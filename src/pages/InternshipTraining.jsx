import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import InternshipHero from '../components/internship&training/InternshipHero';
import CourseGrid from '../components/courses/CourseGrid';
import ProgramHighlights from '../components/internship&training/ProgramHighlights';
import InternshipInfo from '../components/internship&training/InternshipInfo';
import InternshipTestimonials from '../components/internship&training/InternshipTestimonials';
import InternshipStats from '../components/internship&training/InternshipStats';
import InternshipConnect from '../components/internship&training/InternshipConnect';

export default function InternshipTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/internship-training-in-mohali"
        pageTitle="Internship & Training in Mohali - DigitalDriveTech"
        metaTitle="Internship & Training in Mohali | DigitalDriveTech"
        metaDescription="Join Digital Drive Resource Tech Private Limited (DigitalDriveTech) internship, training, and professional courses in Mohali to gain practical skills and real-world experience in technology and digital solutions."
        ogTitle="Internship & Training in Mohali | DigitalDriveTech"
        ogDescription="Join Digital Drive Resource Tech Private Limited (DigitalDriveTech) internship, training, and professional courses in Mohali to gain practical skills and real-world experience in technology and digital solutions."
        ogUrl="https://www.digitaldrivetech.com/internship-training-in-mohali"
        ogImage="https://www.digitaldrivetech.com/images/internshipHero.webp"
        twitterTitle="Internship & Training in Mohali | DigitalDriveTech"
        twitterDescription="Join Digital Drive Resource Tech Private Limited (DigitalDriveTech) internship, training, and professional courses in Mohali to gain practical skills and real-world experience in technology and digital solutions."
        twitterImage="https://www.digitaldrivetech.com/images/internshipHero.webp"
      />
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
