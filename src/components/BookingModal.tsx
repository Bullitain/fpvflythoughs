import React, { useEffect, useRef } from 'react';
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

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const embedInitialised = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      embedInitialised.current = false;
      return;
    }

    // Don't re-init if already done for this open
    if (embedInitialised.current) return;
    embedInitialised.current = true;

    const NAMESPACE = 'fpv-discovery-call';

    const initInline = () => {
      const Cal = window.Cal;
      if (!Cal || !containerRef.current) return;

      // Clear any previous embed content
      containerRef.current.innerHTML = '';

      Cal('init', NAMESPACE, { origin: 'https://app.cal.com' });
      Cal.ns[NAMESPACE]('inline', {
        elementOrSelector: containerRef.current,
        calLink: 'ben-wray-uyctap/fpv-flythrough-discovery-call',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      });
      Cal.ns[NAMESPACE]('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };

    if (window.Cal?.loaded) {
      initInline();
    } else {
      // Run the Cal.com loader, then init once the script is ready
      (function (C: Window, A: string, L: string) {
        const p = (a: any, ar: any) => a.q.push(ar);
        const d = C.document;
        C.Cal =
          C.Cal ||
          function (...args: any[]) {
            const cal = C.Cal!;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const s = d.createElement('script') as HTMLScriptElement;
              s.src = A;
              s.onload = initInline;
              d.head.appendChild(s);
              cal.loaded = true;
            }
            if (args[0] === L) {
              const api: any = (...a: any[]) => p(api, a);
              const ns = args[1];
              api.q = api.q || [];
              if (typeof ns === 'string') {
                cal.ns[ns] = cal.ns[ns] || api;
                p(cal.ns[ns], args);
                p(cal, ['initNamespace', ns]);
              } else {
                p(cal, args);
              }
              return;
            }
            p(cal, args);
          };
      })(window, 'https://app.cal.com/embed/embed.js', 'init');
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
                ref={containerRef}
                className="w-full rounded-2xl overflow-hidden border border-zinc-100"
                style={{ minHeight: '500px' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
