import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-heading">Skills</h2>
      <p className="section-subheading">Technologies I work with</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <h3 className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
