"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SkillCard from "@/components/ui/SkillCard";
import PageTransition from "@/components/ui/PageTransition";

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Skills & Technologies</h1>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skillCategory, i) => (
            <SkillCard key={skillCategory.category} skillCategory={skillCategory} index={i} />
          ))}
        </div>

        {/* All skills chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-6 text-center">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.flatMap((cat) =>
              cat.items.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-100 dark:border-primary-500/20 cursor-default"
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
          className="mt-6 glass-card p-8 text-center"
        >
          <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-3">
            Currently Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Always expanding my skill set with new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Machine Learning", "React", "Next.js", "FastAPI", "LangChain"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-700 text-primary-500 text-sm font-medium"
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
