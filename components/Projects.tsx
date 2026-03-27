"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" as const }}>
      {children}
    </motion.div>
  );
}

function StatusBadge({ label, variant }: { label: string; variant: "beta" | "active" }) {
  const styles = variant === "active"
    ? { bg: "rgba(34,197,94,0.07)", color: "rgba(134,239,172,0.7)", border: "1px solid rgba(34,197,94,0.12)" }
    : { bg: "rgba(148,163,184,0.07)", color: "rgba(148,163,184,0.65)", border: "1px solid rgba(148,163,184,0.12)" };
  return (
    <span className="inline-flex items-center gap-[5px] text-[10px] font-medium tracking-[0.5px] uppercase px-[9px] py-[3px] rounded-full align-middle ml-2 relative top-[-1px]"
      style={{ background: styles.bg, color: styles.color, border: styles.border }}>
      <span className="w-[4px] h-[4px] rounded-full" style={{ background: "currentColor", animation: "pulse 2.5s infinite" }} />
      {label}
    </span>
  );
}

function CardBadge({ label, variant }: { label: string; variant: "dev" | "done" | "live" }) {
  const map = {
    dev:  { bg: "rgba(234,179,8,.1)",  color: "#eab308", border: "1px solid rgba(234,179,8,.2)" },
    done: { bg: "rgba(34,197,94,.1)",  color: "#22c55e", border: "1px solid rgba(34,197,94,.2)" },
    live: { bg: "rgba(204,31,31,.12)", color: "#ff6b6b", border: "1px solid rgba(204,31,31,.25)" },
  };
  const s = map[variant];
  return (
    <span className="text-[10px] font-medium tracking-[1px] uppercase px-[10px] py-1 rounded-full flex-shrink-0 whitespace-nowrap"
      style={{ background: s.bg, color: s.color, border: s.border }}>
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section className="relative z-10 px-8 py-28" id="work">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-[11px] font-medium tracking-[2px] uppercase mb-3" style={{ color: "var(--red)" }}>Work</p>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-14"
            style={{ fontSize: "clamp(32px,4vw,52px)", color: "var(--text)" }}>
            Projects that ship.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* TaleTrails — wide */}
          <SectionReveal>
            <motion.div
              className="md:col-span-2 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
              style={{ background: "rgba(224,224,224,0.03)", border: "1px solid var(--border)" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                const card = el.closest(".card-hover-target") as HTMLElement;
                if (card) {
                  card.style.background = "rgba(255,255,255,0.055)";
                  card.style.borderColor = "rgba(224,224,224,0.14)";
                }
              }}
            >
              <CardHoverWrapper>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex flex-col gap-5 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[20px] font-bold tracking-tight leading-tight text-[var(--text)]">
                        TaleTrails
                        <StatusBadge label="Beta" variant="beta" />
                      </div>
                      <CardBadge label="In Development" variant="dev" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Flutter", "Gemini 1.5 Pro", "Cloudflare R2", "iOS / Android"].map(t => <Tag key={t}>{t}</Tag>)}
                    </div>
                    <p className="text-[14px] font-light text-[var(--muted)] leading-[1.7]">
                      Dynamic prompt engineering for 0–4 age group consistency &amp; Cloudflare R2 image streaming.
                      Custom generative engine produces age-appropriate Turkish narratives with latency-optimized asset delivery.
                      Currently in review on the <strong className="text-[rgba(224,224,224,0.75)] font-medium">App Store</strong> &amp; <strong className="text-[rgba(224,224,224,0.75)] font-medium">Google Play</strong>.
                    </p>
                    <CsBlock rows={[
                      { label: "Challenge", text: "Generating illustrations fast enough to hold a child's attention — sub-2s render latency was a hard requirement." },
                      { label: "Solution", text: "Built a Cloudflare Worker pipeline that pre-warms image generation in parallel with Gemini story output, cutting perceived latency to ~800ms." },
                    ]} />
                    <span className="text-[13px] font-medium text-[var(--muted2)] w-fit">
                      Private Repo
                    </span>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex">
                    <div className="w-[130px] rounded-[22px] overflow-hidden" style={{ border: "1.5px solid rgba(224,224,224,0.1)", boxShadow: "0 16px 40px rgba(0,0,0,.6)" }}>
                      <Image src="/screenshots/taletrails.jpg" alt="TaleTrails" width={260} height={520} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
              </CardHoverWrapper>
            </motion.div>
          </SectionReveal>

          {/* Relief */}
          <SectionReveal delay={0.1}>
            <ProjectCard
              screenshot="/screenshots/relief.jpg"
              name="Relief"
              statusLabel="Private Beta"
              statusVariant="beta"
              badgeLabel="In Development"
              badgeVariant="dev"
              tags={["Expo", "Gemini AI", "Supabase"]}
              desc="Women's health &amp; cycle tracking app with context-aware Gemini AI advisor. Supabase pgvector storage enables long-term health memory across sessions."
              csRows={[
                { label: "Challenge", text: "AI losing context across sessions — generic advice with no memory of past health entries." },
                { label: "Solution", text: "pgvector embeddings in Supabase retrieve semantically relevant history on each Gemini query, enabling meaningful long-term context." },
              ]}
              linkLabel="Private Repo"
              linkHref=""
            />
          </SectionReveal>

          {/* Elpis */}
          <SectionReveal delay={0.2}>
            <ProjectCard
              name="Elpis Software"
              statusLabel="Active"
              statusVariant="active"
              badgeLabel="Ongoing"
              badgeVariant="live"
              tags={["Startup", "n8n", "Flutter", "Automation"]}
              desc="AI-first software company. Founder-led, product-focused engineering — automation pipelines, mobile apps, and web platforms for growing businesses."
              csRows={[{
                label: "Clients",
                text: "wammtt.com · cezeridemir.com · malatyademircelik.com · malatyaozalpertaksi.com · arionorg.com · baranfotograf.com",
              }]}
              linkLabel="Visit company ↗"
              linkHref="https://elpisoftware.com"
            />
          </SectionReveal>
        </div>

        {/* Testimonial */}
        <SectionReveal delay={0.1}>
          <div className="mt-14 rounded-2xl px-9 py-8 relative"
            style={{ border: "1px solid var(--border)", background: "rgba(224,224,224,0.02)" }}>
            <span className="absolute top-4 left-6 text-[48px] leading-none font-serif select-none" style={{ color: "rgba(224,224,224,0.08)" }}>"</span>
            <p className="text-[15px] font-light text-[var(--muted)] leading-[1.8] italic pl-3 mb-5">
              Rakiplerimin önüne geçip müşteri sayımda artışa sebep oldu.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] flex-shrink-0" style={{ background: "var(--red)" }} />
              <span className="text-[12px] font-medium text-[var(--muted2)] tracking-[0.3px]">Client — Baran Fotoğrafçılık</span>
              <a href="https://baranfotograf.com" target="_blank" rel="noopener"
                className="text-[12px] text-[var(--muted2)] no-underline ml-auto hover:text-[var(--text)] transition-colors"
                style={{ borderBottom: "1px solid var(--border)" }}>
                baranfotograf.com ↗
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ── helpers ── */
function CardHoverWrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-light tracking-[0.3px] text-[var(--muted2)] px-[10px] py-[3px] rounded"
      style={{ background: "rgba(255,255,255,.04)", border: "1px solid var(--border)" }}>
      {children}
    </span>
  );
}

