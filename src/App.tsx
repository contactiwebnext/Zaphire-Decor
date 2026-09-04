import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { CustomProductsSection } from './components/CustomProductsSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  const handlePlanEvent = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteWithService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#081021] text-white flex flex-col selection:bg-[#C5A059] selection:text-[#081021]">
      {/* 1. Header Navigation */}
      <Navbar onOpenQuoteModal={handlePlanEvent} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onPlanEvent={handlePlanEvent}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Services Section */}
        <ServicesSection onRequestQuote={handleRequestQuoteWithService} />

        {/* 4. About Section & Why Choose Zaphire Decor */}
        <AboutSection />

        {/* 5. Portfolio & Gallery with Lightbox Modal */}
        <GallerySection onInquireStyle={handleRequestQuoteWithService} />

        {/* 6. Custom Products & Apparel Showcase ("Have an idea? Let's create it.") */}
        <CustomProductsSection onRequestCustomQuote={handleRequestQuoteWithService} />

        {/* 7. Contact / Quote Inquiry Form */}
        <QuoteFormSection preselectedService={preselectedService} />
      </main>

      {/* 8. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 9. Floating AI Chatbot Concierge Widget */}
      <ChatbotWidget />

      {/* 10. Floating Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}
