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
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const config = formConfigs[intent];

  const resetForm = () => {
    setField1("");
    setField2("");
    setField3("");
    setField4("");
  };

  const handleIntentChange = (key: Intent) => {
    setIntent(key);
    resetForm();
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    setError("");

    if (!field1.trim() || !field2.trim() || !field3.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          field1: field1.trim(),
          field2: field2.trim(),
          field3: field3.trim(),
          field4: field4.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
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
          <div className="w-full flex justify-center py-8" style={{ background: "var(--radial-heading)" }}>
            <h1 className="font-playfair text-[40px] sm:text-[52px] lg:text-[64px] font-normal tracking-[-2px] text-[var(--text-primary)] text-center">
              The Gate.
            </h1>
          </div>

          <div className="h-5 sm:h-7" />

          {/* Description */}
          <p className="font-inter text-[13px] sm:text-[15px] font-light leading-[1.9] text-[var(--text-muted)] text-center max-w-[520px]">
            My time is aggressively protected. State your objective clearly. If
            there is asymmetric leverage, you will be contacted.
          </p>

          <div className="h-14 sm:h-[72px]" />

          {/* Intent Label */}
          <span className="font-poppins text-[10px] font-medium tracking-[3px] text-[var(--text-dim)] self-start">
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
                  onClick={() => handleIntentChange(card.key)}
                  className={`flex-1 flex flex-col gap-4 rounded-sm p-6 sm:py-8 sm:px-6 text-left transition-all duration-300 border ${
                    active
                      ? "bg-[var(--bg-card)] border-[var(--accent)]"
                      : "bg-[var(--bg-elevated)] border-[var(--border-faint)] hover:border-[var(--border-medium)]"
                  }`}
                >
                  <i
                    className={`icon-lucide text-[24px] transition-colors duration-300 ${
                      active ? "text-[var(--accent)]" : "text-[var(--text-dim)]"
                    }`}
                  >
                    {card.icon}
                  </i>
                  <span
                    className={`font-poppins text-[13px] sm:text-[14px] font-semibold tracking-[0.3px] transition-colors duration-300 ${
                      active ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {card.title}
                  </span>
                  <span className="font-poppins text-[11px] sm:text-[12px] font-light leading-[1.6] text-[var(--text-dim)]">
                    {card.desc}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="h-12 sm:h-16" />

          {/* Gradient Divider */}
          <div className="w-full h-px" style={{ background: "var(--gradient-divider)" }} />

          <div className="h-12 sm:h-16" />

          {/* Form Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={intent}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-md border border-[var(--border-faint)] backdrop-blur-2xl p-6 sm:p-8 lg:py-12 lg:px-11 flex flex-col"
              style={{
                background: "var(--form-card-bg)",
              }}
            >
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="font-poppins text-[10px] font-medium tracking-[3px] text-[var(--text-muted)]">
                  YOUR DETAILS
                </span>
                <span className="font-poppins text-[11px] font-light text-[var(--text-dim)]">
                  All fields required unless noted
                </span>
              </div>

              <div className="h-8 sm:h-9" />

              {/* Row 1: Two fields */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[var(--text-muted)]">
                    {config.field1}
                  </label>
                  <input
                    type="text"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-input)] rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-dark)] outline-none focus:border-[var(--accent)]/40 transition-colors"
                    placeholder={config.field1}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[var(--text-muted)]">
                    {config.field2}
                  </label>
                  <input
                    type="text"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-input)] rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-dark)] outline-none focus:border-[var(--accent)]/40 transition-colors"
                    placeholder={config.field2}
                  />
                </div>
              </div>

              <div className="h-6" />

              {/* Field 3: Textarea */}
              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[var(--text-muted)]">
                  {config.field3Label}
                </label>
                <textarea
                  rows={3}
                  value={field3}
                  onChange={(e) => setField3(e.target.value)}
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-input)] rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-dark)] outline-none focus:border-[var(--accent)]/40 transition-colors resize-none leading-[1.7]"
                  placeholder={config.field3Placeholder}
                />
              </div>

              <div className="h-6" />

              {/* Field 4 */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <label className="font-poppins text-[12px] font-medium tracking-[0.3px] text-[var(--text-muted)]">
                    {config.field4Label}
                  </label>
                  {config.field4Optional && (
                    <span className="font-poppins text-[10px] italic font-light text-[var(--text-dim)]">
                      Optional
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  value={field4}
                  onChange={(e) => setField4(e.target.value)}
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-input)] rounded-md px-[18px] py-4 font-poppins text-[16px] sm:text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-dark)] outline-none focus:border-[var(--accent)]/40 transition-colors"
                  placeholder={config.field4Placeholder}
                />
              </div>

              <div className="h-8 sm:h-11" />

              {/* Error Message */}
              {error && (
                <div className="mb-4 px-4 py-3 rounded-md border border-red-500/30 bg-red-500/5">
                  <p className="font-poppins text-[13px] text-red-400">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="mb-4 px-4 py-3 rounded-md border border-[var(--accent)]/30 bg-[var(--accent)]/5">
                  <p className="font-poppins text-[13px] text-[var(--accent)]">
                    Request submitted. You will be contacted within 48 hours.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={submitting || submitted}
                className={`w-full flex items-center justify-center gap-3 rounded-full py-[18px] transition-colors ${
                  submitted
                    ? "bg-[var(--accent)]/20 cursor-default"
                    : submitting
                      ? "bg-[var(--bg-button)]/60 cursor-wait"
                      : "bg-[var(--bg-button)] hover:opacity-90"
                }`}
              >
                <span className={`font-poppins text-[12px] font-semibold tracking-[2.5px] ${submitted ? "text-[var(--accent)]" : "text-[var(--text-button)]"}`}>
                  {submitted ? "REQUEST SENT" : submitting ? "SENDING..." : "SUBMIT REQUEST"}
                </span>
                {!submitting && !submitted && (
                  <i className="icon-lucide text-[16px] text-[var(--text-button)]">
                    arrow-right
                  </i>
                )}
                {submitted && (
                  <i className="icon-lucide text-[16px] text-[var(--accent)]">
                    check
                  </i>
                )}
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="h-10 sm:h-12" />

          {/* Status Line */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--accent)]/50" />
            <span className="font-poppins text-[10px] tracking-[0.5px] text-[var(--text-dim)]">
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
            <div className="absolute inset-0 bg-[var(--bg-modal-overlay)] backdrop-blur-[20px]" />

            {/* Consent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[560px] rounded-2xl border border-[var(--border-faint)] p-6 sm:p-10 lg:p-[52px] flex flex-col backdrop-blur-[32px]"
              style={{
                background: "var(--modal-card-bg)",
              }}
            >
              {/* Shield Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-input)] border border-[var(--border-faint)] flex items-center justify-center">
                <i className="icon-lucide text-[22px] text-[var(--accent)]">
                  shield-check
                </i>
              </div>

              <div className="h-7 sm:h-8" />

              {/* Heading */}
              <h2 className="font-playfair text-[24px] sm:text-[28px] lg:text-[30px] font-normal tracking-[-0.5px] leading-[1.4] text-[var(--text-primary)]">
                My time is aggressively protected.
              </h2>

              <div className="h-5 sm:h-6" />

              {/* Rules */}
              <p className="font-inter text-[13px] sm:text-[14px] font-light leading-[1.85] text-[var(--text-muted)]">
                I do not take introductory calls, pick-your-brain sessions, or
                unstructured meetings. I only respond to asymmetric
                opportunities, high-leverage architectural problems, and
                contrarian founders.
              </p>
              <br />
              <p className="font-inter text-[13px] sm:text-[14px] font-light leading-[1.85] text-[var(--text-muted)]">
                State your objective clearly. If you meet this criteria,
                proceed.
              </p>

              <div className="h-8 sm:h-10" />

              {/* Divider */}
              <div className="w-full h-px bg-[var(--border-faint)]" />

              <div className="h-7 sm:h-9" />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setConsented(true)}
                  className="flex items-center justify-center gap-2.5 bg-[var(--bg-button)] rounded-full px-7 sm:px-9 py-4 hover:opacity-90 transition-colors"
                >
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold tracking-[0.5px] text-[var(--text-button)] whitespace-nowrap">
                    I Understand. Proceed.
                  </span>
                  <i className="icon-lucide text-[16px] text-[var(--text-button)]">
                    arrow-right
                  </i>
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="px-5 sm:px-6 py-3 sm:py-4 hover:opacity-80 transition-opacity"
                >
                  <span className="font-poppins text-[12px] sm:text-[13px] text-[var(--text-dark)]">
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
