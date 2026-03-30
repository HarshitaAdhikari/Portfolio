import { useEffect, useRef, useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGitAlt, FaFigma, FaNodeJs 
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiFramer } from "react-icons/si";
import { HiOutlineLightningBolt } from "react-icons/hi";

// Custom hook for scroll‑reveal animations
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, visible];
}

export default function Skills() {
  const [headerRef, headerVisible] = useReveal(0);
  const [cat1Ref, cat1Visible] = useReveal(150);
  const [cat2Ref, cat2Visible] = useReveal(250);
  const [cloudRef, cloudVisible] = useReveal(350);
  const [ctaRef, ctaVisible] = useReveal(450);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-cyan-400" />,
      description: "Building responsive and interactive user interfaces with modern frontend technologies.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <FaDatabase className="text-cyan-400" />,
      description: "Server-side development, database management, and tooling to ensure smooth deployment and scalability.",
      skills: [
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
      ]
    }
  ];

  const allSkillsFlat = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", 
    "PHP", "MySQL", 
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced animated orbs – no purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with reveal */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4 animate-float">
            <HiOutlineLightningBolt className="text-3xl sm:text-4xl text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            My Skills
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            With 10 months of professional experience, I work on real client projects developing modern web applications. 
            My focus is on clean UI, seamless UX, and responsive, high-performance interfaces.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => {
            const [ref, visible] = idx === 0 ? [cat1Ref, cat1Visible] : [cat2Ref, cat2Visible];
            return (
              <div
                key={idx}
                ref={ref}
                className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${idx === 0 ? '0.1s' : '0.2s'}, transform 0.7s ease ${idx === 0 ? '0.1s' : '0.2s'}`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">{category.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group/skill flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <span className="text-3xl mb-2 transition-transform duration-300 group-hover/skill:scale-110" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-200 group-hover/skill:text-cyan-300 transition">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Skills Tag Cloud */}
        <div
          ref={cloudRef}
          className="mt-12 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300"
          style={{
            opacity: cloudVisible ? 1 : 0,
            transform: cloudVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkillsFlat.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-300 border border-cyan-500/30 hover:scale-105 transition-transform duration-200 cursor-default hover:shadow-md hover:shadow-cyan-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          ref={ctaRef}
          className="text-center mt-12"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          <a
            href="projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            Explore My Projects
          </a>
        </div>
      </div>

      {/* Inline CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
