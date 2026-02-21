"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignalVsNoise() {
  return (
    <section
      id="insights"
      className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/signal-vs-noise-bg.png"
          alt="Signal background"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-center gap-8 sm:gap-10 px-5 sm:px-8 md:px-12 lg:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 sm:gap-5"
        >
          <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
            // 03 — SIGNAL VS NOISE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-normal tracking-[-1px] sm:tracking-[-1.5px]"
        >
          Signal vs. Noise.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-inter text-[15px] sm:text-[17px] font-light leading-[1.8] sm:leading-[1.9] text-[var(--text-secondary)] max-w-[600px]"
        >
          You cannot architect the future with a cluttered mind. In a world
          obsessed with the urgency of the next notification, the ultimate
          competitive advantage is altitude. The space to step away, view the
          system from 10,000 feet, and separate the signal from the noise.
        </motion.p>
      </div>
    </section>
  );
}
