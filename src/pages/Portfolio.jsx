import React from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/common/SEOHead';

export default function Portfolio() {
  return (
    <Container>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/portfolio"
        pageTitle="Our Digital Projects & Work - DigitalDriveTech"
        metaTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        metaDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
        ogTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        ogDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
        ogUrl="https://www.digitaldrivetech.com/portfolio"
        twitterTitle="DigitalDriveTech Portfolio | Our Digital Projects & Work"
        twitterDescription="Explore Digital Drive Resource Tech Private Limited (DigitalDriveTech) portfolio of websites, mobile apps, e-commerce platforms, UI/UX designs and digital solutions built for businesses."
      />
      <section id="portfolio" style={{ padding: '70px 0', textAlign: 'center', minHeight: '60vh' }}>
        <h1>Our Digital Projects & Work</h1>
        <p style={{ color: '#cbd5e1', marginTop: '20px' }}>Coming soon...</p>
      </section>
    </Container>
  );
}
