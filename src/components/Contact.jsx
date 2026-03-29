import { useState } from "react";
import { 
  HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, 
  HiOutlineChatAlt2, HiOutlineUser, HiOutlineDocumentText 
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail />,
      title: "Email",
      value: "harshitaadhikari1234@mail.com",
      link: "mailto:harshitaadhikari1234@mail.com",
    },
    {
      icon: <HiOutlinePhone />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <HiOutlineLocationMarker />,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/yourusername" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/yourusername" },
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
            <HiOutlineChatAlt2 className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-cyan-400" />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <HiOutlineDocumentText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
                    placeholder="Project inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane />
              </button>

              {isSubmitted && (
                <div className="text-center text-cyan-300 text-sm bg-cyan-500/10 py-2 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info + Social */}
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
              <div className="space-y-5">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-cyan-300 transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/30 p-6 text-center">
              <p className="text-gray-200 text-sm">
                🌟 Available for freelance & full-time opportunities.<br />
                Let's build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}