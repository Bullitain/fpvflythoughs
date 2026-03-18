import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { OurWork } from './components/OurWork';
import { Proof } from './components/Proof';
import { CTA } from './components/CTA';
import { ContactForm, ContactFormData } from './components/ContactForm';
import { WorkPage } from './components/WorkPage';
import { VideoModal } from './components/VideoModal';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_NAMESPACE = 'fpv-flythrough-discovery-call';
const CAL_LINK = 'ben-wray-uyctap/fpv-flythrough-discovery-call';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Load Cal.com embed.js once on mount
  useEffect(() => {
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

    window.Cal('init', CAL_NAMESPACE, { origin: 'https://app.cal.com' });
    window.Cal.ns[CAL_NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  const handleContactSuccess = (data: ContactFormData) => {
    window.Cal?.ns[CAL_NAMESPACE]?.('modal', {
      calLink: CAL_LINK,
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        name: data.name,
        email: data.email,
        notes: data.description,
        ...(data.phone ? { smsReminderNumber: data.phone } : {}),
      },
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-sky-500/30 selection:text-sky-900">
      <BackgroundEffects />
      <Navbar onContactClick={openContact} />

      <main>
        <Hero onContactClick={openContact} onShowreelClick={() => setIsShowreelOpen(true)} />

        {/* Detail Section - Value Proposition in more detail */}
        <ValueProp />

        {/* Portfolio Section */}
        <OurWork onSeeMoreClick={() => setIsWorkOpen(true)} />

        {/* Proof Section - Testimonials and Footage */}
        <Proof />

        {/* Call to Action */}
        <CTA onContactClick={openContact} />
      </main>

      <ContactForm
        isOpen={isContactOpen}
        onClose={closeContact}
        onSuccess={handleContactSuccess}
      />
      <WorkPage isOpen={isWorkOpen} onClose={() => setIsWorkOpen(false)} />
      <VideoModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_6101kkgw054yewgbxvx7ghgvhry1"></elevenlabs-convai>
    </div>
  );
}
