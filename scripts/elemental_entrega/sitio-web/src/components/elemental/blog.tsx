"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/language-store";

const IMAGES = [
  "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b67?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80&auto=format&fit=crop",
];

export function Blog() {
  const t = useT();
  const b = t.blog;

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
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] transition-all duration-300 hover:border-[#c8d400]/50 hover:bg-[#262626]"
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
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#c8d400]">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#f2f2f2]/65">
                  {post.excerpt}
                </p>
                <button className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-[#c8d400]">
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
    </section>
  );
}
