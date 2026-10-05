import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactCTA from '../components/contact/ContactCTA';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
