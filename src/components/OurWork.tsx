import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface OurWorkProps {
  onSeeMoreClick: () => void;
}

const videos = [
  { id: 'XvPGVT525Qo' },
  { id: 'INGTGa5PR8g' },
  { id: 'cUBg6Qp_N98' },
];

export const OurWork: React.FC<OurWorkProps> = ({ onSeeMoreClick }) => {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-8 uppercase [word-spacing:0.05em]"
          >
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">FLIGHTS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video rounded-[2rem] overflow-hidden bg-zinc-200 shadow-xl shadow-zinc-200/50"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={`FPV Flythrough ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onSeeMoreClick}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white border border-zinc-200 text-zinc-900 font-black uppercase tracking-tight hover:border-sky-500 transition-all shadow-lg shadow-zinc-200/50 active:scale-95"
          >
            See More Work
            <ArrowRight className="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
