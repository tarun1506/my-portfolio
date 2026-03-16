import SectionWrapper from "../components/SectionWrapper";
import { experience } from "../data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="section-heading">Experience</h2>
      <p className="section-subheading">Where I've worked</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-border hidden sm:block" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="sm:pl-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary-900 border-2 border-primary-500 hidden sm:flex items-center justify-center">
                <Briefcase size={14} className="text-primary-400" />
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                    <p className="text-primary-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    <p>{job.period}</p>
                    <p className="flex items-center gap-1 justify-end">
                      <MapPin size={12} />
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-primary-400 mt-1 flex-shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
