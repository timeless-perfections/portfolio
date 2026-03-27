"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 pt-24 pb-20 overflow-hidden z-10"
    >
      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(204,31,31,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -60%)",
        }}
      />

      <div className="max-w-4xl mx-auto w-full">
        {/* Badge */}
        <motion.div {...fadeUp(0.5)} className="mb-10 w-fit">
          <span
            className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--muted)] px-[14px] py-[5px] rounded-full"
            style={{ border: "1px solid rgba(204,31,31,.35)", background: "rgba(204,31,31,0.04)" }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{ background: "var(--red-light)", animation: "pulse 2s infinite" }}
            />
            Available for new projects
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="font-display font-extrabold leading-[1.02] tracking-[-0.04em] mb-7"
          style={{ fontSize: "clamp(42px, 7.5vw, 88px)" }}
        >
          <motion.span {...fadeUp(0.65)} className="block text-[var(--text)]">
            I bridge the gap between
          </motion.span>
          <motion.span {...fadeUp(0.8)} className="block">
            <span
              style={{
                background: "linear-gradient(135deg, #E0E0E0 0%, rgba(224,224,224,.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI potential &amp;{" "}
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--red) 0%, #ff6b6b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              production.
            </span>
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.95)}
          className="text-[var(--muted)] font-light leading-[1.75] mb-11 max-w-xl"
          style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
        >
          Founder of{" "}
          <strong className="text-[rgba(224,224,224,0.9)] font-medium">Elpis Software.</strong>{" "}
          Building high-performance mobile ecosystems with Flutter and engineering context-aware AI
          agents for real users. Currently shipping{" "}
          <strong className="text-[rgba(224,224,224,0.9)] font-medium">TaleTrails.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.1)} className="flex flex-wrap gap-3 mb-20">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text)] px-6 py-[11px] rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--red)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--red)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(204,31,31,.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text)] px-6 py-[11px] rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.04]"
            style={{ border: "1px solid var(--border)" }}
          >
            Get in Touch →
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          {...fadeUp(1.25)}
          className="flex flex-wrap gap-10 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { val: "10+", key: "Systems delivered" },
            { val: "2+", key: "Years building" },
            { val: "1",  key: "Company founded" },
          ].map(({ val, key }) => (
            <div key={key}>
              <div className="font-display font-extrabold text-[26px] tracking-tight text-[var(--text)] leading-none">
                {val}
              </div>
              <div className="text-[12px] text-[var(--muted2)] mt-1 tracking-[0.3px]">{key}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
