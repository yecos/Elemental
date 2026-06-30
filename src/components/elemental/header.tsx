"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { MobileMenu } from "./mobile-menu";
import { useT } from "@/lib/language-store";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "home", key: "home" as const },
  { id: "services", key: "services" as const },
  { id: "ai", key: "ai" as const },
  { id: "portfolio", key: "portfolio" as const },
  { id: "blog", key: "blog" as const },
  { id: "contact", key: "contact" as const },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#333333] bg-[#0d0d0d]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2"
          aria-label="ELEMENTAL — Inicio"
        >
          <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            ELEMENTAL
          </span>
          <span className="size-1.5 rounded-full bg-[#c8d400] transition-transform group-hover:scale-125" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const label = t.nav[item.key];
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-[#c8d400]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:flex" />
          <Button
            onClick={() => handleNav("contact")}
            className="hidden h-9 bg-[#c8d400] px-4 text-sm font-semibold text-[#0d0d0d] hover:bg-[#b5c200] sm:inline-flex"
          >
            {t.nav.cta}
          </Button>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
