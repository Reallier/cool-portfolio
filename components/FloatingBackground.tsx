'use client';

import React, { useEffect, useState } from 'react';

export default function FloatingBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        transform: `translateY(${offsetY * 0.1}px)`, /* Adjust 0.1 for desired parallax effect */
      }}
    >
      {/* Example background elements - customize as needed */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary-cyan/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    </div>
  );
}