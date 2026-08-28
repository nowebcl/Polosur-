import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { KeyPoints } from '@/components/sections/KeyPoints';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { MetricsBanner } from '@/components/sections/MetricsBanner';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { AboutUs } from '@/components/sections/AboutUs';
import { ContactSection } from '@/components/sections/ContactSection';
import { ContactCTABanner } from '@/components/sections/ContactCTABanner';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';

export default function Home() {
  return (
    <main className="text-polo-text-dark antialiased bg-white min-h-screen relative pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <KeyPoints />
      <ServicesBento />
      <MetricsBanner />
      <CaseStudies />
      <AboutUs />
      <ContactSection />
      <ContactCTABanner />
      <Footer />
      <MobileTabBar />
    </main>
  );
}
