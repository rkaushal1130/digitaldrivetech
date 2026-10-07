import React, { useEffect } from "react";
import SEOHead from "../components/common/SEOHead";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import '../components/home/HomeMobileFix.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        pageUrl="https://www.digitaldrivetech.com/"
        pageTitle="Digital Solutions & Marketing Company in Mohali"
        metaTitle="Digital Solutions & Marketing Company | DigitalDriveTech"
        metaDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT and digital solutions company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing services, along with professional courses."
        ogTitle="Digital Solutions & Marketing Company | DigitalDriveTech"
        ogDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT and digital solutions company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing services, along with professional courses."
        ogUrl="https://www.digitaldrivetech.com/"
        twitterTitle="Digital Solutions & Marketing Company | DigitalDriveTech"
        twitterDescription="Digital Drive Resource Tech Private Limited (DigitalDriveTech) is an IT and digital solutions company in Mohali providing website, mobile app, software, UI/UX, e-commerce, and digital marketing services, along with professional courses."
      />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
