import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio 2025",
      description: "A modern, responsive portfolio website with glassmorphism effects, smooth animations, and a fully customizable design system.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [<FaReact key="react" />, <SiTailwindcss key="tw" />],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      featured: true,
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and users with real-time analytics and charts.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      icons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />],
      github: "https://github.com/yourusername/ecommerce-dashboard",
      demo: "https://demo-ecommerce.com",
      featured: false,
    },
    {
      title: "Task Manager App",
      description: "Collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      icons: [<FaReact key="react" />, <SiFirebase key="firebase" />, <SiTailwindcss key="tw" />],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager.app",
      featured: true,
    },
    {
      title: "Weather Forecast",
      description: "Weather app using OpenWeatherMap API, displaying 5-day forecast with animated weather icons.",
      tech: ["JavaScript", "CSS3", "REST API"],
      icons: [<FaReact key="react" />, <SiTailwindcss key="tw" />],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weatherapp.com",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog with markdown support, user comments, and admin panel for content management.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      icons: [<SiTypescript key="ts" />, <FaDatabase key="db" />],
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://blogplatform.com",
      featured: false,
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with private rooms, file sharing, and message reactions using WebSockets.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      icons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />],
      github: "https://github.com/yourusername/chat-app",
      demo: "https://chatdemo.com",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Decorative blur orbs */}
      <div className="fixed top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4">
            <HiOutlineCode className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent works. Each project reflects my passion for clean code and modern design.
          </p>
        </div>

        {/* Featured badge hint */}
        <div className="flex justify-end mb-4">
          <span className="text-xs text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
            ⭐ Featured projects highlighted
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative backdrop-blur-md bg-white/5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                project.featured
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                  : "border-white/10 hover:border-cyan-500/50"
              }`}
            >
              {/* Featured ribbon */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Tech icons row */}
                <div className="flex gap-2 mb-4 text-xl text-cyan-400">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="hover:scale-110 transition-transform">
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5"
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
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-300 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-300 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to contact */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">Have a project in mind?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            Let's work together
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}