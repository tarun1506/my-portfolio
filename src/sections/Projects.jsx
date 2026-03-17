import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

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
