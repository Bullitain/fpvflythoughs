import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Marketing Director, Hyatt",
    content: "The FPV fly-through completely changed how we showcase our resorts. It's not just a video; it's an experience that drives bookings.",
    rating: 5,
    avatar: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Urban Spaces",
    content: "I've never seen anything like it. The precision and speed of the drone through our office space was breathtaking. Highly recommend.",
    rating: 5,
    avatar: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Real Estate Developer",
    content: "FPV Flythroughs UK delivered exactly what we needed to sell our luxury penthouses. The footage is high-end and professional.",
    rating: 5,
    avatar: "https://picsum.photos/seed/person3/100/100"
  }
];

export const Proof: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-bold mb-6 border border-sky-100"
            >
              TESTIMONIALS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6 uppercase [word-spacing:0.05em]"
            >
              OUR TRUSTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">CLIENTS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 text-xl font-medium"
            >
              We've helped businesses across the globe elevate their visual presence.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 rounded-[2rem] bg-zinc-50 border border-zinc-200 shadow-sm"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/avatar${i}/40/40`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Client" />
              ))}
            </div>
            <div className="text-sm">
              <p className="text-zinc-900 font-black uppercase tracking-tight">50+ Happy Clients</p>
              <div className="flex text-sky-500">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 relative group transition-all duration-300"
            >
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Quote className="w-20 h-20" />
              </div>
              
              <div className="flex gap-1 mb-8 text-sky-500">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-zinc-700 text-xl mb-10 leading-relaxed font-medium italic relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white shadow-md" />
                </div>
                <div>
                  <p className="text-zinc-900 font-black uppercase tracking-tight">{t.name}</p>
                  <p className="text-zinc-500 text-sm font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
