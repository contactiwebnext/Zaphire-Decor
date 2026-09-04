import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: (servicePreselect?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Custom Products', href: '#custom-products' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with Sacramento location, direct phone & email */}
      <div className="bg-[#050B18] text-white/70 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center space-x-3 text-white/60">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium tracking-wide">Sacramento, CA & Surrounding Areas</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-white/60 tracking-wide">Weddings • Events • Decor • Custom Products</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="tel:9165249415"
              className="flex items-center space-x-1.5 text-[#D4AF37] hover:text-[#F4E2AA] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              title="Call Zaphire Decor at (916) 524-9415"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span className="tracking-[0.15em] font-semibold">916-524-9415</span>
            </a>
            <a
              href="mailto:decorzaphire@gmail.com"
              className="hidden sm:flex items-center space-x-1.5 text-white/70 hover:text-white transition-colors"
              title="Email Zaphire Decor"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span className="tracking-wide">decorzaphire@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081021]/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-white/10'
            : 'bg-[#081021]/90 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-3 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded p-1"
          >
            {/* Jewel crest icon */}
            <div className="w-10 h-10 rounded bg-[#0A192F] border border-[#D4AF37]/50 flex items-center justify-center shadow-md group-hover:border-[#D4AF37] transition-all">
              <div className="relative flex items-center justify-center">
                {/* Gem facet symbol */}
                <div className="w-5 h-5 rotate-45 border border-[#D4AF37] bg-[#112240] flex items-center justify-center">
                  <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.2em] text-[#D4AF37] group-hover:text-[#F4E2AA] transition-colors leading-none">
                ZAPHIRE
              </span>
              <span className="text-[9px] tracking-[0.45em] uppercase text-white/70 font-medium ml-[2px] mt-1">
                DECOR • SACRAMENTO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleQuoteClick}
              className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#081021] transition-all font-semibold shadow-lg shadow-[#D4AF37]/10"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-white/80 hover:text-[#D4AF37] hover:bg-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081021]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-[#D4AF37] hover:bg-[#0A192F] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={handleQuoteClick}
                  className="w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#081021] bg-[#D4AF37] hover:bg-[#C5A059] shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#081021]" />
                  <span>Get a Quote</span>
                </button>

                <div className="flex flex-col space-y-2 pt-2 text-xs text-white/60">
                  <a
                    href="tel:9165249415"
                    className="flex items-center space-x-2 text-[#D4AF37] font-medium tracking-wider"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>916-524-9415</span>
                  </a>
                  <a
                    href="mailto:decorzaphire@gmail.com"
                    className="flex items-center space-x-2 text-white/70"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>decorzaphire@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
