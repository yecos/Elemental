"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useT } from "@/lib/language-store";

const IMAGES = [
  "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b67?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80&auto=format&fit=crop",
];

const READ_TIME_ES = ["5 min", "6 min", "7 min", "6 min", "5 min", "8 min"];
const READ_TIME_EN = ["5 min", "6 min", "7 min", "6 min", "5 min", "8 min"];

export function Blog() {
  const t = useT();
  const b = t.blog;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isEn = t.common.languageLabel === "Language";
  const readTimes = isEn ? READ_TIME_EN : READ_TIME_ES;

  return (
    <section
      id="blog"
      className="relative scroll-mt-20 border-t border-[#1a1a1a] bg-[#0d0d0d] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-3xl">
            <span className="font-mono-elemental text-xs font-medium uppercase tracking-[0.2em] text-[#c8d400]">
              {b.kicker}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              {b.title}
            </h2>
            <p className="mt-4 text-base text-[#f2f2f2]/70 sm:text-lg">
              {b.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Posts grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              role="button"
              tabIndex={0}
              aria-label={`${post.title} — ${post.category}. ${isEn ? "Press Enter to read" : "Presiona Enter para leer"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex(i);
                }
              }}
              onClick={() => setOpenIndex(i)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] transition-all duration-300 hover:border-[#c8d400]/50 hover:bg-[#262626] focus:outline-none focus:ring-2 focus:ring-[#c8d400] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={post.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent" />
                <Badge
                  variant="outline"
                  className="absolute left-3 top-3 border-[#c8d400]/40 bg-[#0d0d0d]/80 text-[10px] font-medium uppercase tracking-wider text-[#c8d400] backdrop-blur"
                >
                  {post.category}
                </Badge>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#0d0d0d]/80 px-2.5 py-1 text-[10px] text-[#f2f2f2]/80 backdrop-blur">
                  <Clock className="size-3" />
                  {readTimes[i]}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#c8d400]">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#f2f2f2]/65">
                  {post.excerpt}
                </p>
                <button
                  className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-[#c8d400]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(i);
                  }}
                >
                  {b.readMore}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="h-11 gap-2 border-[#333333] bg-transparent px-6 text-white hover:border-[#c8d400] hover:bg-transparent hover:text-[#c8d400]"
          >
            {b.viewAll}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>

      {/* Article Dialog */}
      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-[#333333] bg-[#0d0d0d] p-0">
          {openIndex !== null && b.posts[openIndex] && (
            <>
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src={IMAGES[openIndex]}
                  alt={b.posts[openIndex].title}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
                <Badge
                  variant="outline"
                  className="absolute left-4 top-4 border-[#c8d400]/40 bg-[#0d0d0d]/80 text-[10px] font-medium uppercase tracking-wider text-[#c8d400] backdrop-blur"
                >
                  {b.posts[openIndex].category}
                </Badge>
              </div>
              <DialogHeader className="px-6 pt-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-[#8a8a8a]">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {readTimes[openIndex]} {isEn ? "read" : "lectura"}
                  </span>
                  <span>·</span>
                  <span>ELEMENTAL</span>
                </div>
                <DialogTitle className="text-left font-display text-2xl font-bold leading-tight text-white">
                  {b.posts[openIndex].title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {b.posts[openIndex].excerpt}
                </DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6 pt-3">
                <p className="text-sm italic leading-relaxed text-[#c8d400]/90">
                  {b.posts[openIndex].excerpt}
                </p>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[#f2f2f2]/85">
                  {b.posts[openIndex].body}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#333333] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">
                    ELEMENTAL · {isEn ? "Resources" : "Recursos"}
                  </span>
                  <a
                    href={`https://wa.me/573014069793?text=${encodeURIComponent(
                      isEn
                        ? `Hi ELEMENTAL, I read your article "${b.posts[openIndex].title}" and want to know more.`
                        : `Hola ELEMENTAL, leí tu artículo "${b.posts[openIndex].title}" y quiero saber más.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-lg bg-[#c8d400] px-4 text-xs font-semibold text-[#0d0d0d] transition-colors hover:bg-[#b5c200]"
                  >
                    {isEn ? "Talk to us" : "Hablemos"}
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
