"use client";

import { motion } from "framer-motion";
import { FiCode, FiGlobe, FiDatabase, FiBarChart2 } from "react-icons/fi";
import type { SkillCategory } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  code: <FiCode className="w-6 h-6" />,
  globe: <FiGlobe className="w-6 h-6" />,
  database: <FiDatabase className="w-6 h-6" />,
  "bar-chart": <FiBarChart2 className="w-6 h-6" />,
};

interface SkillCardProps {
  skillCategory: SkillCategory;
  index: number;
}

export default function SkillCard({ skillCategory, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-6 glass-hover"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500">
          {iconMap[skillCategory.icon] || <FiCode className="w-6 h-6" />}
        </div>
        <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">
          {skillCategory.category}
        </h3>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {skillCategory.items.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-xs text-primary-500 font-semibold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-purple-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
