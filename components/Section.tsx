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
      className={`${
        fullWidth ? "w-full px-6 py-20" : "mx-auto w-[80%] max-w-none px-6 py-20"
      } transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10`}
    >
      <h2 className="mb-10 flex items-center gap-3 text-2xl md:text-3xl font-semibold text-text-main transition-all duration-300 hover:translate-x-2">
        <span className="inline-block h-[2px] w-10 rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan transition-all duration-300 hover:w-16" />
        <span>{title}</span>
      </h2>
      <div className="transition-all duration-500 ease-out hover:scale-[1.02]">
        {children}
      </div>
    </section>
  );
}
