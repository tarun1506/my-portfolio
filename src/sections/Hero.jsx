import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ChevronsDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import tarunPic from "../assets/tarun.png";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = personalInfo.name.split(" ")[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-dark-bg"
    >
      {/* ── Centered portrait — sits behind everything ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <img
          src={tarunPic}
          alt={personalInfo.name}
          className="h-[95%] w-auto object-contain object-bottom"
        />
      </motion.div>

      {/* ── Foreground layout: left + right panels overlapping the image ── */}
      <div className="relative z-10 min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center">
          {/* ── LEFT: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* decorative line */}
            <div className="w-16 h-0.5 bg-white mb-6" />

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
              I'm {firstName}, a
              <br />
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full Stack Development",
                  "Backend Developer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1800}
                loop
                className="text-white"
              />
            </h1>

            <p className="text-slate-400 max-w-sm text-base leading-relaxed mb-12">
              {personalInfo.tagline}
            </p>

            {/* down-arrow button */}
            <button
              onClick={scrollToAbout}
              className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center text-white transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronsDown size={20} />
            </button>
          </motion.div>

          {/* ── RIGHT: info panels ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex flex-col gap-10 self-center pl-8 ml-auto w-[300px] xl:w-[320px]"
          >
            {/* About Me */}
            <div>
              <h3 className="text-white text-lg font-bold uppercase tracking-[0.2em] mb-3">
                About Me
              </h3>
              <p className="text-slate-400 text-md leading-relaxed mb-3">
                I am a Master's graduate from Northeastern University with 4+ years of experience as a Software Engineer.
              </p>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
              >
                Learn More →
              </a>
            </div>

            <div className="w-full h-px bg-slate-400/50" />

            {/* My Work */}
            <div>
              <h3 className="text-white text-lg font-bold uppercase tracking-[0.2em] mb-3">
                My Work
              </h3>
              <p className="text-slate-400 text-md leading-relaxed mb-3">
                From full stack web apps to backend systems, explore the projects I've built.
              </p>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
              >
                Browse Portfolio →
              </a>
            </div>

            <div className="w-full h-px bg-slate-400/50" />

            {/* Follow Me */}
            <div>
              <h3 className="text-white text-lg font-bold uppercase tracking-[0.2em] mb-4">
                Follow Me
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
