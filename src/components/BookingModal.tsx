import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Cal?: any;
  }
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CAL_DIV_ID = 'my-cal-inline-fpv-flythrough-discovery-call';
const NAMESPACE = 'fpv-flythrough-discovery-call';

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Run Cal.com's exact loader IIFE, then init inline — calls are queued
    // so the embed initialises correctly once embed.js finishes loading.
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', NAMESPACE, { origin: 'https://app.cal.com' });

    window.Cal.ns[NAMESPACE]('inline', {
      elementOrSelector: `#${CAL_DIV_ID}`,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: 'ben-wray-uyctap/fpv-flythrough-discovery-call',
    });

    window.Cal.ns[NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, [isOpen]);

  // Clear the embed container when the modal closes so it re-inits fresh next time
  useEffect(() => {
    if (!isOpen) {
      const el = document.getElementById(CAL_DIV_ID);
      if (el) el.innerHTML = '';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-zinc-100 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-zinc-900 uppercase [word-spacing:0.05em]">
                  Book a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">
                    Discovery Call
                  </span>
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                  Pick a time for a free 10-minute call — let's talk about your project.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Badge */}
            <div className="px-8 pt-5 shrink-0">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 text-sky-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Free · 10 Minutes · No Obligation
                </span>
              </div>
            </div>

            {/* Cal.com Inline Embed */}
            <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4">
              <div
                id={CAL_DIV_ID}
                className="w-full rounded-2xl overflow-hidden border border-zinc-100"
                style={{ width: '100%', height: '100%', overflow: 'scroll', minHeight: '500px' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
