import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronsDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import tarunPic from "../assets/tarun.png";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = personalInfo.name.split(" ")[0];

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-dark-bg min-h-svh"
    >
      {/* ── Photo — absolute background on all screen sizes ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none pb-56 md:pb-0"
      >
        <img
          src={tarunPic}
          alt={personalInfo.name}
          className="h-[95%] w-auto object-contain object-bottom"
        />
      </motion.div>

      {/* ── Foreground (mobile-first) ──
            default (mobile): flex-col, pt-20, panels stacked vertically at bottom
            md+  (tablet portrait + desktop): 2-col grid, vertically centered
      ── */}
      <div
        className="
          relative z-10 min-h-svh w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
          flex flex-col pt-20 pb-10
          md:grid md:grid-cols-[1fr_1fr] md:pt-16 md:pb-0 md:items-center
          lg:pt-0
        "
      >
        {/* ── Text block ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="w-16 h-0.5 bg-white mb-6" />

          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
            I'm {firstName}, a
            <br />
            <ReactTyped
              strings={[
                "Software Engineer",
                "Full Stack Developer",
                "Backend Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1800}
              loop
              className="text-white"
            />
          </h1>

          <p className="text-slate-400 max-w-sm text-base leading-relaxed mb-10">
            {personalInfo.tagline}
          </p>

          {/* Scroll button — landscape only (hidden in mobile + portrait) */}
          <button
            onClick={scrollToAbout}
            className="hidden landscape:flex w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 items-center justify-center text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronsDown size={20} />
          </button>
        </motion.div>

        {/* ── Info panels ──
              mobile:  flex-col, pushed to bottom (mt-auto), vertical accent line per section
              md+:     flex-col on right side of grid, horizontal dividers between sections
        ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="
            mt-auto flex flex-col gap-5
            md:mt-0 md:gap-10 md:self-center md:pl-8 md:ml-auto md:w-[300px] xl:w-[320px]
          "
        >
          {/* About Me */}
          <div className="border-l-2 border-primary-500/70 pl-3 md:border-l-0 md:pl-0">
            <h3 className="text-white text-xs md:text-lg font-bold uppercase tracking-[0.2em] mb-1 md:mb-3">
              About Me
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-1 md:mb-3">
              I am a Master's graduate from Northeastern University with 4+ years of experience as a Software Engineer.
            </p>
            <a
              href="#about"
              onClick={scrollTo("#about")}
              className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
            >
              Learn More →
            </a>
          </div>

          {/* Divider — md+ only */}
          <div className="hidden md:block w-full h-px bg-slate-400/50" />

          {/* My Work */}
          <div className="border-l-2 border-primary-500/70 pl-3 md:border-l-0 md:pl-0">
            <h3 className="text-white text-xs md:text-lg font-bold uppercase tracking-[0.2em] mb-1 md:mb-3">
              My Work
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-1 md:mb-3">
              From full stack web apps to backend systems, explore the projects I've built.
            </p>
            <a
              href="#projects"
              onClick={scrollTo("#projects")}
              className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
            >
              Browse Portfolio →
            </a>
          </div>

          {/* Divider — md+ only */}
          <div className="hidden md:block w-full h-px bg-slate-400/50" />

          {/* Follow Me */}
          <div className="border-l-2 border-primary-500/70 pl-3 md:border-l-0 md:pl-0">
            <h3 className="text-white text-xs md:text-lg font-bold uppercase tracking-[0.2em] mb-1 md:mb-4">
              Follow Me
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
              Find me on GitHub, LinkedIn, or drop me an email anytime.
            </p>
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={15} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={15} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
