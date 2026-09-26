import React from 'react';
import './globals.css';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://infraedge360.com'),
  title: 'InfraEdge 360 — Hybrid Creative Studio & Venture Accelerator',
  description: 'Branding, business consultation, media production, web engineering, events, and legal advisory under one roof. A 360° studio pairing Gen-Z creativity with senior execution.',
  keywords: ['InfraEdge 360', 'Creative Studio', 'Venture Accelerator', 'Web Development', 'Brand Identity', 'Media Production', 'Event Management', 'Legal Advisory'],
  authors: [{ name: 'InfraEdge 360' }],
  icons: {
    icon: '/assets/images/logos/image.png',
    apple: '/assets/images/logos/image.png',
  },
  openGraph: {
    title: 'InfraEdge 360 — We Build The Edge Your Brand Deserves',
    description: 'A 360° hybrid creative studio and venture accelerator engineering high-velocity market traction.',
    url: 'https://infraedge360.com',
    siteName: 'InfraEdge 360',
    images: [
      {
        url: '/assets/images/homepics/1.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraEdge 360 Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraEdge 360 — Hybrid Creative Studio',
    description: 'Branding, business, media, web dev, events, and legal advisory under one roof.',
    images: ['/assets/images/homepics/1.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/assets/images/logos/image.png" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} bg-void text-on-surface antialiased selection:bg-cobalt selection:text-white`}
      >
        <Navbar />
        <main className="w-full min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
