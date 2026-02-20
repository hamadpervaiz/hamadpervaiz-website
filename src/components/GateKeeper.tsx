"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Intent = "venture" | "enterprise" | "press";

const intentCards: {
  key: Intent;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    key: "venture",
    icon: "trending-up",
    title: "Venture Investment",
    desc: "Propose a deal, share a thesis, or present a data room",
  },
  {
    key: "enterprise",
    icon: "layers",
    title: "Enterprise Architecture",
    desc: "Mission-critical software, systems design, or advisory",
  },
  {
    key: "press",
    icon: "mic",
    title: "Media & Press",
    desc: "Interview requests, speaking engagements, or press inquiries",
  },
];

const formConfigs: Record<
  Intent,
  {
    field1: string;
    field2: string;
    field3Label: string;
    field3Placeholder: string;
    field4Label: string;
    field4Optional: boolean;
    field4Placeholder: string;
  }
> = {
  venture: {
    field1: "Full Name",
    field2: "Company / URL",
    field3Label: "Your Objective",
    field3Placeholder:
      "Be precise — what do you want to build, invest in, or discuss?",
    field4Label: "Data Room / Memo URL",
    field4Optional: true,
    field4Placeholder: "https://",
  },
  enterprise: {
    field1: "Full Name",
    field2: "Corporate Entity",
    field3Label: "The Systemic Bottleneck",
    field3Placeholder:
      "Describe the systemic problem — scale, impact, existing failures.",
    field4Label: "Capital Allocation",
    field4Optional: false,
    field4Placeholder: "<$50K | $50K-$200K | $200K+>",
  },
  press: {
    field1: "Full Name",
    field2: "Publication / Event Name",
    field3Label: "Audience Scale & Demographic",
    field3Placeholder: "eg. 50k Monthly Listeners, Tier 1 Tech",
    field4Label: "Requested Angle / Topic",
    field4Optional: false,
    field4Placeholder: "The future of enterprise architecture in the age of AI.",
  },
};

