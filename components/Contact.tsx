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

const socials = [
  {
    label: "elpisoftware.com",
    href: "https://elpisoftware.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/timeless-perfections",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karsenhikmet/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative z-10 px-8 py-36 text-center overflow-hidden" id="contact"
      style={{ borderTop: "1px solid var(--border)" }}>
      {/* bottom glow */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(204,31,31,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-2xl mx-auto relative">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[2px] uppercase mb-6" style={{ color: "var(--red)" }}>Get in touch</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display font-extrabold leading-[1.02] tracking-[-0.05em] mb-12"
            style={{
              fontSize: "clamp(48px, 8vw, 110px)",
              background: "linear-gradient(180deg, #E0E0E0 0%, rgba(224,224,224,.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let&apos;s build<br />something.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-14">
            <a
              href="mailto:hikmetkarsen@elpisoftware.com"
              className="font-display font-bold no-underline transition-all duration-200 hover:text-[var(--red-light)]"
              style={{
                fontSize: "clamp(16px,2vw,22px)",
                color: "var(--text)",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "3px",
                letterSpacing: "-0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--red)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "var(--border)")}
            >
              hikmetkarsen@elpisoftware.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex justify-center flex-wrap gap-3">
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener"
                className="flex items-center gap-2 text-[13px] font-medium text-[var(--muted)] no-underline px-5 py-2 rounded-lg transition-all duration-200 hover:text-[var(--text)] hover:-translate-y-0.5"
                style={{ border: "1px solid var(--border)", background: "rgba(255,255,255,.02)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-h)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(224,224,224,.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.02)";
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
