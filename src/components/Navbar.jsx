import { useState, useEffect, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineChatAlt2,
  HiOutlineX,
  HiMenuAlt3,
} from "react-icons/hi";

const NAV_LINKS = [
  { name: "Home",       path: "/",           icon: HiOutlineHome },
  { name: "About",      path: "/about",       icon: HiOutlineUser },
  { name: "Skills",     path: "/skills",      icon: HiOutlineLightningBolt },
  { name: "Projects",   path: "/projects",    icon: HiOutlineCode },
  { name: "Experience", path: "/experience",  icon: HiOutlineBriefcase },
  { name: "Contact",    path: "/contact",     icon: HiOutlineChatAlt2 },
];

const ACCENT_COLORS = [
  "#22d3ee",
  "#3b82f6",
  "#a78bfa",
  "#f472b6",
  "#fb923c",
  "#34d399",
];

const DESKTOP_BREAKPOINT = 900;

const KEYFRAMES = `
  @keyframes spin-slow  { to { transform: rotate(360deg); } }
  @keyframes fade-in    { from { opacity:0; } to { opacity:1; } }
  @keyframes pulse-dot  { 0%,100% { transform:scale(1);   opacity:1;   }
                          50%      { transform:scale(1.8); opacity:0.5; } }

  .anim-spin-slow  { animation: spin-slow 10s linear infinite; }
  .anim-pulse-dot  { animation: pulse-dot 2.5s ease-in-out infinite; }
  .anim-fade-in    { animation: fade-in  0.22s ease both; }
`;

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < DESKTOP_BREAKPOINT : false
  );

  useEffect(() => {
    if (document.getElementById("nb-kf")) return;
    const s = document.createElement("style");
    s.id = "nb-kf";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
    return () => document.getElementById("nb-kf")?.remove();
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => {
      const mobile = window.innerWidth < DESKTOP_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const close  = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <>
      {/* ── Top bar (z-index increased to 60) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-[60] flex justify-center px-4"
        style={{
          paddingTop: scrolled ? "8px" : "16px",
          transition: "padding 0.4s ease, opacity 0.5s ease",
          opacity: mounted ? 1 : 0,
        }}
      >
        <div
          className="w-full max-w-[960px] rounded-full p-[1.5px] shadow-xl"
          style={{ background: "linear-gradient(90deg,#22d3ee,#3b82f6)" }}
        >
          <div
            className="rounded-full flex items-center h-[52px] px-4 gap-3"
            style={{ background: "rgba(5,8,18,0.92)", backdropFilter: "blur(24px)" }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 min-w-0"
              style={{ textDecoration: "none" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg,rgba(34,211,238,.18),rgba(59,130,246,.14))",
                  border: "1px solid rgba(34,211,238,.38)",
                }}
              >
                <FaReact className="anim-spin-slow" style={{ color: "#22d3ee", fontSize: 15 }} />
              </span>
              <span
                className="font-bold text-base whitespace-nowrap"
                style={{
                  background: "linear-gradient(90deg,#cffafe,#93c5fd,#e9d5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  maxWidth: "120px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Harshita
              </span>
            </Link>

            {/* Desktop nav unchanged */}
            {!isMobile && (
              <nav className="flex items-center gap-0.5 flex-1 justify-center">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-cyan-300"
                          : "text-gray-400 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span
                              className="anim-pulse-dot w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "#22d3ee", boxShadow: "0 0 7px #22d3ee" }}
                            />
                            <span
                              className="absolute inset-0 rounded-full"
                              style={{ background: "rgba(34,211,238,.1)" }}
                            />
                          </>
                        )}
                        <span className="relative z-10">{link.name}</span>
                        {isActive && (
                          <span
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                            style={{ background: "linear-gradient(90deg,#22d3ee,#3b82f6)" }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            )}

            {/* Right section: Hire Me + Hamburger button with higher z-index */}
            <div className={`flex items-center gap-2 shrink-0 ${isMobile ? "ml-auto" : ""}`}>
              <a
                href="mailto:harshitaadhikari1234@mail.com"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                style={{
                  background: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                  boxShadow: "0 0 12px rgba(34,211,238,.25)",
                }}
              >
                <HiOutlineMail style={{ fontSize: 14 }} />
                Hire Me
              </a>

              {isMobile && (
                <button
                  onClick={toggle}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  className="relative z-[70] w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: isOpen ? "rgba(34,211,238,.15)" : "rgba(255,255,255,.05)",
                    border: isOpen ? "1px solid rgba(34,211,238,.4)" : "1px solid rgba(255,255,255,.1)",
                  }}
                >
                  {isOpen
                    ? <HiOutlineX  style={{ color: "#67e8f9", fontSize: 20 }} />
                    : <HiMenuAlt3  style={{ color: "#d1d5db", fontSize: 20 }} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay (z-40) */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isOpen ? "bg-black/40 pointer-events-auto" : "bg-black/0 pointer-events-none"
          }`}
          onClick={close}
        />
      )}

      {/* Right sidebar (z-50) */}
      {isMobile && (
        <aside
          className={`
            fixed top-20 right-0 h-fit max-h-[470px] overflow-auto w-[72px] z-50
            bg-[rgba(8,12,26,0.4)] backdrop-blur-xl rounded-2xl
            transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.4,1.1)]
            flex flex-col items-center py-2
          `}
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <span
            className="absolute top-0 left-0 w-[1.5px] h-full pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent 0%, #22d3ee 30%, #3b82f6 70%, transparent 100%)",
              boxShadow: "0 0 6px #22d3ee",
            }}
          />

          <nav className="flex flex-col items-center gap-1 w-full flex-1">
            {NAV_LINKS.map((link, idx) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={close}
                  className="w-full"
                >
                  {({ isActive }) => (
                    <div
                      className="flex flex-col items-center justify-center gap-1.5 py-1 w-full cursor-pointer relative transition-all duration-200"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateX(0)" : "translateX(20px)",
                        transition: `opacity 0.2s ${0.03 * idx}s ease, transform 0.25s ${0.03 * idx}s cubic-bezier(0.2,0.9,0.4,1.2)`,
                      }}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-r-md"
                          style={{
                            background: "linear-gradient(180deg, #22d3ee, #3b82f6)",
                            boxShadow: "0 0 10px #22d3ee",
                          }}
                        />
                      )}
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                        style={{
                          background: isActive
                            ? "rgba(34,211,238,0.12)"
                            : "rgba(255,255,255,0.05)",
                          border: isActive
                            ? "1px solid rgba(34,211,238,0.5)"
                            : "1px solid rgba(255,255,255,0.08)",
                          color: isActive ? "#22d3ee" : ACCENT_COLORS[idx],
                          fontSize: 20,
                        }}
                      >
                        <Icon />
                      </span>
                      <span
                        className="text-[9px] font-semibold tracking-wide uppercase"
                        style={{
                          color: isActive ? "#22d3ee" : "rgba(209,213,219,0.7)",
                        }}
                      >
                        {link.name}
                      </span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* <a
            href="mailto:harshitaadhikari1234@mail.com"
            onClick={close}
            title="Contact me"
            className="w-11 h-11 rounded-xl flex items-center justify-center text-black text-xl shadow-lg mt-auto transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
              boxShadow: "0 0 14px rgba(34,211,238,0.5)",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
              transition: `opacity 0.25s 0.3s ease, transform 0.3s 0.3s cubic-bezier(0.2,0.9,0.4,1.2)`,
            }}
          >
            <HiOutlineMail />
          </a> */}
        </aside>
      )}
    </>
  );
}