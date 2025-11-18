

export default function Section({
  id,
  title,
  children,
  fullWidth = false,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative ${fullWidth
          ? "w-full px-4 sm:px-6 md:px-8 py-0"
          : "mx-auto w-[90%] sm:w-[85%] md:w-[80%] max-w-7xl px-4 sm:px-6 md:px-8 py-0"
      } transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10`}
    >
      <div className="transition-all duration-500 ease-out hover:scale-[1.02]">
        {children}
      </div>
    </section>
  );
}
