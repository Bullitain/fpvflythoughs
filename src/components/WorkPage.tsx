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
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
                  className="rounded-3xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-200/50 aspect-video"
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
