import React from 'react';
import Link from 'next/link';
import { Button } from '../components/Button';
import { ManifestoTabs } from '../components/ManifestoTabs';
import { ClientMarquee } from '../components/ClientMarquee';
import { PhotoReel } from '../components/PhotoReel';
import { FaqAccordion } from '../components/FaqAccordion';

export const metadata = {
  title: 'InfraEdge 360 — Hybrid Creative Studio & Venture Accelerator',
  description: 'Branding, business consultation, media production, web engineering, events, and legal advisory under one roof. A 360° studio pairing Gen-Z creativity with senior execution.',
};

export default function Home() {
  const services = [
    {
      slug: "business",
      num: "01",
      title: "Business Consultation",
      subtitle: "GROWTH & VENTURE ARCHITECTURE",
      desc: "GTM, ops & growth advisory for founders who want playbooks, not platitudes.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth={1.8} />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth={1.8} />
        </svg>
      )
    },
    {
      slug: "legal",
      num: "02",
      title: "Legal Services",
      subtitle: "STRUCTURAL & COMPLIANCE ADVISORY",
      desc: "Company setup, contracts, IP & compliance — legal muscle without the intimidation.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 3v18M5 8l-3 6a4 4 0 0 0 8 0zM19 8l-3 6a4 4 0 0 0 8 0zM5 8h14M8 3h8" strokeWidth={1.8} />
        </svg>
      )
    },
    {
      slug: "webdev",
      num: "03",
      title: "Website Dev & Maintenance",
      subtitle: "CREATIVE TECH & CODE SYSTEMS",
      desc: "Pixel-tight websites & web apps. Continuous care, updates, and performance tuning after launch.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <polyline points="16 18 22 12 16 6" strokeWidth={1.8} />
          <polyline points="8 6 2 12 8 18" strokeWidth={1.8} />
        </svg>
      )
    },
    {
      slug: "media",
      num: "04",
      title: "Media Solutions",
      subtitle: "HYPER-MEDIA & MOTION PRODUCTION",
      desc: "Photo, video & branded content that's built to hold attention across every platform.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth={1.8} />
          <circle cx="12" cy="13" r="4" strokeWidth={1.8} />
        </svg>
      )
    },
    {
      slug: "event",
      num: "05",
      title: "Event Management",
      subtitle: "EXPERIENTIAL & GLOBAL ACTIVATIONS",
      desc: "End-to-end planning and on-ground execution — launches, activations, and everything in between.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" strokeWidth={1.8} />
        </svg>
      )
    },
    {
      slug: "creative",
      num: "06",
      title: "Creative Solutions",
      subtitle: "BRAND MYTHOLOGY & IDENTITY",
      desc: "Brand identity, design systems & campaign concepts that give your ideas a distinct edge.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.5-1.1-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" strokeWidth={1.8} />
        </svg>
      )
    },
  ];

  const processSteps = [
    { num: "01", title: "Discover", text: "We audit your brand, market, and moat. No stock questionnaires — real founder chats." },
    { num: "02", title: "Design", text: "Positioning, visual system & scope. Locked docs, clear deliverables, zero scope creep." },
    { num: "03", title: "Deploy", text: "Sprint mode. Weekly demos, async updates, and shipped work — not slide decks." },
    { num: "04", title: "Drive", text: "Post-launch growth: analytics, iteration, and content flywheels that compound." },
  ];

  const generalFaq = [
    {
      q: "How does InfraEdge 360 differ from traditional agencies?",
      a: "Traditional agencies delegate your account to junior staff and bill for bloated hours. InfraEdge 360 operates as an agile venture studio: senior operators execute your work, sprints are fixed-scope, and all 6 core business functions (branding, web, legal, media, events, business) are aligned under one roof."
    },
    {
      q: "Can we engage InfraEdge 360 for a single service line?",
      a: "Yes. While many clients leverage our full 360° stack for end-to-end venture launches, each service line (such as Web Development, Creative Identity, or Legal Setup) can be engaged as an independent sprint or retainer."
    },
    {
      q: "Who actually works on our project?",
      a: "Senior craftspeople and domain leads. We do not use layers of junior account managers or hand off execution to outsourced third parties."
    },
    {
      q: "How quickly can we commence work?",
      a: "After an initial 30-minute discovery consultation and scope confirmation, most sprint engagements kick off within 3 to 5 business days."
    },
    {
      q: "Do we own the intellectual property and source code?",
      a: "100%. Upon completion and delivery, all source files (Figma tokens, Git repositories, raw photo/video libraries, and legal drafts) are transferred directly into your ownership."
    }
  ];

  return (
    <div className="min-h-screen bg-void text-on-surface">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-32 overflow-hidden">
        {/* Optimized Background Video with Poster & Lazy Loading */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
            className="w-full h-full object-cover opacity-25 grayscale scale-105"
            poster="/assets/video/home-vid-poster.png"
          >
            <source src="/assets/video/home-vid.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cobalt/15 rounded-full blur-[160px]"></div>
        </div>

        {/* Telemetry Coordinate Accents */}
        <div className="absolute top-28 left-6 md:left-12 font-mono text-xs text-on-surface-muted select-none hidden md:block">
          + 360° // 30.3165° N, 78.0322° E [ATELIER_NODE]
        </div>
        <div className="absolute top-28 right-6 md:right-12 font-mono text-xs text-on-surface-muted select-none hidden md:block">
          SYS_STATE: TRANSMITTING · [ACTIVE] +
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface border border-outline text-xs font-mono text-on-surface-variant mb-8 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse shadow-[0_0_8px_#2563eb]"></span>
            <span className="uppercase tracking-widest text-[11px]">Hybrid Studio · Senior Execution × Gen-Z Edge</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.92] mb-8">
            <span className="block text-on-surface">We Build The</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]">
              Edge
            </span>
            <span className="block text-on-surface text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
              Your Brand Deserves.
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            <strong className="text-white font-semibold">Branding, business, media marketing, Websites — under one roof.</strong><br className="hidden sm:inline" />
            A 360° hybrid creative studio and venture accelerator engineering high-velocity market traction.
          </p>
          
          {/* CTA Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button href="/contact" className="w-full sm:w-auto px-10 py-4 text-xs">
              <span>BOOK A CONSULTATION</span>
              <span className="font-mono">→</span>
            </Button>
            <Button href="/services" variant="outline" className="w-full sm:w-auto px-10 py-4 text-xs">
              EXPLORE SERVICES
            </Button>
          </div>
        </div>

        {/* Architectural Stats Ribbon */}
        <div className="w-full max-w-6xl mx-auto mt-20 border-y border-outline bg-surface-lowest/70 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline">
            <div className="flex flex-col items-center justify-center p-6 sm:p-8">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">$240M+</span>
              <span className="font-mono text-on-surface-variant uppercase text-[11px] tracking-wider mt-1">Capital Catalyzed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ice tracking-tight">40+</span>
              <span className="font-mono text-on-surface-variant uppercase text-[11px] tracking-wider mt-1">Projects Shipped</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">77%</span>
              <span className="font-mono text-on-surface-variant uppercase text-[11px] tracking-wider mt-1">Client Retention</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 sm:p-8">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ice tracking-tight">100%</span>
              <span className="font-mono text-on-surface-variant uppercase text-[11px] tracking-wider mt-1">IP & Source Ownership</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 01: ABOUT US & MANIFESTO
         ========================================================================= */}
      <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-outline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span>/01 · Core Direction</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-none text-white tracking-tight">
              WHO WE <br /><span className="text-outline">ARE.</span>
            </h2>
            <span className="font-mono text-xs text-ice uppercase tracking-widest mt-1">
              // HYBRID CREATIVE & VENTURE ACCELERATOR
            </span>
            <div className="mt-4 p-5 bg-surface border border-outline font-mono text-xs text-on-surface-variant flex flex-col gap-2">
              <div className="text-on-surface font-semibold uppercase">// TELEMETRY_KEY: VTR-99</div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                InfraEdge rejects consensus design and corporate inertia. We formulate bespoke brand engines calibrated for high-velocity competitive dominance.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-body text-xl sm:text-2xl text-on-surface font-light leading-relaxed">
              InfraEdge 360 is a hybrid creative studio for founders who don't have time to manage six vendors. One team, one point of contact, six service lines — legal, consulting, creative, media, events, and web — run by senior operators, not middlemen.
            </p>
            
            {/* Interactive Tab Module */}
            <ManifestoTabs />
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 02: SERVICES DISCIPLINE (FEATHERS OF GARUDA)
         ========================================================================= */}
      <section id="services" className="py-28 px-6 md:px-12 bg-surface-lowest border-t border-outline">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-cobalt"></span>
                <span>/02 · WHAT WE DO</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                Feathers of <span className="text-outline">GARUDA.</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
              One partner for the whole ride — from first pixel to first press release, from cap table to compliance.
            </p>
          </div>

          {/* 6-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-surface border border-outline hover:border-cobalt transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Ambient Card Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cobalt/10 rounded-full blur-2xl group-hover:bg-cobalt/20 transition-all pointer-events-none"></div>

                <div>
                  {/* Top Bar: Icon + Index */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline/50">
                    <div className="w-12 h-12 bg-surface-high border border-outline flex items-center justify-center text-ice group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-mono text-xs text-on-surface-muted group-hover:text-ice transition-colors">
                      [{service.num} // 06]
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-ice uppercase tracking-widest block mb-2 font-semibold">
                    {service.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-4 group-hover:text-ice transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-display text-xs uppercase font-bold text-on-surface group-hover:text-cobalt-light transition-all tracking-wider pt-4 border-t border-outline/40"
                >
                  <span>EXPLORE DISCIPLINE</span>
                  <span className="font-mono transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Directory Link */}
          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-ice transition-colors border-b border-outline hover:border-ice pb-1"
            >
              <span>View Comprehensive 6-Service Index & Specifications</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 03: BEHIND THE SCENES PHOTO REEL
         ========================================================================= */}
      <PhotoReel />


      {/* =========================================================================
          SECTION 04: HOW WE WORK (DELIVERY ENGINE)
         ========================================================================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-outline" id="process">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span>/04 · How We Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-none">
              A Process Built For <br />
              <span className="text-outline">Speed</span> &amp; Clarity.
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            Time-boxed sprints, direct founder comms, zero account management bloat. We build to ship.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={i} className="bg-surface border border-outline p-8 group hover:border-cobalt transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline/50">
                  <span className="font-display text-4xl font-bold text-on-surface-muted group-hover:text-ice transition-colors">
                    {step.num}
                  </span>
                  <span className="font-mono text-xs text-on-surface-muted uppercase">STEP</span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-ice transition-colors">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: TRUST & WHY US STRIP
         ========================================================================= */}
      <section className="py-16 px-6 md:px-12 bg-surface border-y border-outline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 border border-outline/40 bg-surface-lowest">
            <div className="w-8 h-8 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice flex-shrink-0">
              <span className="font-mono text-xs">✓</span>
            </div>
            <span className="font-display text-sm font-semibold uppercase text-on-surface">
              One partner across product, marketing & ops
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 border border-outline/40 bg-surface-lowest">
            <div className="w-8 h-8 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice flex-shrink-0">
              <span className="font-mono text-xs">✓</span>
            </div>
            <span className="font-display text-sm font-semibold uppercase text-on-surface">
              Senior operators, not freshers on training wheels
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 border border-outline/40 bg-surface-lowest">
            <div className="w-8 h-8 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice flex-shrink-0">
              <span className="font-mono text-xs">✓</span>
            </div>
            <span className="font-display text-sm font-semibold uppercase text-on-surface">
              Fixed-scope sprints — no billable-hour theatre
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 border border-outline/40 bg-surface-lowest">
            <div className="w-8 h-8 rounded-full bg-cobalt/20 border border-cobalt flex items-center justify-center text-ice flex-shrink-0">
              <span className="font-mono text-xs">✓</span>
            </div>
            <span className="font-display text-sm font-semibold uppercase text-on-surface">
              Founder-friendly contracts & transparent pricing
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 05: COLLABORATIONS & CLIENTS
         ========================================================================= */}
      <ClientMarquee />


      {/* =========================================================================
          SECTION 06: FAQ ACCORDION
         ========================================================================= */}
      <FaqAccordion 
        items={generalFaq} 
        title="Frequently Asked Questions" 
        subtitle="/06 · Studio FAQ" 
      />


      {/* =========================================================================
          SECTION: CALL TO ACTION BANNER
         ========================================================================= */}
      <section className="py-28 px-6 md:px-12 bg-surface-lowest border-t border-outline text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cobalt/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline text-xs font-mono text-ice uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse"></span>
            <span>CAPACITY: FOUNDATIONAL SLOTS REMAINING</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-6">
            Got A Project <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
              Worth Building?
            </span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
            Whatever the service line, we craft it to perform and scale. Let's discuss your next milestone directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" className="w-full sm:w-auto px-10 py-4 text-xs">
              BOOK A CONSULTATION →
            </Button>
            <Button href="/portfolio" variant="outline" className="w-full sm:w-auto px-10 py-4 text-xs">
              VIEW SELECTED WORK
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
