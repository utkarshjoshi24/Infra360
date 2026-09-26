"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/Button';
import { OptimizedImage } from '../../components/OptimizedImage';
import { portfolioData, PortfolioItem } from '../../data/portfolio';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | 'media' | 'events' | 'creative' | 'web' | 'business'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Work', count: portfolioData.length },
    { id: 'creative', label: 'Brand Mythology & Identity', count: portfolioData.filter(i => i.category === 'creative').length },
    { id: 'web', label: 'Creative Tech & Web', count: portfolioData.filter(i => i.category === 'web').length },
    { id: 'media', label: 'Hyper-Media & Motion', count: portfolioData.filter(i => i.category === 'media').length },
    { id: 'events', label: 'Experiential & Events', count: portfolioData.filter(i => i.category === 'events').length },
    { id: 'business', label: 'Venture & GTM Architecture', count: portfolioData.filter(i => i.category === 'business').length },
  ] as const;

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-void text-on-surface pt-24 pb-32">
      {/* =========================================================================
          TOP TELEMETRY HEADER STRIP
         ========================================================================= */}
      <section className="w-full border-b border-outline bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="text-cobalt font-bold">//</span>
            <Link href="/" className="hover:text-white transition-colors">INDEX</Link>
            <span className="text-outline">/</span>
            <span className="text-white font-semibold">[03] SELECTED WORK ARCHIVE</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-muted text-[11px]">
            <span>LOCATIONS: NYC // DEL // BLR</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">STATUS: CURATED 2023–2025</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          EDITORIAL MASTHEAD & METRICS TICKER
         ========================================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-mono text-xs text-ice tracking-widest uppercase">
              // ARCHITECTURAL DEPLOYMENTS
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.92] text-white">
              Work Worth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
                Stopping For.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              An uncompromised index of high-velocity brand identities, web apps, cinema productions, and live activations deployed for category leaders.
            </p>
          </div>
        </div>

        {/* Live Metrics Ticker Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-surface border border-outline shadow-xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-on-surface-muted uppercase">// VALIDATED BUILDS</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-white">40+</span>
            <span className="font-body text-xs text-on-surface-variant">Production Releases</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-outline/50 pl-6">
            <span className="font-mono text-[10px] text-on-surface-muted uppercase">// CAPITAL CATALYZED</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-ice">$240M+</span>
            <span className="font-body text-xs text-on-surface-variant">Collective Client Cap</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-outline/50 pl-6">
            <span className="font-mono text-[10px] text-on-surface-muted uppercase">// RETENTION RATE</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-white">77%</span>
            <span className="font-body text-xs text-on-surface-variant">Repeat Collaborations</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-outline/50 pl-6">
            <span className="font-mono text-[10px] text-on-surface-muted uppercase">// CODE & IP INTEGRITY</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-ice">100%</span>
            <span className="font-body text-xs text-on-surface-variant">Zero-Template Handcrafted</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          STICKY CATEGORY FILTER BAR & VIEW TOGGLE
         ========================================================================= */}
      <section className="sticky top-20 z-30 w-full bg-void/90 backdrop-blur-xl border-y border-outline px-6 md:px-12 py-4 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                  filter === f.id
                    ? 'bg-cobalt text-white border-cobalt shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'bg-surface hover:bg-surface-high text-on-surface-variant hover:text-white border-outline'
                }`}
              >
                {f.label} [{f.count.toString().padStart(2, '0')}]
              </button>
            ))}
          </div>

          {/* View Toggle (Grid vs List) */}
          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-on-surface-muted">
            <span className="uppercase text-[11px]">LAYOUT:</span>
            <div className="flex items-center bg-surface border border-outline p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs cursor-pointer transition-colors ${
                  viewMode === 'grid' ? 'bg-surface-high text-ice font-bold' : 'text-on-surface-variant hover:text-white'
                }`}
              >
                GRID
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-xs cursor-pointer transition-colors ${
                  viewMode === 'list' ? 'bg-surface-high text-ice font-bold' : 'text-on-surface-variant hover:text-white'
                }`}
              >
                LIST
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          GALLERY / ARCHIVE DEPLOYMENTS
         ========================================================================= */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        {viewMode === 'grid' ? (
          /* Grid View Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setActiveProject(item)}
                className="group bg-surface border border-outline hover:border-cobalt transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
              >
                {/* Image Container with Optimized Lazy Load & Preload */}
                <div className="relative aspect-[16/11] overflow-hidden bg-surface-lowest">
                  <OptimizedImage 
                    src={item.image} 
                    alt={item.title} 
                    priority={idx < 3}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-void/80 border border-outline/70 px-2.5 py-1 backdrop-blur-md z-10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ice font-semibold">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {item.metrics && (
                    <div className="absolute bottom-3 right-3 bg-void/90 border border-cobalt/40 px-3 py-1 backdrop-blur-md flex items-center gap-1.5 font-mono text-xs z-10">
                      <span className="text-on-surface-muted text-[10px] uppercase">{item.metrics.label}:</span>
                      <span className="text-ice font-bold">{item.metrics.value}</span>
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-on-surface-muted">
                      <span>CLIENT: {item.client.toUpperCase()}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-ice transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tags & Quick View Action */}
                  <div className="pt-4 border-t border-outline/50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-surface-lowest text-[10px] font-mono text-on-surface-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-ice group-hover:translate-x-1 transition-transform">
                      VIEW →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View Layout */
          <div className="flex flex-col divide-y divide-outline border-y border-outline">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveProject(item)}
                className="py-6 px-4 hover:bg-surface transition-colors cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
              >
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="w-16 h-12 relative overflow-hidden flex-shrink-0 bg-surface-lowest border border-outline">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.title} 
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-ice transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] text-on-surface-muted uppercase">{item.client}</span>
                  </div>
                </div>

                <div className="md:col-span-3 font-mono text-xs text-ice">
                  {item.categoryLabel}
                </div>

                <div className="md:col-span-3 font-body text-xs text-on-surface-variant line-clamp-1">
                  {item.desc}
                </div>

                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4 font-mono text-xs">
                  <span className="text-on-surface-muted">{item.year}</span>
                  <span className="text-ice group-hover:translate-x-1 transition-transform">EXPAND →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      {/* =========================================================================
          PROJECT QUICK-VIEW MODAL
         ========================================================================= */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[120] bg-void/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-surface border border-outline p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-white border border-outline bg-surface-low cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span>// DEPLOYMENT SPECIFICATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              {activeProject.title}
            </h2>
            <div className="flex flex-wrap gap-3 font-mono text-xs text-on-surface-muted mb-6">
              <span>CLIENT: {activeProject.client}</span>
              <span>•</span>
              <span>DISCIPLINE: {activeProject.categoryLabel}</span>
              <span>•</span>
              <span>YEAR: {activeProject.year}</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden mb-6 border border-outline bg-surface-lowest">
              <OptimizedImage 
                src={activeProject.image} 
                alt={activeProject.title} 
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-body text-base text-on-surface-variant leading-relaxed mb-6">
              {activeProject.fullDesc}
            </p>

            {activeProject.metrics && (
              <div className="p-4 bg-surface-lowest border border-cobalt/40 mb-6 flex items-center justify-between font-mono text-xs">
                <span className="text-on-surface-muted uppercase">{activeProject.metrics.label}:</span>
                <span className="text-ice font-bold text-base">{activeProject.metrics.value}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline">
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-surface-low border border-outline text-xs font-mono text-on-surface-variant">
                    {t}
                  </span>
                ))}
              </div>

              <Button href="/contact" className="px-6 py-3 text-xs">
                DISCUSS SIMILAR PROJECT →
              </Button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          BOTTOM CTA SECTION
         ========================================================================= */}
      <section className="mt-32 py-24 px-6 md:px-12 bg-surface border-t border-outline text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-xs text-ice uppercase tracking-widest block mb-4">
            // NEXT DEPLOYMENT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-none text-white mb-6">
            Got a Project <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cobalt-light to-cobalt">
              Worth Shooting or Building?
            </span>
          </h2>
          <p className="font-body text-on-surface-variant max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Whatever the service line, it ends up looking like this. Let's talk about what we'd build for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" className="px-10 py-4 text-xs">
              BOOK A CONSULTATION →
            </Button>
            <Button href="/services" variant="outline" className="px-10 py-4 text-xs">
              EXPLORE ALL SERVICES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
