"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const UCP_IMAGES = [
  "/images/ucp/ucp-01.jpg",
  "/images/ucp/ucp-02.jpg",
  "/images/ucp/ucp-03.jpg",
  "/images/ucp/ucp-04.jpg",
  "/images/ucp/ucp-05.jpg",
  "/images/ucp/ucp-06.jpg",
  "/images/ucp/ucp-07.jpg",
  "/images/ucp/ucp-08.jpg",
  "/images/ucp/ucp-09.jpg",
];

const KINNAIRD_IMAGES = [
  "/images/kinnaird/kinnaird-1.jpg",
  "/images/kinnaird/kinnaird-2.jpg",
  "/images/kinnaird/kinnaird-3.jpg",
  "/images/kinnaird/kinnaird-4.jpg",
  "/images/kinnaird/kinnaird-5.jpg",
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative min-h-[160px] sm:min-h-[200px] overflow-hidden group/carousel">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current
                ? "bg-[var(--accent)] w-4"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 text-white/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity text-sm"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/50 text-white/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity text-sm"
      >
        ›
      </button>
    </div>
  );
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

const bottomCards = [
  {
    id: "b1",
    title: "U.S. Consulate Strategic Dialogue",
    tag: "CONFERENCE",
    description:
      "High-level strategic dialogue on Pakistan\u2019s tech ecosystem and cross-border innovation.",
    eventMeta: "Islamabad · 2024",
    featuredImage: null as string | null,
  },
  {
    id: "b2",
    title: "Building for the Next Billion",
    tag: "UNIVERSITY TALK",
    description:
      "Keynote address on building scalable technology infrastructure for underserved markets.",
    eventMeta: "LUMS · Lahore · 2025",
    featuredImage: null as string | null,
  },
];

export default function Verdicts() {
  const [playing, setPlaying] = useState(false);

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
            {/* Featured Card — The Death of the Digital Middleman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              {playing ? (
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/hGSXbTNFXcE?autoplay=1&rel=0"
                    title="The Death of the Digital Middleman"
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
                  <Image
                    src="/images/architect-economy.jpg"
                    alt="The Death of the Digital Middleman"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover opacity-70 group-hover/play:opacity-90 transition-opacity"
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
                  VIDEO INTERVIEW · FEATURED
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[28px] font-normal tracking-[-0.5px] leading-[1.25]">
                  The Death of the Digital Middleman
                </h3>
                <p className="font-inter text-[13px] sm:text-sm font-light leading-[1.7] text-[var(--text-muted)]">
                  A PTV exclusive on how legacy distribution models are being
                  dismantled by architecture-first software platforms.
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  PTV · Lahore · 2024
                </span>
              </div>
            </motion.div>

            {/* Side Card — TechCrunch Disrupt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              <div className="relative flex-1 min-h-[160px] sm:min-h-[200px] overflow-hidden">
                <Image
                  src="/images/techcrunch-disrupt.jpg"
                  alt="TechCrunch Disrupt: Battlefield 200"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  KEYNOTE
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[22px] font-normal tracking-[-0.3px] leading-[1.3]">
                  TechCrunch Disrupt: Battlefield 200
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  Representing Pakistan&apos;s tech ecosystem on the global stage
                  — competing alongside 200 startups from 30+ countries.
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  San Francisco · 2024
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Agentic AI card with carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              <ImageCarousel images={UCP_IMAGES} alt="Agentic AI Panel at UCP" />
              <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  PANEL TALK
                </span>
                <h3 className="font-playfair text-base sm:text-lg lg:text-xl font-normal tracking-[-0.3px] leading-[1.3]">
                  Agentic AI: Autonomous Systems &amp; the Future of Work
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  A university panel exploring how agentic AI architectures are
                  redefining autonomy, decision-making, and the future of
                  human-machine collaboration.
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  UCP · Lahore · 2025
                </span>
              </div>
            </motion.div>

            {/* Kinnaird College keynote card with carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              <ImageCarousel images={KINNAIRD_IMAGES} alt="Keynote at Kinnaird College" />
              <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  KEYNOTE
                </span>
                <h3 className="font-playfair text-base sm:text-lg lg:text-xl font-normal tracking-[-0.3px] leading-[1.3]">
                  The Architecture of Innovation: Building What Lasts
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  A keynote on why lasting technology companies are built on
                  architectural discipline — not trends — and what the next
                  generation of builders should focus on.
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  Kinnaird College · Lahore · 2025
                </span>
              </div>
            </motion.div>

            {/* Remaining bottom cards */}
            {bottomCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
              >
                {card.featuredImage ? (
                  <div className="relative min-h-[160px] sm:min-h-[200px] overflow-hidden">
                    <Image
                      src={card.featuredImage}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <MediaPlaceholder label="MEDIA" icon="image" />
                )}
                <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6">
                  <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                    {card.tag}
                  </span>
                  <h3 className="font-playfair text-base sm:text-lg lg:text-xl font-normal tracking-[-0.3px] leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                    {card.description}
                  </p>
                  <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                    {card.eventMeta}
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
