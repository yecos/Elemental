"use client";

import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-store";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const language = useLanguage((s) => s.language);
  const setLanguage = useLanguage((s) => s.setLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-1.5 px-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5",
            className
          )}
          aria-label="Toggle language"
        >
          <Globe className="size-4" />
          <span className="font-mono-elemental uppercase tracking-wide">
            {language}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[8rem] border-[#333333] bg-[#1a1a1a] text-white"
      >
        {(["es", "en"] as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className="gap-2 text-sm focus:bg-[#262626] focus:text-white"
          >
            <Check
              className={cn(
                "size-4",
                language === lang ? "opacity-100 text-[#c8d400]" : "opacity-0"
              )}
            />
            <span className="uppercase font-mono-elemental tracking-wide">
              {lang}
            </span>
            <span className="ml-auto text-xs text-[#8a8a8a]">
              {lang === "es" ? "Español" : "English"}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
