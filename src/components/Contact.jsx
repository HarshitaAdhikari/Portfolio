import { useEffect, useRef, useState } from "react";
import { 
  HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, 
  HiOutlineChatAlt2
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

export default function Contact() {
  const [headerRef, headerVisible] = useReveal(0);
  const [infoRef, infoVisible] = useReveal(150);
  const [socialRef, socialVisible] = useReveal(250);
  const [badgeRef, badgeVisible] = useReveal(350);

  const contactInfo = [
    {
      icon: <HiOutlineMail />,
      title: "Email",
      value: "harshitaadhikari1234@gmail.com",
      link: "mailto:harshitaadhikari1234@gmail.com",
    },
    {
      icon: <HiOutlinePhone />,
      title: "Phone",
      value: "+91 8449581067",
      link: "tel:+918449581067",
    },
    {
      icon: <HiOutlineLocationMarker />,
      title: "Location",
      value: "Kashipur, Uttarakhand, India",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/HarshitaAdhikari" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/harshita-adhikari-0b613133b" },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced animated orbs – cyan & blue only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[140px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            <HiOutlineChatAlt2 className="text-3xl sm:text-4xl text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div
          ref={infoRef}
          className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 group"
          style={{
            opacity: infoVisible ? 1 : 0,
            transform: infoVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
              <HiOutlineChatAlt2 className="text-cyan-400 text-2xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Info</h2>
          </div>
          <div className="space-y-5">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl flex-shrink-0 group-hover:bg-cyan-500/30 transition">
                  {item.icon}
                </div>
                <div className="break-all">
                  <p className="text-gray-400 text-sm">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-white hover:text-cyan-300 transition text-sm sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm sm:text-base">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div
          ref={socialRef}
          className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 group mt-6"
          style={{
            opacity: socialVisible ? 1 : 0,
            transform: socialVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
              <FaLinkedin className="text-cyan-400 text-2xl" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Connect With Me</h2>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Availability Badge */}
        <div
          ref={badgeRef}
          className="backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/30 p-6 text-center mt-6"
          style={{
            opacity: badgeVisible ? 1 : 0,
            transform: badgeVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <p className="text-gray-200 text-xs sm:text-sm">
            🌟 Available for freelance & full-time opportunities.<br />
            Let's build something amazing together.
          </p>
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
