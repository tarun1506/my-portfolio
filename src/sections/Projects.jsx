import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary-500/50 transition-colors group"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 flex-shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-primary-900/40 text-primary-300 text-xs rounded font-mono">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <h2 className="section-heading">Projects</h2>
      <p className="section-subheading">Things I've built</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {other.length > 0 && (
        <>
          <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {other.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={featured.length + i} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
