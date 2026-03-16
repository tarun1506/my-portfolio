import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
