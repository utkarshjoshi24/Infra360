"use client";

import React from 'react';

export const ClientMarquee: React.FC = () => {
  const row1Logos = [
    { name: "BMW", src: "/assets/images/logos/bmw-2-logo-1024x1024.png" },
    { name: "Fairfield by Marriott", src: "/assets/images/logos/Fairfield by Marriott.png" },
    { name: "Seedhe Maut", src: "/assets/images/logos/seede maut.jpg" },
    { name: "Sunburn", src: "/assets/images/logos/sunburn.jpg" },
    { name: "Red FM", src: "/assets/images/logos/redfm.png" },
    { name: "Indian Premier League", src: "/assets/images/logos/Indian-Premier-League-Logo-Vector.jpg" },
    { name: "Mahindra", src: "/assets/images/logos/mahindra_thumb.png" },
    { name: "ONGC", src: "/assets/images/logos/ONGC logos.png" },
    { name: "Mall of Dehradun", src: "/assets/images/logos/MOD.png" },
  ];

  const row2Logos = [
    { name: "Graphic Era University", src: "/assets/images/logos/graphic-era-university_thumb.png" },
    { name: "Team Innovation", src: "/assets/images/logos/team inovation.jpg" },
    { name: "Katyani Medical Centre", src: "/assets/images/logos/Katyani Medical Centre.jpg" },
    { name: "Real Host", src: "/assets/images/logos/real-host.jpg" },
    { name: "Dale Jamboore", src: "/assets/images/logos/dale jambore.jpg" },
    { name: "Shivalik College", src: "/assets/images/logos/shivalic.png" },
    { name: "Uttaranchal College", src: "/assets/images/logos/uttaranchal college.jpg" },
    { name: "Discover Uttarakhand", src: "/assets/images/logos/disvover uttarakhand magzine.png" },
    { name: "Infinity", src: "/assets/images/logos/infi.png" },
  ];

  return (
    <section className="w-full py-24 bg-surface-lowest border-y border-outline relative overflow-hidden" id="collaborations">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              <span>// 05 · COLLABORATIONS & ECOSYSTEM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              Brands We've <span className="text-outline">Shipped</span> With.
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md">
            From hyper-growth startups to institutional enterprises — here is a verified slice of the partners we've built and scaled alongside.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 (Forward) */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee flex items-center gap-6">
          {row1Logos.concat(row1Logos).map((logo, index) => (
            <div
              key={`r1-${index}`}
              className="flex-shrink-0 h-20 px-8 py-3 bg-surface/60 hover:bg-surface border border-outline hover:border-cobalt/50 transition-all duration-300 flex items-center justify-center rounded-none group backdrop-blur-sm min-w-[170px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="max-h-12 max-w-[130px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback to text if missing
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'font-display text-xs uppercase font-bold text-on-surface-variant';
                    span.textContent = logo.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee-reverse flex items-center gap-6">
          {row2Logos.concat(row2Logos).map((logo, index) => (
            <div
              key={`r2-${index}`}
              className="flex-shrink-0 h-20 px-8 py-3 bg-surface/60 hover:bg-surface border border-outline hover:border-cobalt/50 transition-all duration-300 flex items-center justify-center rounded-none group backdrop-blur-sm min-w-[170px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="max-h-12 max-w-[130px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'font-display text-xs uppercase font-bold text-on-surface-variant';
                    span.textContent = logo.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
