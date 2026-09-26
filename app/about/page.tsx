import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/Button';
import { ManifestoTabs } from '../../components/ManifestoTabs';
import { PhotoReel } from '../../components/PhotoReel';
import { ClientMarquee } from '../../components/ClientMarquee';

export const metadata = {
  title: 'About Us — InfraEdge 360 Studio Atelier',
  description: 'InfraEdge 360 is a hybrid creative studio & venture accelerator for founders who don’t have time to manage six vendors. Senior operators, fixed scope, startup speed.',
};

export default function AboutPage() {
  const comparisonItems = [
    {
      feature: "Team Composition",
      traditional: "Freshers & juniors managed by account middle-managers",
      infraedge: "Senior domain leads & operators executing directly"
    },
    {
      feature: "Billing & Scope",
      traditional: "Vague hourly billing and expanding scope creep",
      infraedge: "Clear time-boxed sprints with fixed deliverables & pricing"
    },
    {
      feature: "Discipline Coverage",
      traditional: "Single silo (just branding OR just dev) requiring multiple agencies",
      infraedge: "Full 360° stack: branding, web, legal, media, events, business"
    },
    {
      feature: "Ownership & Source",
      traditional: "Locked CMS platforms, withheld raw project files",
      infraedge: "100% intellectual property & source code transferred upon wrap"
    },
    {
      feature: "Communication Speed",
      traditional: "Ticket queues, formal review boards, weekly lag",
      infraedge: "Direct partner access, async video updates, &lt; 24h turnaround"
    }
  ];

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
            <span className="text-white font-semibold">[01] STUDIO PHILOSOPHY & ETHOS</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-muted text-[11px]">
            <span>LOCATIONS: GLOBAL HEADQUARTERS</span>
            <span className="hidden md:inline">|</span>
            <span>MODEL: HYBRID ACCELERATOR</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          HERO MASTHEAD
         ========================================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="font-mono text-xs text-ice tracking-widest uppercase flex items-center gap-2">
            <span className="w-3 h-px bg-cobalt"></span>
            [ ATELIER ARCHITECTURE // CORE DIRECTION ]
          </span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.92] text-white">
            Senior Execution. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
              Gen-Z Cultural Edge.
            </span>
          </h1>

          <p className="font-body text-base sm:text-xl text-on-surface-variant leading-relaxed">
            InfraEdge 360 was built to resolve a fundamental market failure: growing brands are forced to coordinate half a dozen fragmented agencies, freelancers, and law firms. We replace that chaos with one cohesive infrastructure layer.
          </p>
        </div>
      </section>


      {/* =========================================================================
          INTERACTIVE MANIFESTO SECTION
         ========================================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-outline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
              // OPERATIONAL TENETS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-white mb-6">
              Our Vision, <br />
              <span className="text-outline">Mission</span> &amp; Method.
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              Explore the foundational principles that drive our sprint velocity and architectural delivery across all 6 service lines.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ManifestoTabs />
          </div>
        </div>
      </section>


      {/* =========================================================================
          COMPARISON MATRIX: TRADITIONAL VS INFRAEDGE
         ========================================================================= */}
      <section className="py-28 px-6 md:px-12 bg-surface-lowest border-b border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-ice uppercase tracking-widest text-xs mb-3 block">
              // THE HYBRID ADVANTAGE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white mb-4">
              Why Founders Choose InfraEdge.
            </h2>
            <p className="font-body text-on-surface-variant text-sm sm:text-base">
              A structural comparison between bloated legacy agencies and our agile studio model.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-outline">
              <thead>
                <tr className="bg-surface border-b border-outline font-mono text-xs uppercase tracking-wider text-on-surface-muted">
                  <th className="p-5">Dimension</th>
                  <th className="p-5 border-l border-outline">Traditional Legacy Agency</th>
                  <th className="p-5 border-l border-outline text-ice font-bold bg-cobalt/10">InfraEdge 360 Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline font-body text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-surface/60 transition-colors">
                    <td className="p-5 font-display font-semibold uppercase text-white font-mono text-xs">
                      {item.feature}
                    </td>
                    <td className="p-5 border-l border-outline text-on-surface-muted">
                      {item.traditional}
                    </td>
                    <td className="p-5 border-l border-outline text-on-surface font-medium bg-cobalt/5">
                      <span className="text-cobalt mr-2 font-bold font-mono">✓</span>
                      {item.infraedge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* =========================================================================
          PHOTO REEL & PRODUCTION LIFE
         ========================================================================= */}
      <PhotoReel />


      {/* =========================================================================
          CLIENT MARQUEE
         ========================================================================= */}
      <ClientMarquee />


      {/* =========================================================================
          BOTTOM CTA BANNER
         ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-surface border-t border-outline text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-4">
            // JOIN OUR ROSTER
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white mb-6">
            Ready to Build With Us?
          </h2>
          <p className="font-body text-on-surface-variant max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Send us the context of your next milestone. We will review your requirements and formulate a tailored strategy session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" className="px-10 py-4 text-xs">
              BOOK A CONSULTATION →
            </Button>
            <Button href="/portfolio" variant="outline" className="px-10 py-4 text-xs">
              EXPLORE OUR REEL
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
