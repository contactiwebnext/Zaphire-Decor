import React, { useState, useRef } from 'react';
import { Calendar, ArrowRight, CheckCircle2, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onPlanEvent: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanEvent, onExploreServices }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#081021]"
    >
      {/* Background Video with Sophisticated Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source
            src="https://twoaw6r9ig10iipp.public.blob.vercel-storage.com/Create_video_for_Zaphire_Decor_202609042200.mp4"
            type="video/mp4"
          />
        </video>
        {/* Darkened overlay ensuring the background video is clearly visible while text remains crisp & legible */}
        <div className="absolute inset-0 bg-[#081021]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#081021]/80 via-transparent to-[#081021]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,16,33,0.2)_0%,rgba(8,16,33,0.75)_100%)]"></div>
      </div>

      {/* Floating Audio Mute/Unmute Toggle Button */}
      <div className="absolute bottom-24 sm:bottom-8 right-6 sm:right-10 z-20">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
          className="flex items-center space-x-2 px-3.5 py-2.5 bg-[#0A192F]/90 hover:bg-[#112240] text-white border border-white/15 hover:border-[#D4AF37]/70 shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group"
          title={isMuted ? 'Click to enable audio' : 'Click to mute audio'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-white/70 group-hover:text-[#D4AF37] transition-colors" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 group-hover:text-white transition-colors">
                Sound Off
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Sound On
              </span>
            </>
          )}
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-7">
          {/* Sacramento Location & Category Line */}
          <div className="flex items-center justify-center gap-2.5 opacity-70">
            <div className="w-8 h-[1px] bg-white"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white">
              Established in Sacramento, CA
            </span>
            <div className="w-8 h-[1px] bg-white"></div>
          </div>

          {/* Headline */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-normal leading-[1.15]">
              Beautifully <span className="italic text-[#D4AF37]">Coordinated.</span><br />
              Uniquely Yours.
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Wedding & event coordination, elegant decor, and customized products designed to make your special moments unforgettable in Sacramento and surrounding Northern California destinations.
          </p>

          {/* Prominent CTAs matching Sophisticated Dark specification */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
            <button
              onClick={onPlanEvent}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D4AF37] text-[#081021] px-8 py-4 font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#D4AF37]/10 hover:bg-[#C5A059] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#081021]" />
              Plan Your Event
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:border-white transition-colors cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#D4AF37]" />
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-white/60 max-w-2xl w-full">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>Wedding Coordination</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>Event Decor & Styling</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>Custom Gifts & Apparel</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#services"
            className="flex flex-col items-center text-white/40 hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Scroll down to services"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] mb-1 font-medium">Discover More</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
