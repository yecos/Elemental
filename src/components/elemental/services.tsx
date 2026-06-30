"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Megaphone,
  Code,
  Bot,
  Lightbulb,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/language-store";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Palette,
  Megaphone,
  Code,
  Bot,
  Lightbulb,
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Services() {
  const t = useT();
  const s = t.services;

  return (
    <section
      id="services"
      className="relative scroll-mt-20 border-t border-[#1a1a1a] bg-[#0d0d0d] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono-elemental text-xs font-medium uppercase tracking-[0.2em] text-[#c8d400]">
            {s.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {s.title}
          </h2>
          <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
            {s.subtitle}
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {s.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Lightbulb;
            const highlight = "highlight" in item && item.highlight;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={cn(
                  "group relative flex flex-col rounded-2xl border bg-[#1a1a1a] p-6 transition-all duration-300",
                  highlight
                    ? "card-lima-border glow-lima-soft"
                    : "border-[#333333] hover:border-[#c8d400]/40 hover:bg-[#262626]"
                )}
              >
                <div
                  className={cn(
                    "flex size-11 items-center justify-center rounded-xl border transition-colors",
                    highlight
                      ? "border-[#c8d400]/50 bg-[#c8d400]/10 text-[#c8d400]"
                      : "border-[#333333] bg-[#0d0d0d] text-[#c8d400] group-hover:border-[#c8d400]/40"
                  )}
                >
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f2f2f2]/70">
                  {item.description}
                </p>

                {highlight && (
                  <span className="mt-4 inline-flex items-center gap-1 self-start rounded-full bg-[#c8d400] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0d0d0d]">
                    ★ {t.ai.kicker}
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="text-center">
            <span className="font-mono-elemental text-xs font-medium uppercase tracking-[0.2em] text-[#c8d400]">
              {s.packagesTitle}
            </span>
            <p className="mt-3 text-base text-[#f2f2f2]/70 sm:text-lg">
              {s.packagesSubtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {s.packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 sm:p-8",
                  pkg.popular
                    ? "card-lima-border bg-[#1a1a1a] glow-lima-soft"
                    : "border-[#333333] bg-[#1a1a1a]"
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c8d400] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0d0d0d]">
                    {s.popularBadge}
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-white">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-[#f2f2f2]/60">
                  {pkg.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#8a8a8a]">{pkg.unit}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[#f2f2f2]/80"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#c8d400]/15">
                        <Check className="size-3 text-[#c8d400]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollTo("contact")}
                  className={cn(
                    "mt-8 h-11 w-full",
                    pkg.popular
                      ? "bg-[#c8d400] text-[#0d0d0d] hover:bg-[#b5c200]"
                      : "border border-[#333333] bg-transparent text-white hover:border-[#c8d400] hover:text-[#c8d400]"
                  )}
                >
                  {s.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
