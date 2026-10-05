import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import PortfolioPage from "../pages/PortfolioPage";
import Technologies from "../pages/Technologies";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import InternshipTraining from "../pages/InternshipTraining";
import WebsiteDevelopment from "../pages/WebsiteDevelopment";
import MobileAppDevelopment from "../pages/MobileAppDevelopment";
import UIUXDesign from "../pages/UIUXDesign";
import SoftwareDevelopment from "../pages/SoftwareDevelopment";
import DigitalMarketing from "../pages/DigitalMarketing";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/website-development" element={<WebsiteDevelopment />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/internship-training" element={<InternshipTraining />} />
    </Routes>
  );
}
