import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { OurWork } from './components/OurWork';
import { Proof } from './components/Proof';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm';
import { WorkPage } from './components/WorkPage';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

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

      <ContactForm isOpen={isContactOpen} onClose={closeContact} />
      <WorkPage isOpen={isWorkOpen} onClose={() => setIsWorkOpen(false)} />
      <VideoModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_6101kkgw054yewgbxvx7ghgvhry1"></elevenlabs-convai>
    </div>
  );
}
