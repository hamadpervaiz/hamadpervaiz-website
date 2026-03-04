"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Memo } from "@/data/memos";

export default function MemoDetail({ memo }: { memo: Memo }) {
  const hasImage = !!memo.featuredImage;

  return (
    <main className="min-h-full overflow-x-hidden bg-[var(--bg-primary)]">
      <Header />

      {/* Featured Image */}
      {hasImage ? (
        <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[560px] bg-[var(--bg-secondary)] overflow-hidden">
          <Image
            src={memo.featuredImage!}
            alt={memo.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] bg-[var(--bg-secondary)] overflow-hidden flex items-end">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
          {/* Content */}
          <div className="relative z-10 w-full px-5 sm:px-12 lg:px-20 pb-8 sm:pb-14 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="w-6 sm:w-10 h-px bg-[var(--accent)]" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                {memo.tag}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-playfair text-[26px] sm:text-[40px] lg:text-[56px] font-normal tracking-[-0.5px] sm:tracking-[-1.5px] lg:tracking-[-3px] leading-[1.1] sm:leading-[1.05] text-[var(--text-primary)] max-w-[900px]"
            >
              {memo.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1"
            >
              <span className="font-mono text-[9px] sm:text-[11px] tracking-[1.5px] text-[var(--text-dim)]">
                H. PERVAIZ
              </span>
              <span className="text-[var(--text-subtle)] hidden sm:inline">/</span>
              <span className="font-mono text-[9px] sm:text-[11px] tracking-[1.5px] text-[var(--text-dim)]">
                {memo.fullDate}
              </span>
              <span className="text-[var(--text-subtle)] hidden sm:inline">/</span>
              <span className="font-mono text-[9px] sm:text-[11px] tracking-[1.5px] text-[var(--text-dim)]">
                {memo.time}
              </span>
            </motion.div>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
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
              className="font-inter text-[10px] sm:text-[11px] tracking-[1.5px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
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
            className="flex flex-wrap gap-y-4 border-t border-b border-[var(--border-medium)] py-5"
          >
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[var(--text-dark)] uppercase">
                AUTHOR
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[var(--text-muted)]">
                H. PERVAIZ
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[var(--text-dark)] uppercase">
                TIMESTAMP
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[var(--text-muted)]">
                {memo.fullDate}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[var(--text-dark)] uppercase">
                CATEGORY
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[var(--text-muted)]">
                {memo.tag}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 sm:w-1/4">
              <span className="font-inter text-[9px] tracking-[2px] text-[var(--text-dark)] uppercase">
                READ_TIME
              </span>
              <span className="font-inter text-[10px] tracking-[1.5px] text-[var(--text-muted)]">
                {memo.time.replace(" READ", "").replace(" ", "_")}
              </span>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="h-12 sm:h-[60px]" />

          {/* Title - only show in body when hero has a featured image */}
          {hasImage && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-playfair text-[28px] sm:text-[36px] lg:text-[48px] font-normal tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.1] text-[var(--text-primary)]"
              >
                {memo.title}
              </motion.h1>
              <div className="h-12 sm:h-[60px]" />
            </>
          )}

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
                  <h2 className="font-mono text-[12px] sm:text-[14px] font-medium tracking-[2px] leading-none text-[var(--text-primary)]">
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
                  <p className="font-inter text-[15px] sm:text-[17px] lg:text-[18px] font-light leading-[1.7] text-[var(--text-body)]">
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
                  <blockquote className="border-l-2 border-[var(--text-primary)] pl-6 sm:pl-8">
                    <p className="font-playfair text-[20px] sm:text-[24px] lg:text-[28px] italic font-normal leading-[1.4] text-[var(--text-primary)]">
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
                  <div className="bg-[var(--bg-elevated)] border border-[var(--border-medium)] p-6 sm:p-8">
                    <p className="font-inter text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.7] text-[var(--text-body)]">
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
                    <div className="relative w-full aspect-video overflow-hidden bg-[var(--bg-secondary)]">
                      <Image
                        src={section.content}
                        alt={section.caption || ""}
                        fill
                        sizes="(max-width: 640px) 100vw, 560px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-[var(--bg-secondary)] border border-[var(--border-faint)] flex flex-col items-center justify-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[3px] text-[var(--text-darker)]">{section.content}</span>
                    </div>
                  )}
                  {section.caption && (
                    <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.5px] leading-[1.6] text-[var(--text-dim)]">
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
            <span className="font-inter text-[12px] text-[var(--text-primary)]">
              &#9632;
            </span>
          </div>

          {/* Divider */}
          <div className="h-8 sm:h-10" />
          <div className="w-full h-px bg-[var(--border-faint)]" />
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

            <h3 className="font-playfair text-[24px] sm:text-[32px] lg:text-[36px] font-normal tracking-[-1px] leading-[1.1] text-[var(--text-primary)]">
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
              className="flex items-center gap-3 font-inter text-[11px] sm:text-xs font-medium tracking-[2.5px] text-[var(--text-on-accent)] bg-[var(--accent)] px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-[0_0_20px_var(--shadow-accent-sm)] hover:shadow-[0_0_40px_var(--shadow-accent-lg)] transition-shadow"
            >
              LET&apos;S CONNECT
              <span className="text-sm sm:text-base">&rarr;</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-2">
              <a
                href="https://www.linkedin.com/in/hamadpervaiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] sm:text-[12px] tracking-[2px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.instagram.com/hamadpervaiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] sm:text-[12px] tracking-[2px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="https://x.com/hamadpervaiz"
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
