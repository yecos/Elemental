"use client";

import { motion } from "framer-motion";
import { Utensils, Building, Briefcase, ArrowUpRight, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/language-store";
import { dictionary } from "@/lib/i18n";
import { useState } from "react";

const ICONS: Record<string, LucideIcon> = {
  Utensils,
  Building,
  Briefcase,
};

type CaseData = (typeof dictionary)["es"]["portfolio"]["cases"][number];
type DialogLabels = (typeof dictionary)["es"]["portfolio"]["dialog"];

export function Portfolio() {
  const t = useT();
  const p = t.portfolio;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
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
            {p.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {p.title}
          </h2>
          <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
            {p.subtitle}
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {p.cases.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Briefcase;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] transition-all duration-300 hover:border-[#c8d400]/50 hover:bg-[#262626]"
                onClick={() => setOpenIndex(i)}
              >
                {/* Header strip */}
                <div className="relative flex items-center justify-between border-b border-[#333333] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#0d0d0d] text-[#c8d400]">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#8a8a8a]">
                      {c.category}
                    </span>
                  </div>
                  <ArrowUpRight className="size-4 text-[#8a8a8a] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c8d400]" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {c.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-[#333333] bg-[#0d0d0d] text-[10px] font-medium text-[#f2f2f2]/70"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-[#333333] bg-[#0d0d0d] p-3 text-center"
                      >
                        <div className="font-display text-lg font-bold text-[#c8d400]">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] leading-tight text-[#8a8a8a]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-5 text-left text-sm font-medium text-[#c8d400] hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndex(i);
                    }}
                  >
                    {p.viewCase} →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case detail dialog */}
      <Dialog
        open={openIndex !== null}
        onOpenChange={(o) => !o && setOpenIndex(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-[#333333] bg-[#0d0d0d] p-0 scrollbar-elemental sm:max-w-2xl">
          {openIndex !== null && (
            <CaseDetail caseData={p.cases[openIndex]} labels={p.dialog} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function CaseDetail({
  caseData,
  labels,
}: {
  caseData: CaseData;
  labels: DialogLabels;
}) {
  const Icon = ICONS[caseData.icon] ?? Briefcase;
  const sections = [
    { label: labels.contexto, value: caseData.contexto },
    { label: labels.problema, value: caseData.problema },
    { label: labels.solucion, value: caseData.solucion },
    { label: labels.proceso, value: caseData.proceso },
    { label: labels.resultado, value: caseData.resultado },
  ];

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-[#333333] bg-[#0d0d0d]/95 px-6 py-5 backdrop-blur">
        <DialogHeader className="gap-2">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#c8d400]/10 text-[#c8d400]">
              <Icon className="size-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#8a8a8a]">
              {caseData.category}
            </span>
          </div>
          <DialogTitle className="font-display text-xl font-bold text-white">
            {caseData.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {caseData.contexto}
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="px-6 py-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {caseData.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-[#c8d400]/30 bg-[#c8d400]/5 text-[10px] font-medium text-[#c8d400]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-6">
          <h4 className="font-mono-elemental text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">
            {labels.metricsTitle}
          </h4>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {caseData.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-[#333333] bg-[#1a1a1a] p-4 text-center"
              >
                <div className="font-display text-xl font-bold text-[#c8d400]">
                  {m.value}
                </div>
                <div className="mt-1 text-[10px] leading-tight text-[#8a8a8a]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-5">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#c8d400]">
                {s.label}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#f2f2f2]/80">
                {s.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
