import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Cinematic Precision",
    description: "Our pilots are world-class FPV specialists, delivering smooth, high-speed maneuvers that standard drones simply can't achieve."
  },
  {
    icon: Target,
    title: "Strategic Storytelling",
    description: "We don't just fly; we tell a story. Every flight path is meticulously planned to showcase your space's unique architecture and flow."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "From pre-production to final color grading, we provide a full-service experience that fits perfectly into your marketing strategy."
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-bold mb-6 border border-sky-100"
        >
          OUR SERVICES
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-8 uppercase [word-spacing:0.05em]"
        >
          HOW WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">ELEVATE</span> YOU
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-600 text-xl max-w-2xl mx-auto font-medium"
        >
          Standard drone shots are a thing of the past. We provide immersive experiences that put your audience directly in the action.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 hover:border-sky-500/30 transition-all duration-200 ease-out"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-sky-400 transition-all duration-300 shadow-lg shadow-zinc-200">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
            <p className="text-zinc-600 leading-relaxed font-medium">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
