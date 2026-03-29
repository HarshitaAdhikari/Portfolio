import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGitAlt, FaFigma, FaNodeJs, FaPython 
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiFramer } from "react-icons/si";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <FaDatabase className="text-cyan-400" />,
      skills: [
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      ]
    }
  ];

  const allSkillsFlat = [
    "HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript",
    "PHP", "MySQL", "Node.js", "Git", "Vite", "Figma", "Next.js", "Framer Motion"
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Decorative blur orbs */}
      <div className="fixed top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4">
            <HiOutlineLightningBolt className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, fast, and beautiful web applications.
          </p>
        </div>

        {/* Skill categories (grid) */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <span className="text-3xl mb-2" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-cyan-300 transition">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compact cloud / tag style (additional) */}
        <div className="mt-12 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkillsFlat.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-300 border border-cyan-500/30 hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            View My Projects
            <FaReact className="text-sm animate-spin-slow" style={{ animationDuration: "8s" }} />
          </a>
        </div>
      </div>

      {/* Add keyframe for slow spin if not already present globally */}
      <style>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}