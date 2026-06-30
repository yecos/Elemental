"use client";

import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useT } from "@/lib/language-store";

const WHATSAPP_NUMBER = "573014069793"; // +57 301 4069793

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  const t = useT();
  const f = t.footer;

  const navLinks = [
    { id: "services", label: t.nav.services },
    { id: "ai", label: t.nav.ai },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "blog", label: t.nav.blog },
    { id: "contact", label: t.nav.contact },
  ];

  const socials = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
  ];

  return (
    <footer className="mt-auto border-t border-[#333333] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2"
              aria-label="ELEMENTAL — Inicio"
            >
              <img
                src="/logo.svg"
                alt="ELEMENTAL"
                className="h-11 w-auto"
              />
            </button>
            <p className="mt-4 max-w-sm font-display text-lg font-medium text-[#c8d400]">
              {f.slogan}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f2f2f2]/60">
              {f.description}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-lg border border-[#333333] bg-[#1a1a1a] text-[#f2f2f2]/70 transition-all hover:border-[#c8d400] hover:text-[#c8d400]"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-mono-elemental text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">
              {f.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-[#f2f2f2]/70 transition-colors hover:text-[#c8d400]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-elemental text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">
              {f.services}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {f.servicesList.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-left text-sm text-[#f2f2f2]/70 transition-colors hover:text-[#c8d400]"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#333333] pt-6 sm:flex-row">
          <p className="text-center text-xs text-[#8a8a8a] sm:text-left">
            {f.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8a8a8a]">{f.lang}</span>
            <span className="size-1 rounded-full bg-[#8a8a8a]" />
            <span className="font-mono-elemental text-xs uppercase tracking-wider text-[#c8d400]">
              ELEMENTAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
