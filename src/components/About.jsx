import { useEffect, useRef, useState } from "react";
import { FaUserAstronaut, FaCode, FaRocket, FaHeart, FaGraduationCap, FaPalette } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

// Custom hook for scroll reveal animations
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

export default function About() {
  const [headerRef, headerVisible] = useReveal(0);
  const [introRef, introVisible] = useReveal(100);
  const [skillsRef, skillsVisible] = useReveal(200);
  const [whatRef, whatVisible] = useReveal(250);
  const [eduRef, eduVisible] = useReveal(300);
  const [beyondRef, beyondVisible] = useReveal(350);
  const [ctaRef, ctaVisible] = useReveal(400);

  return (
    <div className="min-h-screen pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Animated background gradient orbs – no pink/purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-pulse delay-1000" />
        {/* removed the purple orb */}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with floating animation */}
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 mb-4 animate-float">
            <FaUserAstronaut className="text-3xl sm:text-4xl text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Intro card with slide-up */}
        <div
          ref={introRef}
          className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 mb-8 hover:border-cyan-500/50 transition-all duration-300 group"
          style={{
            opacity: introVisible ? 1 : 0,
            transform: introVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Hey! I'm <span className="text-cyan-300 font-semibold">Harshita Adhikari</span>, a Frontend Developer passionate about turning ideas into interactive web experiences. Over the past 10 months, I've built responsive dashboards, integrated APIs, and focused on creating smooth, user-friendly interfaces.
          </p>
          <p className="text-gray-400 text-sm sm:text-base mt-4">
            My toolkit includes React.js, JavaScript, Tailwind CSS, and modern web technologies. I enjoy optimizing performance, writing clean code, and exploring new ways to enhance UX.
          </p>
          <p className="text-gray-400 text-sm sm:text-base mt-4">
            Beyond coding, I love experimenting with UI design, contributing to open source projects, and learning emerging frontend trends. I thrive on collaborating with teams to bring ideas to life and make meaningful digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-cyan-400" />
              <span>Uttarakhand, India</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-cyan-400" />
              <a href="mailto:harshitaadhikari1234@gmail.com" className="hover:text-cyan-300 transition">
                harshitaadhikari1234@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Skills + What I Do grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Tech Stack */}
          <div
            ref={skillsRef}
            className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 group"
            style={{
              opacity: skillsVisible ? 1 : 0,
              transform: skillsVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                <FaCode className="text-cyan-400 text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Bootstrap", "Git", "MySQL", "PHP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What I Do */}
          <div
            ref={whatRef}
            className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 group"
            style={{
              opacity: whatVisible ? 1 : 0,
              transform: whatVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                <FaRocket className="text-cyan-400 text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">What I Do</h2>
            </div>
            <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Build responsive web applications using React.js
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Develop dashboard UI based on real client requirements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Integrate REST APIs and handle dynamic data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                Optimize performance and ensure cross-browser compatibility
              </li>
            </ul>
          </div>
        </div>

        {/* Education + Beyond Code grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Education – grouped card with subtle hover effect */}
          <div
            ref={eduRef}
            className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
            style={{
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                  <FaGraduationCap className="text-cyan-400 text-2xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-5">
                {/* Diploma */}
                <div>
                  <h3 className="text-lg font-semibold text-white">Diploma in Computer Science & Engineering</h3>
                  <p className="text-cyan-300 text-sm">Government Polytechnic, Kashipur, Uttarakhand</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">2022–2025 | CGPA: 8.0</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Focus on web development and software fundamentals</p>
                </div>
                <div className="h-px bg-white/10" />
                {/* Bachelor */}
                <div>
                  <h3 className="text-lg font-semibold text-white">Bachelor of Arts (B.A)</h3>
                  <p className="text-cyan-300 text-sm">Uttarakhand Open University, Haldwani</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Present | Final Year (Appearing)</p>
                </div>
                <div className="h-px bg-white/10" />
                {/* 12th */}
                <div>
                  <h3 className="text-lg font-semibold text-white">12th (Intermediate)</h3>
                  <p className="text-cyan-300 text-sm">G.B. Pant Inter College, Kashipur, Uttarakhand</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">2022 | 70%</p>
                </div>
                <div className="h-px bg-white/10" />
                {/* 10th */}
                <div>
                  <h3 className="text-lg font-semibold text-white">10th (High School)</h3>
                  <p className="text-cyan-300 text-sm">Kavita Modern Public High School, Kashipur, Uttarakhand</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">2020 | 77%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Code */}
          <div
            ref={beyondRef}
            className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 group"
            style={{
              opacity: beyondVisible ? 1 : 0,
              transform: beyondVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                <FaHeart className="text-cyan-400 text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Beyond Code</h2>
            </div>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, experimenting with UI designs, and contributing to open source. I'm always curious to learn and grow, and I love sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30 hover:bg-cyan-500/20 transition">
                <FaPalette className="text-xs" /> UI/UX Exploration
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30 hover:bg-cyan-500/20 transition">
                <FaCode className="text-xs" /> Open Source
              </span>
            </div>
          </div>
        </div>

        {/* CTA with hover effect */}
        <div
          ref={ctaRef}
          className="text-center mt-12"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <a
            href="contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Let's work together
            <FaRocket className="text-sm group-hover:rotate-12 transition-transform" />
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
