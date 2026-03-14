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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-8 glass-hover relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative">
        {/* Icon and badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-2xl bg-accent/10">
            <Trophy className="w-8 h-8 text-accent" />
          </div>
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
            {achievement.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
          {achievement.title}
        </h3>

        {/* Position badge */}
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-primary-500" />
          <span className="text-primary-500 font-semibold text-sm">{achievement.position}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
}
