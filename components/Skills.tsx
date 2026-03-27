"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stack = ["Flutter","Dart","React Native","Next.js","Python","Gemini AI","n8n","Supabase","Firebase","Cloudflare","Expo","Claude","Windsurf","Prompt Engineering"];
const highlighted = ["Flutter","Dart","Gemini AI","Claude","Windsurf"];

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

export default function Skills() {
  return (
    <section className="relative z-10 px-8 py-28" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <Reveal>
              <p className="text-[11px] font-medium tracking-[2px] uppercase mb-3" style={{ color: "var(--red)" }}>Tech Stack</p>
              <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-8"
                style={{ fontSize: "clamp(32px,4vw,52px)", color: "var(--text)" }}>
                Tools I ship with.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5">
                {stack.map(tech => {
                  const hl = highlighted.includes(tech);
                  return (
                    <span key={tech}
                      className="text-[13px] font-light px-4 py-2 rounded-lg transition-all duration-200 cursor-default"
                      style={hl
                        ? { color: "var(--text)", border: "1px solid rgba(204,31,31,.3)", background: "var(--red-dim)" }
                        : { color: "var(--muted)", border: "1px solid var(--border)", background: "rgba(255,255,255,.04)" }
                      }
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="font-sans italic font-light leading-[1.3] mb-6 text-[var(--text)]"
              style={{ fontSize: "clamp(22px,2.8vw,34px)" }}>
              "I don't just write code.<br />I build <strong className="not-italic font-semibold">products.</strong>"
            </p>
            <p className="text-[15px] font-light text-[var(--muted)] leading-[1.8]">
              From idea to App Store. Product thinking, clean architecture, and shipping fast —
              without cutting corners on either. Specializing in Flutter and AI integration.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
