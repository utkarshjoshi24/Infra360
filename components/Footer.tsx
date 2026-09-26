"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@infraedge360.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-void border-t border-outline text-on-surface pt-24 pb-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cobalt/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 relative z-10">
        
        {/* Top Direct Transmission Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-outline pb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-ice tracking-widest uppercase block mb-3 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              // ARCHITECTURAL ATELIER TRANSMISSION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-none uppercase">
              Let’s construct <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
                The Edge.
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-3">
            <span className="font-mono text-on-surface-variant uppercase tracking-wider text-xs">
              Direct Transmission Desk
            </span>
            <div className="flex items-center gap-3">
              <a 
                href="mailto:hello@infraedge360.com" 
                className="font-display text-2xl sm:text-3xl md:text-4xl text-on-surface hover:text-ice transition-colors font-bold underline decoration-cobalt underline-offset-8"
              >
                hello@infraedge360.com
              </a>
              <button
                onClick={copyEmail}
                className="p-2.5 bg-surface border border-outline hover:border-cobalt text-on-surface-variant hover:text-white transition-all text-xs font-mono uppercase cursor-pointer"
                title="Copy email address"
              >
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
            <span className="font-mono text-[11px] text-on-surface-muted">
              Average response time &lt; 24 hours · Worldwide Operations
            </span>
          </div>
        </div>

        {/* 4-Column Grid Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-outline pb-16">
          {/* Col 1: Services Directory */}
          <div>
            <span className="font-mono text-ice block mb-6 uppercase tracking-wider text-xs font-semibold">
              // 01 · Disciplines
            </span>
            <div className="flex flex-col gap-3 font-body text-sm text-on-surface-variant">
              <Link href="/services/business" className="hover:text-white transition-colors">Business Consultation & GTM</Link>
              <Link href="/services/creative" className="hover:text-white transition-colors">Creative Solutions & Identity</Link>
              <Link href="/services/event" className="hover:text-white transition-colors">Event Management & Activations</Link>
              <Link href="/services/legal" className="hover:text-white transition-colors">Legal Services & Advisory</Link>
              <Link href="/services/media" className="hover:text-white transition-colors">Media Solutions & Motion</Link>
              <Link href="/services/webdev" className="hover:text-white transition-colors">Website Dev & Maintenance</Link>
            </div>
          </div>

          {/* Col 2: Studio Index */}
          <div>
            <span className="font-mono text-ice block mb-6 uppercase tracking-wider text-xs font-semibold">
              // 02 · Studio Index
            </span>
            <div className="flex flex-col gap-3 font-body text-sm text-on-surface-variant">
              <Link href="/" className="hover:text-white transition-colors">Home Atelier</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">Selected Work & Deployments</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us & Methodology</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact & Brief Transmittal</Link>
              <Link href="/services" className="hover:text-white transition-colors">All 6 Service Lines</Link>
            </div>
          </div>

          {/* Col 3: Coordinates & Presence */}
          <div>
            <span className="font-mono text-ice block mb-6 uppercase tracking-wider text-xs font-semibold">
              // 03 · Coordinates
            </span>
            <div className="flex flex-col gap-3 font-mono text-xs text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                <span>BASED IN INDIA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>OPERATING WORLDWIDE</span>
              </div>
              <div className="pt-2 text-on-surface-muted">
                <span>COORD: 30.3165° N, 78.0322° E</span>
              </div>
              <div className="text-on-surface-muted">
                <span>SYSTEM LATENCY: &lt; 18MS</span>
              </div>
            </div>
          </div>

          {/* Col 4: Ethos Summary */}
          <div>
            <span className="font-mono text-ice block mb-6 uppercase tracking-wider text-xs font-semibold">
              // 04 · Architecture
            </span>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
              A 360° hybrid creative studio & venture accelerator pairing Gen-Z cultural velocity with institutional-grade execution.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="font-mono text-xs text-on-surface-variant hover:text-ice transition-colors">Instagram ↗</a>
              <a href="#" className="font-mono text-xs text-on-surface-variant hover:text-ice transition-colors">LinkedIn ↗</a>
              <a href="mailto:hello@infraedge360.com" className="font-mono text-xs text-on-surface-variant hover:text-ice transition-colors">Email ↗</a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Telemetry */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-on-surface-muted">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
            <span>© 2026 INFRAEDGE 360 · ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-on-surface transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-on-surface transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-on-surface transition-colors">TELEMETRY_REF: V2.4</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
