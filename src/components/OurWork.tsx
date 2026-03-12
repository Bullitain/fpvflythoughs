import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Luxury Estate Tour",
    category: "Real Estate",
    thumbnail: "https://picsum.photos/seed/estate/1280/720",
  },
  {
    title: "Industrial Facility",
    category: "Commercial",
    thumbnail: "https://picsum.photos/seed/industrial/1280/720",
  },
  {
    title: "Event Highlights",
    category: "Live Events",
    thumbnail: "https://picsum.photos/seed/event/1280/720",
  }
];

export const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6"
          >
            OUR PORTFOLIO
          </motion.div>
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-200 shadow-xl shadow-zinc-200/50"
            >
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-sky-400 font-bold text-sm mb-2 uppercase tracking-widest">{project.category}</p>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight">{project.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white border border-zinc-200 text-zinc-900 font-black uppercase tracking-tight hover:border-sky-500 transition-all shadow-lg shadow-zinc-200/50 active:scale-95">
            See More Work
            <ArrowRight className="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
