import React, { useState } from 'react';
import { portfolioCategories, portfolioData } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { Sparkles, X, ZoomIn, ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  onInquireStyle: (itemTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onInquireStyle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  const currentIndex = activeModalItem
    ? filteredItems.findIndex(item => item.id === activeModalItem.id)
    : -1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveModalItem(filteredItems[0]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setActiveModalItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#050B18] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#0A192F] border border-[#D4AF37]/30 px-4 py-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
              Portfolio & Inspiration
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Moments Coordinated & Styled to Perfection
          </h2>

          <p className="text-base text-white/60 font-light leading-relaxed">
            Explore a curated selection of weddings, milestone events, bespoke tablescapes, celebratory backdrops, and customized products crafted with care for our clients.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2.5">
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#081021] shadow-lg shadow-[#D4AF37]/15'
                    : 'bg-[#0A192F] text-white/70 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative cursor-pointer overflow-hidden bg-[#0A192F] border border-white/10 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#081021]">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081021]/95 via-[#081021]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <div className="mt-3 inline-flex items-center space-x-1.5 text-xs text-[#D4AF37] font-semibold tracking-wider">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Full Details</span>
                  </div>
                </div>

                {/* Permanent category badge on corner */}
                <div className="absolute top-3 left-3 bg-[#081021]/90 backdrop-blur-md px-3 py-1 border border-[#D4AF37]/30 text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] group-hover:opacity-0 transition-opacity">
                  {item.category}
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="p-5 bg-[#0A192F] flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#F4E2AA] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/60 mt-1 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-[#112240] text-white/70 px-2.5 py-0.5 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Eye className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-white/40 font-light">
            Showcasing style concepts and coordination inspirations. To replace gallery images with Zaphire Decor’s portfolio photos, update <code className="text-[#D4AF37] bg-[#0A192F] px-1.5 py-0.5 border border-white/10">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>

      {/* Lightbox Modal Interaction */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-[#081021]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0A192F] text-white max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#081021]/80 text-white/70 hover:text-white hover:bg-[#081021] border border-white/10 focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#081021]/80 text-white hover:text-[#D4AF37] focus:outline-none border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right/Next button */}
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[380px] top-1/2 -translate-y-1/2 z-20 p-2 bg-[#081021]/80 text-white hover:text-[#D4AF37] focus:outline-none border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Stage */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.imageAlt}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {/* Content Details Panel */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-[#081021] border-t md:border-t-0 md:border-l border-white/10">
              <div className="space-y-4">
                <div>
                  <span className="inline-block text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] bg-[#0A192F] px-3 py-1 border border-[#D4AF37]/30">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-3">
                    {activeModalItem.title}
                  </h3>
                </div>

                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {activeModalItem.description}
                </p>

                {/* Tags */}
                <div className="pt-2">
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-2">
                    Elements & Details:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#112240] text-white/70 px-2.5 py-1 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = activeModalItem.title;
                    setActiveModalItem(null);
                    onInquireStyle(title);
                  }}
                  className="w-full py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-bold text-[#081021] bg-[#D4AF37] hover:bg-[#C5A059] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                >
                  <span>Inquire About This Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
