'use client';

import { useState } from 'react';
import { skillIconMap } from '@/lib/skill-icons';

interface Skill {
  name: string;
  description: string;
}

interface SkillMarqueeProps {
  skills: Skill[];
  speed?: number;
}

export default function SkillMarquee({ skills, speed = 30 }: SkillMarqueeProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Duplicate skills multiple times for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  const handleMouseEnter = (skillName: string) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 border border-gray-200 rounded-lg py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="relative mx-2 flex-shrink-0"
            onMouseEnter={() => handleMouseEnter(skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`relative px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm cursor-pointer transition-all duration-500 hover:shadow-lg hover:scale-110 flex items-center space-x-2 ${
                hoveredSkill === skill.name ? 'transform rotate-12' : ''
              }`}
              style={{
                transformOrigin: 'center',
              }}
            >
              {(() => {
                const IconComponent = skillIconMap[skill.name];
                return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
              })()}
              <span className="block">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <div
          className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-slate-800/95 backdrop-blur-sm text-white text-sm rounded-xl shadow-2xl pointer-events-none max-w-sm border border-slate-700/50"
        >
          <div className="font-medium text-slate-200 mb-1">
            {hoveredSkill}
          </div>
          <div className="text-slate-300 leading-relaxed">
            {skills.find(s => s.name === hoveredSkill)?.description}
          </div>
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"
          />
        </div>
      )}
    </div>
  );
}