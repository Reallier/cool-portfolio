'use client';

import { useState, useEffect, useRef } from 'react';
import { skillIconMap } from '@/lib/skill-icons';

interface SkillCardProps {
  title: string;
  skills: { name: string; description: string }[];
  bgColor?: string;
  index?: number;
}

export default function SkillCard({ title, skills, bgColor = 'bg-page-section', index = 0 }: SkillCardProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 添加延迟，让卡片依次出现
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleMouseEnter = (skillName: string, event: React.MouseEvent) => {
    setHoveredSkill(skillName);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div
      ref={cardRef}
      className={`p-6 rounded-2xl border border-border-subtle/60 shadow-sm transition-all duration-700 ease-out ${
        bgColor
      } ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      } hover:shadow-lg hover:border-border-strong hover:-translate-y-1`}
    >
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-text-main">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const IconComponent = skillIconMap[skill.name];
            return (
              <div
                key={skill.name}
                className="relative group flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 text-text-muted text-xs md:text-sm border border-border-subtle/70 hover:border-primary-blue/50 hover:bg-primary-blue/10 hover:text-primary-blue transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-sm"
                onMouseEnter={(e) => handleMouseEnter(skill.name, e)}
                onMouseLeave={handleMouseLeave}
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <div
          className="fixed z-50 px-4 py-3 bg-slate-800/95 backdrop-blur-sm text-white text-sm rounded-xl shadow-2xl pointer-events-none max-w-sm border border-slate-700/50 animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="font-medium text-slate-200 mb-1">
            {hoveredSkill}
          </div>
          <div className="text-slate-300 leading-relaxed">
            {skills.find(s => s.name === hoveredSkill)?.description}
          </div>
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"
          />
        </div>
      )}
    </div>
  );
}