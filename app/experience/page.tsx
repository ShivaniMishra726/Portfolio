"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import ExperienceCard from "@/components/ui/ExperienceCard";
import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {experience.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}

          {/* Looking for opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 glass-card p-8 text-center relative overflow-hidden border border-dashed border-primary-300/30 dark:border-primary-800/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-transparent" />
            <div className="relative">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-heading font-semibold text-base text-gray-900 dark:text-white mb-2 tracking-tight">
                Open to Opportunities
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Looking for internships and collaborative projects in AI, automation, and data engineering.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-sm py-2.5 px-5">
                Let&apos;s Connect <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
