"use client";

import { motion } from "framer-motion";

const ventures = [
  {
    num: "01",
    title: "BearPlex",
    tag: "AI INFRASTRUCTURE",
    tagColor: "text-[#00BFFF90]",
    desc: "An AI-first software architecture firm building mission-critical systems for Fortune 500 enterprises.",
    role: "FOUNDER & CEO",
    featured: true,
  },
  {
    num: "02",
    title: "Turing VC",
    tag: "VENTURE CAPITAL",
    tagColor: "text-[var(--text-dark)]",
    desc: "Strategic capital for contrarian founders. <10% acceptance rate. If I\u2019m in, I\u2019m building alongside.",
    role: "MANAGING PARTNER",
    featured: false,
  },
  {
    num: "03",
    title: "PeoplePlus",
    tag: "HR TECHNOLOGY",
    tagColor: "text-[var(--text-dark)]",
    desc: "A proprietary OS eliminating digital chaos and scaling service businesses across MENA.",
    role: "FOUNDER",
    featured: false,
  },
  {
    num: "04",
    title: "Odus Group",
    tag: "STRATEGIC HOLDINGS",
    tagColor: "text-[var(--text-dark)]",
    desc: "Diversified conglomerate with interests in real estate, logistics, and manufacturing.",
    role: "CHAIRMAN",
    featured: false,
  },
];

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="w-full bg-[var(--bg-secondary)] px-5 sm:px-8 md:px-12 lg:px-6 py-16 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-[30px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-10 sm:w-12 h-px bg-[var(--accent)] shadow-[0_0_12px_rgba(0,191,255,0.5)]" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] text-[var(--accent)]">
                // 02 — THE ECOSYSTEM
              </span>
            </div>
            <h2 className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.12] tracking-[-1px] sm:tracking-[-1.5px]">
              Four ventures.
              <br />
              One architecture.
              <br />
              Zero compromise.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-sm font-light leading-[1.75] text-[var(--text-dim)] lg:text-right max-w-[320px]"
          >
            Each entity operates independently, but shares a common DNA:
            permanence over profit.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-[30px]">
          {ventures.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col border ${
                v.featured
                  ? "border-t-2 border-t-[var(--accent)] border-x-transparent border-b-transparent bg-gradient-to-b from-[#6AABBF12] to-transparent"
                  : "border-[var(--border-secondary)]"
              } bg-[var(--bg-primary)] group hover:border-[var(--accent)]/30 transition-all`}
            >
              <div className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 lg:p-10 lg:pt-12 flex-1">
                <span
                  className={`font-mono text-xs tracking-[2px] ${
                    v.featured
                      ? "text-[var(--accent)] [text-shadow:0_0_8px_rgba(0,191,255,0.4)]"
                      : "text-[var(--text-subtle)]"
                  }`}
                >
                  {v.num}
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl lg:text-[28px] font-normal tracking-[-0.5px]">
                  {v.title}
                </h3>
                <span className={`font-mono text-[9px] tracking-[3px] ${v.tagColor}`}>
                  {v.tag}
                </span>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-dim)]">
                  {v.desc}
                </p>
              </div>
              <div className="flex items-center justify-between px-6 sm:px-8 lg:px-10 py-5 sm:py-6 border-t border-[var(--border-secondary)]">
                <span className="font-mono text-[9px] font-medium tracking-[2px] text-[var(--text-primary)]">
                  {v.role}
                </span>
                <span
                  className={`font-inter text-base ${
                    v.featured
                      ? "text-[var(--accent)] [text-shadow:0_0_10px_rgba(0,191,255,0.5)]"
                      : "text-[var(--text-darker)]"
                  } group-hover:text-[var(--accent)] transition-colors`}
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
