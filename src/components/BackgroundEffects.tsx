import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundEffects: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Soft animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-100/30 blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Grid shimmer */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Particle drift */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-zinc-400/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [null, '-40px', '40px', null],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Slow parallax abstract shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 border border-zinc-900/5 rounded-full blur-sm"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] border border-zinc-900/5 rounded-full blur-sm"
      />
    </div>
  );
};
