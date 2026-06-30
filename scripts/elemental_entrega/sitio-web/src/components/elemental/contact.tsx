"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Clock, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/lib/language-store";

const WHATSAPP_NUMBER = "573014069793"; // +57 301 4069793
const WHATSAPP_DISPLAY = "+57 301 4069793";
const EMAIL = "hola@elemental.co";

export function Contact() {
  const t = useT();
  const c = t.contact;
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    whatsapp: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = c.form.validation.nameRequired;
    if (!form.whatsapp.trim()) e.whatsapp = c.form.validation.whatsappRequired;
    if (!form.message.trim()) e.message = c.form.validation.messageRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate async submit + persist locally
    setTimeout(() => {
      try {
        const existing = JSON.parse(
          localStorage.getItem("elemental-contact-submissions") || "[]"
        );
        existing.push({ ...form, submittedAt: new Date().toISOString() });
        localStorage.setItem(
          "elemental-contact-submissions",
          JSON.stringify(existing)
        );
      } catch {
        // ignore
      }
      setSubmitting(false);
      setForm({ name: "", company: "", whatsapp: "", message: "" });
      toast({
        title: c.form.success.title,
        description: c.form.success.description,
      });
    }, 700);
  };

  const infoItems = [
    {
      icon: MessageCircle,
      label: c.info.whatsapp,
      value: WHATSAPP_DISPLAY,
      action: {
        label: c.info.whatsappButton,
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hola ELEMENTAL, quiero agendar un diagnóstico."
        )}`,
      },
    },
    {
      icon: Mail,
      label: c.info.email,
      value: EMAIL,
      action: { label: EMAIL, href: `mailto:${EMAIL}` },
    },
    {
      icon: Clock,
      label: c.info.hours,
      value: c.info.hoursValue,
    },
    {
      icon: Zap,
      label: c.info.response,
      value: c.info.responseValue,
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1a1a1a] bg-[#0d0d0d] py-24 sm:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-[#c8d400]/8 blur-[140px]" />
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
            {c.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {c.title}
          </h2>
          <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#333333] bg-[#1a1a1a] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-name" className="text-xs text-[#8a8a8a]">
                  {c.form.name}
                </Label>
                <Input
                  id="c-name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[#c8d400]">{errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="c-company" className="text-xs text-[#8a8a8a]">
                  {c.form.company}
                </Label>
                <Input
                  id="c-company"
                  value={form.company}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, company: e.target.value }))
                  }
                  className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-whatsapp" className="text-xs text-[#8a8a8a]">
                  {c.form.whatsapp}
                </Label>
                <Input
                  id="c-whatsapp"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, whatsapp: e.target.value }))
                  }
                  placeholder={WHATSAPP_DISPLAY}
                  className="mt-1.5 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-xs text-[#c8d400]">
                    {errors.whatsapp}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-message" className="text-xs text-[#8a8a8a]">
                  {c.form.message}
                </Label>
                <Textarea
                  id="c-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder={c.form.messagePlaceholder}
                  className="mt-1.5 min-h-28 border-[#333333] bg-[#0d0d0d] text-white placeholder:text-[#5a5a5a] focus-visible:border-[#c8d400]"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-[#c8d400]">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-6 h-12 w-full gap-2 bg-[#c8d400] text-base font-semibold text-[#0d0d0d] hover:bg-[#b5c200] disabled:opacity-60 glow-lima-soft"
            >
              {submitting ? (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-[#0d0d0d] border-t-transparent" />
                  ...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  {c.form.submit}
                </>
              )}
            </Button>
          </motion.form>

          {/* Right: direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {infoItems.map((item) => {
              const Icon = item.icon;
              const hasAction = Boolean(item.action);
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-[#333333] bg-[#1a1a1a] p-5 transition-colors hover:border-[#c8d400]/40"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#c8d400]/10 text-[#c8d400]">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-wider text-[#8a8a8a]">
                      {item.label}
                    </div>
                    <div className="mt-0.5 truncate font-display text-base font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                  {hasAction && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="shrink-0 border-[#333333] bg-transparent text-white hover:border-[#c8d400] hover:bg-transparent hover:text-[#c8d400]"
                    >
                      <a
                        href={item.action!.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.action!.label}
                      </a>
                    </Button>
                  )}
                </div>
              );
            })}

            {/* Trust strip */}
            <div className="mt-2 rounded-2xl border border-[#c8d400]/30 bg-[#c8d400]/5 p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <CheckCircle2 className="size-4 text-[#c8d400]" />
                {t.contact.subtitle}
              </div>
              <p className="mt-2 text-sm text-[#f2f2f2]/65">
                {t.ai.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
