"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" as const }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="relative z-10 px-8 py-28" id="about"
      style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[2px] uppercase mb-3" style={{ color: "var(--red)" }}>About</p>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-14"
            style={{ fontSize: "clamp(32px,4vw,52px)", color: "var(--text)" }}>
            The person behind the code.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-[15px] font-light text-[var(--muted)] leading-[1.85]">
                Hey — I'm <strong className="text-[var(--text)] font-medium">Hikmet</strong>. A product-focused
                engineer and founder who specializes in Flutter mobile development and Gemini AI integration.
                I take products from architecture to App Store — and everything in between.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15px] font-light text-[var(--muted)] leading-[1.85]">
                My edge is combining{" "}
                <strong className="text-[var(--text)] font-medium">mobile-first engineering</strong> with{" "}
                <strong className="text-[var(--text)] font-medium">practical AI implementation</strong> —
                not demos, but production systems with real latency, real users, and real constraints.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-xl p-6 flex flex-col gap-4"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="font-display font-extrabold text-[20px] tracking-tight text-[var(--text)]">
                Elpis Software
                <span style={{ color: "var(--red)" }}>.</span>
              </div>
              <p className="text-[13px] font-light text-[var(--muted)] leading-[1.65]">
                Founded to close the gap between AI capability and real product delivery.
                We build n8n automation pipelines, Flutter apps, and Gemini-powered tools
                for startups that can't afford to move slowly.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Founder", "Product-focused Engineer"].map(r => (
                  <span key={r} className="text-[10px] font-medium tracking-[1px] uppercase text-[var(--muted)] px-3 py-1 rounded-full"
                    style={{ border: "1px solid var(--border-h)" }}>
                    {r}
                  </span>
                ))}
              </div>
              <a href="https://elpisoftware.com" target="_blank" rel="noopener"
                className="text-[12px] font-medium text-[var(--muted2)] no-underline w-fit transition-colors hover:text-[var(--text)]"
                style={{ borderBottom: "1px solid var(--border)" }}>
                elpisoftware.com ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
