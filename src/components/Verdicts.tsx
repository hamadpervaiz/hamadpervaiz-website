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
      {/* Dots */}
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
      {/* Arrows */}
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

interface VerdictItem {
  id: string;
  title: string;
  slug: string;
  featuredImage: string | null;
  tag: string | null;
  status: string;
  meta: Record<string, string>;
  publishedAt: string | null;
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

// Hardcoded fallbacks when CMS is unavailable
const fallbackItems: VerdictItem[] = [
  { id: "f1", title: "The Death of the Digital Middleman", slug: "death-of-digital-middleman", featuredImage: "/images/architect-economy.jpg", tag: "VIDEO INTERVIEW · FEATURED", status: "published", meta: { role: "featured", description: "A PTV exclusive on how legacy distribution models are being dismantled by architecture-first software platforms.", eventMeta: "PTV · Lahore · 2024", youtubeId: "hGSXbTNFXcE" }, publishedAt: null },
  { id: "f2", title: "TechCrunch Disrupt: Battlefield 200", slug: "techcrunch-disrupt-battlefield", featuredImage: "/images/techcrunch-disrupt.jpg", tag: "KEYNOTE", status: "published", meta: { role: "side", description: "Representing Pakistan\u2019s tech ecosystem on the global stage \u2014 competing alongside 200 startups from 30+ countries.", eventMeta: "San Francisco · 2024" }, publishedAt: null },
  { id: "f4", title: "U.S. Consulate Strategic Dialogue", slug: "us-consulate-strategic-dialogue", featuredImage: null, tag: "CONFERENCE", status: "published", meta: { role: "bottom", description: "High-level strategic dialogue on Pakistan\u2019s tech ecosystem and cross-border innovation.", eventMeta: "Islamabad · 2024" }, publishedAt: null },
  { id: "f5", title: "Building for the Next Billion", slug: "building-for-next-billion", featuredImage: null, tag: "UNIVERSITY TALK", status: "published", meta: { role: "bottom", description: "Keynote address on building scalable technology infrastructure for underserved markets.", eventMeta: "LUMS · Lahore · 2025" }, publishedAt: null },
];

export default function Verdicts({ items }: { items?: VerdictItem[] | null }) {
  const [playing, setPlaying] = useState(false);
  const HIDDEN_SLUGS = ["systems-thinking-emerging-markets"];
  const allItems = (items ?? fallbackItems).filter(
    (i) => !HIDDEN_SLUGS.includes(i.slug)
  );

  const featured = allItems.find((i) => i.meta?.role === "featured") ?? allItems[0];
  const side = allItems.find((i) => i.meta?.role === "side") ?? allItems[1];
  const bottomCards = allItems.filter((i) => i.meta?.role === "bottom").length > 0
    ? allItems.filter((i) => i.meta?.role === "bottom")
    : allItems.slice(2);

  const youtubeId = featured?.meta?.youtubeId || "hGSXbTNFXcE";
  const featuredThumb = featured?.featuredImage || "/images/architect-economy.jpg";

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
            {/* Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              {playing ? (
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
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
                  <Image
                    src={featuredThumb}
                    alt={featured.title}
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
                  {featured.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[28px] font-normal tracking-[-0.5px] leading-[1.25]">
                  {featured.title}
                </h3>
                <p className="font-inter text-[13px] sm:text-sm font-light leading-[1.7] text-[var(--text-muted)]">
                  {featured.meta?.description}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {featured.meta?.eventMeta}
                </span>
              </div>
            </motion.div>

            {/* Side Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col border border-[var(--border-primary)] group hover:border-[var(--accent)]/20 transition-colors"
            >
              {side?.featuredImage ? (
                <div className="relative flex-1 min-h-[160px] sm:min-h-[200px] overflow-hidden">
                  <Image
                    src={side.featuredImage}
                    alt={side.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <MediaPlaceholder
                  label="PHOTOS"
                  icon="image"
                  className="flex-1"
                />
              )}
              <div className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7">
                <span className="font-mono text-[9px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
                  {side?.tag}
                </span>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-[22px] font-normal tracking-[-0.3px] leading-[1.3]">
                  {side?.title}
                </h3>
                <p className="font-inter text-[13px] font-light leading-[1.7] text-[var(--text-muted)]">
                  {side?.meta?.description}
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  {side?.meta?.eventMeta}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Hardcoded UCP Agentic AI card — always first, disconnected from CMS */}
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
                  A university panel exploring how agentic AI architectures are redefining autonomy, decision-making, and the future of human-machine collaboration.
                </p>
                <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                  UCP · Lahore · 2025
                </span>
              </div>
            </motion.div>

            {/* Remaining bottom cards from CMS or fallback */}
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
                    {card.meta?.description}
                  </p>
                  <span className="font-mono text-[10px] tracking-[2px] text-[var(--text-darker)]">
                    {card.meta?.eventMeta}
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
