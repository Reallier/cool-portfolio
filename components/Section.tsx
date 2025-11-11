export default function Section({ id, title, children, fullWidth = false }: { id?: string; title: string; children: React.ReactNode; fullWidth?: boolean }) {
  return (
    <section id={id} className={fullWidth ? "w-full px-6 py-20" : "mx-auto w-[80%] max-w-none px-6 py-20"}>
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
