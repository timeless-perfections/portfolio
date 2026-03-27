"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const h = document.documentElement;
      setProgress((window.scrollY / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "Skills", "About", "Contact"];

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 z-[10000] h-[2px] pointer-events-none transition-all duration-75"
        style={{ width: `${progress}%`, background: "var(--red-light)" }}
      />

      {/* Mesh glow */}
      <div className="fixed -top-28 -right-28 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, #CC1F1F, transparent 70%)", opacity: 0.05 }} />
      <div className="fixed -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, #CC1F1F, transparent 70%)", opacity: 0.03 }} />

      <nav
        className="fixed top-[2px] left-0 right-0 z-50 h-[60px] flex items-center justify-between px-8 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,8,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <motion.a
          href="#"
          className="flex items-center gap-2 font-display font-extrabold text-[18px] text-[var(--text)] no-underline tracking-tight"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        >
          <span
            className="w-[5px] h-[5px] rounded-full flex-shrink-0"
            style={{ background: "var(--red)", boxShadow: "0 0 6px rgba(255,51,51,.6)", animation: "pulse 2.4s infinite" }}
          />
          HK
        </motion.a>

        {/* Desktop links */}
        <motion.div
          className="hidden md:flex gap-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--muted)] no-underline px-3 py-1.5 rounded-md transition-all duration-200 hover:text-[var(--text)] hover:bg-white/[0.06]"
            >
              {l}
            </a>
          ))}
        </motion.div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-[62px] left-0 right-0 z-40 flex flex-col py-2"
            style={{ background: "rgba(8,8,8,0.97)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[13px] font-medium tracking-[2px] uppercase text-[var(--muted)] no-underline px-6 py-4 border-b border-[var(--border)] hover:text-[var(--text)] transition-colors last:border-b-0"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(.65); }
        }
      `}</style>
    </>
  );
}
