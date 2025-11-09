export default function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
