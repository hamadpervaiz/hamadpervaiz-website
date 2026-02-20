"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[var(--border-primary)]"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[80px] sm:h-[90px] lg:h-[100px] px-5 sm:px-8 md:px-12 lg:px-6">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[var(--text-primary)] font-playfair text-base sm:text-lg font-medium">
              H
            </div>
            <span className="font-inter text-[10px] sm:text-xs font-semibold tracking-[2px] sm:tracking-[3px] text-[var(--text-primary)]">
              HAMAD PERVAIZ
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-16">
            <Link
              href="#doctrine"
              className="font-inter text-[11px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
            >
              DOCTRINE
            </Link>
            <Link
              href="#ventures"
              className="font-inter text-[11px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
            >
              VENTURES
            </Link>
            <Link
              href="#insights"
              className="font-inter text-[11px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
            >
              INSIGHTS
            </Link>
            <Link
              href="/connect"
              className="font-inter text-[11px] font-medium tracking-[2.5px] text-[var(--accent)] border border-[var(--accent)] px-6 lg:px-8 py-3 lg:py-3.5 hover:bg-[var(--accent)] hover:text-black transition-all"
            >
              LET&apos;S CONNECT
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[var(--text-primary)] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-[var(--text-primary)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-[var(--text-primary)] transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-[3.5px]" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[80px] sm:top-[90px] z-40 bg-black/95 backdrop-blur-lg border-b border-[var(--border-primary)] md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-10">
              <Link
                href="#doctrine"
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[12px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
              >
                DOCTRINE
              </Link>
              <Link
                href="#ventures"
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[12px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
              >
                VENTURES
              </Link>
              <Link
                href="#insights"
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[12px] tracking-[2.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
              >
                INSIGHTS
              </Link>
              <Link
                href="/connect"
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[12px] font-medium tracking-[2.5px] text-[var(--accent)] border border-[var(--accent)] px-8 py-3.5"
              >
                LET&apos;S CONNECT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
