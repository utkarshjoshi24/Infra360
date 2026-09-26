"use client";

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "/04 · Clear Answers"
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-outline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <span>{subtitle}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-none mb-6">
            Everything You Need to <span className="text-outline">Know.</span>
          </h2>
          <p className="font-body text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8">
            No ambiguous agency phrasing or hidden asterisks. Here are direct, candid answers to our most common client inquiries.
          </p>
          <div className="p-6 bg-surface border border-outline font-mono text-xs text-on-surface-variant flex flex-col gap-2">
            <span className="text-ice uppercase font-bold">// DIRECT INQUIRIES</span>
            <span>Have a nuanced or multi-service brief?</span>
            <a href="/contact" className="text-cobalt-light hover:underline uppercase mt-2 font-semibold flex items-center gap-1">
              Speak with a partner directly →
            </a>
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-outline border-y border-outline">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                    isOpen ? 'text-ice' : 'text-on-surface group-hover:text-white'
                  }`}>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                    isOpen ? 'border-cobalt bg-cobalt text-white rotate-45' : 'border-outline text-on-surface-variant group-hover:border-on-surface'
                  }`}>
                    <span className="font-mono text-base font-bold">+</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pb-2 text-on-surface-variant font-body text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
