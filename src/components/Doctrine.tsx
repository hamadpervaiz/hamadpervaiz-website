"use client";

import { motion } from "framer-motion";

export default function Doctrine() {
  return (
    <section
      id="doctrine"
      className="w-full bg-[var(--bg-primary)] px-5 sm:px-8 md:px-12 lg:px-6 py-16 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-[100px] xl:gap-[120px] items-start lg:items-center justify-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 sm:gap-10 max-w-full lg:max-w-[480px] shrink-0"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-10 sm:w-12 h-px bg-[var(--accent)]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] text-[var(--accent)]">
              // 01 — THE DOCTRINE
            </span>
          </div>
          <h2 className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.12] tracking-[-1px] sm:tracking-[-1.5px]">
            I don&apos;t chase
            <br />
            markets.
            <br />
            <br />
            I architect them.
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-8 sm:gap-10 flex-1"
        >
          <p className="font-inter text-[15px] sm:text-[17px] font-light leading-[1.85] text-[var(--text-muted)]">
            Every line of code I write, every investment I make, is a calculated
            maneuver in a larger game most people can&apos;t see.
          </p>
          <p className="font-inter text-[15px] sm:text-[17px] font-light leading-[1.85] text-[var(--text-muted)]">
            While others obsess over quarterly metrics, I&apos;m building
            infrastructure that will define the next decade. The difference
            between a founder and an architect is permanence.
          </p>
          <div className="flex flex-col gap-4 pt-8 sm:pt-10 pl-6 sm:pl-10 border-l border-[var(--border-tertiary)]">
            <p className="font-playfair text-lg sm:text-xl lg:text-2xl italic font-normal leading-[1.4] text-[var(--text-primary)]">
              &ldquo;Architecture is the permanent solution
              <br className="hidden sm:block" />
              to temporary problems.&rdquo;
            </p>
            <span className="font-montserrat text-[11px] tracking-[2px] text-[var(--text-dark)]">
              — Hamad Pervaiz
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
