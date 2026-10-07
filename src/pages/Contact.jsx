import React, { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactCTA from '../components/contact/ContactCTA';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/contact"
        pageTitle="Contact Us - DigitalDriveTech"
        metaTitle="Contact Us | DigitalDriveTech in Mohali"
        metaDescription="Get in touch with Digital Drive Resource Tech Private Limited (DigitalDriveTech) in Mohali for websites, mobile apps, software, e-commerce, UI/UX, and digital marketing solutions."
        ogTitle="Contact Us | DigitalDriveTech in Mohali"
        ogDescription="Get in touch with Digital Drive Resource Tech Private Limited (DigitalDriveTech) in Mohali for websites, mobile apps, software, e-commerce, UI/UX, and digital marketing solutions."
        ogUrl="https://www.digitaldrivetech.com/contact"
        ogImage="https://www.digitaldrivetech.com/images/ContactHero.webp"
        twitterTitle="Contact Us | DigitalDriveTech in Mohali"
        twitterDescription="Get in touch with Digital Drive Resource Tech Private Limited (DigitalDriveTech) in Mohali for websites, mobile apps, software, e-commerce, UI/UX, and digital marketing solutions."
        twitterImage="https://www.digitaldrivetech.com/images/ContactHero.webp"
      />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
