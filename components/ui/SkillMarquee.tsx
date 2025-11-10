'use client';

interface SkillMarqueeProps {
  skills: string[];
  speed?: number;
}

export default function SkillMarquee({ skills, speed = 30 }: SkillMarqueeProps) {
  // Duplicate skills multiple times for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative overflow-hidden bg-gray-50 border border-gray-200 rounded-lg py-4">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="inline-block px-4 py-2 mx-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}