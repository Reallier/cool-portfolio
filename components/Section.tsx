export default function Section({
  id,
  title,
  children,
  fullWidth = false,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <section
      id={id}
      className={fullWidth ? "w-full px-6 py-20" : "mx-auto w-[80%] max-w-none px-6 py-20"}
    >
      <h2 className="mb-10 flex items-center gap-3 text-2xl md:text-3xl font-semibold text-text-main">
        <span className="inline-block h-[2px] w-10 rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan" />
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}
