"use client";

import React, { useState } from 'react';
import { OptimizedImage } from './OptimizedImage';

export const PhotoReel: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    { src: "/assets/images/homepics/1.jpg", caption: "On-set camera rig & lighting setup" },
    { src: "/assets/images/homepics/2.jpg", caption: "Studio commercial lighting calibration" },
    { src: "/assets/images/homepics/3.jpg", caption: "Talent framing & brand art direction" },
    { src: "/assets/images/homepics/4.jpg", caption: "Director monitor & live footage review" },
    { src: "/assets/images/homepics/5.jpg", caption: "Courtside dynamic camera framing" },
    { src: "/assets/images/homepics/6.JPG", caption: "Production crew & on-ground team" },
    { src: "/assets/images/homepics/7.JPG", caption: "Chromakey virtual production stage" },
    { src: "/assets/images/homepics/8.jpg", caption: "On-location talent choreography" },
    { src: "/assets/images/homepics/9.JPG", caption: "Field gear transport & rigging" },
    { src: "/assets/images/homepics/10.JPG", caption: "Gimbal operator precision movement" },
    { src: "/assets/images/homepics/11.JPG", caption: "Broadcast audio & boom mic tracking" },
    { src: "/assets/images/homepics/12.JPG", caption: "Production huddle & take analysis" },
    { src: "/assets/images/homepics/16.jpg", caption: "Stadium field coordination" },
    { src: "/assets/images/homepics/13.JPG", caption: "Post-wrap wrap handshake & signoff" },
    { src: "/assets/images/homepics/15.jpg", caption: "Arena athlete photography" },
    { src: "/assets/images/homepics/14.jpg", caption: "Athletic lifestyle shoot walkout" },
    { src: "/assets/images/homepics/17.JPG", caption: "Backstage locker room setup" },
    { src: "/assets/images/homepics/18.JPG", caption: "Heavy jib crane outdoor calibration" },
    { src: "/assets/images/homepics/19.JPG", caption: "Sideline floodlight rig execution" },
    { src: "/assets/images/homepics/20.JPG", caption: "Full production unit sideline deployment" },
  ];

  return (
    <section className="w-full py-24 bg-void border-t border-outline relative overflow-hidden" id="behind-the-scenes">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ice uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>// 03 · PRODUCTION REEL & ARCHIVE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              Behind The <span className="text-outline">Lens.</span>
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md">
            Raw, unfiltered documentation of our multidisciplinary team on set, on stage, in the code editor, and on the ground.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Photo Reel */}
      <div className="w-full overflow-hidden py-4 group/track">
        <div className="animate-marquee flex items-center gap-6">
          {images.concat(images).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.src)}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 aspect-[16/10] relative overflow-hidden bg-surface arch-border cursor-pointer group transition-all duration-300 hover:border-cobalt"
            >
              <OptimizedImage
                src={img.src}
                alt={img.caption}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <span className="font-mono text-xs text-on-surface uppercase tracking-wider">
                  {img.caption}
                </span>
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] text-ice bg-void/80 px-2 py-0.5 border border-outline/60 z-10">
                [FRAME_{(idx % images.length) + 1}]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[110] bg-void/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-surface border border-outline p-2 overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-void/80 text-white hover:text-ice border border-outline cursor-pointer"
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt="Expanded view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
