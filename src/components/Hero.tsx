"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative flex flex-col lg:flex-row lg:min-h-[620px] px-5 sm:px-8 md:px-12 lg:px-6">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-16 lg:py-[120px] max-w-full lg:max-w-[55%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
              ARCHITECT · INVESTOR · STRATEGIST
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-playfair text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-normal leading-[1.08] tracking-[-1px] sm:tracking-[-2px]"
          >
            Hype is a temporary tactic.
            <br />
            Architecture is a permanent advantage.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <p className="font-inter text-[15px] sm:text-[17px] font-medium text-[var(--text-primary)]">
              I am Hamad Pervaiz.
            </p>
            <p className="font-inter text-sm sm:text-base font-light leading-[1.8] text-[var(--text-dim)]">
              I architect mission-critical software, invest in asymmetric
              <br className="hidden lg:block" />
              opportunities, and build empires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="#ventures"
              className="flex items-center justify-center gap-3 font-inter text-[10px] sm:text-[11px] font-medium tracking-[2px] sm:tracking-[2.5px] text-black bg-[var(--accent)] px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_0_12px_rgba(106,171,191,0.25)] hover:shadow-[0_0_24px_rgba(106,171,191,0.4)] transition-all w-full sm:w-auto text-center"
            >
              EXPLORE THE WORK
              <span className="text-sm">→</span>
            </a>
            <a
              href="#doctrine"
              className="flex items-center justify-center font-inter text-[10px] sm:text-[11px] font-medium tracking-[2px] sm:tracking-[2.5px] text-[var(--accent)] border border-[var(--accent)] px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-[var(--accent)] hover:text-black transition-all w-full sm:w-auto text-center"
            >
              READ THE DOCTRINE
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-auto border border-[var(--border-primary)] overflow-hidden"
        >
          <Image
            src="/images/hero-portrait.png"
            alt="Hamad Pervaiz"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
