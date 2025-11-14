'use client';

import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface IntroSection {
  text: string;
}

interface AnimatedIntroProps {
  sections: IntroSection[];
  baseDelay?: number;
  className?: string;
}

export default function AnimatedIntro({ sections, baseDelay = 1500, className = '' }: AnimatedIntroProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {sections.map((section, index) => {
        const sectionDelay = baseDelay + index * 2000;

        return (
          <p
            key={index}
            className="text-base md:text-lg text-text-muted leading-relaxed"
          >
            <TypewriterText
              text={section.text}
              delay={sectionDelay}
              speed={30}
            />
          </p>
        );
      })}
    </div>
  );
}