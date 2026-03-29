import { Link } from "react-router-dom";
import { FaReact, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const FOOTER_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: <HiOutlineMail />, url: "mailto:harshitaadhikari1234@mail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Same background as main content - matches the gradient used in all pages */}
      <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        {/* Removed backdrop-blur, removed extra overlays, removed top border */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & tagline */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-white/10 group-hover:border-indigo-400/50 transition-all duration-300 shadow-md group-hover:shadow-indigo-500/20">
                  <FaReact className="text-indigo-400 text-lg group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Harshita
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Frontend developer crafting modern, responsive web experiences with React & Tailwind.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>© {new Date().getFullYear()}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>All rights reserved</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-gray-200 font-medium mb-5 text-xs uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-indigo-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-gray-200 font-medium mb-5 text-xs uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-300 hover:border-indigo-400/50 transition-all duration-200 hover:scale-105"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div>
              <h3 className="text-gray-200 font-medium mb-5 text-xs uppercase tracking-wider">
                Let's Talk
              </h3>
              <p className="text-gray-400 text-sm mb-5">
                Open for freelance & full‑time opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 text-white font-medium px-5 py-2.5 rounded-full border border-white/10 hover:border-indigo-400/50 transition-all duration-200"
              >
                <span>Contact Me</span>
                <HiOutlineMail className="text-base" />
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <FaHeart className="text-rose-400 text-xs animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-300 transition-all duration-200"
            >
              <span>Back to top</span>
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* Optional subtle top glow (can be removed if still visible) */}
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" /> */}
    </footer>
  );
}