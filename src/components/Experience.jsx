import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

/* ─── Data ──────────────────────────────────────────────────── */
const experiences = [
  {
    title: "Frontend Developer",
    company: "Zanthium Technosoft Pvt. Ltd",
    location: "Full-Time, India",
    period: "June 2025 – March 2026",
    description: [
      "Developed responsive web applications using HTML, CSS, JavaScript.",
      "Built dashboard UIs based on client requirements.",
      "Collaborated with Backend team and integrated APIs.",
      "Optimized performance and ensured cross-browser compatibility.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
    icon: <FaCode />,
  },
];

/* ─── Scroll Reveal Hook ────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return [ref, visible];
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function Experience() {
  const [headerRef, headerVisible] = useReveal(0);
  const [cardRef,   cardVisible]   = useReveal(200);
  const [ctaRef,    ctaVisible]    = useReveal(400);

  const exp = experiences[0];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#050810", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,211,238,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(96,165,250,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 10% 80%, rgba(167,139,250,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid lines */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
               style={{ top: `${15 + i * 15}%` }} />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-20 sm:pb-24">

        {/* ══ HEADER ══════════════════════════════════════════ */}
        <div
          ref={headerRef}
          className="mb-12 sm:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Overline */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-cyan-400/60" />
            <span
              className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: "#67e8f9", fontFamily: "'DM Mono', monospace" }}
            >
              Professional Journey
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] mb-4 sm:mb-6"
            style={{ letterSpacing: "-0.03em", color: "#ffffff" }}
          >
            Work
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #67e8f9 0%, #60a5fa 60%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base max-w-md leading-relaxed" style={{ color: "#94a3b8" }}>
            Building interfaces that perform as well as they look — one pixel at a time.
          </p>
        </div>

        {/* ══ CARD ════════════════════════════════════════════ */}
        <div
          ref={cardRef}
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Outer gradient border */}
          <div
            className="relative rounded-2xl sm:rounded-3xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(255,255,255,0.08) 40%, rgba(96,165,250,0.25) 100%)",
            }}
          >
            {/* Inner card */}
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(160deg, #0d1526 0%, #080d1a 60%, #0a0f20 100%)" }}
            >
              {/* Corner glows */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-25"
                   style={{ background: "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.5), transparent 70%)" }} />
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-15"
                   style={{ background: "radial-gradient(circle at 100% 100%, rgba(96,165,250,0.5), transparent 70%)" }} />

              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">

                {/* ── Role header ── */}
                <div
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8 pb-6"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(96,165,250,0.15))",
                        border: "1px solid rgba(34,211,238,0.35)",
                        color: "#67e8f9",
                      }}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      {/* Job title — bright white */}
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                        style={{ color: "#f1f5f9", letterSpacing: "-0.01em" }}
                      >
                        {exp.title}
                      </h2>
                      {/* Company — cyan */}
                      <p
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: "#22d3ee", letterSpacing: "0.02em" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta chips */}
                  <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      <FaCalendarAlt style={{ color: "#67e8f9", fontSize: "10px" }} />
                      <span className="text-[10px] sm:text-xs" style={{ color: "#cbd5e1" }}>{exp.period}</span>
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      <FaMapMarkerAlt style={{ color: "#67e8f9", fontSize: "10px" }} />
                      <span className="text-[10px] sm:text-xs" style={{ color: "#cbd5e1" }}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* ── Key Contributions ── */}
                <div className="mb-8 sm:mb-10">
                  {/* Section label */}
                  <p
                    className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold mb-4"
                    style={{ color: "#67e8f9", fontFamily: "'DM Mono', monospace" }}
                  >
                    Key Contributions
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(34,211,238,0.06)";
                          e.currentTarget.style.borderColor = "rgba(34,211,238,0.2)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                        }}
                      >
                        {/* Bullet */}
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#22d3ee" }}
                        />
                        {/* Description text — clearly visible */}
                        <span
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{ color: "#e2e8f0" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Technologies ── */}
                <div>
                  <p
                    className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold mb-3 sm:mb-4"
                    style={{ color: "#67e8f9", fontFamily: "'DM Mono', monospace" }}
                  >
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full cursor-default transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "#cbd5e1",          /* clearly visible light slate */
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.03em",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(34,211,238,0.12)";
                          e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)";
                          e.currentTarget.style.color = "#e0f9fe";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                          e.currentTarget.style.color = "#cbd5e1";
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Reflection shadow */}
          <div
            className="mx-4 sm:mx-8 h-4 sm:h-6 rounded-b-2xl opacity-25"
            style={{
              background: "linear-gradient(to bottom, rgba(34,211,238,0.08), transparent)",
              filter: "blur(6px)",
            }}
          />
        </div>

        {/* ══ CTA ═════════════════════════════════════════════ */}
        <div
          ref={ctaRef}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-xs sm:text-sm text-center sm:text-left" style={{ color: "#94a3b8" }}>
            Open to new opportunities &amp; collaborations
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
                boxShadow: "0 0 24px rgba(34,211,238,0.25), 0 4px 16px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 36px rgba(34,211,238,0.4), 0 4px 20px rgba(0,0,0,0.5)"; e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 24px rgba(34,211,238,0.25), 0 4px 16px rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              <HiOutlineLightningBolt className="text-sm sm:text-base group-hover:rotate-12 transition-transform duration-300" />
              Let's collaborate
            </a>

            <a
              href="projects"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "#94a3b8",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            >
              View Projects →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
