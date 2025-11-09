import { notFound } from "next/navigation";
import Image from "next/image";
import { getProject } from "@/lib/projects";
import Section from "@/components/Section";

export default function ProjPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();
  return (
    <main>
      <Section title={p.title}>
        {p.cover && (
          <div className="mb-8 overflow-hidden rounded-xl border border-zinc-800">
            <Image src={p.cover} alt={`${p.title} 封面`} width={1200} height={630} priority />
          </div>
        )}
        <p className="text-zinc-300">{p.summary}</p>

        <h3 className="mt-10 text-lg font-semibold">角色</h3>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-400">
          {p.role.map(r => <li key={r} className="rounded-full border border-zinc-700 px-2 py-0.5">{r}</li>)}
        </ul>

        <h3 className="mt-10 text-lg font-semibold">难点</h3>
        <ul className="mt-2 list-disc pl-6 text-zinc-300">
          {p.challenges.map(c => <li key={c}>{c}</li>)}
        </ul>

        <h3 className="mt-10 text-lg font-semibold">指标</h3>
        <dl className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
          {p.metrics.map(m => (
            <div key={m.label} className="rounded-xl border border-zinc-800 p-4">
              <dt className="text-zinc-400 text-sm">{m.label}</dt>
              <dd className="text-xl font-semibold">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
}
