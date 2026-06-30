"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLanguage, useT } from "@/lib/language-store";
import { LanguageToggle } from "./language-toggle";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_IDS = ["home", "services", "ai", "portfolio", "blog", "contact"] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const language = useLanguage((s) => s.language);
  const t = useT();

  const nav = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "ai", label: t.nav.ai },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "blog", label: t.nav.blog },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-xs border-l border-[#333333] bg-[#0d0d0d] p-6"
      >
        <SheetHeader className="px-0 pt-2">
          <SheetTitle className="text-left">
            <img
              src="/logo.svg"
              alt="ELEMENTAL"
              className="h-10 w-auto"
            />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={cn(
                "flex items-center justify-between rounded-lg px-4 py-3 text-left font-display text-base font-medium text-white/80 transition-colors",
                "hover:bg-[#1a1a1a] hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 pt-8">
          <div className="flex items-center justify-between rounded-lg border border-[#333333] px-4 py-3">
            <span className="text-sm text-[#8a8a8a]">
              {t.common.languageLabel}
            </span>
            <LanguageToggle />
          </div>
          <Button
            onClick={() => handleNav("contact")}
            className="h-12 w-full bg-[#c8d400] text-base font-semibold text-[#0d0d0d] hover:bg-[#b5c200]"
          >
            {t.nav.cta}
          </Button>
          <p className="text-center text-xs text-[#8a8a8a]">
            {language === "es" ? "© 2026 ELEMENTAL" : "© 2026 ELEMENTAL"}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { NAV_IDS };
