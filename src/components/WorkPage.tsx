import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface WorkPageProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoClick: (id: string) => void;
}

const VideoTile = ({ id, index, onPlay }: { id: string; index: number; onPlay: (id: string) => void }) => (
  <div className="relative group/tile">
    {/* Glow — blurred copy of the thumbnail, fades in on hover */}
    <div
      className="absolute -inset-4 rounded-[2.5rem] opacity-0 group-hover/tile:opacity-90 transition-opacity duration-500 blur-[40px] scale-110 pointer-events-none"
      style={{ backgroundImage: `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
      onClick={() => onPlay(id)}
      className="relative rounded-3xl overflow-hidden bg-zinc-900 aspect-video cursor-pointer transition-transform duration-300 group-hover/tile:scale-105"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }}
        alt={`FPV Flythrough ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
);

const videos = [
  { id: 'mEhHKseXmGI' },
  { id: 'QGnu_gR-vzo' },
  { id: '3-Xczq8KCK0' },
  { id: 'r7dnBAwdEZQ' },
  { id: 'c8gOQNyImqc' },
];

export const WorkPage: React.FC<WorkPageProps> = ({ isOpen, onClose, onVideoClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-10 p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-6xl mx-auto px-6 py-24">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 uppercase [word-spacing:0.05em]">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">WORK</span>
              </h1>
            </motion.div>

            {/* Videos */}
            <div className="grid grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <VideoTile key={video.id} id={video.id} index={index} onPlay={onVideoClick} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
