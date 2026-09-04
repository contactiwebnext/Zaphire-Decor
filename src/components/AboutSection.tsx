import React from 'react';
import { Sparkles, Heart, Eye, Award, Clock, MapPin, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const brandPillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Creativity',
      description:
        'We translate fresh design ideas into stunning visual realities, curating unique color stories, bespoke decorative elements, and innovative event layouts tailored to your personal aesthetic.'
    },
    {
      icon: <Eye className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Attention to Detail',
      description:
        'From the precise alignment of place settings and floral centerpieces to meticulously structured master schedules, no element is left to chance.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Personalized Service',
      description:
        'We listen deeply to your wishes and priorities. Every celebration, custom gift, and apparel order is treated as a unique collaboration that mirrors your individual story.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Professional Coordination',
      description:
        'Calm, organized logistical oversight ensures seamless transitions between ceremony, cocktail hour, and reception so you and your loved ones can truly be present.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Elegant Design',
      description:
        'We blend timeless romantic aesthetics with modern design sensibilities, creating spaces that feel luxurious, harmonious, and warm.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Commitment to Every Memory',
      description:
        'Our genuine dedication is to make every milestone an unforgettable joy—leaving lasting impressions with your guests and memories to cherish forever.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#081021] text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Subtle gold ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#112240]/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling & Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Editorial Image with Framed Gold Border */}
              <div className="relative bg-[#0A192F] p-3 border border-[#D4AF37]/40 shadow-2xl">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>

                <div className="relative overflow-hidden h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=900"
                    alt="Wedding coordinator adjusting floral tablescape details before guests arrive"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081021] via-transparent to-transparent opacity-90"></div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                      The Zaphire Decor Standard
                    </span>
                    <p className="font-serif text-xl font-normal text-white mt-1 italic">
                      “Every detail matters because every memory matters.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Sacramento Floating Badge */}
              <div className="absolute -bottom-5 -right-3 bg-[#081021]/95 border border-[#D4AF37]/40 p-4 shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Sacramento, CA</span>
                </div>
                <p className="text-[11px] text-white/60 mt-1 leading-snug font-light">
                  Serving Sacramento, Roseville, Elk Grove, Folsom, Davis, and surrounding Northern California destinations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative & Brand Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#0A192F] border border-[#D4AF37]/30 px-4 py-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
                  About Zaphire Decor
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
                Crafting Meaningful Celebrations With Heart and Artistry
              </h2>

              <p className="text-base text-white/70 font-light leading-relaxed">
                At Zaphire Decor, we believe that an extraordinary wedding or event begins with genuine understanding. Based in Sacramento, California, our team unites refined logistical coordination with custom decor artistry and personalized products—bringing your unique celebration to life with poise, beauty, and seamless precision.
              </p>

              <p className="text-sm text-white/60 font-light leading-relaxed">
                Whether orchestrating a grand wedding day, styling an intimate anniversary dinner, producing tailored apparel for your celebration group, or fashioning bespoke keepsakes for your guests, we dedicate ourselves to ensuring your experience is as joyful and effortless as the occasion itself.
              </p>
            </div>

            {/* 6 Core Brand Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {brandPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A192F] border border-white/10 hover:border-[#D4AF37]/40 p-4 transition-all duration-200"
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="p-2 bg-[#112240] border border-white/10 text-[#D4AF37]">
                      {pillar.icon}
                    </div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
