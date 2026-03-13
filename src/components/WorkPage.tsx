import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface WorkPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const videos = [
  { id: 'XvPGVT525Qo' },
  { id: 'INGTGa5PR8g' },
  { id: 'cUBg6Qp_N98' },
];

export const WorkPage: React.FC<WorkPageProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-zinc-950 overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 transition-all"
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
              <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-sm font-bold mb-6 border border-sky-500/20">
                OUR PORTFOLIO
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase [word-spacing:0.05em]">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">WORK</span>
              </h1>
            </motion.div>

            {/* Videos */}
            <div className="flex flex-col gap-12">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
                  className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video"
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
