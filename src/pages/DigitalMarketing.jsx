import React, { useEffect } from 'react';
import DigiMarkHero from '../components/services/digital-marketing/DigiMarkHero';
import DigiMarkAbout from '../components/services/digital-marketing/DigiMarkAbout';
import DigiMarkTechStack from '../components/services/digital-marketing/DigiMarkTechStack';
import DigiMarkProcess from '../components/services/digital-marketing/DigiMarkProcess';
import DigiMarkWhyChoose from '../components/services/digital-marketing/DigiMarkWhyChoose';
import DigiMarkContactBar from '../components/services/digital-marketing/DigiMarkContactBar';

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="digital-marketing-page">
      <DigiMarkHero />
      <DigiMarkAbout />
      <DigiMarkTechStack />
      <DigiMarkProcess />
      <DigiMarkWhyChoose />
      <DigiMarkContactBar />
    </div>
  );
}
