"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import AchievementCard from "@/components/ui/AchievementCard";
import PageTransition from "@/components/ui/PageTransition";

export default function AchievementsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Achievements</h1>
          <p className="section-subtitle">Milestones and recognitions along the journey</p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} achievement={achievement} index={i} />
          ))}
        </div>

        {/* More coming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            More achievements to come as I continue my engineering journey 🌱
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
