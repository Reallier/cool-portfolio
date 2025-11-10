'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectMarqueeProps {
  projects: Project[];
  speed?: number;
}

export default function ProjectMarquee({ projects, speed = 80 }: ProjectMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate projects multiple times for seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex gap-6"
        style={{
          width: 'max-content',
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {duplicatedProjects.map((p, index) => (
          <Link
            key={`${p.slug}-${index}`}
            href={p.githubUrl || `/projects/${p.slug}`}
            className="group block flex-shrink-0 w-80"
            target={p.githubUrl ? "_blank" : "_self"}
            rel={p.githubUrl ? "noopener noreferrer" : ""}
          >
            <div className="space-y-6">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {p.githubUrl ? (
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-gray-500 text-sm font-medium">GitHub</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">项目预览</span>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.topics && p.topics.length > 0 ? (
                    p.topics.slice(0, 3).map((topic: string) => (
                      <span key={topic} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full group-hover:bg-blue-200 transition-colors">
                        {topic}
                      </span>
                    ))
                  ) : (
                    p.role.map((r: string) => (
                      <span key={r} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full group-hover:bg-green-200 transition-colors">
                        {r}
                      </span>
                    ))
                  )}
                </div>
                {p.githubUrl && (
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>查看源码</span>
                    </div>
                    {p.metrics.map(m => (
                      <div key={m.label} className="flex items-center gap-1">
                        <span className="font-medium text-gray-700">{m.value}</span>
                        <span className="text-gray-500">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}