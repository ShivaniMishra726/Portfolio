"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SkillCard from "@/components/ui/SkillCard";
import PageTransition from "@/components/ui/PageTransition";

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Skills & Technologies</h1>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {skills.map((skillCategory, i) => (
            <SkillCard key={skillCategory.category} skillCategory={skillCategory} index={i} />
          ))}
        </div>

        {/* All skills chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 mb-5"
        >
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white mb-6 text-center uppercase tracking-widest">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.flatMap((cat) =>
              cat.items.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.07, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="px-4 py-2 rounded-xl bg-primary-500/8 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-500/15 cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>

        {/* Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white mb-2 uppercase tracking-widest">
            Currently Learning
          </h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-5">
            Always expanding my skill set with new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Machine Learning", "React", "Next.js", "FastAPI", "LangChain"].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full border border-dashed border-primary-400/40 dark:border-primary-700/60 text-primary-500 text-xs font-medium"
              >
                {skill} 📚
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
