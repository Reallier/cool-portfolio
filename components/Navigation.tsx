export default function Navigation() {
  const navItems = [
    { href: "#projects", label: "项目作品" },
    { href: "#skills", label: "技能专长" },
    { href: "#experience", label: "工作经历" },
    { href: "#achievements", label: "个人成就" },
    { href: "#services", label: "技术服务" },
    { href: "#blog", label: "最新文章" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="w-[80%] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="text-xl font-bold text-black hover:text-gray-600 transition-colors">
            Reallier Wei
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-black" aria-label="菜单">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}