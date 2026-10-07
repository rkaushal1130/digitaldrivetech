import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import WebsiteDevelopment from "../pages/WebsiteDevelopment";

const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const Technologies = lazy(() => import("../pages/Technologies"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Contact = lazy(() => import("../pages/Contact"));
const InternshipTraining = lazy(() => import("../pages/InternshipTraining"));
const MobileAppDevelopment = lazy(() => import("../pages/MobileAppDevelopment"));
const UIUXDesign = lazy(() => import("../pages/UIUXDesign"));
const SoftwareDevelopment = lazy(() => import("../pages/SoftwareDevelopment"));
const DigitalMarketing = lazy(() => import("../pages/DigitalMarketing"));
const SEO = lazy(() => import("../pages/SEO"));
const SocialMediaMarketing = lazy(() => import("../pages/SocialMediaMarketing"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogArticle = lazy(() => import("../pages/BlogArticle"));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/website-development" element={<Navigate to="/website-development" replace />} />
      <Route path="/web-development" element={<Navigate to="/website-development" replace />} />
      <Route path="/services/web-development" element={<Navigate to="/website-development" replace />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/seo" element={<Navigate to="/seo-company-in-mohali" replace />} />
      <Route path="/seo" element={<Navigate to="/seo-company-in-mohali" replace />} />
      <Route path="/seo-company-in-mohali" element={<SEO />} />
      <Route path="/services/social-media-marketing" element={<Navigate to="/social-media-marketing-company-in-mohali" replace />} />
      <Route path="/social-media-marketing" element={<Navigate to="/social-media-marketing-company-in-mohali" replace />} />
      <Route path="/services/smm" element={<Navigate to="/social-media-marketing-company-in-mohali" replace />} />
      <Route path="/social-media-marketing-company-in-mohali" element={<SocialMediaMarketing />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/internship-training-in-mohali" element={<InternshipTraining />} />
      <Route path="/internship-training" element={<InternshipTraining />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      <Route path="/articles" element={<Navigate to="/blog" replace />} />
      <Route path="/resources" element={<Navigate to="/blog" replace />} />
    </Routes>
    </Suspense>
  );
}
