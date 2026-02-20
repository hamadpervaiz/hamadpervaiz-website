"use client";

import { motion } from "framer-motion";

export default function ConnectCTA() {
  return (
    <section className="w-full bg-[var(--bg-primary)] border-t border-white/10 py-24 sm:py-32 lg:py-40 px-6 md:px-16 lg:px-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 text-center"
      >
        <div className="flex items-center gap-5">
          <div className="w-10 h-px bg-[var(--accent)]" />
          <span className="font-mono text-[10px] tracking-[3px] text-[var(--accent)]">
            // NEXT MOVE
          </span>
          <div className="w-10 h-px bg-[var(--accent)]" />
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-[-1.5px] leading-[1.1]">
          Let&apos;s architect
          <br />
          something permanent.
        </h2>

        <p className="font-inter text-base sm:text-[17px] font-light leading-[1.85] text-[var(--text-muted)] max-w-[500px]">
          Whether it&apos;s a venture, a collaboration, or a conversation worth
          having — I&apos;m listening.
        </p>

        <motion.a
          href="/connect"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 font-inter text-[11px] sm:text-xs font-medium tracking-[2.5px] text-black bg-[var(--accent)] px-10 sm:px-14 py-5 sm:py-6 rounded-full shadow-[0_0_20px_rgba(106,171,191,0.3)] hover:shadow-[0_0_40px_rgba(106,171,191,0.5)] transition-shadow mt-4"
        >
          LET&apos;S CONNECT
          <span className="text-sm sm:text-base">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
