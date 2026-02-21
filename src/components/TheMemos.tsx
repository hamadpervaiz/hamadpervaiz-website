"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memos as localMemos } from "@/data/memos";

interface CMSMemo {
  id: string;
  title: string;
  slug: string;
  tag: string | null;
  meta: Record<string, string>;
  publishedAt: string | null;
}

interface TheMemosProps {
  cmsMemos?: CMSMemo[] | null;
}

export default function TheMemos({ cmsMemos }: TheMemosProps) {
  const memos = cmsMemos
    ? cmsMemos.map((m) => ({
        slug: m.slug,
        date: m.publishedAt ? new Date(m.publishedAt).toISOString().slice(0, 7).replace("-", ".") : "",
        title: m.title,
        tag: m.tag || "",
        time: m.meta?.readTime || "",
      }))
    : localMemos;
  return (
    <section
      id="memos"
      className="w-full bg-[var(--bg-primary)] border-t border-white/10 px-5 sm:px-8 md:px-12 lg:px-6 py-16 sm:py-20 lg:py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[2.5px] text-[var(--accent)]">
              // 05 — THE MEMOS
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-normal tracking-[-1px] sm:tracking-[-1.5px] leading-[1.05]"
          >
            The Architecture Memos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-[14px] sm:text-[15px] font-light leading-[1.8] text-[#A1A1AA] max-w-[600px]"
          >
            Unfiltered systems analysis, investment theses, and architectural
            breakdowns. No noise, just the raw signal.
          </motion.p>
        </div>

        {/* Memo Rows */}
        <div className="flex flex-col border-t border-white/10">
          {memos.map((memo, i) => (
            <motion.div
              key={memo.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/memo/${memo.slug}`}
                className="group flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:gap-5 py-6 sm:py-8 lg:py-10 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-mono text-[11px] sm:text-xs tracking-[1px] text-[var(--accent)] lg:w-[80px] shrink-0">
                  {memo.date}
                </span>

                <h3 className="font-playfair text-lg sm:text-xl lg:text-[28px] font-normal tracking-[-0.5px] leading-[1.2] text-[#E5E5E5] flex-1 group-hover:text-[var(--text-primary)] transition-colors">
                  {memo.title}
                </h3>

                <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0">
                  <span className="flex items-center justify-center font-mono text-[9px] sm:text-[10px] tracking-[2px] text-[var(--text-muted)] border border-white/20 px-2 sm:px-2.5 py-1 w-[100px] sm:w-[120px] text-center">
                    {memo.tag}
                  </span>
                  <div className="flex items-center justify-end gap-3 sm:gap-4 w-auto sm:w-[140px]">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[1px] text-[var(--text-dim)] whitespace-nowrap">
                      {memo.time}
                    </span>
                    <span className="text-base text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
