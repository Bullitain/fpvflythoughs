import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const DroneLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-180 transition-transform duration-700">
    <path d="M16 2L16 30M2 16L30 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <rect x="13" y="13" width="6" height="6" rx="1" fill="currentColor" />
    <path d="M6 6L10 10M22 22L26 26M26 6L22 10M10 22L6 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick();
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-zinc-200 bg-white/70"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1.5 rounded-xl bg-zinc-900 text-white group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-sky-400 transition-all duration-300">
            <DroneLogo />
          </div>
          <span className="text-xl font-black tracking-tight text-zinc-900 uppercase [word-spacing:0.05em]">
            FPV <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">Flythroughs</span> UK
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-500">
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#work" className="hover:text-zinc-900 transition-colors">Our Work</a>
          <a href="#testimonials" className="hover:text-zinc-900 transition-colors">Testimonials</a>
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-full bg-zinc-900 text-white font-bold hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-400 transition-all active:scale-95 shadow-lg shadow-zinc-200"
          >
            Book a Flight
          </button>
        </div>

        <button
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-zinc-100"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              <a
                href="#services"
                onClick={handleLinkClick}
                className="py-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors border-b border-zinc-100"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={handleLinkClick}
                className="py-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors border-b border-zinc-100"
              >
                Our Work
              </a>
              <a
                href="#testimonials"
                onClick={handleLinkClick}
                className="py-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors border-b border-zinc-100"
              >
                Testimonials
              </a>
              <button
                onClick={handleContactClick}
                className="mt-3 w-full px-5 py-3 rounded-full bg-zinc-900 text-white font-bold hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-400 transition-all active:scale-95"
              >
                Book a Flight
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
