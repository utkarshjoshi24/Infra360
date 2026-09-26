export interface PortfolioItem {
  id: string;
  title: string;
  category: 'media' | 'events' | 'creative' | 'web' | 'business';
  categoryLabel: string;
  client: string;
  desc: string;
  fullDesc: string;
  image: string;
  year: string;
  tags: string[];
  metrics?: { label: string; value: string };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "aether-ventures",
    title: "Aether Capital Management",
    category: "business",
    categoryLabel: "Venture Architecture & GTM",
    client: "Aether Ventures",
    desc: "Sovereign Asset Management · Identity / Full Stack Institutional Portal",
    fullDesc: "Engineered comprehensive GTM architecture, founder deck, and institutional data portal for an emerging fintech venture catalyzing $40M+ in assets under management.",
    image: "/assets/images/homepics/1.jpg",
    year: "2024",
    tags: ["GTM Strategy", "Fintech", "Institutional Deck"],
    metrics: { label: "Capital Facilitated", value: "$40M+" }
  },
  {
    id: "neuron-motion",
    title: "Neuron Hyperwear Campaign",
    category: "media",
    categoryLabel: "Hyper-Media & Motion",
    client: "Neuron Tech",
    desc: "Bio-responsive Performance Apparel · Global Campaign / 3D Motion",
    fullDesc: "Directed and produced a cinematic multi-channel product reveal campaign across photo, 3D CGI video, and high-energy short-form cutdowns resulting in over 12M global impressions.",
    image: "/assets/images/homepics/2.jpg",
    year: "2024",
    tags: ["Cinema 4K", "3D Motion", "Short-Form"],
    metrics: { label: "Campaign Views", value: "12.4M" }
  },
  {
    id: "solaris-motorwerks",
    title: "Solaris Motorwerks Identity",
    category: "creative",
    categoryLabel: "Brand Mythology & Identity",
    client: "Solaris EV",
    desc: "Luxury EV Ecosystem · Spatial Showroom & Automotive Brand System",
    fullDesc: "Developed monumental brand mythology, bespoke typography guidelines, digital design system, and tactile showroom collateral for an ultra-luxury electric vehicle automaker.",
    image: "/assets/images/homepics/3.jpg",
    year: "2024",
    tags: ["Brand Identity", "Design System", "Luxury"],
    metrics: { label: "Brand Recall Lift", value: "+340%" }
  },
  {
    id: "zenith-systems",
    title: "Zenith Cloud Architecture",
    category: "web",
    categoryLabel: "Creative Tech & Web",
    client: "Zenith Systems",
    desc: "Enterprise Cloud Infrastructure · Sub-Second Next.js Web Platform",
    fullDesc: "Designed and built high-performance enterprise web application utilizing Next.js, WebGL shader interactions, and edge API caching achieving 99 Lighthouse performance rating.",
    image: "/assets/images/homepics/4.jpg",
    year: "2023",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: { label: "Page Load Time", value: "0.6s" }
  },
  {
    id: "nova-summit",
    title: "Nova Global Tech Summit",
    category: "events",
    categoryLabel: "Experiential & Global Events",
    client: "Nova Summit Global",
    desc: "Multi-Track Tech Summit · 5,000+ Attendees & Live Show Calling",
    fullDesc: "Full-scale physical execution of an international 3-day tech conference, managing keynote stage AV orchestration, 40+ speakers, VIP hospitality, and live broadcasting.",
    image: "/assets/images/homepics/5.jpg",
    year: "2023",
    tags: ["Live Production", "Summit", "5k+ Attendees"],
    metrics: { label: "Live Attendees", value: "5,200" }
  },
  {
    id: "apex-creative",
    title: "Apex Hardware Systems",
    category: "creative",
    categoryLabel: "Brand Mythology & Identity",
    client: "Apex Industrial",
    desc: "Core Identity System · Modular Packaging & Industrial Brand Guide",
    fullDesc: "Crafted industrial-grade visual identity, physical product packaging system, and unified Figma component library for next-generation robotics hardware manufacturer.",
    image: "/assets/images/homepics/6.jpg",
    year: "2024",
    tags: ["Packaging", "Figma Tokens", "Hardware"],
    metrics: { label: "SKUs Packaged", value: "24+" }
  },
  {
    id: "redfm-activation",
    title: "Red FM Festival Experience",
    category: "events",
    categoryLabel: "Experiential & Global Events",
    client: "Red FM",
    desc: "Nationwide Music Activation · Stage Production & Crowd Telemetry",
    fullDesc: "Delivered electrifying multi-city concert staging, sound engineering, backstage management, and sponsor activation booths for Red FM's flagship youth festival.",
    image: "/assets/images/homepics/7.jpg",
    year: "2024",
    tags: ["Concert Staging", "Audio Engineering", "Brand Activation"],
    metrics: { label: "Festival Footfall", value: "18,000+" }
  },
  {
    id: "sunburn-coverage",
    title: "Sunburn Arena Live Media",
    category: "media",
    categoryLabel: "Hyper-Media & Motion",
    client: "Sunburn / Team Innovation",
    desc: "Arena Concert Visuals · Express 24-Hour Highlight Aftermovie",
    fullDesc: "Deployed multi-camera cinema crews, high-speed gimbal rigs, and on-site editing suites to deliver broadcast-quality festival reels and recap films within 24 hours of curtain close.",
    image: "/assets/images/homepics/8.jpg",
    year: "2024",
    tags: ["Event Media", "Cinema Rig", "Rush Delivery"],
    metrics: { label: "Social Reach", value: "8.2M+" }
  },
  {
    id: "garuda-web",
    title: "Feathers of Garuda Ecosystem",
    category: "web",
    categoryLabel: "Creative Tech & Web",
    client: "Feathers of Garuda",
    desc: "High-Traffic Content Portal · Custom Headless CMS Architecture",
    fullDesc: "Engineered responsive editorial portal with custom typography layout engine, interactive multimedia galleries, and sub-second edge cache delivery.",
    image: "/assets/images/homepics/9.jpg",
    year: "2023",
    tags: ["Headless CMS", "Performance", "Media Engine"],
    metrics: { label: "Monthly Readers", value: "450k" }
  },
  {
    id: "bmw-experiential",
    title: "BMW Luxury Showcase",
    category: "events",
    categoryLabel: "Experiential & Global Events",
    client: "BMW",
    desc: "VIP Vehicle Premiere · Precision Lighting & High-Profile Hospitality",
    fullDesc: "Orchestrated private automotive premiere event with custom architectural projection mapping, curated VIP guest journey, and complete press coordination.",
    image: "/assets/images/homepics/10.jpg",
    year: "2024",
    tags: ["Automotive", "VIP Gala", "Projection Mapping"],
    metrics: { label: "Lead Conversion", value: "88%" }
  },
  {
    id: "seedhe-maut-tour",
    title: "Seedhe Maut Tour Production",
    category: "media",
    categoryLabel: "Hyper-Media & Motion",
    client: "Seedhe Maut",
    desc: "National Hip-Hop Tour · Documentary Photography & Raw Motion",
    fullDesc: "Traveled across 8 cities capturing raw backstage documentary photography, high-intensity concert cinematography, and digital tour merch lookbooks.",
    image: "/assets/images/homepics/11.jpg",
    year: "2024",
    tags: ["Tour Docu", "Music Media", "Lookbook"],
    metrics: { label: "Cities Documented", value: "8" }
  },
  {
    id: "marriott-hospitality",
    title: "Fairfield by Marriott Media",
    category: "media",
    categoryLabel: "Hyper-Media & Motion",
    client: "Fairfield by Marriott",
    desc: "Luxury Hospitality Suite · Architectural Photography & Promo Film",
    fullDesc: "Produced high-end architectural photo series and digital commercial spot highlighting premium dining, suites, and wellness experiences for luxury hotel property.",
    image: "/assets/images/homepics/12.jpg",
    year: "2023",
    tags: ["Hospitality", "Interior Photography", "Commercial"],
    metrics: { label: "Booking Uplift", value: "+42%" }
  },
  {
    id: "mod-retail-branding",
    title: "Mall of Dehradun Campaign",
    category: "creative",
    categoryLabel: "Brand Mythology & Identity",
    client: "Mall of Dehradun (MOD)",
    desc: "Flagship Retail Destination · Spatial Signage & Launch Key Visuals",
    fullDesc: "Designed large-scale environmental typography, digital outdoor billboards, and opening campaign visual identity for region's premier luxury retail center.",
    image: "/assets/images/homepics/13.jpg",
    year: "2024",
    tags: ["Retail", "Signage", "Billboard Campaign"],
    metrics: { label: "Opening Footfall", value: "85,000+" }
  },
  {
    id: "katyani-medical-portal",
    title: "Katyani Healthcare Digital",
    category: "web",
    categoryLabel: "Creative Tech & Web",
    client: "Katyani Medical Centre",
    desc: "Patient Care & Diagnostic Portal · HIPAA Compliant Next.js System",
    fullDesc: "Built modern healthcare digital interface featuring real-time doctor appointment scheduling, secure diagnostic report downloads, and mobile-first experience.",
    image: "/assets/images/homepics/14.jpg",
    year: "2023",
    tags: ["Healthcare", "Next.js", "Web App"],
    metrics: { label: "Online Bookings", value: "+210%" }
  },
  {
    id: "realhost-scale",
    title: "Real Host Cloud Infrastructure",
    category: "business",
    categoryLabel: "Venture Architecture & GTM",
    client: "Real Host",
    desc: "Data Center & Cloud Hosting · Enterprise Sales Funnel & GTM Sprint",
    fullDesc: "Restructured B2B enterprise pricing model, product tiering matrix, and sales collateral resulting in doubling of average contract value within two quarters.",
    image: "/assets/images/homepics/15.jpg",
    year: "2024",
    tags: ["B2B SaaS", "Pricing Strategy", "Sales Enablement"],
    metrics: { label: "ACV Growth", value: "2.1x" }
  },
  {
    id: "graphic-era-collab",
    title: "Graphic Era University Summit",
    category: "events",
    categoryLabel: "Experiential & Global Events",
    client: "Graphic Era",
    desc: "Academic Innovation Conclave · 10,000+ Student Delegates",
    fullDesc: "Produced nationwide student innovation conclave featuring multiple indoor auditorium tracks, hackathon arenas, and digital credentialing kiosks.",
    image: "/assets/images/homepics/16.jpg",
    year: "2023",
    tags: ["Youth Summit", "Auditorium Production", "Hackathon"],
    metrics: { label: "Delegates", value: "10,000+" }
  }
];
