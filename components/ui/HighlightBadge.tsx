'use client';

import { useState, useEffect } from 'react';

interface HighlightBadgeProps {
  children: React.ReactNode;
  delay?: number;
  gradient?: string;
  textColor?: string;
}

export default function HighlightBadge({ 
  children, 
  delay = 0,
  gradient = 'from-blue-500/10 to-cyan-500/10',
  textColor = 'text-primary-blue'
}: HighlightBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span 
      className={`inline-block px-2 py-0.5 bg-gradient-to-r ${gradient} ${textColor} rounded font-medium transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-1'
      }`}
    >
      {children}
    </span>
  );
}