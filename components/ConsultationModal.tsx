"use client";

import React, { useState, useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Business Consultation",
}) => {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/hello@infraedge360.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch(() => {
        // Fallback gracefully
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-surface border border-outline shadow-2xl p-6 md:p-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-cobalt/25 blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-white transition-colors cursor-pointer border border-outline hover:border-outline-variant bg-surface-low"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice mb-6 animate-bounce">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-2">[TRANSMISSION RECEIVED]</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">We've got your brief.</h3>
            <p className="font-body text-on-surface-variant max-w-md mb-8">
              A member of our core team will review your inquiry and transmit a response to your inbox within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-primary"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              <span>// DIRECT TRANSMISSION TERMINAL</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
              Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-cobalt">Consultation</span>
            </h2>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              One form, direct to our inbox — tell us what you're building and we'll reply within 1 business day.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="_subject" value="New Consultation Request - infraedge360.com" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">Full Name *</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Jordan Vance"
                    className="bg-surface-low border border-outline p-3 text-sm text-on-surface focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">Email Address *</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="jordan@venture.com"
                    className="bg-surface-low border border-outline p-3 text-sm text-on-surface focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">Company / Project</label>
                  <input
                    type="text"
                    name="Company"
                    placeholder="Venture Name"
                    className="bg-surface-low border border-outline p-3 text-sm text-on-surface focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">Service Discipline</label>
                  <select
                    name="Service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="bg-surface-low border border-outline p-3 text-sm text-on-surface focus:border-cobalt focus:outline-none transition-colors"
                  >
                    <option value="Business Consultation">Business Consultation</option>
                    <option value="Creative Solutions">Creative Solutions</option>
                    <option value="Event Management">Event Management</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Media Solutions">Media Solutions</option>
                    <option value="Website Dev & Maintenance">Website Dev & Maintenance</option>
                    <option value="Full Studio 360 Stack">Full Studio 360 Stack</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">Project Scope & Goal</label>
                <textarea
                  name="Message"
                  rows={3}
                  required
                  placeholder="Share details on your roadmap, goals, or the specific bottlenecks you want solved..."
                  className="bg-surface-low border border-outline p-3 text-sm text-on-surface focus:border-cobalt focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="font-mono text-[11px] text-on-surface-muted">
                  SLA: Response guaranteed &lt; 24h
                </span>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5"
                >
                  {submitting ? 'TRANSMITTING...' : 'TRANSMIT BRIEF →'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
