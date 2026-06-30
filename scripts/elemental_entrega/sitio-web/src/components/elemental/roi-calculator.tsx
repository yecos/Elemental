"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Timer, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/language-store";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(
          v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        );
      },
    });
    return () => controls.stop();
  }, [value, motionValue, decimals]);

  return (
    <span className="font-mono-elemental tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function RoiCalculator() {
  const t = useT();
  const r = t.roi;

  const [hours, setHours] = useState(10);
  const [cost, setCost] = useState(15);
  const [processes, setProcesses] = useState(3);

  // Calculation logic
  // - Assume automation recovers 70% of repetitive hours
  // - Monthly hours saved = (hours/week * 4.33) * 0.7 * (processes/3 scaling factor)
  // - Monthly savings = hoursSaved * cost
  // - Annual ROI = monthly savings * 12
  const { hoursSaved, monthlySavings, annualRoi } = useMemo(() => {
    const weeklyHours = hours;
    const monthlyHours = weeklyHours * 4.33;
    const processScale = 0.6 + (processes / 10) * 0.8; // 0.6 -> 1.4
    const automationRate = 0.7;
    const hs = Math.round(monthlyHours * automationRate * processScale);
    const ms = Math.round(hs * cost);
    const ar = ms * 12;
    return { hoursSaved: hs, monthlySavings: ms, annualRoi: ar };
  }, [hours, cost, processes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mt-20"
    >
      <div className="overflow-hidden rounded-2xl border border-[#333333] bg-[#0d0d0d]">
        <div className="grid lg:grid-cols-2">
          {/* Left: inputs */}
          <div className="border-b border-[#333333] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <span className="font-mono-elemental text-xs font-medium uppercase tracking-[0.2em] text-[#c8d400]">
              {r.kicker}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {r.title}
            </h3>
            <p className="mt-2 text-sm text-[#f2f2f2]/70">{r.subtitle}</p>

            <div className="mt-8 space-y-7">
              {/* Hours slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white/80">
                    {r.inputs.hours}
                  </label>
                  <span className="font-mono-elemental rounded-md bg-[#1a1a1a] px-2.5 py-1 text-sm font-semibold text-[#c8d400]">
                    {hours}h
                  </span>
                </div>
                <Slider
                  value={[hours]}
                  onValueChange={(v) => setHours(v[0])}
                  min={1}
                  max={40}
                  step={1}
                  className="mt-3"
                />
                <div className="mt-1.5 flex justify-between text-[10px] text-[#8a8a8a]">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Cost input */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white/80">
                    {r.inputs.cost}
                  </label>
                  <span className="font-mono-elemental rounded-md bg-[#1a1a1a] px-2.5 py-1 text-sm font-semibold text-[#c8d400]">
                    ${cost}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[#8a8a8a]">$</span>
                  <Input
                    type="number"
                    min={1}
                    max={200}
                    value={cost}
                    onChange={(e) =>
                      setCost(
                        Math.max(
                          1,
                          Math.min(200, Number(e.target.value) || 0)
                        )
                      )
                    }
                    className="border-[#333333] bg-[#1a1a1a] font-mono-elemental text-white focus-visible:border-[#c8d400]"
                  />
                </div>
              </div>

              {/* Processes slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white/80">
                    {r.inputs.processes}
                  </label>
                  <span className="font-mono-elemental rounded-md bg-[#1a1a1a] px-2.5 py-1 text-sm font-semibold text-[#c8d400]">
                    {processes}
                  </span>
                </div>
                <Slider
                  value={[processes]}
                  onValueChange={(v) => setProcesses(v[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="mt-3"
                />
                <div className="mt-1.5 flex justify-between text-[10px] text-[#8a8a8a]">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: outputs */}
          <div className="relative bg-[#1a1a1a] p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-grid-lima opacity-30" />
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#333333] bg-[#0d0d0d] p-5">
                  <div className="flex items-center gap-2 text-xs text-[#8a8a8a]">
                    <Clock className="size-3.5 text-[#c8d400]" />
                    {r.outputs.hoursSaved}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-white">
                    <AnimatedNumber value={hoursSaved} suffix="h" />
                  </div>
                </div>

                <div className="rounded-xl border border-[#333333] bg-[#0d0d0d] p-5">
                  <div className="flex items-center gap-2 text-xs text-[#8a8a8a]">
                    <DollarSign className="size-3.5 text-[#c8d400]" />
                    {r.outputs.monthlySavings}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-[#c8d400]">
                    <AnimatedNumber value={monthlySavings} prefix="$" />
                  </div>
                </div>

                <div className="rounded-xl border border-[#c8d400]/40 bg-[#c8d400]/5 p-5 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs text-[#8a8a8a]">
                    <TrendingUp className="size-3.5 text-[#c8d400]" />
                    {r.outputs.annualRoi}
                  </div>
                  <div className="mt-2 font-display text-4xl font-bold text-[#c8d400] text-glow-lima sm:text-5xl">
                    <AnimatedNumber value={annualRoi} prefix="$" />
                  </div>
                </div>

                <div className="rounded-xl border border-[#333333] bg-[#0d0d0d] p-5 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs text-[#8a8a8a]">
                    <Timer className="size-3.5 text-[#c8d400]" />
                    {r.outputs.implementation}
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-white">
                    {r.implementationValue}
                  </div>
                </div>
              </div>

              <Button
                onClick={() => scrollTo("contact")}
                className="mt-6 h-12 w-full bg-[#c8d400] text-base font-semibold text-[#0d0d0d] hover:bg-[#b5c200] glow-lima-soft"
              >
                {r.cta}
                <ArrowRight className="size-4" />
              </Button>

              <p className="mt-4 text-center text-xs text-[#8a8a8a]">
                {r.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
