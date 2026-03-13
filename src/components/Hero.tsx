import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative isolate h-screen flex flex-col items-center px-6 overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.dropbox.com/scl/fi/o85pd2ukcd89g1pyopzs1/Cabot-_Tower_card_graded_v2.mp4?rlkey=zmt93n6cx8kb7y5i6c2hf0aga&st=9fgv96vd&raw=1" type="video/mp4" />
        </video>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-5xl pt-[40vh]"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.85] mb-8 uppercase [word-spacing:0.05em] drop-shadow-lg">
          UNINTERRUPTED FLOW. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-200">
            UNMATCHED PERSPECTIVE.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md">
          Immersive FPV drone fly-throughs that transform your physical space into a cinematic journey. Elevate your brand with the perspective it deserves.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onContactClick}
            className="group relative px-8 py-4 rounded-full bg-zinc-900 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Border Beam Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-colors pointer-events-none" />
          </button>
          
          <button className="group flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-200 bg-white/80 text-zinc-900 font-bold hover:bg-white transition-all active:scale-95 overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Play className="w-5 h-5 fill-current relative z-10 text-sky-500" />
            <span className="relative z-10">Watch Showreel</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
