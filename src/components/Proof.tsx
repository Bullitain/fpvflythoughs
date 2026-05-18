import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dave Young",
    role: "HUSK Co-Founder",
    content: "FPV Flythroughs UK brought my vision to life with such precision and professionalism that I'd recommend them to anyone. Just incredible work.",
    rating: 5,
    avatar: "https://www.dropbox.com/scl/fi/02a6wphq1dtycdjqc3ld2/Dave_Husk.webp?rlkey=w6eonbmfeq5jzkmd3bq4og0ph&st=qj9ma0m8&raw=1"
  },
  {
    name: "Paris Vlachos",
    role: "Real Estate Manager",
    content: "FPV Flythroughs UK delivered exactly what we needed to bring our properties to life in a fresh and modern way. The footage is high-end and professional.",
    rating: 5,
    avatar: "https://www.dropbox.com/scl/fi/90e7h5ugzn6vblszvnifz/real-estate-manager_00000.jpg?rlkey=culawd70n18ducw3j32uty5b7&st=5o4ag8bs&raw=1"
  },
  {
    name: "Natalie Crane",
    role: "Head of Digital Marketing, Frasers Group",
    content: "FPV Flythroughs did such an amazing job at capturing our events in a dynamic way that was missing in the past. We will certainly be using them again.",
    rating: 5,
    avatar: "https://www.dropbox.com/scl/fi/fm8tqmanjs1tqqu2s2h3b/natalie-crane.jpg?rlkey=i8e1s48oybv7whj8oho650lz9&st=tdei8i5x&raw=1"
  }
];

export const Proof: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6 uppercase [word-spacing:0.05em]"
            >
              OUR HAPPY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">CLIENTS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 text-xl font-medium"
            >
              We've helped businesses across the UK elevate their visual presence.
            </motion.p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 relative group transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Quote className="w-20 h-20" />
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
