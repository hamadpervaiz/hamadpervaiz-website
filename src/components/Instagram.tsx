"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const images = [
  "/images/hamad-image-1.jpeg",
  "/images/hamad-image-2.jpeg",
  "/images/hamad-image-3.jpeg",
  "/images/hamad-image-4.jpeg",
  "/images/hamad-image-5.jpeg",
];

export default function Instagram() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Total slides: original + duplicates for seamless loop
  const extendedImages = [...images, ...images, ...images];
  const total = images.length;

  const slideNext = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  // Auto-advance every 3 seconds
  useEffect(() => {
    timerRef.current = setInterval(slideNext, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideNext]);

  // When we reach the end of the second set, silently reset to the first set
  useEffect(() => {
    if (index >= total * 2) {
      const timeout = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setIndex(index - total);
          // Force reflow then re-enable transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (trackRef.current) {
                trackRef.current.style.transition =
                  "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
              }
            });
          });
        }
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  return (
    <section className="w-full bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 sm:gap-12 px-5 sm:px-8 md:px-12 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 sm:gap-5"
        >
          <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[var(--accent)]">
            FOLLOW ON INSTAGRAM
          </span>
          <div className="w-8 sm:w-10 h-px bg-[var(--accent)]" />
        </motion.div>

        <motion.a
          href="https://instagram.com/hamadpervaiz"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal tracking-[-1px] hover:text-[var(--accent)] transition-colors"
        >
          @hamadpervaiz
        </motion.a>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full overflow-hidden mt-8 sm:mt-12"
      >
        <div
          ref={trackRef}
          className="flex gap-3 sm:gap-4"
          style={{
            transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
            transform: `translateX(calc(-${index} * (min(320px, 70vw) + 12px)))`,
          }}
        >
          {extendedImages.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[min(320px,70vw)] sm:w-[280px] lg:w-[320px] aspect-square rounded overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Instagram post ${(i % total) + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
