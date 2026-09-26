"use client";

import React, { useState } from 'react';

export const ManifestoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'method'>('vision');

  const content = {
    vision: {
      label: "Vision",
      quote: "To become the single infrastructure layer ambitious brands plug into — replacing a maze of freelancers, agencies, and disconnected vendors with one accountable partner that can think strategically, design clearly, and execute fast.",
      tagline: "PARADIGM SHIFT: ARCHITECTURAL DIGITALISM",
      telemetry: "TELEMETRY_REF: VISION_LAYER_01"
    },
    mission: {
      label: "Mission",
      quote: "To help founders move from idea to traction without the chaos. We bring senior-level execution across branding, legal, creative, media, events, and web — at startup speed, with clear communication, fixed scope, and real ownership from day one.",
      tagline: "VELOCITY THROUGH DIRECT ACCOUNTABILITY",
      telemetry: "TELEMETRY_REF: MISSION_LAYER_02"
    },
    method: {
      label: "Methodology",
      quote: "We discard the bloated agency apparatus. Senior operators do the actual work, projects run in time-boxed high-intensity sprints, and deliverables ship as native files you own forever.",
      tagline: "SENIOR EXECUTION × GEN-Z VELOCITY",
      telemetry: "TELEMETRY_REF: SPRINT_CORE_03"
    }
  };

  const activeData = content[activeTab];

  return (
    <div className="bg-surface border border-outline p-8 md:p-12 relative overflow-hidden shadow-2xl">
      {/* Tab Selector Strip */}
      <div className="flex items-center gap-6 md:gap-10 border-b border-outline pb-4 mb-8">
        {(['vision', 'mission', 'method'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative font-display text-sm md:text-base uppercase tracking-wider font-bold transition-all pb-3 cursor-pointer ${
              activeTab === tab 
                ? 'text-white' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {content[tab].label}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cobalt shadow-[0_0_12px_#2563eb]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Active Tab Pane */}
      <div className="flex flex-col gap-6 animate-fadeIn">
        <p className="font-body text-lg sm:text-xl md:text-2xl text-on-surface leading-relaxed italic">
          "{activeData.quote}"
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline/50 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <span className="text-ice font-semibold">{activeData.tagline}</span>
          </div>
          <span className="text-on-surface-muted hidden sm:inline">{activeData.telemetry}</span>
        </div>
      </div>
    </div>
  );
};
