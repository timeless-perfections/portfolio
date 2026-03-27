"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 px-8 py-5 flex items-center justify-between flex-wrap gap-3"
      style={{ borderTop: "1px solid var(--border)" }}>
      <span className="text-[12px] text-[var(--muted2)] tracking-[0.2px]">
        © 2026 Hikmet Karsen · Elpis Software
      </span>
      <div className="flex items-center gap-2 text-[12px] text-[var(--muted2)]">
        <span className="w-[6px] h-[6px] rounded-full"
          style={{ background: "#22C55E", boxShadow: "0 0 5px rgba(34,197,94,.6)", animation: "pulse 2s infinite" }} />
        Available for work
      </div>
    </footer>
  );
}
