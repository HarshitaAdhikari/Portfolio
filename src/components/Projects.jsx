import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

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

export default function Projects() {
  const [headerRef, headerVisible] = useReveal(0);
  const [project1Ref, project1Visible] = useReveal(150);
  const [project2Ref, project2Visible] = useReveal(250);
  const [ctaRef, ctaVisible] = useReveal(350);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio using React.js and Tailwind CSS, with reusable components, responsive design, and modern clean UI to showcase my skills and projects.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      icons: [<FaReact key="react" />, <SiTailwindcss key="tw" />],
      github: "https://github.com/HarshitaAdhikari/Portfolio",
      demo: "https://harshitaadhikari.github.io/Portfolio/",
      featured: true,
    },
    {
      title: "Student Management System",
      description:
        "Ongoing full-stack project: Built a CRUD system using PHP and MySQL. Integrated database with XAMPP and created a responsive admin dashboard to manage student records efficiently.",
      tech: ["PHP", "MySQL", "XAMPP", "Responsive Design"],
      icons: [<FaPhp key="php" />, <FaDatabase key="db" />],
      github: "https://github.com/HarshitaAdhikari/student-management",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced animated orbs – cyan & blue only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with floating animation */}
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
            <HiOutlineCode className="text-3xl sm:text-4xl text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            These projects reflect my professional experience and learning journey, showcasing frontend and full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const [ref, visible] = idx === 0 ? [project1Ref, project1Visible] : [project2Ref, project2Visible];
            return (
              <div
                key={idx}
                ref={ref}
                className={`group relative backdrop-blur-md bg-white/5 rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                  project.featured
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 hover:border-cyan-500/50"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${idx === 0 ? '0.1s' : '0.2s'}, transform 0.7s ease ${idx === 0 ? '0.1s' : '0.2s'}`,
                }}
              >
                {/* Featured badge – now with a glow effect */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-500/50">
                      Featured
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full">
                  {/* Tech icons – with hover scaling */}
                  <div className="flex gap-2 mb-4 text-xl text-cyan-400">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="hover:scale-110 transition-transform duration-300">
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Tech stack tags – enhanced with hover glow */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-300 transition-colors duration-200 group/link"
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-300 transition-colors duration-200 group/link"
                    >
                      <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" /> Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center mt-16"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <p className="text-gray-300 mb-4 text-sm sm:text-base">Have a project in mind?</p>
          <a
            href="contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            Let's work together
            <FaExternalLinkAlt className="text-sm" />
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
