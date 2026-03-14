"use client";

import { motion } from "framer-motion";
import { FiCode, FiGlobe, FiDatabase, FiBarChart2 } from "react-icons/fi";
import type { SkillCategory } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  code: <FiCode className="w-5 h-5" />,
  globe: <FiGlobe className="w-5 h-5" />,
  database: <FiDatabase className="w-5 h-5" />,
  "bar-chart": <FiBarChart2 className="w-5 h-5" />,
};

interface SkillCardProps {
  skillCategory: SkillCategory;
  index: number;
}

export default function SkillCard({ skillCategory, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="glass-card glass-hover p-6 relative overflow-hidden group"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative">
        <div className="p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500">
          {iconMap[skillCategory.icon] || <FiCode className="w-5 h-5" />}
        </div>
        <div>
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white tracking-tight">
            {skillCategory.category}
          </h3>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
            {skillCategory.items.length} skill{skillCategory.items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-4 relative">
        {skillCategory.items.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-xs text-primary-500 font-semibold tabular-nums">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 dark:bg-white/6 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #7B2D8B, #a855f7)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
