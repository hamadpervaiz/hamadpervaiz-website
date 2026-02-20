"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos: { type: "text" | "image"; content?: string; src?: string; width: number; height: number; mobileScale?: number }[] = [
  { type: "text", content: "TechCrunch", width: 0, height: 0 },
  { type: "image", src: "/images/barclays.png", width: 120, height: 30, mobileScale: 0.7 },
  { type: "image", src: "/images/aus-gov.png", width: 60, height: 45, mobileScale: 0.7 },
  { type: "image", src: "/images/packages.png", width: 80, height: 45, mobileScale: 0.7 },
  { type: "image", src: "/images/samsung.png", width: 120, height: 24, mobileScale: 0.7 },
  { type: "image", src: "/images/us-consulate.png", width: 45, height: 45, mobileScale: 0.7 },
];

export default function SilentFlex() {
  return (
    <section className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-primary)] py-14 sm:py-16 lg:py-[100px] px-5 sm:px-8 md:px-12 lg:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] text-[var(--text-darker)] text-center leading-relaxed"
        >
          OPERATING AT THE INTERSECTION OF GLOBAL TECH &amp; STRATEGY
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full overflow-hidden"
        >
          <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-12 lg:gap-16 xl:gap-20">
            {logos.map((logo, i) =>
              logo.type === "text" ? (
                <span
                  key={i}
                  className="font-inter text-sm sm:text-base lg:text-lg font-bold text-[var(--text-primary)] opacity-40 whitespace-nowrap"
                >
                  {logo.content}
                </span>
              ) : (
                <div
                  key={i}
                  className="relative opacity-50 flex-shrink-0 max-sm:scale-[0.7] origin-center"
                  style={{ width: logo.width, height: logo.height }}
                >
                  <Image
                    src={logo.src!}
                    alt="Partner logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
