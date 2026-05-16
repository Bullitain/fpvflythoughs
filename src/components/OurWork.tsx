import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface OurWorkProps {
  onSeeMoreClick: () => void;
}

const VideoTile = ({ id, index }: { id: string; index: number }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-xl shadow-zinc-200/50"
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
          title={`FPV Flythrough ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div onClick={() => setPlaying(true)} className="relative w-full h-full cursor-pointer group/thumb">
          <img
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }}
            alt={`FPV Flythrough ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 group-hover/thumb:scale-110 group-hover/thumb:bg-white transition-all flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 fill-zinc-900 text-zinc-900 ml-1" />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const videos = [
  { id: 'mEhHKseXmGI' },
  { id: 'QGnu_gR-vzo' },
  { id: '3-Xczq8KCK0' },
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
            <VideoTile key={video.id} id={video.id} index={index} />
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