export default function GateKeeper() {
  const router = useRouter();
  const [consented, setConsented] = useState(false);
  const [intent, setIntent] = useState<Intent>("venture");

  const config = formConfigs[intent];

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* ── Gate Page (always rendered, blurred when consent modal shows) ── */}
      <div
        className={`min-h-screen flex flex-col items-center transition-all duration-500 ${
          !consented ? "blur-md scale-[1.01] pointer-events-none select-none" : ""
        }`}
      >
        <div className="h-[80px] sm:h-[100px] lg:h-[120px] w-full shrink-0" />

        {/* Gate Column */}
        <div className="w-full max-w-[804px] px-5 sm:px-8 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[var(--accent)]/40" />
            <span className="font-inter text-[10px] sm:text-[11px] tracking-[3px] text-[var(--accent)]">
              06 — THE GATE
            </span>
            <div className="w-8 h-px bg-[var(--accent)]/40" />
          </div>

          <div className="h-8 sm:h-10" />

          {/* Heading */}
          <div className="w-full flex justify-center py-8 bg-[radial-gradient(ellipse_at_center,_#6AABBF0C_0%,_transparent_70%)]">
            <h1 className="font-playfair text-[40px] sm:text-[52px] lg:text-[64px] font-normal tracking-[-2px] text-white text-center">
              The Gate.
            </h1>
          </div>

          <div className="h-5 sm:h-7" />

          {/* Description */}
          <p className="font-inter text-[13px] sm:text-[15px] font-light leading-[1.9] text-[#888] text-center max-w-[520px]">
            My time is aggressively protected. State your objective clearly. If
            there is asymmetric leverage, you will be contacted.
          </p>

          <div className="h-14 sm:h-[72px]" />

          {/* Intent Label */}
          <span className="font-poppins text-[10px] font-medium tracking-[3px] text-[#777] self-start">
            SELECT YOUR INTENT
          </span>

          <div className="h-5 sm:h-6" />

          {/* Intent Cards */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            {intentCards.map((card) => {
              const active = intent === card.key;
              return (
                <button
                  key={card.key}
                  onClick={() => setIntent(card.key)}
                  className={`flex-1 flex flex-col gap-4 rounded-sm p-6 sm:py-8 sm:px-6 text-left transition-all duration-300 border ${
                    active
                      ? "bg-[#080808] border-[var(--accent)]"
                      : "bg-[#050505] border-white/10 hover:border-white/20"
                  }`}
                >
                  <i
                    className={`icon-lucide text-[24px] transition-colors duration-300 ${
                      active ? "text-[var(--accent)]" : "text-[#666]"
                    }`}
                  >
                    {card.icon}
                  </i>
                  <span
                    className={`font-poppins text-[13px] sm:text-[14px] font-semibold tracking-[0.3px] transition-colors duration-300 ${
                      active ? "text-white" : "text-[#ccc]"
                    }`}
                  >
                    {card.title}
                  </span>
                  <span className="font-poppins text-[11px] sm:text-[12px] font-light leading-[1.6] text-[#777]">
                    {card.desc}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="h-12 sm:h-16" />

          {/* Gradient Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <div className="h-12 sm:h-16" />

          {/* Form Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={intent}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-md border border-white/12 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 lg:py-12 lg:px-11 flex flex-col"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 30%), rgba(255,255,255,0.03)",
              }}
            >
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="font-poppins text-[10px] font-medium tracking-[3px] text-[#888]">
                  YOUR DETAILS
                </span>
                <span className="font-poppins text-[11px] font-light text-[#666]">
                  All fields required unless noted
                </span>
              </div>

              <div className="h-8 sm:h-9" />

              {/* Row 1: Two fields */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[#999]">
                    {config.field1}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.025] border border-white/13 rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-white placeholder:text-[#555] outline-none focus:border-[var(--accent)]/40 transition-colors"
                    placeholder={config.field1}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[#999]">
                    {config.field2}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.025] border border-white/13 rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-white placeholder:text-[#555] outline-none focus:border-[var(--accent)]/40 transition-colors"
                    placeholder={config.field2}
                  />
                </div>
              </div>

              <div className="h-6" />

              {/* Field 3: Textarea */}
              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[#999]">
                  {config.field3Label}
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-white/[0.025] border border-white/13 rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-white placeholder:text-[#555] outline-none focus:border-[var(--accent)]/40 transition-colors resize-none leading-[1.7]"
                  placeholder={config.field3Placeholder}
                />
              </div>

              <div className="h-6" />

              {/* Field 4 */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[#999]">
                    {config.field4Label}
                  </label>
                  {config.field4Optional && (
                    <span className="font-poppins text-[10px] italic font-light text-[#666]">
                      Optional
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  className="w-full bg-white/[0.025] border border-white/13 rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-white placeholder:text-[#555] outline-none focus:border-[var(--accent)]/40 transition-colors"
                  placeholder={config.field4Placeholder}
                />
              </div>

              <div className="h-8 sm:h-11" />

              {/* Submit Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-white rounded-full py-[18px] hover:bg-white/90 transition-colors">
                <span className="font-poppins text-[12px] font-semibold tracking-[2.5px] text-black">
                  SUBMIT REQUEST
                </span>
                <i className="icon-lucide text-[16px] text-black">
                  arrow-right
                </i>
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="h-10 sm:h-12" />

          {/* Status Line */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--accent)]/50" />
            <span className="font-poppins text-[10px] tracking-[0.5px] text-[#777]">
              Expected response within 48 hours
            </span>
          </div>
        </div>

        <div className="h-[80px] sm:h-[100px] lg:h-[120px] w-full shrink-0" />
      </div>

      {/* ── Consent Modal Overlay (State 1) ── */}
      <AnimatePresence>
        {!consented && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-5"
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[20px]" />

            {/* Consent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[560px] rounded-2xl border border-white/10 p-6 sm:p-10 lg:p-[52px] flex flex-col backdrop-blur-[32px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 40%), rgba(10,10,10,0.93)",
              }}
            >
              {/* Shield Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/7 flex items-center justify-center">
                <i className="icon-lucide text-[22px] text-[var(--accent)]">
                  shield-check
                </i>
              </div>

              <div className="h-7 sm:h-8" />

              {/* Heading */}
              <h2 className="font-playfair text-[24px] sm:text-[28px] lg:text-[30px] font-normal tracking-[-0.5px] leading-[1.4] text-white">
                &ldquo;My time is aggressively protected.&rdquo;
              </h2>

              <div className="h-5 sm:h-6" />

              {/* Rules */}
              <p className="font-inter text-[13px] sm:text-[14px] font-light leading-[1.85] text-[#888]">
                I do not take introductory calls, pick-your-brain sessions, or
                unstructured meetings. I only respond to asymmetric
                opportunities, high-leverage architectural problems, and
                contrarian founders.
              </p>
              <br />
              <p className="font-inter text-[13px] sm:text-[14px] font-light leading-[1.85] text-[#888]">
                State your objective clearly. If you meet this criteria,
                proceed.
              </p>

              <div className="h-8 sm:h-10" />

              {/* Divider */}
              <div className="w-full h-px bg-white/7" />

              <div className="h-7 sm:h-9" />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setConsented(true)}
                  className="flex items-center justify-center gap-2.5 bg-white rounded-full px-7 sm:px-9 py-4 hover:bg-white/90 transition-colors"
                >
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold tracking-[0.5px] text-black whitespace-nowrap">
                    I Understand. Proceed.
                  </span>
                  <i className="icon-lucide text-[16px] text-black">
                    arrow-right
                  </i>
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="px-5 sm:px-6 py-3 sm:py-4 hover:opacity-80 transition-opacity"
                >
                  <span className="font-poppins text-[12px] sm:text-[13px] text-[#555]">
                    Leave
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
