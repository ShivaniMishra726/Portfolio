"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Lightbulb, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import PageTransition from "@/components/ui/PageTransition";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">A little about who I am</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Profile (2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            {/* Profile card */}
            <div className="glass-card p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-700 mx-auto mb-5 flex items-center justify-center shadow-glow">
                  <User className="w-14 h-14 text-white" />
                </div>
                <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-1 tracking-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-primary-500 font-medium text-sm mb-3">{personalInfo.title}</p>
                <div className="flex items-center justify-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.university}</span>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="glass-card p-5 space-y-0">
              {[
                { label: "Year", value: personalInfo.year },
                { label: "Branch", value: "Mechanical & Automation Engg." },
                { label: "University", value: "IGDTUW, Delhi" },
                { label: "Email", value: personalInfo.email },
              ].map((item, i) => (
                <div key={item.label} className={`flex justify-between items-center py-3 ${i < 3 ? "border-b border-gray-100/80 dark:border-white/6" : ""}`}>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-right max-w-[180px] truncate">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio sections (3 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            {/* Bio */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-wider">Bio</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Hi! I&apos;m Shivani Mishra, a passionate 2nd-year Mechanical & Automation Engineering
                student at IGDTUW (Indira Gandhi Delhi Technical University for Women), Delhi. I
                combine my engineering foundation with a love for technology to build intelligent
                systems and data-driven solutions.
              </p>
            </div>

            {/* University */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-wider">Education</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Pursuing B.Tech in Mechanical & Automation Engineering from IGDTUW (Indira Gandhi
                Delhi Technical University for Women), New Delhi. Maintaining a strong academic
                record with an average SGPA of 8.49 across three semesters.
              </p>
            </div>

            {/* Engineering Interests */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-wider">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Automation Systems",
                  "Generative AI",
                  "Data Analysis",
                  "Web Development",
                  "Robotics",
                  "Machine Learning",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-primary-500/8 border border-primary-500/15 text-primary-600 dark:text-primary-400 text-xs font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-wider">Career Goals</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Aspiring to work at the intersection of mechanical engineering and artificial
                intelligence, developing smart automation solutions that solve real-world industrial
                challenges. Currently focused on building skills in AI, data analysis, and
                full-stack development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
