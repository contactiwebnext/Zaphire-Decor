import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Check, Sparkles, ArrowRight, HeartHandshake, PartyPopper, Palette, Gift, Shirt } from 'lucide-react';

interface ServicesSectionProps {
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coordination' | 'decor' | 'customization'>('all');

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeFilter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'wedding-coordination':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
      case 'event-coordination':
        return <PartyPopper className="w-5 h-5 text-[#D4AF37]" />;
      case 'event-decor':
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'customized-products':
        return <Gift className="w-5 h-5 text-[#D4AF37]" />;
      case 'customized-apparel':
        return <Shirt className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050B18] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#0A192F] border border-[#D4AF37]/30 px-4 py-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
              Services & Coordination
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Curated Services for Every Milestone
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
            From seamless wedding and event coordination to bespoke decor styling and personalized keepsakes, Zaphire Decor brings beauty, organization, and custom craftsmanship to every celebration.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2.5">
            {[
              { label: 'All Services', value: 'all' },
              { label: 'Coordination & Planning', value: 'coordination' },
              { label: 'Event Decor & Styling', value: 'decor' },
              { label: 'Custom Products & Apparel', value: 'customization' }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as any)}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#D4AF37] text-[#081021] shadow-lg shadow-[#D4AF37]/15'
                    : 'bg-[#0A192F] text-white/70 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className={`bg-[#0A192F] overflow-hidden border border-white/10 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col group ${
                index === 0 && activeFilter === 'all' ? 'lg:col-span-2 lg:flex-row' : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 && activeFilter === 'all'
                    ? 'lg:w-1/2 min-h-[300px] lg:min-h-full'
                    : 'h-64'
                }`}
              >
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Service Badge */}
                <div className="absolute top-4 left-4 bg-[#081021]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#D4AF37]/40 flex items-center space-x-2">
                  {getServiceIcon(service.id)}
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div
                className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${
                  index === 0 && activeFilter === 'all' ? 'lg:w-1/2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F4E2AA] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mt-1.5">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                      Key Highlights & Benefits:
                    </div>
                    <ul className="space-y-2 text-xs text-white/60">
                      {service.benefits.slice(0, index === 0 && activeFilter === 'all' ? 5 : 4).map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
                    Sacramento & Regional
                  </span>
                  <button
                    onClick={() => onRequestQuote(service.title)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081021] transition-all duration-200 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
