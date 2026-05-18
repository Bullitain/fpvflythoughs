import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface PricingPageProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const tiers = [
  {
    name: 'Raw Footage',
    price: '£799',
    description: 'The flight, captured and delivered. Perfect if you have an in-house editor or just need the raw material.',
    features: [
      'Full FPV flight session',
      'Stabilised footage delivered',
      'Digital delivery',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Complete Flythrough',
    price: '£1,299',
    description: 'A fully finished flythrough video, ready to share. This is the package most of our clients choose.',
    features: [
      'Everything in Raw Footage',
      'Professional colour grade',
      'Custom sound design',
      'Licensed backing track',
      'Final export in multiple formats',
      'One round of revisions',
    ],
    cta: 'Most Popular — Book Now',
    highlight: true,
  },
  {
    name: 'Hero FPV Video',
    price: '£2,499',
    description: 'A cinematic showpiece. Multiple flythroughs edited into one high-impact hero video for campaigns and launches.',
    features: [
      'Everything in Complete Flythrough',
      'Multiple flythrough sequences',
      'Seamless cinematic transitions',
      'Full narrative edit',
      'Two rounds of revisions',
    ],
    cta: 'Get Started',
    highlight: false,
  },
];

export const PricingPage: React.FC<PricingPageProps> = ({ isOpen, onClose, onContactClick }) => {
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
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 uppercase [word-spacing:0.05em]">
                SIMPLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">PRICING</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center text-zinc-500 text-lg font-medium mb-20"
            >
              All packages start from the prices shown. Final quotes depend on location and project scope.
            </motion.p>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className={`relative flex flex-col rounded-[2.5rem] p-10 ${
                    tier.highlight
                      ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-400/40 scale-105'
                      : 'bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50 text-zinc-900'
                  }`}
                >
                  {tier.highlight && (
                    <>
                      {/* Sky glow behind featured card */}
                      <div className="absolute inset-0 rounded-[2.5rem] bg-sky-500/10 blur-2xl -z-10 scale-110 pointer-events-none" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-sky-600 to-sky-400 text-white text-xs font-black uppercase tracking-widest shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    </>
                  )}

                  {/* Tier name */}
                  <p className={`text-sm font-black uppercase tracking-widest mb-4 ${tier.highlight ? 'text-sky-400' : 'text-sky-600'}`}>
                    {tier.name}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className={`text-sm font-bold ${tier.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>From </span>
                    <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                  </div>

                  {/* Description */}
                  <p className={`text-sm font-medium leading-relaxed mb-8 ${tier.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {tier.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-medium">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-sky-400' : 'text-sky-500'}`} />
                        <span className={tier.highlight ? 'text-zinc-300' : 'text-zinc-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => { onClose(); onContactClick(); }}
                    className={`w-full py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all active:scale-95 ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-sky-600 to-sky-400 text-white hover:opacity-90 shadow-lg shadow-sky-500/30'
                        : 'bg-zinc-900 text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-400'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-zinc-400 text-sm font-medium mt-16"
            >
              Not sure which package is right for you?{' '}
              <button
                onClick={() => { onClose(); onContactClick(); }}
                className="text-sky-500 font-bold hover:text-sky-600 transition-colors"
              >
                Get in touch
              </button>{' '}
              and we'll find the best fit for your project.
            </motion.p>

            {/* Smallprint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center text-zinc-400 text-xs mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              * All prices shown are starting prices. Travel to shoot locations and the cost of acquiring any necessary flight permits or airspace authorisations will be quoted separately and added to the final price.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
