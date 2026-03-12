import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[3rem] md:rounded-[5rem] bg-zinc-900 border border-zinc-800 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-zinc-400"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/20 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 uppercase [word-spacing:0.05em]">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">TAKE FLIGHT?</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium">
            Let's discuss how we can transform your space into a cinematic masterpiece. Get a custom quote for your project today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onContactClick}
              className="group px-10 py-5 rounded-full bg-white text-zinc-900 font-black text-xl flex items-center gap-3 hover:scale-105 transition-all active:scale-95 shadow-xl"
            >
              Contact Us <Mail className="w-6 h-6 text-sky-500" />
            </button>
            <button className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-2 group hover:text-sky-400 transition-colors">
              View Pricing <ArrowRight className="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
      
      <footer className="mt-32 text-center text-zinc-400 text-sm font-bold uppercase tracking-widest">
        <p>© 2026 FPV FLYTHROUGHS UK. All rights reserved.</p>
        <div className="flex justify-center gap-8 mt-6">
          <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">YouTube</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
};
