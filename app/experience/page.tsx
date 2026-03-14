"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import ExperienceCard from "@/components/ui/ExperienceCard";
import PageTransition from "@/components/ui/PageTransition";

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}

          {/* Looking for opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card p-8 text-center border-2 border-dashed border-primary-200 dark:border-primary-800"
          >
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
              Open to Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Looking for internships and collaborative projects in AI, automation, and data engineering.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5">
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
