export interface Offering {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface PackageTier {
  badge: string;
  name: string;
  for: string;
  items: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  index: string;
  title: string;
  heroCategory: string;
  heroTitle: string;
  heroDesc: string;
  stats: { num: string; label: string }[];
  marquee: string[];
  overviewTitle: string;
  overviewDesc: string;
  telemetryKey: string;
  techStack: { label: string; value: string }[];
  offerings: Offering[];
  process: ProcessStep[];
  packages: PackageTier[];
  faq: FaqItem[];
}

export const servicesData: Record<string, ServiceDetail> = {
  business: {
    slug: "business",
    index: "01",
    title: "Business Consultation",
    heroCategory: "GROWTH & VENTURE ARCHITECTURE // GTM STRATEGY",
    heroTitle: "Turn business problems into clear moves.",
    heroDesc: "Strategic consultation for founders and growing teams — we turn messy growth questions into practical priorities, sharper decisions, and execution-ready roadmaps. Not a deck of generic advice.",
    telemetryKey: "SYS_VTR // GTM-EXEC-V4",
    techStack: [
      { label: "Execution Model", value: "Fixed Sprint & Retainer" },
      { label: "Deliverable", value: "30/60/90 Day Execution Matrix" },
      { label: "Turnaround", value: "1–3 Weeks" },
      { label: "Target Profile", value: "Early & Growth Stage Founders" }
    ],
    stats: [
      { num: "35+", label: "Founders Advised" },
      { num: "90/120/160", label: "Day Roadmaps Built" },
      { num: "94%", label: "Strategy Execution Rate" }
    ],
    marquee: ["GROWTH STRATEGY", "GTM ARCHITECTURE", "OPERATIONS", "MARKET POSITIONING", "REVENUE ACCELERATION", "SCALING PLAYBOOKS"],
    overviewTitle: "CLARITY BEFORE ACTION.",
    overviewDesc: "Business consultation is not a deck full of generic advice — it's a focused working session around the decisions that can materially change your business. We look at where you are, where you want to go, and what's blocking the path.\n\nYou don't need a polished presentation before speaking with us. Bring the numbers, the doubts, and the competing priorities. The consultation exists to create structure from that mess.",
    offerings: [
      { title: "Business Strategy & North Star", desc: "Clarify your direction, competitive advantage, core priorities, and the next inflection stage of growth." },
      { title: "Market & Positioning Architecture", desc: "Understand your target customer segment, sharpen your positioning, and make your offer undeniably easy to choose." },
      { title: "Go-To-Market (GTM) Playbooks", desc: "A practical route from offer to audience — high-converting channels, messaging, customer acquisition, and sales pipelines." },
      { title: "Revenue & Growth Levers", desc: "Identify and exploit growth levers across unit economics, pricing strategies, conversion funnels, and retention." },
      { title: "Operations & Workflows", desc: "Improve operational workflows, roles, accountability charts, and rhythms so scale doesn't create chaos." },
      { title: "Scaling & Capital Roadmap", desc: "Map the team, technology systems, capital requirements, and milestones needed to move to your next tier." }
    ],
    process: [
      { title: "Discover", text: "We start with deep business context, financial metrics, and the real bottlenecks you're actually trying to solve." },
      { title: "Diagnose", text: "We challenge assumptions, isolate friction points, and identify the top high-leverage growth decisions." },
      { title: "Design", text: "We turn the diagnosis into a concrete strategic direction, priority matrix, and an execution-ready roadmap." },
      { title: "Drive", text: "We guide you from recommendations to execution through follow-up accountability and sprint advisory." }
    ],
    packages: [
      { badge: "Single Session", name: "Strategy Session", for: "For a single, focused decision — a pricing call, positioning question, or go/no-go pivot.", items: ["One deep-dive 90-min working session", "Structured problem diagnosis", "Written strategic brief & next steps", "Delivered within 1 week"] },
      { badge: "Most Booked", name: "Growth Sprint", for: "For founders who need a complete diagnosis and a 90-day roadmap to execute against.", items: ["Full business diagnosis & priority matrix", "30/60/90-day actionable roadmap", "Two follow-up implementation sessions", "Async feedback channel for 30 days"] },
      { badge: "Ongoing", name: "Advisory Retainer", for: "For teams requiring continuous strategic guidance through critical growth stages.", items: ["Everything in Growth Sprint", "Bi-weekly dedicated working sessions", "On-call strategic input between calls", "Priority turnaround on strategic audits"] }
    ],
    faq: [
      { q: "Do I need a polished brief before we talk?", a: "No — bring the numbers, the doubts, and the competing priorities. The consultation exists to create structure from that mess, not to review a finished deck." },
      { q: "What do I actually leave with?", a: "Depending on the engagement: a structured business diagnosis, a priority matrix, a growth roadmap, and a 30/60/90-day action plan — not just notes from a conversation." },
      { q: "Is this only for early-stage founders?", a: "No — we work with early-stage founders seeking PMF, as well as established teams whose priorities keep changing under competitive pressure." },
      { q: "Can you help with one specific decision instead of a full engagement?", a: "Yes — the Strategy Session is built for exactly that: a single working session around one pricing, positioning, or go/no-go decision." },
      { q: "What's the typical turnaround for a growth sprint?", a: "Two to three weeks from kickoff to a delivered roadmap, depending on scope and scheduling." }
    ]
  },

  creative: {
    slug: "creative",
    index: "02",
    title: "Creative Solutions",
    heroCategory: "BRAND MYTHOLOGY & IDENTITY // DESIGN SYSTEMS",
    heroTitle: "Design that gives your idea a distinct edge.",
    heroDesc: "Brand identity, design systems, and campaign concepts built from a real point of view — not the third moodboard from a stock template. Direction you can defend, delivered as files you actually own.",
    telemetryKey: "SYS_DSGN // MYTH-ID-V3",
    techStack: [
      { label: "Deliverable Format", value: "Figma Tokens, Adobe Suite, Vector Assets" },
      { label: "Typography Curation", value: "Bespoke Editorial & Digital Pairing" },
      { label: "Revisions", value: "Unlimited Within Agreed Scope" },
      { label: "Ownership", value: "100% Full IP Transfer" }
    ],
    stats: [
      { num: "45+", label: "Brand Identities Shipped" },
      { num: "300+", label: "Design Assets Delivered" },
      { num: "12", label: "Industries Transformed" }
    ],
    marquee: ["BRAND IDENTITY", "DESIGN SYSTEMS", "CAMPAIGN CONCEPTS", "SOCIAL & CONTENT SYSTEMS", "PACKAGING & PRINT", "PITCH & COLLATERAL"],
    overviewTitle: "DESIGN THAT COMMITS TO A DIRECTION.",
    overviewDesc: "Most brand work fails because nobody made a real choice — the deck has three \"safe\" options and the client picks the middle one.\n\nWe work differently: one strong direction, argued for clearly, refined until it's right. Every project ships with source files and a usage guide, so your team can actually run with the system after we hand it off — not just admire it in a PDF.",
    offerings: [
      { title: "Brand Identity & Logo Systems", desc: "Logo marks, responsive variants, color systems, typography pairing, and strict usage guidelines built for scale." },
      { title: "Design Systems & Style Guides", desc: "Figma component libraries and documented tokens that keep every deck, web page, and post looking cohesive." },
      { title: "Campaign Concepts & Art Direction", desc: "Monumental visual ideas and narrative language for product launches, seasonal pushes, and brand transformations." },
      { title: "Social & Content Design Systems", desc: "Templated, on-brand post architectures and motion templates your team can fill in weekly without starting from zero." },
      { title: "Packaging & Print Design", desc: "Packaging, signage, exhibition graphics, and tactile merchandise that brings the brand off-screen with industrial precision." },
      { title: "Pitch Decks & Brand Collateral", desc: "Investor decks, sales one-pagers, and institutional presentation collateral designed to command attention." }
    ],
    process: [
      { title: "Brief", text: "We dig past 'make it look cool' to what the brand must communicate, who it targets, and its competitive edge." },
      { title: "Explore", text: "Moodboards, conceptual narrative, and one uncompromising, defendable creative direction." },
      { title: "Design", text: "The chosen direction engineered across all touchpoints — logos, typography, palettes, and applications." },
      { title: "Deliver", text: "Full editable source files (Figma, AI), exported assets in all formats, and a comprehensive Brand Bible." }
    ],
    packages: [
      { badge: "Single Asset", name: "Design Sprint", for: "For a focused deliverable — an investor deck, key campaign visual, or packaging refresh.", items: ["One creative direction, fully built out", "Two comprehensive revision rounds", "All raw source files & print-ready exports", "Delivered in 1–2 weeks"] },
      { badge: "Most Booked", name: "Full Identity", for: "For new ventures or established brands seeking a definitive rebrand.", items: ["Primary/secondary logo marks & lockups", "Color system, type hierarchy & Brand Bible", "Social templates & pitch deck template", "Unlimited revisions within agreed scope"] },
      { badge: "Ongoing", name: "Creative Retainer", for: "For high-velocity teams releasing fresh collateral, decks, and assets every month.", items: ["Everything in Full Identity", "Dedicated Art Director & senior designer", "Monthly asset quota with rolling briefs", "Priority turnaround within 48 hours"] }
    ],
    faq: [
      { q: "Do we get the source files, not just exports?", a: "Yes — every project ships with editable source files (Figma, Adobe, or native formats) plus export packages, so your team owns the work 100%." },
      { q: "How many revision rounds are included?", a: "Design Sprint includes two rounds. Full Identity and Retainers include unlimited rounds within the agreed scope." },
      { q: "Do you only show one direction, not several?", a: "By default, yes — we present one strong, well-argued direction rather than three diluted options. If you'd prefer alternates explored, we can scope that upfront." },
      { q: "Can you work from an existing brand instead of starting fresh?", a: "Yes — much of our work is sharpening and modernizing an existing identity rather than replacing it." },
      { q: "What's the typical turnaround for a full identity?", a: "Three to five weeks from kickoff to final delivery, depending on feedback turnaround." }
    ]
  },

  event: {
    slug: "event",
    index: "03",
    title: "Event Management",
    heroCategory: "EXPERIENTIAL & GLOBAL EVENTS // PHYSICAL ACTIVATION",
    heroTitle: "Events that run exactly as planned.",
    heroDesc: "Launches, activations, and offsites planned end-to-end and executed on the ground by people who've done it before — not a checklist handed to a junior on the day. One point of contact, zero surprises.",
    telemetryKey: "SYS_EVNT // PROD-GROUND-V2",
    techStack: [
      { label: "Execution Style", value: "On-Ground Lead Producer & Technical Crew" },
      { label: "Logistics Framework", value: "Run-of-Show & Real-Time Comms" },
      { label: "Vendor Network", value: "Tier-1 AV, Stage, Venue & Catering" },
      { label: "Reporting", value: "Full Attendance & ROI Telemetry" }
    ],
    stats: [
      { num: "300+", label: "Events Executed" },
      { num: "500k+", label: "Attendees Hosted" },
      { num: "0", label: "Day-Of Surprises Allowed" }
    ],
    marquee: ["PRODUCT LAUNCHES", "BRAND ACTIVATIONS", "CONFERENCES & SUMMITS", "VENUE & VENDOR SOURCING", "ON-GROUND EXECUTION", "TEAM OFFSITES"],
    overviewTitle: "PLANNING THAT SURVIVES CONTACT.",
    overviewDesc: "Most event failures aren't creative — they're logistical. A vendor no-shows, a timeline slips, nobody owns the run-of-show.\n\nWe work differently: one team plans it, sources it, and stands on-site to run it. Every event ships with a full run-of-show, vendor contacts, and a post-event report — so what happened on the day is never a mystery to your team afterward.",
    offerings: [
      { title: "Product Launches & Brand Activations", desc: "Concept, stage design, AV orchestration, and flow for launch moments that turn attendees into brand advocates." },
      { title: "Conferences, Summits & Expos", desc: "Agenda design, speaker hospitality, technical multi-track staging, and attendee journey management." },
      { title: "Venue & Vendor Sourcing & Contracting", desc: "Shortlisted venues, lighting, sound, staging, catering, and security — negotiated and managed on your behalf." },
      { title: "On-Ground Stage & Show Calling", desc: "A dedicated live run-of-show director and on-site production team managing cue-to-cue execution." },
      { title: "Executive Offsites & Leadership Retreats", desc: "Immersive locations, itineraries, and hospitality balancing strategic work sessions with premium experiences." },
      { title: "Guest Flow, RSVPs & Post-Event Telemetry", desc: "Digital ticketing/check-in, security, attendee data capture, and post-event ROI debrief reports." }
    ],
    process: [
      { title: "Brief", text: "We lock down the core objective, attendee profile, budget ceiling, and target date." },
      { title: "Source", text: "Venues, staging, AV, and hospitality vendors shortlisted, negotiated, and locked in." },
      { title: "Plan", text: "A minute-by-minute run-of-show, technical cue sheet, and contingency matrices signed off." },
      { title: "Execute", text: "Our senior production leads on-site directing live operations, followed by complete post-event telemetry." }
    ],
    packages: [
      { badge: "Single Event", name: "Launch Day", for: "For a focused single-day event — a product launch, press preview, or VIP dinner.", items: ["Venue selection & vendor contracting", "Minute-by-minute run-of-show", "On-site lead producer & stage manager", "Delivered in 2–4 weeks"] },
      { badge: "Most Booked", name: "Full Production", for: "For multi-day summits, large-scale brand activations, or nationwide tours.", items: ["Complete stage, lighting & AV production", "Speaker & VIP management", "Full on-ground execution crew", "Post-event media & ROI reporting"] },
      { badge: "Ongoing", name: "Events Retainer", for: "For enterprises and organizations running recurring summits, roadshows, and quarterly offsites.", items: ["Standing preferred vendor rates & venues", "Dedicated lead event producer", "Continuous event calendar planning", "Priority on-demand emergency support"] }
    ],
    faq: [
      { q: "Do you handle vendor contracts and payments directly?", a: "Yes — we negotiate and contract venues and vendors on your behalf, managing payments against the agreed budget." },
      { q: "Will your team actually be on-site on the day?", a: "Always. Every production includes dedicated on-site producers running the timeline and crew live." },
      { q: "Can you work with a venue or vendor we've already picked?", a: "Yes — we frequently take over partially-planned events, auditing existing contracts and managing the remaining requirements." },
      { q: "What happens if something unexpected happens?", a: "Every event has backup power, AV redundancies, and contingency plans built into the planning phase." },
      { q: "What's the typical lead time for a major production?", a: "Six to ten weeks for large conferences; two to four weeks for targeted launches and activations." }
    ]
  },

  legal: {
    slug: "legal",
    index: "04",
    title: "Legal Services",
    heroCategory: "LEGAL & STRUCTURAL ADVISORY // COMPLIANCE ARCHITECTURE",
    heroTitle: "Legal muscle, minus the intimidation.",
    heroDesc: "Company setup, contracts, IP, and compliance — handled by people who explain what a clause does before asking you to sign it. No jargon walls, no billable-hour guessing games.",
    telemetryKey: "SYS_LEGAL // ADVISORY-CORP-V1",
    techStack: [
      { label: "Jurisdiction", value: "India & Cross-Border Frameworks" },
      { label: "Billing Style", value: "Transparent Flat-Fee / Retainer" },
      { label: "Turnaround", value: "24–48 Hours on Standard Drafts" },
      { label: "Filing Tracking", value: "End-to-End Tracking to Certificate" }
    ],
    stats: [
      { num: "26+", label: "Entities Incorporated" },
      { num: "80+", label: "Commercial Contracts Drafted" },
      { num: "100%", label: "Filings Tracked to Completion" }
    ],
    marquee: ["COMPANY INCORPORATION", "CONTRACT DRAFTING", "FOUNDER AGREEMENTS", "TRADEMARKS & IP", "REGULATORY COMPLIANCE", "LEGAL RETAINER"],
    overviewTitle: "LAW THAT KEEPS UP WITH YOU.",
    overviewDesc: "Most founders don't need a law firm — they need someone who picks up the phone, drafts fast, and tells them in plain language what a clause actually protects them from.\n\nThat's the legal desk at InfraEdge 360. We handle the paperwork that keeps a company defensible: incorporation, contracts, IP, and compliance — priced upfront, tracked to completion, and explained in language you'd use with a co-founder, not a courtroom.",
    offerings: [
      { title: "Company Incorporation (Pvt Ltd, LLP, OPC)", desc: "Entity advisory, name approval, MOA/AOA drafting, DSC/DIN setup, and ROC filings through final certificate of incorporation." },
      { title: "Commercial Contract Drafting & Review", desc: "Master Services Agreements (MSAs), vendor contracts, enterprise SaaS terms, and strict non-disclosure agreements (NDAs)." },
      { title: "Founder Agreements & Equity Structuring", desc: "Co-founder charters, vesting schedules, ESOP pool structures, and cap table documentation that withstand investor scrutiny." },
      { title: "Trademark & Intellectual Property Defense", desc: "Comprehensive trademark clearance searches, class filings, copyright registration, and objection response handling." },
      { title: "Regulatory & Corporate Compliance", desc: "GST registration, periodic ROC filings, board resolutions, and labour compliance to keep entities in pristine standing." },
      { title: "On-Demand Fractional Legal Retainer", desc: "Standing general counsel support for fast-moving startups — flat monthly rate with no surprise hourly bills." }
    ],
    process: [
      { title: "Consult", text: "A direct discussion regarding the business deal, entity goals, or risk mitigation needs." },
      { title: "Draft", text: "First draft delivered quickly with plain-language annotations explaining what each clause enforces." },
      { title: "Revise", text: "Unlimited revision rounds until the agreement matches your exact business intentions." },
      { title: "Execute", text: "Execution-ready digital signing, e-stamping assistance, and official regulatory filing completion." }
    ],
    packages: [
      { badge: "Launch", name: "Founding Docs", for: "For teams incorporating or formalizing their legal core for the first time.", items: ["Entity incorporation (Pvt Ltd / LLP)", "Founder agreement with vesting terms", "PAN, TAN & GST registration setup", "One trademark search & class filing"] },
      { badge: "Most Booked", name: "Growth Cover", for: "For scaling companies actively signing clients, vendors, and strategic hires.", items: ["Everything in Founding Docs", "Unlimited client contract drafting & review", "Comprehensive IP & Trademark protection", "Quarterly corporate compliance audits"] },
      { badge: "Ongoing", name: "Legal Retainer", for: "For companies needing on-call legal counsel without large law firm overhead.", items: ["Everything in Growth Cover", "Dedicated legal counsel on Slack/call", "Same-week turnaround on complex agreements", "Monthly ROC and regulatory compliance filings"] }
    ],
    faq: [
      { q: "How fast can you incorporate a company?", a: "Name approval and filing typically take 7–10 working days once documents are provided, depending on ROC processing times." },
      { q: "Can you review a contract we already have in place?", a: "Yes — send it over and we'll mark up risk clauses, missing protections, and unfavorable indemnities with clear notes." },
      { q: "Do you handle trademark objections and renewals?", a: "Yes, end to end — search, class filing, objection responses if the registrar raises any, and renewal monitoring." },
      { q: "Is the retainer a fixed monthly rate?", a: "Yes. One flat monthly fee covers drafting, review, and standing compliance within scope — no hourly rate billing surprises." },
      { q: "Do you work with teams across India and overseas?", a: "Yes — our legal practice is fully digital and serves clients across all Indian states and cross-border entities." }
    ]
  },

  media: {
    slug: "media",
    index: "05",
    title: "Media Solutions",
    heroCategory: "HYPER-MEDIA & MOTION // CONTENT PRODUCTION",
    heroTitle: "Content built to earn the scroll.",
    heroDesc: "Photo, video, and branded content shot and cut for the platform it's actually going on — not a single asset stretched thin across six formats. Built to hold attention, not just fill a feed.",
    telemetryKey: "SYS_MEDIA // MOTION-FRAME-V9",
    techStack: [
      { label: "Capture Systems", value: "Cinema 4K/6K & Professional High-Speed Gimbal" },
      { label: "Post-Production", value: "DaVinci Color Grading & Spatial 3D Motion" },
      { label: "Delivery Specs", value: "Native 9:16, 16:9, 1:1, 4:5 Master Cuts" },
      { label: "Turnaround", value: "Express 7–14 Day Delivery" }
    ],
    stats: [
      { num: "200+", label: "Shoots Delivered" },
      { num: "50M+", label: "Views Generated" },
      { num: "9", label: "Platforms Formatted For" }
    ],
    marquee: ["PHOTOGRAPHY", "VIDEO PRODUCTION", "SOCIAL & SHORT-FORM", "BRANDED CONTENT", "EVENT COVERAGE", "EDITING & POST"],
    overviewTitle: "CONTENT MADE FOR WHERE IT ACTUALLY LIVES.",
    overviewDesc: "Most brand content fails because it's shot once and force-fit everywhere — a landscape ad cropped badly into a story, a talking head with no hook in the first two seconds.\n\nWe shoot and cut for the platform first. Every shoot ships with the full raw library and platform-ready cuts, so your team keeps working the footage long after we've wrapped.",
    offerings: [
      { title: "Commercial & Editorial Photography", desc: "High-contrast product, lifestyle, team, and architectural photography shot with a distinct artistic point of view." },
      { title: "Brand Films & Cinematic Video", desc: "Flagship brand manifestos, founder stories, and product reveal films scripted and directed for maximum impact." },
      { title: "Social Media & Short-Form Motion", desc: "Reels, TikToks, and YouTube Shorts engineered with instant hooks, kinetic typography, and native pacing." },
      { title: "Branded Content & Docu-Series", desc: "Episodic content series and thought-leadership interviews designed to build long-term audience trust." },
      { title: "Live Event & High-Energy Coverage", desc: "Fast-turnaround photo and highlight video reels capturing the electrifying energy of festivals and conferences." },
      { title: "Post-Production, Color & Sound Design", desc: "Precision color grading, sound design, visual effects, and master editing passes on raw footage." }
    ],
    process: [
      { title: "Brief", text: "We identify the distribution channel, target viewer psychology, and key narrative objective." },
      { title: "Plan", text: "Scriptwriting, storyboard generation, shot lists, location scouting, and lighting design." },
      { title: "Shoot", text: "Full camera crew, lighting rigs, audio capture, and on-set creative direction." },
      { title: "Edit", text: "Rough cuts, color grading, sound design, and export in multi-platform native aspect ratios." }
    ],
    packages: [
      { badge: "Single Shoot", name: "Content Sprint", for: "For a focused shoot — a product drop, founder video, or seasonal social asset pack.", items: ["Half-day or full-day shoot on location", "3–5 platform-optimized final cuts", "Full raw photo & video library included", "Delivered in 1–2 weeks"] },
      { badge: "Most Booked", name: "Full Campaign", for: "For major brand launches requiring a comprehensive media arsenal.", items: ["Multi-day production & dedicated studio set", "Hero brand film + 15 short-form reels", "Complete photography suite (50+ retouched photos)", "Custom sound design & 3D graphics integration"] },
      { badge: "Ongoing", name: "Media Retainer", for: "For brands shipping high-frequency content across all social and paid channels.", items: ["Monthly dedicated shoot days", "Continuous stream of 20+ short-form edits/month", "Dedicated lead video editor & colorist", "48-hour rush turnaround on timely edits"] }
    ],
    faq: [
      { q: "Do we get the raw footage, not just the final cut?", a: "Yes — every shoot ships with the entire raw photo and video library, giving you complete ownership to repurpose footage." },
      { q: "How many revision rounds are included?", a: "Content Sprint includes two rounds; Full Campaigns and Retainers include unlimited rounds within agreed briefs." },
      { q: "Can you deliver formats for multiple platforms from one shoot?", a: "Yes — we frame and shoot deliberately to extract 9:16 vertical, 16:9 widescreen, and 1:1 formats without quality loss." },
      { q: "Can you edit footage we already shot ourselves?", a: "Yes — send over raw files and our post-production desk will grade, edit, and finish the cut." },
      { q: "What's the typical turnaround time?", a: "One to two weeks for sprints; three to five weeks for comprehensive multi-asset campaigns." }
    ]
  },

  webdev: {
    slug: "webdev",
    index: "06",
    title: "Website Dev & Maintenance",
    heroCategory: "CREATIVE TECH & CODE // COMPUTATIONAL WEB",
    heroTitle: "Websites that scale with your ambition.",
    heroDesc: "Pixel-tight websites & web apps. Continuous care, updates, and performance tuning after launch. We build for the end-user, not the portfolio.",
    telemetryKey: "SYS_TECH // CODE-NEXTJS-V15",
    techStack: [
      { label: "Frontend Stack", value: "Next.js 15/16, React 19, TypeScript, Tailwind" },
      { label: "Performance Score", value: "98+ Lighthouse / Sub-second TTFB" },
      { label: "Hosting Architecture", value: "Vercel / Cloudflare Edge CDN" },
      { label: "Source Code Handover", value: "100% Clean Git Repository" }
    ],
    stats: [
      { num: "50+", label: "Sites & Apps Shipped" },
      { num: "100%", label: "Uptime SLA Guarantee" },
      { num: "0.8s", label: "Average Global Load Time" }
    ],
    marquee: ["WEBSITE DESIGN", "WEB APP DEV", "ECOMMERCE ARCHITECTURE", "CMS INTEGRATION", "SEO TUNING", "MAINTENANCE & SECURITY"],
    overviewTitle: "PERFORMANCE ABOVE ALL.",
    overviewDesc: "Most agency websites fail after launch — nobody's watching uptime, updating dependencies, or fixing what breaks at 2am.\n\nWe work differently: the build is the start of the relationship, not the end of it. Every project ships with clean, documented code and a handoff your team can actually read, so you're never locked into us to make a simple change.",
    offerings: [
      { title: "High-Performance Marketing Sites", desc: "Next.js marketing websites engineered with laser-sharp typography, responsive layouts, and blazing load times." },
      { title: "Custom Web Applications & Portals", desc: "Full-stack React/Node applications, client dashboards, customer portals, and internal workflow tools." },
      { title: "Headless E-Commerce Monoliths", desc: "Shopify / custom headless e-commerce builds designed for frictionless checkout conversion and speed." },
      { title: "CMS Architecture (Sanity / Strapi)", desc: "Intuitive content management setups that allow marketing teams to publish new pages in minutes without touching code." },
      { title: "Core Web Vitals & Technical SEO", desc: "Deep performance optimization, structured schema markup, semantic HTML, and accessibility compliance." },
      { title: "24/7 Monitoring & Maintenance Retainer", desc: "Proactive dependency upgrades, security patches, uptime monitoring, and continuous iterative enhancements." }
    ],
    process: [
      { title: "Scope", text: "We define page architecture, user journeys, data requirements, and technical specifications." },
      { title: "Design", text: "Wireframes and high-fidelity responsive interactive UI designed in Figma before coding." },
      { title: "Build", text: "Production-grade TypeScript, Next.js, and Tailwind code built with rigorous component testing." },
      { title: "Maintain", text: "Continuous deployment to edge servers, real-time error logging, and post-launch maintenance." }
    ],
    packages: [
      { badge: "Single Site", name: "Launch Build", for: "For startups needing a flagship marketing site or product landing experience.", items: ["Up to 8 custom responsive pages", "Full CMS integration for easy blogging/editing", "SEO & Core Web Vitals optimization", "Delivered in 2–4 weeks"] },
      { badge: "Most Booked", name: "Full Platform", for: "For scaling ventures requiring custom web apps, e-commerce, or complex API integrations.", items: ["Custom React/Next.js web application", "Database, Auth & Payment integrations", "Custom dashboard & admin tooling", "Comprehensive automated test suite"] },
      { badge: "Ongoing", name: "Maintenance Retainer", for: "For mission-critical websites requiring 24/7 monitoring, security updates, and active development.", items: ["24/7 uptime & error telemetry monitoring", "Monthly feature additions & design tweaks", "Security patching & dependency updates", "Priority 4-hour SLA on bug fixes"] }
    ],
    faq: [
      { q: "Do we get the source code, not just a hosted link?", a: "Yes — every project ships with the full Git repository transferred to your team, completely unencumbered." },
      { q: "What happens after the site launches?", a: "Every build includes a 30-day warranty window. For ongoing security, monitoring, and updates, our Maintenance Retainer keeps our engineers on call." },
      { q: "Can you work with our existing site instead of rebuilding?", a: "Yes — we frequently perform audits, speed optimizations, and UI modernizations on existing codebases." },
      { q: "What technology stack do you recommend?", a: "We primarily build with Next.js (App Router), React, TypeScript, and Tailwind CSS for world-class speed and maintainability." },
      { q: "What's the typical timeline for a web build?", a: "Two to four weeks for high-impact marketing sites; six to ten weeks for full-scale custom web platforms." }
    ]
  }
};
