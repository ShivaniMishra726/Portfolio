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
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[18px] top-8 bottom-0 w-px bg-gradient-to-b from-primary-500/40 to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-3 top-3.5 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-[#07070f] shadow-glow-sm" />

      {/* Card */}
      <div className="glass-card glass-hover p-6 relative overflow-hidden group">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary-500/50 via-transparent to-transparent" />

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-heading font-bold text-base text-gray-900 dark:text-white tracking-tight">
              {experience.role}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Briefcase className="w-3 h-3 text-primary-500" />
              <span className="text-sm text-primary-500 font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/8 border border-primary-500/15">
            <Calendar className="w-3 h-3 text-primary-400" />
            <span className="text-[11px] text-primary-500 dark:text-primary-400 font-medium">
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-white/8"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
