"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Store,
  ShoppingBag,
  Home,
  Briefcase,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/lib/language-store";
import { dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type DiagnosticText = (typeof dictionary)["es"]["diagnostic"];

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  Restaurante: Store,
  Retail: ShoppingBag,
  Inmobiliaria: Home,
  Servicios: Briefcase,
  Otro: MoreHorizontal,
  Restaurant: Store,
  "Real Estate": Home,
  Services: Briefcase,
  Other: MoreHorizontal,
};

const STORAGE_KEY = "elemental-diagnostic-submissions";

function buildSchema(t: DiagnosticText) {
  return z.object({
    industry: z.string().min(1, t.validation.industryRequired),
    frictions: z.array(z.string()).min(1, t.validation.frictionRequired),
    hours: z.number().min(1).max(40),
    name: z.string().min(1, t.validation.nameRequired),
    company: z.string().optional(),
    whatsapp: z.string().min(1, t.validation.whatsappRequired),
    email: z.string().min(1, t.validation.emailRequired).email(t.validation.emailInvalid),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

export function DiagnosticForm() {
  const t = useT();
  const d = t.diagnostic;
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);

  const schema = buildSchema(d);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      industry: "",
      frictions: [],
      hours: 10,
      name: "",
      company: "",
      whatsapp: "",
      email: "",
    },
    mode: "onChange",
  });

  const industry = watch("industry");
  const frictions = watch("frictions");
  const hours = watch("hours");

  const totalSteps = d.steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const next = async () => {
    let valid = true;
    if (step === 0) valid = await trigger("industry");
    if (step === 1) valid = await trigger("frictions");
    if (step === 2) valid = await trigger("hours");
    if (!valid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const toggleFriction = (value: string) => {
    const current = frictions || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("frictions", next, { shouldValidate: true });
  };

  const onSubmit = (data: FormValues) => {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }
    toast({
      title: d.success.title,
      description: d.success.description,
    });
    setSuccessOpen(true);
    reset();
    setStep(0);
  };

  return (
    <section
      id="diagnostic"
      className="relative scroll-mt-20 border-t border-[#1a1a1a] bg-[#0d0d0d] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-mono-elemental text-xs font-medium uppercase tracking-[0.2em] text-[#c8d400]">
            {d.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {d.title}
          </h2>
          <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
            {d.subtitle}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a]"
        >
          {/* Progress */}
          <div className="border-b border-[#333333] px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {d.steps.map((label, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex size-7 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                        i < step
                          ? "border-[#c8d400] bg-[#c8d400] text-[#0d0d0d]"
                          : i === step
                            ? "border-[#c8d400] bg-transparent text-[#c8d400]"
                            : "border-[#333333] bg-transparent text-[#8a8a8a]"
                      )}
                    >
                      {i < step ? <Check className="size-3.5" /> : i + 1}
                    </div>
                    <span
                      className={cn(
                        "hidden text-xs font-medium sm:inline",
                        i === step ? "text-white" : "text-[#8a8a8a]"
                      )}
                    >
                      {label}
                    </span>
                    {i < d.steps.length - 1 && (
                      <div className="mx-1 h-px w-4 bg-[#333333] sm:w-6" />
                    )}
                  </div>
                ))}
              </div>
              <span className="font-mono-elemental text-xs text-[#8a8a8a]">
                {step + 1}/{totalSteps}
              </span>
            </div>
            <Progress
              value={progress}
              className="mt-4 h-1 bg-[#333333] [&>div]:bg-[#c8d400]"
            />
          </div>

          {/* Steps */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {/* STEP 0 — Industry */}
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold text-white">
                    {d.step1Title}
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {d.step1Options.map((opt) => {
                      const Icon = INDUSTRY_ICONS[opt] ?? MoreHorizontal;
                      const selected = industry === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            setValue("industry", opt, { shouldValidate: true })
                          }
                          className={cn(
                            "group flex items-center gap-3 rounded-xl border p-4 text-left transition-all",
                            selected
                              ? "border-[#c8d400] bg-[#c8d400]/10"
                              : "border-[#333333] bg-[#0d0d0d] hover:border-[#c8d400]/50"
                          )}
                        >
                          <div
                            className={cn(
                              "flex size-10 items-center justify-center rounded-lg transition-colors",
                              selected
                                ? "bg-[#c8d400] text-[#0d0d0d]"
                                : "bg-[#1a1a1a] text-[#c8d400]"
                            )}
                          >
                            <Icon className="size-5" />
                          </div>
                          <span
                            className={cn(
                              "font-medium",
                              selected ? "text-white" : "text-[#f2f2f2]/80"
                            )}
                          >
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.industry && (
                    <p className="mt-3 text-sm text-[#c8d400]">
                      {errors.industry.message}
                    </p>
                  )}
                </motion.div>
              )}

              {/* STEP 1 — Frictions */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold text-white">
                    {d.step2Title}
                  </h3>
                  <p className="mt-1 text-sm text-[#8a8a8a]">
                    {d.step2Subtitle}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {d.step2Options.map((opt) => {
                      const checked = (frictions || []).includes(opt);
                      return (
                        <label
                          key={opt}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all",
                            checked
                              ? "border-[#c8d400] bg-[#c8d400]/10"
                              : "border-[#333333] bg-[#0d0d0d] hover:border-[#c8d400]/50"
                          )}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() => toggleFriction(opt)}
                            className="data-[state=checked]:border-[#c8d400] data-[state=checked]:bg-[#c8d400] data-[state=checked]:text-[#0d0d0d]"
                          />
                          <span
                            className={cn(
                              "text-sm font-medium",
                              checked ? "text-white" : "text-[#f2f2f2]/80"
                            )}
                          >
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.frictions && (
                    <p className="mt-3 text-sm text-[#c8d400]">
                      {errors.frictions.message as string}
                    </p>
                  )}
                </motion.div>
              )}

              {/* STEP 2 — Hours */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold text-white">
                    {d.step3Title}
                  </h3>
                  <div className="mt-8 rounded-xl border border-[#333333] bg-[#0d0d0d] p-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-[#8a8a8a]">
                        {d.step3Unit}
                      </span>
                      <span className="font-display text-4xl font-bold text-[#c8d400]">
                        {hours}
                        <span className="ml-1 text-lg">h</span>
                      </span>
                    </div>
                    <Slider
                      value={[hours]}
                      onValueChange={(v) =>
                        setValue("hours", v[0], { shouldValidate: true })
                      }
                      min={1}
                      max={40}
                      step={1}
                      className="mt-6"
                    />
                    <div className="mt-2 flex justify-between text-[10px] text-[#8a8a8a]">
                      <span>1h</span>
                      <span>40h</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 — Contact */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-semibold text-white">
                    {d.step4Title}
                  </h3>
                  <p className="mt-1 text-sm text-[#8a8a8a]">
                    {d.step4Subtitle}
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <Label
                        htmlFor="diag-name"
                        className="text-xs text-[#8a8a8a]"
                      >
                        {d.fields.name}
                      </Label>
                      <Input
                        id="diag-name"
                        placeholder={d.placeholders.name}
                        {...register("name")}
                        className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-[#c8d400]">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-1">
                      <Label
                        htmlFor="diag-company"
                        className="text-xs text-[#8a8a8a]"
                      >
                        {d.fields.company}
                      </Label>
                      <Input
                        id="diag-company"
                        placeholder={d.placeholders.company}
                        {...register("company")}
                        className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <Label
                        htmlFor="diag-whatsapp"
                        className="text-xs text-[#8a8a8a]"
                      >
                        {d.fields.whatsapp}
                      </Label>
                      <Input
                        id="diag-whatsapp"
                        placeholder={d.placeholders.whatsapp}
                        {...register("whatsapp")}
                        className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                      />
                      {errors.whatsapp && (
                        <p className="mt-1 text-xs text-[#c8d400]">
                          {errors.whatsapp.message}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-1">
                      <Label
                        htmlFor="diag-email"
                        className="text-xs text-[#8a8a8a]"
                      >
                        {d.fields.email}
                      </Label>
                      <Input
                        id="diag-email"
                        type="email"
                        placeholder={d.placeholders.email}
                        {...register("email")}
                        className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#c8d400]">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer controls */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={back}
                disabled={step === 0}
                className="gap-1.5 text-white/70 hover:bg-white/5 hover:text-white disabled:opacity-30"
              >
                <ArrowLeft className="size-4" />
                {d.back}
              </Button>

              {step < totalSteps - 1 ? (
                <Button
                  type="button"
                  onClick={next}
                  className="gap-1.5 bg-[#c8d400] text-[#0d0d0d] hover:bg-[#b5c200]"
                >
                  {d.next}
                  <ArrowRight className="size-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="gap-1.5 bg-[#c8d400] text-[#0d0d0d] hover:bg-[#b5c200] glow-lima-soft"
                >
                  {d.submit}
                  <ArrowRight className="size-4" />
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success modal */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="border-[#c8d400]/40 bg-[#0d0d0d] text-center">
          <DialogHeader className="items-center text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#c8d400]/10">
              <CheckCircle2 className="size-9 text-[#c8d400]" />
            </div>
            <DialogTitle className="mt-4 font-display text-2xl font-bold text-white">
              {d.success.title}
            </DialogTitle>
            <DialogDescription className="text-base text-[#f2f2f2]/70">
              {d.success.description}
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setSuccessOpen(false)}
            className="mt-4 h-11 bg-[#c8d400] text-[#0d0d0d] hover:bg-[#b5c200]"
          >
            {d.success.cta}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
