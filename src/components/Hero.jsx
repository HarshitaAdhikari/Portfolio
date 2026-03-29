import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaChevronDown,
  FaReact,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

/* ─────────────────────────────────────────────
   SKILL CONFIG
───────────────────────────────────────────── */
const SKILLS = [
  { label: "React JS",      icon: <FaReact className="text-cyan-400" />,    delay: 0   },
  { label: "JavaScript",    icon: <SiJavascript className="text-yellow-400" />, delay: 80  },
  { label: "Tailwind CSS",  icon: <SiTailwindcss className="text-sky-400" />,  delay: 160 },
  { label: "HTML5",         icon: <SiHtml5 className="text-orange-400" />,  delay: 240 },
  { label: "CSS3",          icon: <FaCss3Alt className="text-blue-400" />,  delay: 320 },
  { label: "Git",           icon: <SiGit className="text-red-400" />,       delay: 400 },
];

const ROLES = [
  "Frontend Developer",
  "Frontend Developer", 
  "Dashboard UI Specialist",
  "Web Application Developer"
];

/* ─────────────────────────────────────────────
   TOOLTIP
───────────────────────────────────────────── */
const Tooltip = ({ label, children }) => (
  <div className="relative group/tip flex items-center justify-center">
    {children}
    <span
      className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
        px-3 py-1 rounded-lg bg-gray-900 border border-gray-700
        text-xs text-gray-200 whitespace-nowrap
        opacity-0 scale-90 group-hover/tip:opacity-100 group-hover/tip:scale-100
        transition-all duration-200 z-50 shadow-xl"
    >
      {label}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700" />
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Home = () => {
  const [typedText, setTypedText]   = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum]       = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [mounted, setMounted]       = useState(false);
  const pauseRef = useRef(false);

  const TYPING_SPEED  = 120;
  const DELETING_SPEED = 70;
  const PAUSE_TIME    = 1800;

  /* mount trigger */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* typing effect */
  useEffect(() => {
    if (pauseRef.current) return;
    const currentRole = ROLES[loopNum % ROLES.length];

    const handle = () => {
      if (isDeleting) {
        const next = currentRole.substring(0, typedText.length - 1);
        setTypedText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleVisible(false);
          setTimeout(() => {
            setLoopNum((n) => n + 1);
            setRoleVisible(true);
          }, 300);
        }
      } else {
        const next = currentRole.substring(0, typedText.length + 1);
        setTypedText(next);
        if (next === currentRole) {
          pauseRef.current = true;
          setTimeout(() => {
            pauseRef.current = false;
            setIsDeleting(true);
          }, PAUSE_TIME);
        }
      }
    };

    const timer = setTimeout(handle, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum]);

  /* keyframes + fonts injection */
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

      :root {
        --c: #22d3ee;
        --b: #3b82f6;
        --p: #a855f7;
      }

      @keyframes spinSlow {
        to { transform: rotate(360deg); }
      }
      @keyframes floatY {
        0%,100% { transform: translateY(0); }
        50%     { transform: translateY(-18px); }
      }
      @keyframes blobA {
        0%,100% { transform: translate(0,0) scale(1); }
        33%     { transform: translate(35px,-22px) scale(1.07); }
        66%     { transform: translate(-20px,18px) scale(0.95); }
      }
      @keyframes blobB {
        0%,100% { transform: translate(0,0) scale(1); }
        33%     { transform: translate(-40px,28px) scale(1.1); }
        66%     { transform: translate(28px,-20px) scale(0.93); }
      }
      @keyframes gradShift {
        0%,100% { background-position: 0% 50%; }
        50%     { background-position: 100% 50%; }
      }
      @keyframes ringPulse {
        0%,100% { box-shadow: 0 0 0 0 rgba(34,211,238,.35); }
        50%     { box-shadow: 0 0 0 18px rgba(34,211,238,0); }
      }
      @keyframes shine {
        0%      { left: -100%; }
        60%,100% { left: 130%; }
      }
      @keyframes fadeUp {
        from { opacity:0; transform:translateY(24px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes fadeLeft {
        from { opacity:0; transform:translateX(36px); }
        to   { opacity:1; transform:translateX(0); }
      }
      @keyframes badgePop {
        from { opacity:0; transform:scale(.8) translateY(10px); }
        to   { opacity:1; transform:scale(1) translateY(0); }
      }
      @keyframes bounce {
        0%,100% { transform:translateY(0); opacity:.6; }
        50%     { transform:translateY(8px); opacity:1; }
      }
      @keyframes grain {
        0%   { transform:translate(0,0); }
        100% { transform:translate(-5%,-5%); }
      }

      .font-syne { font-family:'Syne',sans-serif; }
      .font-dm   { font-family:'DM Sans',sans-serif; }

      .spin-slow  { animation: spinSlow 8s linear infinite; }
      .float-anim { animation: floatY 5s ease-in-out infinite; }

      .blob-a { animation: blobA 14s ease-in-out infinite; }
      .blob-b { animation: blobB 17s ease-in-out infinite; }
      .blob-c { animation: blobA 20s ease-in-out infinite reverse; }
      .blob-d { animation: blobB 11s ease-in-out infinite; }

      .grad-text {
        background: linear-gradient(135deg,var(--c),var(--b),var(--p));
        background-size: 220% 220%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradShift 6s ease infinite;
      }
      .grad-border-icon {
        background: linear-gradient(135deg,var(--c),var(--b));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 0 8px rgba(34,211,238,.7));
      }
      .ring-pulse { animation: ringPulse 2.5s ease-in-out infinite; }

      .btn-shine { position:relative; overflow:hidden; }
      .btn-shine::after {
        content:'';
        position:absolute;
        top:-50%; left:-100%;
        width:55%; height:200%;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
        transform:skewX(-20deg);
        animation: shine 3.8s ease-in-out infinite;
      }

      .grain-overlay::before {
        content:'';
        position:absolute;
        inset:-50%; width:200%; height:200%;
        background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity:.026; pointer-events:none;
        animation: grain .5s steps(2) infinite; z-index:1;
      }

      .s1 { animation:fadeUp .7s ease both; animation-delay:.08s; }
      .s2 { animation:fadeUp .7s ease both; animation-delay:.22s; }
      .s3 { animation:fadeUp .7s ease both; animation-delay:.37s; }
      .s4 { animation:fadeUp .7s ease both; animation-delay:.52s; }
      .s5 { animation:fadeUp .7s ease both; animation-delay:.67s; }
      .s6 { animation:fadeUp .7s ease both; animation-delay:.82s; }
      .si { animation:fadeLeft .9s ease both; animation-delay:.28s; }

      .role-trans { transition:opacity .25s ease, transform .25s ease; }
      .badge-pop  { animation:badgePop .5s cubic-bezier(.34,1.56,.64,1) both; }
      .bounce-arr { animation:bounce 1.5s ease-in-out infinite; }

      .scroll-grad {
        background:linear-gradient(180deg,var(--c),var(--p));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-clip:text;
      }

      .skill-badge:hover {
        box-shadow:0 0 18px rgba(34,211,238,.3);
        transform:scale(1.08) translateY(-2px);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="grain-overlay relative min-h-screen bg-[#050810] text-white
        overflow-hidden flex items-center justify-center px-6 py-20 font-dm"
    >
      {/* ── BLOBS ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-a absolute -top-48 -left-48 w-[520px] h-[520px]
          rounded-full bg-cyan-500 blur-[130px] opacity-[0.13]" />
        <div className="blob-b absolute top-[38%] -right-52 w-[560px] h-[560px]
          rounded-full bg-blue-600 blur-[150px] opacity-[0.12]" />
        <div className="blob-c absolute -bottom-52 left-[33%] w-[500px] h-[500px]
          rounded-full bg-purple-600 blur-[140px] opacity-[0.11]" />
        <div className="blob-d absolute top-[18%] left-[18%] w-[340px] h-[340px]
          rounded-full bg-gradient-to-br from-cyan-400 to-blue-600
          blur-[110px] opacity-[0.08]" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.5) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left space-y-5">

            {/* available pill */}
            <div className="s1 inline-flex items-center gap-2 px-4 py-1.5
              rounded-full border border-cyan-500/25 bg-cyan-500/5
              text-cyan-400 text-xs tracking-[.18em] uppercase backdrop-blur-sm font-syne">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="s2 font-syne text-5xl md:text-6xl lg:text-7xl
              font-extrabold leading-none tracking-tight grad-text">
              Harshita<br />Adhikari
            </h1>

            {/* Role row */}
            <div className="s3 flex items-center gap-3 justify-center lg:justify-start h-10">
              <FaReact className="spin-slow text-2xl flex-shrink-0 grad-border-icon" />
              <div
                className="role-trans flex items-center gap-1 text-xl md:text-2xl
                  font-medium tracking-wide"
                style={{
                  textShadow: "0 0 28px rgba(34,211,238,.3),0 0 56px rgba(59,130,246,.18)",
                  opacity: roleVisible ? 1 : 0,
                  transform: roleVisible ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <span className="text-gray-200">{typedText}</span>
                <span className="inline-block w-[2px] h-6 bg-cyan-400 animate-pulse rounded-sm ml-0.5" />
              </div>
            </div>

            {/* Bio */}
            <p className="s4 text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-[0.96rem]">
              Frontend Developer with 10 months of experience building responsive 
              and scalable web applications using React.js, JavaScript, and modern CSS frameworks. 
              Focused on creating clean UI, seamless user experience, and performance-optimized solutions.
            </p>

            {/* Extra line */}
            <p className="text-cyan-400 text-sm">
              Worked on real client projects & dashboard interfaces
            </p>

            {/* Buttons */}
            <div className="s5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link to="/projects" className="w-full sm:w-auto">
                <button
                  className="btn-shine w-full sm:w-auto flex items-center justify-center
                    gap-2 px-7 py-3.5 rounded-2xl font-syne font-semibold text-sm
                    bg-gradient-to-r from-cyan-400 to-blue-500 text-black
                    hover:scale-105 hover:-translate-y-0.5
                    hover:shadow-[0_0_30px_rgba(34,211,238,.5),0_0_60px_rgba(59,130,246,.25)]
                    transition-all duration-300"
                >
                  View Projects
                  <FaArrowRight />
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="btn-shine w-full sm:w-auto flex items-center justify-center
                    gap-2 px-7 py-3.5 rounded-2xl font-syne font-semibold text-sm
                    border border-cyan-400/50 text-cyan-400 backdrop-blur-sm
                    hover:bg-cyan-400/8 hover:border-cyan-400
                    hover:shadow-[0_0_22px_rgba(34,211,238,.3),inset_0_0_22px_rgba(34,211,238,.05)]
                    hover:scale-105 hover:-translate-y-0.5
                    transition-all duration-300"
                >
                  Contact Me
                  <HiOutlineMail className="text-lg" />
                </button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="s6 flex gap-5 justify-center lg:justify-start pt-2">
              {[
                { href:"https://github.com/HarshitaAdhikari", icon:<FaGithub className="text-xl"/>, label:"GitHub",   hover:"hover:text-white",      glow:"hover:shadow-[0_0_16px_rgba(255,255,255,.25)]" },
                { href:"https://linkedin.com/in/harshita-adhikari", icon:<FaLinkedin className="text-xl"/>, label:"LinkedIn", hover:"hover:text-blue-400", glow:"hover:shadow-[0_0_16px_rgba(59,130,246,.4)]" },
                { href:"mailto:harshitaadhikari1234@mail.com", icon:<HiOutlineMail className="text-xl"/>, label:"Email",    hover:"hover:text-cyan-400", glow:"hover:shadow-[0_0_16px_rgba(34,211,238,.4)]" },
              ].map(({ href, icon, label, hover, glow }) => (
                <Tooltip key={label} label={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`text-gray-500 ${hover} ${glow}
                      p-2.5 rounded-full border border-transparent
                      hover:border-gray-700/80 hover:bg-gray-800/60
                      transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                  >
                    {icon}
                  </a>
                </Tooltip>
              ))}
            </div>

            {/* Experience Tag */}
            <div className="s6 inline-flex items-center gap-2 px-4 py-2
              bg-gray-900/50 rounded-full border border-gray-700/50
              backdrop-blur-sm text-sm text-gray-400">
              <FaReact className="text-cyan-400 text-lg spin-slow" />
              <span>
                Frontend Developer @{" "}
                <span className="text-cyan-400 font-medium">Zanthium Technosoft</span>
                {" "}· 10 Months Experience
              </span>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="si flex-1 flex justify-center">
            <div className="relative group/img cursor-pointer">
              {/* outer glow */}
              <div
                className="ring-pulse absolute -inset-5 rounded-full
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                  opacity-25 blur-2xl
                  group-hover/img:opacity-40 group-hover/img:blur-3xl
                  transition-all duration-500"
              />
              {/* gradient ring */}
              <div
                className="absolute -inset-1 rounded-full
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
                  opacity-80 blur-sm"
              />
              <div
                className="absolute -inset-[2px] rounded-full
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              />

              {/* image */}
              <div
                className="float-anim relative rounded-full p-[3px] bg-[#050810]
                  group-hover/img:scale-[1.04] transition-transform duration-500 ease-out"
              >
                <img
                  src="./src/assets/image.png"
                  alt="Harshita Adhikari"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
                />
                {/* shine */}
                <div
                  className="absolute inset-0 rounded-full
                    bg-gradient-to-tr from-transparent via-white/5 to-transparent
                    pointer-events-none"
                />
              </div>

              {/* floating badge - changed from React Developer to Frontend Developer */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2
                  flex items-center gap-1.5 px-4 py-1.5 rounded-full
                  bg-gray-950/90 border border-cyan-500/25 backdrop-blur-md
                  text-xs font-syne font-semibold text-cyan-400 whitespace-nowrap
                  shadow-lg shadow-cyan-500/10"
              >
                <FaReact className="spin-slow" />
                Frontend Developer
              </div>
            </div>
          </div>
        </div>

        {/* ── SKILLS ── */}
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {SKILLS.map((s, i) => (
            <span
              key={s.label}
              className="badge-pop skill-badge flex items-center gap-2
                px-4 py-2.5 rounded-2xl text-sm text-gray-400
                bg-gray-800/45 border border-gray-700/50 backdrop-blur-sm
                hover:text-white hover:border-cyan-400/40
                transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.9 + i * 0.09}s` }}
            >
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1">
          <span className="scroll-grad text-[10px] uppercase tracking-[.2em] font-syne">
            Scroll
          </span>
          <FaChevronDown className="bounce-arr scroll-grad text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Home;