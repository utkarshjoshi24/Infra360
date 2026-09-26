"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@infraedge360.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <div className="min-h-screen bg-void text-on-surface pt-24 pb-32">
      {/* =========================================================================
          TOP TELEMETRY STRIP
         ========================================================================= */}
      <section className="w-full border-b border-outline bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="text-cobalt font-bold">//</span>
            <Link href="/" className="hover:text-white transition-colors">INDEX</Link>
            <span className="text-outline">/</span>
            <span className="text-white font-semibold">[04] DIRECT TRANSMISSION</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-muted text-[11px]">
            <span>NODE: HELLO@INFRAEDGE360.COM</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">SLA: &lt; 24H RESPONSE</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          HERO MASTHEAD
         ========================================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-outline text-xs font-mono text-ice uppercase w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse"></span>
            GET IN TOUCH · NO TICKET QUEUE
          </span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.92] text-white">
            Tell Us What <br />
            You're <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">Building.</span>
          </h1>

          <p className="font-body text-base sm:text-xl text-on-surface-variant leading-relaxed">
            One form, one inbox, one team reading it — no chatbot filters or account reps. Send us the brief, the bottleneck, or the question, and a senior partner replies directly.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#contact-form">
              <span>FILL TRANSMISSION BRIEF</span>
              <span className="font-mono">↓</span>
            </Button>
            <Button href="mailto:hello@infraedge360.com" variant="outline">
              EMAIL US DIRECTLY
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 mt-6 border-t border-outline/50 font-mono text-xs">
            <div className="flex flex-col">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">&lt;24h</span>
              <span className="text-on-surface-variant uppercase text-[11px] mt-1">Typical Response Time</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ice">1</span>
              <span className="text-on-surface-variant uppercase text-[11px] mt-1">Unified Direct Inbox</span>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">6</span>
              <span className="text-on-surface-variant uppercase text-[11px] mt-1">Disciplines, Single Team</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          CONTACT FORM & DESK DETAILS
         ========================================================================= */}
      <section id="contact-form" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
                /01 · Transmission Desk
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-none text-white mb-4">
                GET IN <span className="text-outline">TOUCH.</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Fill out the form and it lands straight in our core terminal — every submission is routed to <strong className="text-white">hello@infraedge360.com</strong> and a partner replies directly.
              </p>
            </div>

            {/* Detail Cards */}
            <div className="flex flex-col gap-4 font-mono text-xs">
              <div className="p-5 bg-surface border border-outline flex items-start justify-between gap-4">
                <div>
                  <span className="text-on-surface-muted uppercase text-[10px] block mb-1">Direct Transmission</span>
                  <a href="mailto:hello@infraedge360.com" className="font-display text-base sm:text-lg font-bold text-white hover:text-ice transition-colors">
                    hello@infraedge360.com
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1 bg-surface-low border border-outline hover:border-cobalt text-on-surface-variant hover:text-white transition-all text-[11px] cursor-pointer"
                >
                  {copied ? '✓ COPIED' : 'COPY'}
                </button>
              </div>

              <div className="p-5 bg-surface border border-outline flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-low border border-outline flex items-center justify-center text-ice flex-shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-on-surface-muted uppercase text-[10px] block mb-1">Base & Presence</span>
                  <span className="font-display text-sm sm:text-base font-semibold text-white block">India · Available Worldwide</span>
                  <span className="text-on-surface-muted text-[11px]">Coord: 30.3165° N, 78.0322° E</span>
                </div>
              </div>

              <div className="p-5 bg-surface border border-outline flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-low border border-outline flex items-center justify-center text-ice flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <span className="text-on-surface-muted uppercase text-[10px] block mb-1">Guaranteed SLA</span>
                  <span className="font-display text-sm sm:text-base font-semibold text-white block">Within 1 Business Day</span>
                  <span className="text-on-surface-muted text-[11px]">Same-day turnaround for rush sprints</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 font-mono text-xs">
              <span className="text-on-surface-muted">CHANNELS:</span>
              <a href="#" className="text-on-surface-variant hover:text-ice transition-colors">Instagram ↗</a>
              <a href="#" className="text-on-surface-variant hover:text-ice transition-colors">LinkedIn ↗</a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-outline p-8 md:p-12 relative shadow-2xl">
              {/* Ambient Top Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cobalt/10 rounded-full blur-3xl pointer-events-none"></div>

              {submitted ? (
                <div className="py-16 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice mb-6 animate-bounce">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-2">[TRANSMISSION RECEIVED]</span>
                  <h3 className="font-display text-3xl font-bold uppercase text-white mb-4">We've got your message.</h3>
                  <p className="font-body text-on-surface-variant max-w-md mb-8 text-sm sm:text-base leading-relaxed">
                    A senior member of our team will review your inquiry and transmit a direct response to your inbox within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    SUBMIT ANOTHER MESSAGE
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input type="hidden" name="_subject" value="New enquiry from infraedge360.com" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">Full Name *</label>
                      <input 
                        type="text" 
                        name="Name" 
                        required 
                        placeholder="Jordan Vance"
                        className="bg-surface-lowest border border-outline p-4 text-sm text-white focus:border-cobalt focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">Email Address *</label>
                      <input 
                        type="email" 
                        name="Email" 
                        required 
                        placeholder="jordan@company.com"
                        className="bg-surface-lowest border border-outline p-4 text-sm text-white focus:border-cobalt focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">Company / Venture</label>
                      <input 
                        type="text" 
                        name="Company" 
                        placeholder="Venture Name"
                        className="bg-surface-lowest border border-outline p-4 text-sm text-white focus:border-cobalt focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">Primary Discipline</label>
                      <select 
                        name="Service"
                        className="bg-surface-lowest border border-outline p-4 text-sm text-white focus:border-cobalt focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Business Consultation">Business Consultation & GTM</option>
                        <option value="Creative Solutions">Creative Solutions & Identity</option>
                        <option value="Event Management">Event Management & Activations</option>
                        <option value="Legal Services">Legal Services & Structural Advisory</option>
                        <option value="Media Solutions">Media Solutions & Motion</option>
                        <option value="Website Dev & Maintenance">Website Dev & Maintenance</option>
                        <option value="Full Studio 360 Stack">Full 360° Studio Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">Project Scope & Context *</label>
                    <textarea 
                      name="Message" 
                      rows={5} 
                      required
                      placeholder="Share details on what you're building, upcoming launch dates, budget constraints, or specific problem statements..."
                      className="bg-surface-lowest border border-outline p-4 text-sm text-white focus:border-cobalt focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline/50">
                    <span className="font-mono text-xs text-on-surface-muted">
                      Direct route to hello@infraedge360.com
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full sm:w-auto px-10 py-4 text-xs"
                    >
                      {submitting ? 'TRANSMITTING BRIEF...' : 'SEND TRANSMISSION →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