function CsBlock({ rows }: { rows: { label: string; text: string }[] }) {
  return (
    <div className="flex flex-col gap-2.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
      {rows.map(({ label, text }) => (
        <div key={label}>
          <span className="text-[9px] font-semibold tracking-[2px] uppercase text-[var(--muted2)]">{label}</span>
          <p className="text-[13px] font-light text-[var(--muted)] leading-[1.6] mt-0.5">{text}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ screenshot, name, statusLabel, statusVariant, badgeLabel, badgeVariant, tags, desc, csRows, linkLabel = "View on GitHub →", linkHref = "https://github.com/timeless-perfections" }: {
  screenshot?: string;
  name: string;
  statusLabel: string;
  statusVariant: "beta" | "active";
  badgeLabel: string;
  badgeVariant: "dev" | "done" | "live";
  tags: string[];
  desc: string;
  csRows: { label: string; text: string }[];
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <motion.div
      className="rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden h-full"
      style={{ background: "rgba(224,224,224,0.03)", border: "1px solid var(--border)" }}
      whileHover={{ y: -4, background: "rgba(255,255,255,0.055)", borderColor: "rgba(224,224,224,0.14)" }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
    >
      {screenshot && (
        <div className="rounded-[10px] overflow-hidden flex justify-center items-center" style={{ border: "1px solid var(--border)", background: "rgba(0,0,0,0.3)" }}>
          <Image src={screenshot} alt={name} width={200} height={360} className="h-[200px] w-auto block mx-auto object-contain" />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="text-[18px] font-bold tracking-tight text-[var(--text)] leading-tight">
          {name}
          <StatusBadge label={statusLabel} variant={statusVariant} />
        </div>
        <CardBadge label={badgeLabel} variant={badgeVariant} />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
      <p className="text-[13.5px] font-light text-[var(--muted)] leading-[1.7] flex-1"
        dangerouslySetInnerHTML={{ __html: desc }} />
      <CsBlock rows={csRows} />
      {linkHref ? (
        <a href={linkHref} target="_blank" rel="noopener"
          className="text-[13px] font-medium text-[var(--muted2)] no-underline hover:text-[var(--text)] transition-colors w-fit">
          {linkLabel}
        </a>
      ) : (
        <span className="text-[13px] font-medium text-[var(--muted2)] w-fit">
          {linkLabel}
        </span>
      )}
    </motion.div>
  );
}
