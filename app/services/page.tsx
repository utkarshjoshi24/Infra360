import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/Button';
import { servicesData } from '../../data/services';

export const metadata = {
  title: 'Services & Disciplines — InfraEdge 360',
  description: 'Explore the 6 core business and creative disciplines of InfraEdge 360: Business Consultation, Creative Solutions, Event Management, Legal Services, Media Solutions, and Website Development.',
};

export default function ServicesIndexPage() {
  const serviceList = Object.values(servicesData);

  return (
    <div className="min-h-screen bg-void text-on-surface pt-28 pb-32">
      {/* Top Telemetry Strip */}
      <section className="border-b border-outline bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="text-cobalt font-bold">//</span>
            <Link href="/" className="hover:text-white transition-colors">INDEX</Link>
            <span className="text-outline">/</span>
            <span className="text-white font-semibold">[02] ALL DISCIPLINES</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-surface border border-outline text-ice text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              <span>6 FULL-STACK SERVICE LINES ACTIVE</span>
            </div>
            <span className="hidden md:inline font-mono text-on-surface-muted">LOC: [WORLDWIDE_DEPLOYMENT]</span>
          </div>
        </div>
      </section>

      {/* Hero Masthead */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="font-mono text-xs text-ice tracking-widest uppercase flex items-center gap-2">
            <span className="w-3 h-px bg-cobalt"></span>
            [ COMPLETE STUDIO SERVICE CAPABILITIES ]
          </span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.95]">
            Engineered For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
              Total Market Edge.
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-on-surface-variant leading-relaxed">
            Six disciplined operational tracks calibrated to replace fragmented agencies with one senior, unified partner. Engage as standalone high-velocity sprints or as an integrated venture infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="/contact">
              COMMENCE CONSULTATION →
            </Button>
            <Button href="/portfolio" variant="outline">
              EXPLORE CASE STUDIES
            </Button>
          </div>
        </div>
      </section>

      {/* Services Comprehensive Cards List */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          {serviceList.map((service, index) => (
            <div 
              key={service.slug}
              className="bg-surface border border-outline hover:border-cobalt transition-all duration-500 p-8 md:p-12 relative overflow-hidden group shadow-2xl"
            >
              {/* Top Row: Index + Category */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-outline/50">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-1 bg-surface-high border border-outline text-ice font-bold">
                    [{service.index} // 06]
                  </span>
                  <span className="text-on-surface-variant uppercase tracking-wider font-semibold">
                    {service.heroCategory}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-on-surface-muted uppercase">
                  {service.telemetryKey}
                </span>
              </div>

              {/* Middle Row: Title + Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                <div className="lg:col-span-5">
                  <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-3 group-hover:text-ice transition-colors">
                    {service.title}
                  </h2>
                  <p className="font-body text-lg text-ice font-light leading-relaxed">
                    "{service.heroTitle}"
                  </p>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {service.heroDesc}
                  </p>
                  
                  {/* Quick Offerings Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.offerings.slice(0, 4).map((off, oIdx) => (
                      <span 
                        key={oIdx}
                        className="px-3 py-1 bg-surface-lowest border border-outline text-xs font-mono text-on-surface-variant"
                      >
                        • {off.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Stats & Action Link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-outline/50">
                <div className="flex items-center gap-6 sm:gap-10 font-mono text-xs">
                  {service.stats.slice(0, 2).map((s, sIdx) => (
                    <div key={sIdx} className="flex items-baseline gap-2">
                      <span className="font-display text-xl font-bold text-white">{s.num}</span>
                      <span className="text-on-surface-muted uppercase text-[10px]">{s.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-display text-xs uppercase font-bold text-white group-hover:text-cobalt-light transition-all tracking-wider py-2 px-4 border border-outline hover:border-cobalt bg-surface-low"
                >
                  <span>VIEW FULL DISCIPLINE BREAKDOWN</span>
                  <span className="font-mono transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="mt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="p-10 md:p-16 bg-surface-lowest border border-outline text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cobalt/15 rounded-full blur-3xl pointer-events-none"></div>
          <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-4">// MULTI-TRACK ENGAGEMENT</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-6">
            Need multiple disciplines deployed simultaneously?
          </h2>
          <p className="font-body text-on-surface-variant max-w-xl mx-auto mb-8 text-sm sm:text-base">
            We routinely architect bespoke bundled sprints combining web, branding, legal, and media for unified venture launches.
          </p>
          <Button href="/contact" className="px-10 py-4 text-xs">
            REQUEST CUSTOM BUNDLED SCOPE →
          </Button>
        </div>
      </section>
    </div>
  );
}
