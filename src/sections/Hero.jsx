import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-primary-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-400 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-primary-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
