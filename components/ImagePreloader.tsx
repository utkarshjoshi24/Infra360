"use client";

import { useEffect } from 'react';

const PRELOAD_ASSETS = [
  "/assets/video/home-vid-poster.png",
  "/assets/images/logos/image.png",
  "/assets/images/homepics/1.jpg",
  "/assets/images/homepics/2.jpg",
  "/assets/images/homepics/3.jpg",
  "/assets/images/homepics/4.jpg",
  "/assets/images/homepics/5.jpg",
  "/assets/images/homepics/6.JPG",
  "/assets/images/homepics/7.JPG",
  "/assets/images/homepics/8.jpg",
  "/assets/images/homepics/9.JPG",
  "/assets/images/homepics/10.JPG",
  "/assets/images/homepics/11.JPG",
  "/assets/images/homepics/12.JPG",
  "/assets/images/homepics/13.JPG",
  "/assets/images/homepics/14.jpg",
  "/assets/images/homepics/15.jpg",
  "/assets/images/homepics/16.jpg",
  "/assets/images/homepics/17.JPG",
  "/assets/images/homepics/18.JPG",
  "/assets/images/homepics/19.JPG",
  "/assets/images/homepics/20.JPG",
];

export const ImagePreloader: React.FC = () => {
  useEffect(() => {
    // Run preloading in idle periods or right after initial render to not block FCP
    const preload = () => {
      PRELOAD_ASSETS.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ('requestIdleCallback' in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback(preload, { timeout: 1500 });
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as unknown as { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(preload, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
};
