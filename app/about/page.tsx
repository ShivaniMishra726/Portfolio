"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Lightbulb, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import PageTransition from "@/components/ui/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">A little about who I am</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile image */}
            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-1">
                {personalInfo.name}
              </h2>
              <p className="text-primary-500 font-medium mb-2">{personalInfo.title}</p>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.university}</span>
              </div>
            </div>

            {/* Quick info */}
            <div className="glass-card p-6 space-y-4">
              {[
                { label: "Year", value: personalInfo.year },
                { label: "Branch", value: "Mechanical & Automation Engineering" },
                { label: "University", value: "IGDTUW, Delhi" },
                { label: "Email", value: personalInfo.email },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.label}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio sections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10">
                  <User className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">Bio</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hi! I&apos;m Shivani Mishra, a passionate 2nd-year Mechanical & Automation Engineering
                student at IGDTUW (Indira Gandhi Delhi Technical University for Women), Delhi. I
                combine my engineering foundation with a love for technology to build intelligent
                systems and data-driven solutions.
              </p>
            </div>

            {/* University */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Pursuing B.Tech in Mechanical & Automation Engineering from IGDTUW (Indira Gandhi
                Delhi Technical University for Women), New Delhi. Maintaining a strong academic
                record with an average SGPA of 8.49 across three semesters.
              </p>
            </div>

            {/* Engineering Interests */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10">
                  <Lightbulb className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">Engineering Interests</h3>
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
                    className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10">
                  <Target className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">Career Goals</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Aspiring to work at the intersection of mechanical engineering and artificial
                intelligence, developing smart automation solutions that solve real-world industrial
                challenges. Currently focused on building skills in AI, data analysis, and
                full-stack development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
