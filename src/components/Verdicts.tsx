"use client";

import { motion } from "framer-motion";

const flagshipCard = {
  tag: "VIDEO INTERVIEW · FEATURED",
  title: "The Death of the Digital Middleman",
  desc: "A PTV exclusive on how legacy distribution models are being dismantled by architecture-first software platforms.",
  meta: "PTV · Lahore · 2024",
  mediaLabel: "NATIONAL TELEVISION INTERVIEW",
  mediaIcon: "play",
};

const sideCard = {
  tag: "KEYNOTE",
  title: "TechCrunch Disrupt: Battlefield 200",
  desc: "Representing Pakistan\u2019s tech ecosystem on the global stage \u2014 competing alongside 200 startups from 30+ countries.",
  meta: "San Francisco · 2024",
  mediaLabel: "PHOTOS",
  mediaIcon: "image",
};

const bottomCards = [
  {
    tag: "PANEL TALK",
    title: "Systems Thinking in Emerging Markets",
    desc: "University panel on applying systems thinking to navigate emerging market complexity.",
    meta: "Dubai · 2025",
    mediaLabel: "VIDEO",
    mediaIcon: "mic",
  },
  {
    tag: "CONFERENCE",
    title: "U.S. Consulate Strategic Dialogue",
    desc: "High-level strategic dialogue on Pakistan\u2019s tech ecosystem and cross-border innovation.",
    meta: "Islamabad · 2024",
    mediaLabel: "PHOTOS",
    mediaIcon: "image",
  },
  {
    tag: "UNIVERSITY TALK",
    title: "Building for the Next Billion",
    desc: "Keynote address on building scalable technology infrastructure for underserved markets.",
    meta: "LUMS · Lahore · 2025",
    mediaLabel: "VIDEO",
    mediaIcon: "play",
  },
];

function MediaPlaceholder({
  label,
  icon,
  className: extraClass = "",
}: {
  label: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 w-full bg-[var(--bg-card)] min-h-[160px] sm:min-h-[200px] ${extraClass}`}
    >
      <span className="icon-lucide text-xl sm:text-2xl text-[var(--text-subtle)]">
        {icon}
      </span>
      <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--text-darker)] text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function Verdicts() {
  return (
    <section className="w-full bg-[var(--bg-primary)] px-5 sm:px-8 md:px-12 lg:px-6 py-16 sm:py-20 lg:py-[160px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                // 04 — APPEARANCES &amp; VERDICTS
              </span>
            </div>
            <h2 className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-normal tracking-[-1px] sm:tracking-[-1.5px]">
              The Verdicts.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-[15px] sm:text-[17px] font-light leading-[1.8] sm:leading-[1.9] text-[var(--text-muted)] max-w-[750px]"
          >
            Panel talks, keynotes, interviews, and conference appearances — the
            moments that shaped the conversation.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              <MediaPlaceholder
                label={flagshipCard.mediaLabel}
                icon={flagshipCard.mediaIcon}
                className="flex-1"
              />
              <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 lg:p-8">
                <span className="font-mono text-[9px] font-medium tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  {flagshipCard.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[28px] font-normal tracking-[-0.5px] leading-[1.25]">
                  {flagshipCard.title}
                </h3>
                <p className="font-inter text-[13px] sm:text-sm font-light leading-[1.7] text-[var(--text-muted)]">
                  {flagshipCard.desc}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {flagshipCard.meta}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              <MediaPlaceholder
                label={sideCard.mediaLabel}
                icon={sideCard.mediaIcon}
                className="flex-1"
              />
              <div className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  {sideCard.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[22px] font-normal tracking-[-0.3px] leading-[1.3]">
                  {sideCard.title}
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  {sideCard.desc}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {sideCard.meta}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {bottomCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
              >
                <MediaPlaceholder label={card.mediaLabel} icon={card.mediaIcon} />
                <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6">
                  <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                    {card.tag}
                  </span>
                  <h3 className="font-playfair text-base sm:text-lg lg:text-xl font-normal tracking-[-0.3px] leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                    {card.desc}
                  </p>
                  <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                    {card.meta}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
