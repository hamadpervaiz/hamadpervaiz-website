"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1689150571822-1b573b695391?w=600&q=80",
  "https://images.unsplash.com/photo-1621073831231-faa453d28112?w=600&q=80",
  "https://images.unsplash.com/photo-1742119857260-b764e7c6e56d?w=600&q=80",
  "https://images.unsplash.com/photo-1761390184499-bb8b96fce928?w=600&q=80",
  "/images/insta-5.png",
];

export default function Instagram() {
  return (
    <section className="w-full bg-[var(--bg-primary)] px-5 sm:px-8 md:px-12 lg:px-6 py-16 sm:py-20 lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 sm:gap-12">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded overflow-hidden group cursor-pointer ${i === 4 ? "max-sm:col-span-2" : ""}`}
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
