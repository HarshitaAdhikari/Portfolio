import { useState, useEffect, useRef, Suspense, memo } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub, FaLinkedin, FaArrowRight, FaChevronDown,
  FaReact, FaCss3Alt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiJavascript, SiTailwindcss, SiHtml5, SiGit } from "react-icons/si";

const PROFILE_IMAGE = "/image.png";

const SKILLS = [
  { label: "React JS",     icon: <FaReact     style={{ color: "#22d3ee" }} /> },
  { label: "JavaScript",   icon: <SiJavascript style={{ color: "#facc15" }} /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
  { label: "HTML5",        icon: <SiHtml5      style={{ color: "#fb923c" }} /> },
  { label: "CSS3",         icon: <FaCss3Alt    style={{ color: "#60a5fa" }} /> },
];

const ROLES = [
  "Frontend Developer",
  "Dashboard UI Specialist",
  "Web Application Developer",
];

const SOCIALS = [
  { href: "https://github.com/HarshitaAdhikari",          icon: FaGithub,       label: "GitHub",   color: "#e2e8f0" },
  { href: "https://linkedin.com/in/harshita-adhikari",    icon: FaLinkedin,     label: "LinkedIn", color: "#60a5fa" },
  { href: "mailto:harshitaadhikari1234@mail.com",         icon: HiOutlineMail,  label: "Email",    color: "#22d3ee" },
];

const Tooltip = memo(({ label, children }) => (
  <div className="relative group/tip">
    {children}
    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
      px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap z-50
      opacity-0 scale-90 group-hover/tip:opacity-100 group-hover/tip:scale-100
      transition-all duration-150"
      style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", color: "#e2e8f0" }}>
      {label}
    </span>
  </div>
));

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap');

  :root { --c:#22d3ee; --b:#3b82f6; --p:#818cf8; }

  @keyframes spinSlow   { to { transform:rotate(360deg); } }
  @keyframes floatY     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes blobDrift  { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(30px,-20px) scale(1.06)} 70%{transform:translate(-18px,16px) scale(0.96)} }
  @keyframes blobDrift2 { 0%,100%{transform:translate(0,0) scale(1)} 35%{transform:translate(-35px,22px) scale(1.08)} 70%{transform:translate(22px,-18px) scale(0.94)} }
  @keyframes gradShift  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes ringExpand { 0%,100%{box-shadow:0 0 0 0 rgba(34,211,238,.3)} 50%{box-shadow:0 0 0 20px rgba(34,211,238,0)} }
  @keyframes shine      { 0%{left:-100%} 60%,100%{left:130%} }
  @keyframes fadeUp     { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeRight  { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes badgePop   { from{opacity:0;transform:scale(.75) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
  @keyframes bounceDot  { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(7px);opacity:1} }
  @keyframes scanline   { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
  @keyframes numberUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

  .font-outfit { font-family:'Outfit',sans-serif; }
  .font-mono   { font-family:'DM Mono',monospace; }

  .spin-slow   { animation:spinSlow 9s linear infinite; }
  .float-img   { animation:floatY 5.5s ease-in-out infinite; }
  .blob-a      { animation:blobDrift  15s ease-in-out infinite; }
  .blob-b      { animation:blobDrift2 18s ease-in-out infinite; }
  .blob-c      { animation:blobDrift  22s ease-in-out infinite reverse; }

  .grad-name {
    background:linear-gradient(135deg, #e0f2fe 0%, #67e8f9 30%, #60a5fa 65%, #a5b4fc 100%);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:gradShift 7s ease infinite;
  }
  .grad-role {
    background:linear-gradient(90deg, var(--c), var(--b));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }
  .ring-anim { animation:ringExpand 2.8s ease-in-out infinite; }

  .btn-primary {
    position:relative; overflow:hidden;
    background:linear-gradient(135deg, #22d3ee, #3b82f6);
    transition:all .3s ease;
  }
  .btn-primary::after {
    content:''; position:absolute; top:-50%; left:-100%;
    width:50%; height:200%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
    transform:skewX(-20deg);
    animation:shine 4s ease-in-out infinite;
  }
  .btn-primary:hover { transform:translateY(-2px) scale(1.03); box-shadow:0 0 32px rgba(34,211,238,.45), 0 8px 24px rgba(0,0,0,.4); }

  .btn-ghost {
    border:1px solid rgba(34,211,238,.3);
    background:rgba(34,211,238,.04);
    backdrop-filter:blur(12px);
    transition:all .3s ease;
  }
  .btn-ghost:hover { border-color:rgba(34,211,238,.7); background:rgba(34,211,238,.1); transform:translateY(-2px) scale(1.03); box-shadow:0 0 22px rgba(34,211,238,.25); }

  .skill-chip {
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(255,255,255,0.08);
    transition:all .25s ease;
  }
  .skill-chip:hover {
    background:rgba(34,211,238,0.07);
    border-color:rgba(34,211,238,0.3);
    transform:translateY(-3px) scale(1.05);
    box-shadow:0 8px 20px rgba(34,211,238,.15);
  }

  .social-btn {
    border:1px solid rgba(255,255,255,0.07);
    background:rgba(255,255,255,0.03);
    transition:all .25s ease;
  }
  .social-btn:hover { border-color:rgba(255,255,255,0.2); background:rgba(255,255,255,0.08); transform:translateY(-3px); }

  .scanline {
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(34,211,238,.06),transparent);
    animation:scanline 8s linear infinite;
    pointer-events:none;
  }

  /* staggered entrance */
  .s1{animation:fadeUp .65s ease both;animation-delay:.05s}
  .s2{animation:fadeUp .65s ease both;animation-delay:.18s}
  .s3{animation:fadeUp .65s ease both;animation-delay:.30s}
  .s4{animation:fadeUp .65s ease both;animation-delay:.42s}
  .s5{animation:fadeUp .65s ease both;animation-delay:.55s}
  .s6{animation:fadeUp .65s ease both;animation-delay:.68s}
  .s7{animation:fadeUp .65s ease both;animation-delay:.80s}
  .si{animation:fadeRight .75s ease both;animation-delay:.22s}
  .badge-pop{animation:badgePop .5s cubic-bezier(.34,1.56,.64,1) both}
  .bounce-arr{animation:bounceDot 1.6s ease-in-out infinite}
  .num-up{animation:numberUp .6s ease both}
`;

export default function Home() {
  const [typedText,   setTypedText]   = useState("");
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [loopNum,     setLoopNum]     = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [mounted,     setMounted]     = useState(false);
  const pauseRef   = useRef(false);
  const timeoutRef = useRef(null);

  const currentRole = ROLES[loopNum % ROLES.length];

  // Typing
  useEffect(() => {
    const tick = () => {
      if (pauseRef.current) return;
      if (isDeleting) {
        const next = currentRole.substring(0, typedText.length - 1);
        setTypedText(next);
        if (next === "") {
          setIsDeleting(false); setRoleVisible(false);
          timeoutRef.current = setTimeout(() => { setLoopNum(n => n + 1); setRoleVisible(true); pauseRef.current = false; }, 280);
        }
      } else {
        const next = currentRole.substring(0, typedText.length + 1);
        setTypedText(next);
        if (next === currentRole) {
          pauseRef.current = true;
          timeoutRef.current = setTimeout(() => { pauseRef.current = false; setIsDeleting(true); }, 1900);
        }
      }
    };
    timeoutRef.current = setTimeout(tick, isDeleting ? 65 : 115);
    return () => clearTimeout(timeoutRef.current);
  }, [typedText, isDeleting, loopNum, currentRole]);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    if (document.getElementById("home-v2-styles")) return;
    const s = document.createElement("style"); s.id = "home-v2-styles"; s.textContent = STYLES;
    document.head.appendChild(s);
    return () => document.getElementById("home-v2-styles")?.remove();
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-outfit relative min-h-screen overflow-hidden flex items-center justify-center px-5 py-24"
         style={{ background: "#04070f", color: "#f8fafc" }}>

      {/* ── Scanline effect ── */}
      <div className="scanline" />

      {/* ── Background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-a absolute -top-56 -left-56 w-[600px] h-[600px] rounded-full blur-[140px]"
             style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)" }} />
        <div className="blob-b absolute top-[35%] -right-56 w-[640px] h-[640px] rounded-full blur-[160px]"
             style={{ background: "radial-gradient(circle, rgba(59,130,246,0.11), transparent 70%)" }} />
        <div className="blob-c absolute -bottom-56 left-[30%] w-[560px] h-[560px] rounded-full blur-[150px]"
             style={{ background: "radial-gradient(circle, rgba(129,140,248,0.09), transparent 70%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.018]"
             style={{ backgroundImage: "radial-gradient(rgba(34,211,238,1) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[20%] w-px h-full opacity-[0.06]"
             style={{ background: "linear-gradient(to bottom, transparent, #22d3ee 30%, #3b82f6 70%, transparent)" }} />
        <div className="absolute top-0 right-[22%] w-px h-full opacity-[0.03]"
             style={{ background: "linear-gradient(to bottom, transparent, #22d3ee 30%, #3b82f6 70%, transparent)" }} />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ══ LEFT: Text content ══ */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left space-y-6">

            {/* Status pill */}
            <div className="s1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs tracking-[.15em] uppercase"
                 style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)", color: "#67e8f9", fontFamily: "'DM Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }} />
              Available for Work
            </div>

            {/* Name — massive, editorial */}
            <div className="s2">
              <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono" style={{ color: "rgba(34,211,238,0.5)" }}>
                Hello, I'm
              </p>
              <h1 className="grad-name font-black leading-[0.88] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}>
                Harshita
                <br />
                Adhikari
              </h1>
            </div>

            {/* Typing role */}
            <div className="s3 flex items-center gap-3 justify-center lg:justify-start h-9">
              <div className="h-px w-6 flex-shrink-0" style={{ background: "#22d3ee" }} />
              <div style={{
                opacity: roleVisible ? 1 : 0,
                transform: roleVisible ? "translateY(0)" : "translateY(5px)",
                transition: "opacity .2s ease, transform .2s ease",
              }}>
                <span className="text-base sm:text-lg font-medium tracking-wide" style={{ color: "#94a3b8" }}>
                  {typedText}
                </span>
                <span className="inline-block w-[2px] h-5 ml-1 rounded-sm align-middle animate-pulse"
                      style={{ background: "#22d3ee" }} />
              </div>
            </div>

            {/* Bio */}
            <p className="s4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
               style={{ color: "#94a3b8" }}>
              Frontend Developer with <span style={{ color: "#e2e8f0", fontWeight: 500 }}>10 months of professional experience</span> building
              responsive, scalable web applications with React.js, JavaScript, and modern CSS frameworks.
              Focused on clean UI, seamless UX, and performance-optimised solutions.
            </p>

            <p className="s4 text-xs sm:text-sm font-mono" style={{ color: "#67e8f9" }}>
              ▹ Real client projects &amp; dashboard interfaces @ Zanthium Technosoft
            </p>

            {/* CTAs */}
            <div className="s5 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/projects" className="w-full sm:w-auto">
                <button className="btn-primary w-full sm:w-auto flex items-center justify-center
                  gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm text-black tracking-wide">
                  View Projects
                  <FaArrowRight />
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="btn-ghost w-full sm:w-auto flex items-center justify-center
                  gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm tracking-wide"
                  style={{ color: "#67e8f9" }}>
                  Contact Me
                  <HiOutlineMail className="text-base" />
                </button>
              </Link>
            </div>

            {/* Socials */}
            <div className="s6 flex items-center gap-3 justify-center lg:justify-start">
              {SOCIALS.map(({ href, icon: Icon, label, color }) => (
                <Tooltip key={label} label={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}
                     className="social-btn w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all duration-250"
                     style={{ color: "#64748b" }}
                     onMouseEnter={e => e.currentTarget.style.color = color}
                     onMouseLeave={e => e.currentTarget.style.color = "#64748b"}>
                    <Icon />
                  </a>
                </Tooltip>
              ))}

              {/* Divider */}
              <div className="w-px h-6 mx-1" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* Stats */}
              <div className="flex items-center gap-4">
                {[{ val: "10", label: "Months Exp" }, { val: "15+", label: "Projects" }].map((s, i) => (
                  <div key={i} className="num-up text-center" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                    <div className="text-lg font-black leading-none" style={{ color: "#67e8f9" }}>{s.val}</div>
                    <div className="text-[10px] font-mono mt-0.5" style={{ color: "#475569" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ RIGHT: Profile image ══ */}
          <div className="si order-1 lg:order-2 flex-shrink-0 flex justify-center">
            <div className="relative group/img cursor-pointer">

              {/* Outermost ambient glow */}
              <div className="ring-anim absolute -inset-8 rounded-full opacity-20 blur-3xl"
                   style={{ background: "radial-gradient(circle, #22d3ee, #3b82f6, transparent 70%)" }} />

              {/* Rotating gradient ring */}
              <div className="absolute -inset-[3px] rounded-full spin-slow opacity-80"
                   style={{ background: "conic-gradient(from 0deg, #22d3ee, #3b82f6, #818cf8, #22d3ee)" }} />

              {/* Inner dark buffer */}
              <div className="absolute -inset-[1px] rounded-full" style={{ background: "#04070f" }} />

              {/* Photo */}
              <div className="float-img relative rounded-full overflow-hidden
                group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
                   style={{ width: "clamp(200px, 30vw, 290px)", height: "clamp(200px, 30vw, 290px)" }}>
                <Suspense fallback={<div className="w-full h-full rounded-full animate-pulse" style={{ background: "#1e293b" }} />}>
                  <img src={PROFILE_IMAGE} alt="Harshita Adhikari" loading="lazy"
                       className="w-full h-full object-cover" />
                </Suspense>
                {/* Overlay shimmer */}
                <div className="absolute inset-0 rounded-full pointer-events-none"
                     style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, transparent 60%)" }} />
              </div>

              {/* Role badge — bottom */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap
                flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono"
                   style={{
                     background: "rgba(4,7,15,0.9)",
                     border: "1px solid rgba(34,211,238,0.25)",
                     backdropFilter: "blur(16px)",
                     color: "#67e8f9",
                     boxShadow: "0 4px 24px rgba(34,211,238,0.12)",
                   }}>
                <FaReact className="spin-slow" style={{ color: "#22d3ee" }} />
                Frontend Developer
              </div>

              {/* Floating skill orbs */}
              {[
                { icon: <SiJavascript style={{ color: "#facc15", fontSize: 14 }} />, label: "JS",  top: "12%",  left: "-18%"  },
                { icon: <SiTailwindcss style={{ color: "#38bdf8", fontSize: 14 }} />, label: "TW",  top: "12%",  right: "-18%" },
                { icon: <FaReact      style={{ color: "#22d3ee", fontSize: 14 }} />, label: "RJ",  bottom: "22%", left: "-20%"  },
              ].map((orb, i) => (
                <div key={i} className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-mono"
                     style={{
                       ...orb,
                       background: "rgba(4,7,15,0.85)",
                       border: "1px solid rgba(255,255,255,0.08)",
                       backdropFilter: "blur(12px)",
                       color: "#94a3b8",
                       animation: `floatY ${4.5 + i}s ease-in-out infinite`,
                       animationDelay: `${i * 0.7}s`,
                       boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                     }}>
                  {orb.icon}
                  {orb.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ Skills strip ══ */}
        <div className="mt-20 relative">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
            <div className="h-px flex-1 max-w-[3rem]" style={{ background: "rgba(34,211,238,0.3)" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase font-mono" style={{ color: "rgba(34,211,238,0.5)" }}>
              Tech Stack
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {SKILLS.map((s, i) => (
              <span key={s.label}
                    className="badge-pop skill-chip flex items-center gap-2 px-4 py-2.5 rounded-xl
                               text-xs font-mono cursor-default"
                    style={{ color: "#94a3b8", animationDelay: `${0.85 + i * 0.08}s` }}>
                {s.icon}
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* ══ Scroll indicator ══ */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-[9px] uppercase tracking-[.25em] font-mono" style={{ color: "rgba(34,211,238,0.4)" }}>
            Scroll
          </span>
          <FaChevronDown className="bounce-arr text-xs" style={{ color: "rgba(34,211,238,0.5)" }} />
        </div>
      </div>
    </div>
  );
}
