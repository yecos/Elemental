"use client";

import { motion } from "framer-motion";
import { Search, Workflow, Plug, Brain, BarChart, ArrowRight } from "lucide-react";
import { useT } from "@/lib/language-store";
import { RoiCalculator } from "./roi-calculator";

const PROCESS_ICONS = [Search, Workflow, Plug, Brain, BarChart];

export function AiAutomation() {
  const t = useT();
  const a = t.ai;

  return (
    <section
      id="ai"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1a1a1a] bg-[#1a1a1a] py-24 sm:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-lima opacity-50 mask-radial-faded" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#c8d400]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[240px] w-[360px] rounded-full bg-[#c8d400]/5 blur-[100px]" />
      </div>

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
            {a.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {a.title}
          </h2>
          <p className="mt-4 font-display text-xl font-medium text-[#c8d400]">
            {a.subtitle}
          </p>
          <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
            {a.description}
          </p>
        </motion.div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <h3 className="font-display text-lg font-semibold text-white">
            {a.processTitle}
          </h3>

          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {a.process.map((step, i) => {
              const Icon = PROCESS_ICONS[i];
              const isLast = i === a.process.length - 1;
              return (
                <div key={step.step} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group h-full rounded-xl border border-[#333333] bg-[#0d0d0d] p-5 transition-colors hover:border-[#c8d400]/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-[#c8d400]/10 text-[#c8d400] transition-colors group-hover:bg-[#c8d400] group-hover:text-[#0d0d0d]">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono-elemental text-xs font-semibold text-[#8a8a8a]">
                        {step.step}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-base font-semibold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#f2f2f2]/60">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow connector (desktop) */}
                  {!isLast && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="size-4 text-[#c8d400]/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-display text-lg font-semibold text-white">
            {a.solutionsTitle}
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {a.solutions.map((sol, i) => (
              <motion.div
                key={sol}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex items-start gap-3 rounded-lg border border-[#333333] bg-[#0d0d0d] p-4 transition-all hover:border-[#c8d400]/50 hover:bg-[#262626]"
              >
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-md bg-[#c8d400]/10 font-mono-elemental text-xs font-semibold text-[#c8d400] transition-colors group-hover:bg-[#c8d400] group-hover:text-[#0d0d0d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-[#f2f2f2]/80">
                  {sol}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <RoiCalculator />
      </div>
    </section>
  );
}
