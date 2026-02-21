"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultStats = [
  { value: "15+", label: "YEARS ARCHITECTING" },
  { value: "04", label: "ACTIVE VENTURES" },
  { value: "$50M+", label: "CAPITAL DEPLOYED" },
  { value: "03", label: "CONTINENTS" },
];

interface StatsProps {
  cms?: Record<string, string> | null;
}

export default function Stats({ cms }: StatsProps) {
  const stats = cms ? [
    { value: cms["home.stat_1_value"] || defaultStats[0].value, label: cms["home.stat_1_label"] || defaultStats[0].label },
    { value: cms["home.stat_2_value"] || defaultStats[1].value, label: cms["home.stat_2_label"] || defaultStats[1].label },
    { value: cms["home.stat_3_value"] || defaultStats[2].value, label: cms["home.stat_3_label"] || defaultStats[2].label },
    { value: cms["home.stat_4_value"] || defaultStats[3].value, label: cms["home.stat_4_label"] || defaultStats[3].label },
  ] : defaultStats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[var(--bg-primary)] border-y border-[var(--border-secondary)]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 px-5 sm:px-8 md:px-12 lg:px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col items-center gap-2 sm:gap-3 py-10 sm:py-12 lg:py-16 ${
              i % 2 === 1 ? "border-l border-[var(--border-secondary)]" : ""
            } ${i >= 2 ? "max-lg:border-t max-lg:border-[var(--border-secondary)]" : ""} ${i >= 2 && i % 2 === 0 ? "lg:border-l lg:border-[var(--border-secondary)]" : ""}`}
          >
            <span className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal tracking-[-1px] text-[var(--accent)]">
              {stat.value}
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--text-dark)] text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
