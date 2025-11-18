"use client";

import { useEffect, useState, type MouseEvent } from "react";
import clsx from "clsx";

const SECTIONS = [
  { href: "#projects", id: "projects", label: "项目作品" },
  { href: "#skills", id: "skills", label: "技能专长" },
  { href: "#experience", id: "experience", label: "工作经历" },
  { href: "#achievements", id: "achievements", label: "个人成就" },
  { href: "#services", id: "services", label: "技术服务" },
  { href: "#blog", id: "blog", label: "最新文章" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 顶部滚动收缩效果
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 根据当前滚动位置高亮导航项
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    const ids = ["top", ...SECTIONS.map((s) => s.id)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || "top";
            setActiveId(id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, id?: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window === "undefined") return;

    const targetId = (id ?? href.replace("#", "")) || "top";
    const el = document.getElementById(targetId);

    if (!el) {
      window.location.hash = href;
      return;
    }

    const navHeight = 32;
    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    // 关闭移动菜单
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav
          className={clsx(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
            "backdrop-blur-md",
            isScrolled
              ? "border-border-strong bg-surface/95 shadow-[0_16px_40px_rgba(15,23,42,0.16)]"
              : "border-border-subtle/70 bg-surface/70"
          )}
        >
          <div className="w-[90%] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 sm:gap-6 py-4 transition-all duration-300">
            {/* 左侧导航链接 */}
            <div className="flex items-center gap-4 sm:gap-8">
              <a
                href="#top"
                onClick={handleNavClick("#top", "top")}
                className="group relative inline-flex items-center text-xl sm:text-2xl font-semibold tracking-tight text-text-main transition-colors hover:text-primary-blue"
              >
                <span className="relative z-10">Reallier Wei</span>
                <span className="pointer-events-none absolute inset-x-[-10px] inset-y-[-6px] rounded-full bg-gradient-to-r from-primary-blue/15 via-primary-cyan/10 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <div className="hidden md:flex items-center gap-2 text-lg font-medium text-text-soft">
                {SECTIONS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item.href, item.id)}
                    className={clsx(
                      "group relative inline-flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200",
                      activeId === item.id
                        ? "text-primary-blue bg-primary-blue/10 shadow-sm shadow-primary-blue/20"
                        : "hover:text-primary-blue hover:bg-primary-blue/5"
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      className={clsx(
                        "pointer-events-none absolute -bottom-0.5 left-3 h-[2px] rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan transition-all duration-200",
                        activeId === item.id
                          ? "w-[calc(100%-1.5rem)] opacity-100"
                          : "w-0 opacity-0 group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-100"
                      )}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* 右侧社交链接 */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://github.com/Reallier"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-text-soft hover:text-primary-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234C5.66 21.8 4.967 19.66 4.967 19.66c-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.468-2.381 1.236-3.222-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.002 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.841 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.48 5.93.43.372.824 1.102.824 2.222v3.293c0 .318.192.692.8.576C20.565 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0Z" />
                </svg>
                <span className="text-lg font-medium hidden lg:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/reallier"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-text-soft hover:text-primary-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-lg font-medium hidden lg:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:icey123580@gmail.com"
                className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-text-soft hover:text-primary-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-medium hidden lg:inline">Email</span>
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle/80 bg-surface/90 text-text-soft shadow-sm transition-all duration-200 hover:border-border-strong hover:bg-page-section/90 hover:text-primary-blue"
                aria-label="菜单"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* 移动菜单 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-12 left-0 right-0 w-full bg-surface border-b border-border-subtle shadow-lg">
            <div className="w-full px-4 py-6 space-y-4">
              <div className="space-y-2">
                {SECTIONS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item.href, item.id)}
                    className={clsx(
                      "block px-4 py-3 rounded-lg text-2xl font-medium transition-colors",
                      activeId === item.id
                        ? "text-primary-blue bg-primary-blue/10"
                        : "text-text-main hover:text-primary-blue hover:bg-primary-blue/5"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="border-t border-border-subtle pt-4 space-y-3">
                <a
                  href="https://github.com/Reallier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main hover:text-primary-blue hover:bg-primary-blue/5 transition-colors"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234C5.66 21.8 4.967 19.66 4.967 19.66c-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.468-2.381 1.236-3.222-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.002 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.841 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.48 5.93.43.372.824 1.102.824 2.222v3.293c0 .318.192.692.8.576C20.565 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0Z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/reallier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main hover:text-primary-blue hover:bg-primary-blue/5 transition-colors"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:icey123580@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main hover:text-primary-blue hover:bg-primary-blue/5 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}