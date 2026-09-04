import React, { useState } from 'react';
import { customProductCategories } from '../data/customProductsData';
import { Sparkles, ArrowRight, CheckCircle2, Lightbulb, Palette, Layers, Scissors, Heart } from 'lucide-react';

interface CustomProductsSectionProps {
  onRequestCustomQuote: (productType?: string) => void;
}

export const CustomProductsSection: React.FC<CustomProductsSectionProps> = ({ onRequestCustomQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState(customProductCategories[0]);

  return (
    <section id="custom-products" className="py-24 bg-[#081021] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#0A192F] border border-[#D4AF37]/30 px-4 py-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
              Bespoke Customization
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Custom Products & Personalized Apparel
          </h2>

          <p className="text-base text-white/60 font-light leading-relaxed">
            Elevate your event or commemorate your special occasion with custom-designed items. From laser-cut signage and monogrammed gifts to coordinated celebration apparel, we turn your creative ideas into memorable keepsakes.
          </p>

          <div className="inline-block bg-[#0A192F] border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37]">
            ✨ <em>All items are customized to order according to your celebration theme, color palette, and specifications.</em>
          </div>
        </div>

        {/* Interactive Custom Possibilities Showcase */}
        <div className="bg-[#0A192F] border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16">
          {/* Category Selector List (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#081021] text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-[#D4AF37] mb-4">
                <Lightbulb className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Customization Possibilities</span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Explore What We Can Create For You
              </h3>
              <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                Click any category below to preview personalization examples, materials, and ideas for your upcoming Sacramento event or celebration.
              </p>

              <div className="space-y-2">
                {customProductCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left p-3.5 transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selectedCategory.id === cat.id
                        ? 'bg-[#112240] border border-[#D4AF37] text-white shadow-md'
                        : 'hover:bg-[#112240]/40 text-white/70 border border-transparent'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold">{cat.name}</div>
                      <div className="text-[11px] text-white/50 line-clamp-1 font-light">{cat.subtitle}</div>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-[#D4AF37] transition-transform ${
                      selectedCategory.id === cat.id ? 'translate-x-1' : 'opacity-40'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-white/50 flex items-center space-x-2">
              <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Small batches to full event quantities available.</span>
            </div>
          </div>

          {/* Active Category Details & Visual (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-[#0A192F]">
            <div className="space-y-6">
              <div className="relative overflow-hidden h-64 sm:h-72 border border-white/10 shadow-md">
                <img
                  src={selectedCategory.imageUrl}
                  alt={selectedCategory.imageAlt}
                  className="w-full h-full object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081021]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37] bg-[#081021]/90 px-3 py-1 border border-[#D4AF37]/30">
                    Custom Concept
                  </span>
                  <h4 className="font-serif text-xl font-bold mt-2 text-white">
                    {selectedCategory.name}
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {selectedCategory.description}
                </p>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 mb-2.5 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Examples of What You Can Request:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCategory.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-white/70 bg-[#081021] p-3 border border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro action */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs text-white/50 font-light">
                Custom font styles, color matching, and design proof reviews included.
              </div>
              <button
                onClick={() => onRequestCustomQuote(selectedCategory.name)}
                className="inline-flex items-center space-x-2 px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold text-[#081021] bg-[#D4AF37] hover:bg-[#C5A059] shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Box: "Have an idea? Let’s create it." */}
        <div className="relative bg-[#0A192F] p-8 sm:p-12 text-center text-white border border-[#D4AF37]/40 shadow-2xl overflow-hidden">
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 mx-auto bg-[#112240] border border-[#D4AF37]/40 flex items-center justify-center">
              <Palette className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
              “Have an idea? Let’s create it.”
            </h3>

            <p className="text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed">
              Whether you need customized wedding favors, personalized shirts for your bridal party or family reunion, acrylic event signs, or unique gifts in Sacramento, we are here to craft them to perfection.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onRequestCustomQuote('Custom Products & Apparel')}
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#081021] bg-[#D4AF37] hover:bg-[#C5A059] shadow-xl shadow-[#D4AF37]/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Request a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
