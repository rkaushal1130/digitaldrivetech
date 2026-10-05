import React, { useEffect } from 'react';
import UIUXHero from '../components/services/ui-ux-design/UIUXHero';
import UIUXAbout from '../components/services/ui-ux-design/UIUXAbout';
import UIUXTechStack from '../components/services/ui-ux-design/UIUXTechStack';
import UIUXProcess from '../components/services/ui-ux-design/UIUXProcess';
import UIUXWhyChoose from '../components/services/ui-ux-design/UIUXWhyChoose';
import UIUXContactBar from '../components/services/ui-ux-design/UIUXContactBar';

export default function UIUXDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ui-ux-design-page">
      <UIUXHero />
      <UIUXAbout />
      <UIUXTechStack />
      <UIUXProcess />
      <UIUXWhyChoose />
      <UIUXContactBar />
    </div>
  );
}
