import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import '../components/home/HomeMobileFix.css';

export default function Home() {
  return (
    <>
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
