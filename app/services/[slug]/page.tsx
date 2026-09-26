import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '../../../components/Button';
import { FaqAccordion } from '../../../components/FaqAccordion';
import { servicesData } from '../../../data/services';

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  if (!service) return { title: 'Service Not Found — InfraEdge 360' };

  return {
    title: `${service.title} — InfraEdge 360 Studio`,
    description: service.heroDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-void text-on-surface pt-24 pb-32">
      {/* =========================================================================
          TOP TELEMETRY STRIP & BREADCRUMBS
         ========================================================================= */}
      <section className="w-full border-b border-outline bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="text-cobalt font-bold">//</span>
            <Link href="/" className="hover:text-white transition-colors">INDEX</Link>
            <span className="text-outline">/</span>
            <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
            <span className="text-outline">/</span>
            <span className="text-white font-semibold">[{service.index}] {service.title.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-surface border border-outline text-ice text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              <span>CAPACITY: 2 FOUNDATIONAL SLOTS REMAINING</span>
            </div>
            <span className="hidden lg:inline-block font-mono text-on-surface-muted">
              REF: [{service.telemetryKey}]
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          HERO & TECHNICAL TERMINAL MASTHEAD
         ========================================================================= */}
      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline overflow-hidden">
        {/* Ambient Radial Highlights */}
        <div className="absolute -top-32 right-10 w-96 h-96 bg-cobalt/15 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ice uppercase tracking-widest">
              <span className="w-2.5 h-px bg-cobalt"></span>
              <span>[ SERVICE DISCIPLINE // {service.heroCategory} ]</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] text-white">
              {service.heroTitle}
            </h1>

            <p className="font-body text-base sm:text-xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
              {service.heroDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact">
                <span>COMMENCE SPRINT BRIEF</span>
                <span className="font-mono">→</span>
              </Button>
              <Button href="#offerings" variant="outline">
                SEE WHAT'S INCLUDED
              </Button>
            </div>

            {/* Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-6 border-t border-outline/50">
              {service.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {stat.num}
                  </span>
                  <span className="font-mono text-on-surface-variant uppercase text-[11px] tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Real-Time Technical Terminal Sidecar */}
          <div className="lg:col-span-5 bg-surface border border-outline shadow-2xl p-6 sm:p-8 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-outline pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-on-surface-variant font-bold">SPEC_TELEMETRY</span>
                </div>
                <span className="text-ice uppercase font-semibold">[LIVE]</span>
              </div>

              <div className="flex flex-col gap-4">
                {service.techStack.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-b border-outline/30 pb-3">
                    <span className="text-on-surface-muted uppercase text-[10px] tracking-wider">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline/50 flex items-center justify-between text-[11px]">
              <span className="text-on-surface-muted">ENGAGEMENT READY:</span>
              <span className="text-ice font-bold">1-ON-1 PARTNER DESK</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          KEYWORD MARQUEE STRIP
         ========================================================================= */}
      <div className="w-full py-5 bg-surface-lowest border-b border-outline overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {service.marquee.concat(service.marquee).map((item, i) => (
            <React.Fragment key={i}>
              <span className="font-display text-sm font-bold text-on-surface-variant uppercase tracking-widest hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <span className="text-cobalt font-bold">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>


      {/* =========================================================================
          SECTION: OVERVIEW NARRATIVE
         ========================================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
              /01 · Philosophical Anchor
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-none text-white">
              {service.overviewTitle}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-body text-base sm:text-xl text-on-surface-variant leading-relaxed whitespace-pre-line">
              {service.overviewDesc}
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: OFFERINGS MATRIX
         ========================================================================= */}
      <section id="offerings" className="py-28 px-6 md:px-12 bg-surface-lowest border-b border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
                /02 · Scope & Capabilities
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white">
                Core <span className="text-outline">Deliverables.</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md">
              Every deliverable is crafted to hold up in high-stakes environments and ships with complete source files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((off, i) => (
              <div 
                key={i} 
                className="bg-surface border border-outline hover:border-cobalt transition-all duration-300 p-8 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-outline/50">
                    <span className="font-mono text-on-surface-muted text-xs uppercase">
                      DELIVERABLE_[0{i+1}]
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cobalt"></span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-3 group-hover:text-ice transition-colors">
                    {off.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {off.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: DELIVERY PROCESS
         ========================================================================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
              /03 · Delivery Framework
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white">
              Sprint <span className="text-outline">Cadence.</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md">
            Our disciplined 4-stage pipeline turns discovery into tangible deployed assets without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (
            <div key={i} className="bg-surface border border-outline p-8 group hover:border-cobalt transition-all duration-300">
              <span className="font-display text-4xl font-bold text-on-surface-muted mb-6 block group-hover:text-ice transition-colors">
                0{i+1}
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: PACKAGES & TIERS
         ========================================================================= */}
      <section id="packages" className="py-28 px-6 md:px-12 bg-surface-lowest border-b border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
              // ENGAGEMENT ARCHITECTURE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white mb-4">
              Structured For Your Stage.
            </h2>
            <p className="font-body text-on-surface-variant text-sm sm:text-base">
              Predictable scoping, transparent deliverables, zero billable-hour guessing games.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.packages.map((pkg, i) => {
              const isFeatured = pkg.badge.toLowerCase().includes('most booked');
              return (
                <div 
                  key={i} 
                  className={`relative p-8 md:p-10 flex flex-col justify-between border transition-all duration-300 ${
                    isFeatured 
                      ? 'bg-surface border-cobalt shadow-[0_0_35px_rgba(37,99,235,0.25)]' 
                      : 'bg-surface/50 border-outline hover:border-outline-variant'
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-cobalt text-white font-mono text-[10px] uppercase tracking-widest font-bold shadow-md">
                      ★ MOST POPULAR ENGAGEMENT
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-ice uppercase tracking-wider font-semibold">
                        {pkg.badge}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-3">
                      {pkg.name}
                    </h3>
                    
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-8 min-h-[40px] leading-relaxed">
                      {pkg.for}
                    </p>

                    <div className="flex flex-col gap-3 pt-6 border-t border-outline/50 mb-8 font-body text-sm text-on-surface">
                      {pkg.items.map((item, itIdx) => (
                        <div key={itIdx} className="flex items-start gap-3">
                          <span className="text-cobalt font-bold font-mono text-xs mt-0.5">✓</span>
                          <span className="text-on-surface-variant text-xs sm:text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    href="/contact" 
                    variant={isFeatured ? 'primary' : 'outline'}
                    className="w-full py-3.5 text-xs"
                  >
                    SELECT {pkg.name.toUpperCase()} →
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: FAQ ACCORDION
         ========================================================================= */}
      <FaqAccordion items={service.faq} />


      {/* =========================================================================
          SECTION: BOTTOM ACTION CTA
         ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-surface border-t border-outline text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-4">
            // READY TO DEPLOY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white mb-6">
            Let's Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-cobalt">
              {service.title} Solution.
            </span>
          </h2>
          <p className="font-body text-on-surface-variant max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Send us the context, problem, or decision you're facing. A core partner will respond with a tailored roadmap within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" className="px-10 py-4 text-xs">
              BOOK A CONSULTATION →
            </Button>
            <Button href="/services" variant="outline" className="px-10 py-4 text-xs">
              EXPLORE OTHER DISCIPLINES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
