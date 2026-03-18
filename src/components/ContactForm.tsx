import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Building2, Mail, Phone, MessageSquare } from 'lucide-react';

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  description: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (data: ContactFormData) => void;
}

const COUNTRY_CODES = [
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+1',  flag: '🇺🇸', label: 'US/CA' },
  { code: '+353', flag: '🇮🇪', label: 'IE' },
  { code: '+33',  flag: '🇫🇷', label: 'FR' },
  { code: '+49',  flag: '🇩🇪', label: 'DE' },
  { code: '+34',  flag: '🇪🇸', label: 'ES' },
  { code: '+39',  flag: '🇮🇹', label: 'IT' },
  { code: '+31',  flag: '🇳🇱', label: 'NL' },
  { code: '+61',  flag: '🇦🇺', label: 'AU' },
  { code: '+64',  flag: '🇳🇿', label: 'NZ' },
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+65',  flag: '🇸🇬', label: 'SG' },
];

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    countryCode: '+44',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      await fetch('https://fpvflythroughs.app.n8n.cloud/webhook/479acc90-a6e3-4f63-9ca4-9916efd2fc04', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'FPV Flythroughs UK Website',
          submittedAt: new Date().toISOString()
        }),
      });

      setIsSuccess(true);

      const submitted = {
        ...formData,
        phone: formData.phone ? `${formData.countryCode}${formData.phone}` : '',
      };

      // Reset form after success then trigger Cal.com booking
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', businessName: '', email: '', countryCode: '+44', phone: '', description: '' });
        onClose();
        onSuccess?.(submitted);
      }, 1000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-zinc-100 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-zinc-900 uppercase [word-spacing:0.05em]">
                  Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">Flight</span>
                </h2>
                <p className="text-zinc-500 text-sm mt-1">Tell us about your project requirements.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-8 overflow-y-auto">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-sky-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                  <p className="text-zinc-500">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-sky-500 transition-colors" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Business Name (Optional)</label>
                    <div className="relative group">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-sky-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Acme Ltd"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-sky-500 transition-colors" />
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Phone Number (Optional)</label>
                    <div className="relative group flex">
                      {/* Country code dropdown */}
                      <div className="relative shrink-0">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-sky-500 transition-colors pointer-events-none" />
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="h-full bg-zinc-100 border border-zinc-200 rounded-l-2xl pl-8 pr-2 text-zinc-700 text-sm font-medium focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all appearance-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map(({ code, flag, label }) => (
                            <option key={code} value={code}>
                              {flag} {code} ({label})
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Number input */}
                      <input
                        type="tel"
                        placeholder="7000 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 border-l-0 rounded-r-2xl py-4 px-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Service Description</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-zinc-400 group-focus-within:text-sky-500 transition-colors" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full group relative overflow-hidden px-8 py-5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-400 text-white font-black text-lg uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Request <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>

                  {errorMessage && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
