import { FaUserAstronaut, FaCode, FaPalette, FaRocket, FaHeart, FaGraduationCap } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Decorative blur orbs */}
      <div className="fixed top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto">
        {/* Header section with gradient text */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4">
            <FaUserAstronaut className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Intro card - glassmorphism */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 mb-8 shadow-xl">
          <p className="text-gray-200 text-lg leading-relaxed">
            Hi, I'm <span className="text-cyan-300 font-semibold">Harshita Adhikari</span> — a passionate frontend developer 
            who loves crafting sleek, responsive, and user-friendly web experiences. 
            I specialize in modern React ecosystems, Tailwind CSS, and building components that 
            are both beautiful and performant.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-cyan-400" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-cyan-400" />
              <a href="mailto:harshitaadhikari1234@mail.com" className="hover:text-cyan-300 transition">
                harshitaadhikari1234@mail.com
              </a>
            </div>
          </div>
        </div>

        {/* Two column grid: Skills + What I do */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Skills card */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Framer Motion", "Git", "Vite"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What I do card */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white">What I Do</h2>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Build responsive, accessible single-page apps with React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Create smooth animations and interactive UI components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Optimize performance and SEO for modern web apps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Collaborate with designers to bring ideas to life
              </li>
            </ul>
          </div>
        </div>

        {/* Education + Passion */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <p className="text-gray-200">
              Bachelor's in Computer Science (or relevant degree) – 
              <span className="text-cyan-300"> Graduating 2025</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">Specialized in web technologies & UI/UX fundamentals.</p>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaHeart className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white">Beyond Code</h2>
            </div>
            <p className="text-gray-200">
              When I'm not coding, you'll find me exploring open source, 
              sketching UI mockups, or diving into sci‑fi novels. I love 
              learning new tools and sharing knowledge with the dev community.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
          >
            Let's work together
            <FaRocket className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}