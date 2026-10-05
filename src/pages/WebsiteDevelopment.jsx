import React, { useEffect } from 'react';
import WebDevHero from '../components/services/website-development/WebDevHero';
import WebDevAbout from '../components/services/website-development/WebDevAbout';
import WebDevTechStack from '../components/services/website-development/WebDevTechStack';
import WebDevProcess from '../components/services/website-development/WebDevProcess';
import WebDevWhyChoose from '../components/services/website-development/WebDevWhyChoose';
import WebDevContactBar from '../components/services/website-development/WebDevContactBar';

export default function WebsiteDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="website-development-page">
      <WebDevHero />
      <WebDevAbout />
      <WebDevTechStack />
      <WebDevProcess />
      <WebDevWhyChoose />
      <WebDevContactBar />
    </div>
  );
}
