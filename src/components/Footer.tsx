"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-secondary)] px-5 sm:px-8 md:px-12 lg:px-6 py-12 sm:py-14 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-14">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[var(--text-primary)] font-playfair text-base sm:text-lg font-medium">
                H
              </div>
              <span className="font-inter text-[13px] sm:text-sm font-semibold tracking-[2px]">
                HAMAD PERVAIZ
              </span>
            </Link>
            <span className="font-inter text-[11px] sm:text-xs font-light tracking-[2px] sm:tracking-[3px] text-[var(--text-dark)]">
              LAHORE · SAN FRANCISCO · DUBAI
            </span>
          </div>
          <div className="flex items-start gap-6 sm:gap-10 lg:gap-14 flex-wrap">
            <a
              href="#"
              className="font-inter text-[12px] sm:text-[13px] tracking-[2px] text-[var(--text-dark)] hover:text-[var(--text-primary)] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="#"
              className="font-inter text-[12px] sm:text-[13px] tracking-[2px] text-[var(--text-dark)] hover:text-[var(--text-primary)] transition-colors"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="font-inter text-[12px] sm:text-[13px] tracking-[2px] text-[var(--text-dark)] hover:text-[var(--text-primary)] transition-colors"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-[var(--border-secondary)]" />

        <p className="font-inter text-[10px] sm:text-xs font-light tracking-[2px] sm:tracking-[2.5px] text-[var(--text-darker)]">
          © 2026 HAMAD PERVAIZ. ARCHITECTURE IS PERMANENT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </motion.footer>
  );
}
