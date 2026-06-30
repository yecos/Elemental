"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/language-store";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const t = useT();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial-faded opacity-60" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[#c8d400]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-[#c8d400]/5 blur-[120px]" />

        {/* Floating particles */}
        {[
          { top: "18%", left: "8%", size: 4, delay: 0 },
          { top: "28%", left: "92%", size: 3, delay: 1.2 },
          { top: "62%", left: "6%", size: 3, delay: 2.1 },
          { top: "72%", left: "88%", size: 5, delay: 0.6 },
          { top: "44%", left: "48%", size: 2, delay: 1.8 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#c8d400]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#1a1a1a]/60 px-3 py-1.5 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c8d400] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#c8d400]" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/80">
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#f2f2f2]/80 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              onClick={() => scrollTo("diagnostic")}
              size="lg"
              className="h-12 bg-[#c8d400] px-6 text-base font-semibold text-[#0d0d0d] hover:bg-[#b5c200] glow-lima-soft"
            >
              {t.hero.primaryCta}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              onClick={() => scrollTo("portfolio")}
              size="lg"
              variant="outline"
              className="h-12 border-[#333333] bg-transparent px-6 text-base font-semibold text-white hover:border-[#c8d400] hover:bg-transparent hover:text-[#c8d400]"
            >
              {t.hero.secondaryCta}
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#333333] bg-[#333333] sm:grid-cols-4"
          >
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0d0d0d] px-4 py-5 text-center sm:text-left"
              >
                <dt className="font-display text-2xl font-bold text-[#c8d400] sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[#8a8a8a] sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#c8d400]/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-[#333333] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#c8d400]" />
                  <span className="size-2.5 rounded-full bg-[#333333]" />
                  <span className="size-2.5 rounded-full bg-[#333333]" />
                </div>
                <span className="text-xs font-medium text-[#8a8a8a]">
                  {t.hero.dashboardTitle}
                </span>
                <Sparkles className="size-4 text-[#c8d400]" />
              </div>

              {/* Body */}
              <div className="space-y-4 p-5">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {t.hero.dashboardMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-[#333333] bg-[#0d0d0d] p-3"
                    >
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#8a8a8a]">
                        {i === 0 && <TrendingUp className="size-3 text-[#c8d400]" />}
                        {i === 1 && <Activity className="size-3 text-[#c8d400]" />}
                        {i === 2 && <Zap className="size-3 text-[#c8d400]" />}
                        <span className="truncate">{m.label}</span>
                      </div>
                      <div className="mt-2 font-mono-elemental text-lg font-semibold text-white">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="rounded-lg border border-[#333333] bg-[#0d0d0d] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-[#8a8a8a]">
                      {t.ai.solutions[5]}
                    </span>
                    <span className="text-xs font-medium text-[#c8d400]">
                      +24%
                    </span>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[40, 55, 48, 70, 62, 85, 75, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-[#c8d400]/30 to-[#c8d400]"
                      />
                    ))}
                  </div>
                </div>

                {/* Status row */}
                <div className="flex items-center justify-between rounded-lg border border-[#333333] bg-[#0d0d0d] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c8d400] opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-[#c8d400]" />
                    </span>
                    <span className="text-xs text-white/80">
                      {t.ai.solutions[0]}
                    </span>
                  </div>
                  <span className="font-mono-elemental text-xs text-[#c8d400]">
                    24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
