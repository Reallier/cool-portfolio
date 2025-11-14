"use client";

import TiltCard from "@/components/ui/TiltCard";

interface ProjCardProps {
  title: string;
  desc: string;
  stack: string[];
  highlight?: string;
}

export default function ProjCard({ title, desc, stack, highlight }: ProjCardProps) {
  return (
    <TiltCard className="group relative overflow-hidden rounded-3xl border border-border-subtle/80 bg-gradient-to-br from-primary-blue/5 via-surface to-primary-cyan/5 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.22)] transition-all duration-300 hover:border-primary-blue/70 hover:shadow-[0_26px_80px_rgba(37,99,235,0.55)]">
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary-blue/50 via-primary-cyan/30 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative flex flex-col gap-4">
        <div className="relative h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-blue/25 via-primary-cyan/20 to-primary-blue/10">
          <div className="absolute -top-10 -left-6 h-24 w-24 rounded-full bg-primary-blue/60 blur-3xl opacity-90 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-700" />
          <div className="absolute -bottom-12 right-0 h-28 w-28 rounded-full bg-primary-cyan/60 blur-3xl opacity-90 group-hover:-translate-x-2 group-hover:translate-y-1 transition-transform duration-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_60%)] opacity-90" />
          <div className="absolute inset-y-0 left-[-40%] w-1/2 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0,rgba(255,255,255,0.7)_45%,rgba(255,255,255,0)_100%)] translate-x-[-120%] group-hover:translate-x-[160%] transition-transform duration-[1400ms] ease-out" />
          <div className="relative flex h-full items-center justify-between px-4">
            <div className="space-y-1">
              <span className="inline-flex items-center rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                Featured
              </span>
              {highlight && (
                <p className="max-w-[75%] text-xs text-white/90 leading-snug drop-shadow-[0_0_12px_rgba(15,23,42,0.6)]">
                  {highlight}
                </p>
              )}
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.7)]">
              <span className="text-[10px] font-semibold text-white tracking-wide">Proj</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-semibold text-text-main group-hover:text-primary-blue transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed line-clamp-3">{desc}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-gradient-to-r from-primary-blue/12 to-primary-cyan/15 px-2.5 py-1 text-[11px] font-medium text-text-soft shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
