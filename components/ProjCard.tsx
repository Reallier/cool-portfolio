"use client";
import TiltCard from "@/components/ui/TiltCard";

export default function ProjCard({ title, desc, stack }: { title: string; desc: string; stack: string[] }) {
  return (
    <TiltCard className="group rounded-2xl border border-zinc-800 p-5 transition hover:border-zinc-600">
      <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 group-hover:from-violet-500/30 group-hover:to-cyan-500/30" />
      <div className="mt-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
          {stack.map(s => (<span key={s} className="rounded-full border border-zinc-700 px-2 py-0.5">{s}</span>))}
        </div>
      </div>
    </TiltCard>
  );
}
