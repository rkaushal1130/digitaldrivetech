import React, { useEffect } from 'react';
import MobileDevHero from '../components/services/mobile-app-development/MobileDevHero';
import MobileDevAbout from '../components/services/mobile-app-development/MobileDevAbout';
import MobileDevTechStack from '../components/services/mobile-app-development/MobileDevTechStack';
import MobileDevProcess from '../components/services/mobile-app-development/MobileDevProcess';
import MobileDevWhyChoose from '../components/services/mobile-app-development/MobileDevWhyChoose';
import MobileDevContactBar from '../components/services/mobile-app-development/MobileDevContactBar';

export default function MobileAppDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mobile-app-development-page">
      <MobileDevHero />
      <MobileDevAbout />
      <MobileDevTechStack />
      <MobileDevProcess />
      <MobileDevWhyChoose />
      <MobileDevContactBar />
    </div>
  );
}
