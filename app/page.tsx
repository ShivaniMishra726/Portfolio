"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Trophy, Sparkles, ChevronDown } from "lucide-react";
import { FiCode, FiGlobe, FiDatabase, FiBarChart2 } from "react-icons/fi";
import { personalInfo, skills, averageSGPA } from "@/data/portfolio";

const floatingIcons = [
  { Icon: FiCode, delay: 0, x: "10%", y: "20%" },
  { Icon: FiGlobe, delay: 1, x: "85%", y: "15%" },
  { Icon: FiDatabase, delay: 2, x: "75%", y: "70%" },
  { Icon: FiBarChart2, delay: 1.5, x: "15%", y: "75%" },
  { Icon: FiCode, delay: 0.5, x: "50%", y: "10%" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-950" />

        {/* Floating icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white/60"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        ))}

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Achievement badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
          >
            <Trophy className="w-4 h-4 text-accent" />
            {personalInfo.achievementHighlight}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-medium mb-3"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg text-white/60 mb-2"
          >
            {personalInfo.university}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-white/70 italic max-w-2xl mx-auto mb-10"
          >
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: `${averageSGPA}`, label: "Avg SGPA", suffix: "" },
            { value: "3", label: "Semesters", suffix: "+" },
            { value: "1", label: "Internship", suffix: "" },
            { value: "2025", label: "Ideathon", suffix: "" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-heading font-bold gradient-text">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.flatMap((cat) => cat.items).map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 glass-card text-sm font-medium text-gray-700 dark:text-gray-300 cursor-default"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/skills" className="btn-primary inline-flex items-center gap-2">
            View All Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Achievement */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent/5" />
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
              Industrial Ideathon 2025
            </h2>
            <p className="text-primary-500 font-bold text-lg mb-4">2nd Runner&apos;s Up 🏆</p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Worked on industry-focused engineering problems and presented an innovative solution
              evaluated by industry experts.
            </p>
            <Link href="/achievements" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> View Achievements
            </Link>
          </div>
        </motion.div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
              <Github className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                @ShivaniMishra726
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Check out my open source projects</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
