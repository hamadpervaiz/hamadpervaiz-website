"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Memo } from "@/data/memos";

export default function MemoDetail({ memo }: { memo: Memo }) {
  return (
    <main className="min-h-full overflow-x-hidden bg-[var(--bg-primary)]">
      <Header />

      {/* Featured Image */}
      {memo.featuredImage ? (
        <div className="w-full h-[280px] sm:h-[400px] lg:h-[560px] bg-[#0A0A0A] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={memo.featuredImage} alt={memo.title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-full h-[280px] sm:h-[400px] lg:h-[560px] bg-[#0A0A0A] flex flex-col items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[3px] text-[#333]">FEATURED IMAGE</span>
        </div>
      )}

      {/* Reading Column */}
      <div className="w-full flex justify-center px-5 sm:px-8 md:px-12">
        <article className="w-full max-w-[560px] pt-16 sm:pt-20 lg:pt-20 pb-20 sm:pb-24 lg:pb-[120px]">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/#memos"
              className="font-inter text-[10px] sm:text-[11px] tracking-[1.5px] text-[#888] hover:text-[var(--accent)] transition-colors"
            >
              &larr; RETURN TO INDEX
            </Link>
          </motion.div>

          {/* Spacer */}
          <div className="h-8" />

          {/* Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-y-4 border-t border-b border-white/20 py-5"
          >
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[#555] uppercase">
                AUTHOR
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[#888]">
                H. PERVAIZ
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[#555] uppercase">
                TIMESTAMP
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[#888]">
                {memo.fullDate}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[#555] uppercase">
                CATEGORY
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[#888]">
                {memo.tag}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[#555] uppercase">
                READ_TIME
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[#888]">
                {memo.time.replace(" READ", "").replace(" ", "_")}
              </span>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="h-12 sm:h-[60px]" />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-[28px] sm:text-[36px] lg:text-[48px] font-normal tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.1] text-white"
          >
            {memo.title}
          </motion.h1>

          {/* Spacer */}
          <div className="h-12 sm:h-[60px]" />

          {/* Article Content */}
          {memo.sections.map((section, i) => {
            if (section.type === "heading") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {i > 0 && <div className="h-12 sm:h-[60px]" />}
                  <h2 className="font-mono text-[12px] sm:text-[14px] font-medium tracking-[2px] leading-none text-white">
                    {section.content}
                  </h2>
                  <div className="h-6 sm:h-8" />
                </motion.div>
              );
            }

            if (section.type === "paragraph") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="font-inter text-[15px] sm:text-[17px] lg:text-[18px] font-light leading-[1.7] text-[#D1D5DB]">
                    {section.content}
                  </p>
                  <div className="h-6 sm:h-8" />
                </motion.div>
              );
            }

            if (section.type === "blockquote") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-8 sm:h-[60px]" />
                  <blockquote className="border-l-2 border-white pl-6 sm:pl-8">
                    <p className="font-playfair text-[20px] sm:text-[24px] lg:text-[28px] italic font-normal leading-[1.4] text-white">
                      {section.content}
                    </p>
                  </blockquote>
                  <div className="h-8 sm:h-[60px]" />
                </motion.div>
              );
            }

            if (section.type === "callout") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-6 sm:h-10" />
                  <div className="bg-[#050505] border border-white/15 p-6 sm:p-8">
                    <p className="font-inter text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.7] text-[#D1D5DB]">
                      {section.content}
                    </p>
                  </div>
                  <div className="h-6 sm:h-10" />
                </motion.div>
              );
            }

            if (section.type === "image") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  {section.content.startsWith("http") ? (
                    <div className="w-full overflow-hidden bg-[#0A0A0A]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={section.content} alt={section.caption || ""} className="w-full h-auto" />
                    </div>
                  ) : (
                    <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[3px] text-[#444]">{section.content}</span>
                    </div>
                  )}
                  {section.caption && (
                    <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.5px] leading-[1.6] text-[#666]">
                      {section.caption}
                    </p>
                  )}
                  <div className="h-8 sm:h-[60px]" />
                </motion.div>
              );
            }

            return null;
          })}

          {/* End Marker */}
          <div className="h-8 sm:h-10" />
          <div className="w-full">
            <span className="font-inter text-[12px] text-white">
              &#9632;
            </span>
          </div>

          {/* Divider */}
          <div className="h-8 sm:h-10" />
          <div className="w-full h-px bg-white/10" />
          <div className="h-10 sm:h-12" />

          {/* Continue the Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center gap-8 sm:gap-10 text-center"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
              <span className="font-inter text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[2.5px] text-[var(--accent)]">
                // NEXT MOVE
              </span>
              <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
            </div>

            <h3 className="font-playfair text-[24px] sm:text-[32px] lg:text-[36px] font-normal tracking-[-1px] leading-[1.1] text-white">
              Continue the
              <br />
              Conversation.
            </h3>

            <p className="font-inter text-[13px] sm:text-[14px] font-light leading-[1.8] text-[var(--text-muted)] max-w-[400px]">
              Follow for real-time architectural thinking, investment signals,
              and unfiltered takes.
            </p>

            <motion.a
              href="/connect"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 font-inter text-[11px] sm:text-xs font-medium tracking-[2.5px] text-black bg-[var(--accent)] px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-[0_0_20px_rgba(106,171,191,0.3)] hover:shadow-[0_0_40px_rgba(106,171,191,0.5)] transition-shadow"
            >
              LET&apos;S CONNECT
              <span className="text-sm sm:text-base">&rarr;</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] sm:text-[12px] tracking-[2px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] sm:text-[12px] tracking-[2px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] sm:text-[12px] tracking-[2px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                TWITTER
              </a>
            </div>
          </motion.div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
