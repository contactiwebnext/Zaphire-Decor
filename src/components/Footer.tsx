import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Instagram, Facebook, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="bg-[#050B18] text-white pt-16 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#0A192F] border border-[#D4AF37] flex items-center justify-center shadow-md">
                <div className="w-4 h-4 rotate-45 border border-[#D4AF37] bg-[#081021] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                ZAPHIRE DECOR
              </span>
            </div>

            <p className="font-serif italic text-base text-white/70 max-w-sm leading-relaxed">
              “Creating memorable moments, beautifully coordinated and uniquely yours.”
            </p>

            <p className="text-xs text-white/50 leading-relaxed font-light">
              Sacramento’s trusted destination for bespoke wedding coordination, milestone event planning, elegant decor styling, and customized products.
            </p>

            {/* Social media placeholders */}
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-2">
                Follow Along (Social Profiles)
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, 'contact')}
                  className="w-8 h-8 bg-[#0A192F] hover:bg-[#D4AF37] text-white/70 hover:text-[#081021] flex items-center justify-center transition-colors border border-white/10 hover:border-[#D4AF37]"
                  title="Instagram (Inquire via contact)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, 'contact')}
                  className="w-8 h-8 bg-[#0A192F] hover:bg-[#D4AF37] text-white/70 hover:text-[#081021] flex items-center justify-center transition-colors border border-white/10 hover:border-[#D4AF37]"
                  title="Facebook (Inquire via contact)"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, 'contact')}
                  className="w-8 h-8 bg-[#0A192F] hover:bg-[#D4AF37] text-white/70 hover:text-[#081021] flex items-center justify-center transition-colors border border-white/10 hover:border-[#D4AF37]"
                  title="Share & Connect"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <span className="text-[10px] text-white/40 italic font-light">
                  [Official channels connectable upon launch]
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/60 font-light">
              {['home', 'services', 'about', 'gallery', 'custom-products', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleNav(e, item)}
                    className="hover:text-[#D4AF37] transition-colors capitalize"
                  >
                    {item.replace('-', ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-xs text-white/60 font-light">
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-[#D4AF37] transition-colors">
                  Wedding Coordinating & Planning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-[#D4AF37] transition-colors">
                  Event Coordinating & Showers
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-[#D4AF37] transition-colors">
                  Tablescapes, Backdrops & Decor
                </a>
              </li>
              <li>
                <a href="#custom-products" onClick={(e) => handleNav(e, 'custom-products')} className="hover:text-[#D4AF37] transition-colors">
                  Customized Event Items & Gifts
                </a>
              </li>
              <li>
                <a href="#custom-products" onClick={(e) => handleNav(e, 'custom-products')} className="hover:text-[#D4AF37] transition-colors">
                  Personalized Celebration Apparel
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Business Contact
            </h4>
            <div className="space-y-3 text-xs text-white/70 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Sacramento, CA</div>
                  <div className="text-[11px] text-white/50">Serving Greater Sacramento & Surrounding Areas</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:9165249415"
                    className="font-semibold text-[#D4AF37] hover:text-[#F4E2AA] transition-colors block"
                  >
                    916-524-9415
                  </a>
                  <div className="text-[10px] text-white/40">Call or Text Mon–Sat</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:decorzaphire@gmail.com"
                    className="text-white/80 hover:text-white transition-colors block break-all"
                  >
                    decorzaphire@gmail.com
                  </a>
                  <div className="text-[10px] text-white/40">Inquiries & Quote Requests</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & iWebNext Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <div>
            © 2026 Zaphire Decor. All rights reserved.
          </div>

          <div className="flex items-center justify-center space-x-1 text-white/50">
            <span>Developed by</span>
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white font-medium underline underline-offset-2 transition-colors"
            >
              iWebNext
            </a>
          </div>

          <div className="text-[11px] text-white/40 font-light">
            Sacramento Wedding Coordination & Custom Event Decor
          </div>
        </div>
      </div>
    </footer>
  );
};
