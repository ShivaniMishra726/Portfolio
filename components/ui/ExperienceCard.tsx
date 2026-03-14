"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import type { ExperienceItem } from "@/lib/types";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-gray-950 shadow-lg shadow-primary-500/30" />

      {/* Card */}
      <div className="glass-card p-6 ml-4 glass-hover">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Briefcase className="w-3.5 h-3.5 text-primary-500" />
              <span className="text-sm text-primary-500 font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10">
            <Calendar className="w-3.5 h-3.5 text-primary-500" />
            <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
