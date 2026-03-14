"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import type { Achievement } from "@/lib/types";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="glass-card glass-hover p-8 relative overflow-hidden group"
    >
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-accent/8 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-primary-500/6 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      {/* Content */}
      <div className="relative">
        {/* Icon and year */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="p-3 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20"
            whileHover={{ scale: 1.08, rotate: 6 }}
            transition={{ duration: 0.25 }}
          >
            <Trophy className="w-7 h-7 text-accent" />
          </motion.div>
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
            {achievement.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">
          {achievement.title}
        </h3>

        {/* Position badge */}
        <div className="flex items-center gap-2 mb-5">
          <Award className="w-4 h-4 text-primary-500" />
          <span className="text-primary-500 font-semibold text-sm">{achievement.position}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
}
