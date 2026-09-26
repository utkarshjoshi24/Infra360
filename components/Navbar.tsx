"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConsultationModal } from './ConsultationModal';

export const Navbar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const serviceLinks = [
    { title: "Business Consultation", href: "/services/business", tag: "GTM / Advisory" },
    { title: "Creative Solutions", href: "/services/creative", tag: "Brand / Design" },
    { title: "Event Management", href: "/services/event", tag: "Physical & Live" },
    { title: "Legal Services", href: "/services/legal", tag: "Structural / IP" },
    { title: "Media Solutions", href: "/services/media", tag: "Photo / Video / Motion" },
    { title: "Website Dev & Maintenance", href: "/services/webdev", tag: "Full-Stack Web" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-void/90 backdrop-blur-xl border-b border-outline py-0 shadow-2xl' 
            : 'bg-void/60 backdrop-blur-md border-b border-outline/40 py-1'
        }`}
      >
        <div className="h-20 w-full px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full bg-surface-high border border-outline flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cobalt group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <img 
                src="/assets/images/logos/image.png" 
                alt="InfraEdge 360 Logo" 
                className="w-6 h-6 object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-on-surface uppercase tracking-tight font-bold text-base md:text-lg group-hover:text-ice transition-colors">
                InfraEdge <span className="text-cobalt">360</span>
              </span>
              <span className="font-mono text-[9px] text-on-surface-muted tracking-widest uppercase hidden sm:block">
                // STUDIO ATELIER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/portfolio" 
              className={`font-mono text-xs uppercase tracking-widest transition-colors py-2 ${
                pathname === '/portfolio' 
                  ? 'text-white font-semibold' 
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              Work
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                href="/services" 
                className={`font-mono text-xs uppercase tracking-widest transition-colors py-2 flex items-center gap-1.5 ${
                  pathname.startsWith('/services') 
                    ? 'text-white font-semibold' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                <span>Services</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cobalt' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                  <div className="bg-surface border border-outline shadow-2xl p-3 flex flex-col gap-1 backdrop-blur-2xl">
                    <div className="px-3 py-1.5 border-b border-outline/50 mb-1 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted">6 Core Disciplines</span>
                      <Link href="/services" className="font-mono text-[10px] text-ice hover:underline uppercase">View All →</Link>
                    </div>
                    {serviceLinks.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className={`px-3 py-2 text-xs flex flex-col gap-0.5 hover:bg-surface-high transition-colors ${
                          pathname === service.href ? 'border-l-2 border-cobalt bg-surface-high' : ''
                        }`}
                      >
                        <span className="font-display font-semibold text-on-surface">{service.title}</span>
                        <span className="font-mono text-[10px] text-on-surface-variant">{service.tag}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className={`font-mono text-xs uppercase tracking-widest transition-colors py-2 ${
                pathname === '/about' 
                  ? 'text-white font-semibold' 
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`font-mono text-xs uppercase tracking-widest transition-colors py-2 ${
                pathname === '/contact' 
                  ? 'text-white font-semibold' 
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA & Mobile Burger */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-cobalt hover:bg-cobalt-light text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_28px_rgba(37,99,235,0.6)] cursor-pointer"
            >
              <span>Book a Call</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface hover:text-white border border-outline hover:border-outline-variant bg-surface-low cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-surface border-b border-outline p-6 flex flex-col gap-6 animate-fadeIn shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="font-display text-lg uppercase font-bold text-on-surface hover:text-ice py-2 border-b border-outline/40"
              >
                Home
              </Link>
              <Link 
                href="/portfolio" 
                className="font-display text-lg uppercase font-bold text-on-surface hover:text-ice py-2 border-b border-outline/40"
              >
                Work / Portfolio
              </Link>
              <div className="flex flex-col gap-2 py-2 border-b border-outline/40">
                <Link href="/services" className="font-display text-lg uppercase font-bold text-on-surface hover:text-ice">
                  Services
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 pt-2">
                  {serviceLinks.map((s, i) => (
                    <Link 
                      key={i} 
                      href={s.href}
                      className="font-mono text-xs text-on-surface-variant hover:text-ice py-1"
                    >
                      • {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                href="/about" 
                className="font-display text-lg uppercase font-bold text-on-surface hover:text-ice py-2 border-b border-outline/40"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="font-display text-lg uppercase font-bold text-on-surface hover:text-ice py-2 border-b border-outline/40"
              >
                Contact
              </Link>
            </div>

            <button 
              onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
              className="btn-primary w-full py-3.5 text-center"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};
