"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type CMS = Record<string, string> | null;

function get(cms: CMS, key: string, fallback: string): string {
  return cms?.[`verdicts.${key}`] ?? fallback;
}

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

export default function Verdicts({ cms = null }: { cms?: CMS }) {
  const [playing, setPlaying] = useState(false);

  const sectionLabel = get(cms, "section_label", "// 04 — APPEARANCES & VERDICTS");
  const heading = get(cms, "heading", "The Verdicts.");
  const description = get(cms, "description", "Panel talks, keynotes, interviews, and conference appearances — the moments that shaped the conversation.");

  const featured = {
    tag: get(cms, "featured_tag", "VIDEO INTERVIEW · FEATURED"),
    title: get(cms, "featured_title", "The Death of the Digital Middleman"),
    desc: get(cms, "featured_desc", "A PTV exclusive on how legacy distribution models are being dismantled by architecture-first software platforms."),
    meta: get(cms, "featured_meta", "PTV · Lahore · 2024"),
    youtube: get(cms, "featured_youtube", "hGSXbTNFXcE"),
  };

  const side = {
    tag: get(cms, "side_tag", "KEYNOTE"),
    title: get(cms, "side_title", "TechCrunch Disrupt: Battlefield 200"),
    desc: get(cms, "side_desc", "Representing Pakistan\u2019s tech ecosystem on the global stage — competing alongside 200 startups from 30+ countries."),
    meta: get(cms, "side_meta", "San Francisco · 2024"),
  };

  const bottomCards = [
    {
      tag: get(cms, "bottom1_tag", "PANEL TALK"),
      title: get(cms, "bottom1_title", "Systems Thinking in Emerging Markets"),
      desc: get(cms, "bottom1_desc", "University panel on applying systems thinking to navigate emerging market complexity."),
      meta: get(cms, "bottom1_meta", "Dubai · 2025"),
    },
    {
      tag: get(cms, "bottom2_tag", "CONFERENCE"),
      title: get(cms, "bottom2_title", "U.S. Consulate Strategic Dialogue"),
      desc: get(cms, "bottom2_desc", "High-level strategic dialogue on Pakistan\u2019s tech ecosystem and cross-border innovation."),
      meta: get(cms, "bottom2_meta", "Islamabad · 2024"),
    },
    {
      tag: get(cms, "bottom3_tag", "UNIVERSITY TALK"),
      title: get(cms, "bottom3_title", "Building for the Next Billion"),
      desc: get(cms, "bottom3_desc", "Keynote address on building scalable technology infrastructure for underserved markets."),
      meta: get(cms, "bottom3_meta", "LUMS · Lahore · 2025"),
    },
  ];

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
                {sectionLabel}
              </span>
            </div>
            <h2 className="font-playfair text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-normal tracking-[-1px] sm:tracking-[-1.5px]">
              {heading}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-[15px] sm:text-[17px] font-light leading-[1.8] sm:leading-[1.9] text-[var(--text-muted)] max-w-[750px]"
          >
            {description}
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
              {playing ? (
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${featured.youtube}?autoplay=1&rel=0`}
                    title={featured.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="relative w-full aspect-video bg-black cursor-pointer group/play"
                >
                  <img
                    src={`https://img.youtube.com/vi/${featured.youtube}/maxresdefault.jpg`}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/play:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/80 flex items-center justify-center group-hover/play:border-[var(--accent)] group-hover/play:scale-110 transition-all">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-white/70">
                      NATIONAL TELEVISION INTERVIEW
                    </span>
                  </div>
                </button>
              )}
              <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 lg:p-8">
                <span className="font-mono text-[9px] font-medium tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  {featured.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[28px] font-normal tracking-[-0.5px] leading-[1.25]">
                  {featured.title}
                </h3>
                <p className="font-inter text-[13px] sm:text-sm font-light leading-[1.7] text-[var(--text-muted)]">
                  {featured.desc}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {featured.meta}
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
                label="PHOTOS"
                icon="image"
                className="flex-1"
              />
              <div className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  {side.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[22px] font-normal tracking-[-0.3px] leading-[1.3]">
                  {side.title}
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  {side.desc}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {side.meta}
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
                <MediaPlaceholder label="MEDIA" icon="image" />
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
