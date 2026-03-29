import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptopCode, FaUsers, FaRocket } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Zanthium",
      location: "Remote, India",
      period: "June 2025 - March 2026",
      description: [
        "Developed responsive web applications using React and Tailwind CSS, improving load times by 30%.",
        "Collaborated with UI/UX designers to implement pixel-perfect designs and interactive components.",
        "Optimized existing codebase, reducing bundle size by 25% and enhancing performance.",
        "Mentored junior developers and conducted code reviews to maintain quality standards.",
      ],
      technologies: ["React", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Vite"],
      icon: <FaCode />,
    },
    {
      title: "Full Stack Intern",
      company: "Tech Solutions Inc.",
      location: "Bangalore, India",
      period: "Jan 2025 - May 2025",
      description: [
        "Built RESTful APIs using Node.js and Express, integrated with MongoDB database.",
        "Created admin dashboard with real-time analytics using Chart.js and React.",
        "Implemented JWT authentication and role-based access control.",
        "Participated in daily stand-ups and sprint planning meetings.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icon: <FaLaptopCode />,
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Designed and developed 10+ websites for small businesses and personal brands.",
        "Provided ongoing maintenance, SEO optimization, and performance improvements.",
        "Collaborated with clients to understand requirements and deliver tailored solutions.",
      ],
      technologies: ["WordPress", "React", "PHP", "MySQL", "Bootstrap"],
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Decorative blur orbs */}
      <div className="fixed top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4">
            <FaBriefcase className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Work Experience
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line (hidden on mobile, visible md+) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

          {/* Experience items */}
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row md:items-start gap-6 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot (visible on desktop) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 z-10" />

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  {/* Icon & header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl text-cyan-400">{exp.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-300 text-sm">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta info (location & period) */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-cyan-400 text-xs" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-cyan-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA / Additional */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            <HiOutlineLightningBolt />
            Let's collaborate
          </a>
        </div>
      </div>
    </div>
  );
}