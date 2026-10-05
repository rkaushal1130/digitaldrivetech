import React, { useEffect } from 'react';
import SoftDevHero from '../components/services/software-development/SoftDevHero';
import SoftDevAbout from '../components/services/software-development/SoftDevAbout';
import SoftDevTechStack from '../components/services/software-development/SoftDevTechStack';
import SoftDevProcess from '../components/services/software-development/SoftDevProcess';
import SoftDevWhyChoose from '../components/services/software-development/SoftDevWhyChoose';
import SoftDevContactBar from '../components/services/software-development/SoftDevContactBar';

export default function SoftwareDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="software-development-page">
      <SoftDevHero />
      <SoftDevAbout />
      <SoftDevTechStack />
      <SoftDevProcess />
      <SoftDevWhyChoose />
      <SoftDevContactBar />
    </div>
  );
}
