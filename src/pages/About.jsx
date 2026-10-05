import React from 'react';
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
