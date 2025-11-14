'use client';

import { useState } from 'react';
import Link from 'next/link';
import TiltCard from '@/components/ui/TiltCard';
import { Project } from '@/lib/projects';

interface ProjectMarqueeProps {
  projects: Project[];
  speed?: number;
}

export default function ProjectMarquee({ projects, speed = 80 }: ProjectMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-[-20%] right-[-20%] bg-gradient-to-r from-primary-blue/15 via-primary-cyan/10 to-primary-blue/15 blur-3xl opacity-70" />
      <div className="relative rounded-3xl border border-border-subtle/80 bg-surface/80 backdrop-blur-md shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
        <div
          className="flex gap-6 px-6 py-5"
          style={{
            width: "max-content",
            animation: `marquee ${speed}s linear infinite`,
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedProjects.map((p, index) => (
            <Link
              key={`${p.slug}-${index}`}
              href={p.githubUrl || `/projects/${p.slug}`}
              className="group block flex-shrink-0 w-80 md:w-[22rem]"
              target={p.githubUrl ? "_blank" : "_self"}
              rel={p.githubUrl ? "noopener noreferrer" : ""}
            >
              <TiltCard className="relative flex h-full flex-col rounded-3xl border border-border-subtle/80 bg-gradient-to-br from-primary-blue/5 via-surface to-primary-cyan/5 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.24)] transition-all duration-300 hover:border-primary-blue/70 hover:shadow-[0_30px_90px_rgba(37,99,235,0.55)]">
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary-blue/60 via-primary-cyan/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="relative flex flex-col gap-4">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary-blue/25 via-primary-cyan/15 to-primary-blue/10">
                    <div className="absolute -top-10 -left-6 h-28 w-28 rounded-full bg-primary-blue/50 blur-3xl opacity-80 group-hover:translate-x-3 group-hover:-translate-y-1 transition-transform duration-700" />
                    <div className="absolute -bottom-14 right-0 h-32 w-32 rounded-full bg-primary-cyan/50 blur-3xl opacity-80 group-hover:-translate-x-3 group-hover:translate-y-1 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_60%)] opacity-90" />
                    <div className="absolute inset-y-0 left-[-40%] w-1/2 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0,rgba(255,255,255,0.6)_45%,rgba(255,255,255,0)_100%)] translate-x-[-120%] group-hover:translate-x-[160%] transition-transform duration-[1400ms] ease-out" />
                    <div className="relative flex h-full items-center justify-center">
                      {p.githubUrl ? (
                        <div className="flex flex-col items-center gap-2 text-white">
                          <svg className="w-9 h-9 drop-shadow-[0_0_20px_rgba(15,23,42,0.45)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234C5.66 21.8 4.967 19.66 4.967 19.66c-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.468-2.381 1.236-3.222-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.002 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.841 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.48 5.93.43.372.824 1.102.824 2.222v3.293c0 .318.192.692.8.576C20.565 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0Z" />
                          </svg>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                            GitHub Project
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-semibold tracking-wide text-white drop-shadow-[0_0_16px_rgba(15,23,42,0.6)]">
                          项目预览
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-text-main group-hover:text-primary-blue transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {p.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.topics && p.topics.length > 0
                        ? p.topics.slice(0, 3).map((topic: string) => (
                            <span
                              key={topic}
                              className="rounded-full bg-gradient-to-r from-primary-blue/15 to-primary-cyan/20 px-3 py-1 text-xs font-medium text-primary-blue shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.55)]"
                            >
                              {topic}
                            </span>
                          ))
                        : p.role.map((r: string) => (
                            <span
                              key={r}
                              className="rounded-full bg-gradient-to-r from-primary-blue/10 to-primary-cyan/15 px-3 py-1 text-xs font-medium text-text-soft shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]"
                            >
                              {r}
                            </span>
                          ))}
                    </div>

                    {p.githubUrl && (
                      <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-text-soft">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan shadow-[0_0_10px_rgba(37,99,235,0.9)]" />
                          <span className="font-semibold text-text-main/80">查看源码</span>
                        </div>
                        {p.metrics.map((m) => (
                          <div key={m.label} className="flex items-center gap-1">
                            <span className="font-semibold text-text-main">{m.value}</span>
                            <span className="text-text-soft">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}