import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolio";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="w-12 h-1 bg-primary-500 mb-8 rounded-full mx-auto" />
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I'm currently open to new opportunities — whether it's a full-time role, research collaboration, or an interesting side project. My inbox is always open.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors text-lg mb-12 group"
        >
          <Mail size={20} />
          Say Hello
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex justify-center gap-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
