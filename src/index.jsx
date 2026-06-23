// Marvel Machining — generated page, sections assembled in order
import React from 'react';
import { createRoot } from 'react-dom/client';
import NavbarSection from './sections/NavbarSection';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import StatsSection from './sections/StatsSection';
import IndustriesServedSection from './sections/IndustriesServedSection';
import TestimonialsSection from './sections/TestimonialsSection';
import GallerySection from './sections/GallerySection';
import CtaBannerSection from './sections/CtaBannerSection';
import BlogPreviewSection from './sections/BlogPreviewSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <AboutSection />
      <CapabilitiesSection />
      <StatsSection />
      <IndustriesServedSection />
      <TestimonialsSection />
      <GallerySection />
      <CtaBannerSection />
      <BlogPreviewSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<Home />);
}

export default Home;
