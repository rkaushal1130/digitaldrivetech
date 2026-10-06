import React from 'react';
import SEOHead from '../components/common/SEOHead';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import OurStory from '../components/about/OurStory';
import MissionVision from '../components/about/MissionVision';
import WhyChooseUs from '../components/about/WhyChooseUs';
import TeamSection from '../components/about/TeamSection';
import ProcessSection from '../components/about/ProcessSection';
import AchievementsBar from '../components/about/AchievementsBar';
import TechnologiesTestimonials from '../components/about/TechnologiesTestimonials';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/about"
        pageTitle="Digital Solutions Company in Mohali | About DigitalDriveTech"
        metaTitle="Digital Solutions Company in Mohali | About DigitalDriveTech"
        metaDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing solutions for businesses."
        ogTitle="Digital Solutions Company in Mohali | About DigitalDriveTech"
        ogDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing solutions for businesses."
        ogUrl="https://www.digitaldrivetech.com/about"
        twitterTitle="Digital Solutions Company in Mohali | About DigitalDriveTech"
        twitterDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing solutions for businesses."
      />
      <AboutHero />
      <AboutStats />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <ProcessSection />
      <AchievementsBar />
      <TechnologiesTestimonials />
      <AboutCTA />
    </>
  );
}
