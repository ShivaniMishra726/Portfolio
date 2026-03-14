"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Trophy, Sparkles, ChevronDown, Zap } from "lucide-react";
import { FiCode, FiGlobe, FiDatabase, FiBarChart2 } from "react-icons/fi";
import { personalInfo, skills, averageSGPA } from "@/data/portfolio";

const floatingIcons = [
  { Icon: FiCode, delay: 0, x: "8%", y: "22%" },
  { Icon: FiGlobe, delay: 1, x: "84%", y: "16%" },
  { Icon: FiDatabase, delay: 2, x: "76%", y: "68%" },
  { Icon: FiBarChart2, delay: 1.5, x: "12%", y: "72%" },
  { Icon: Zap, delay: 0.5, x: "50%", y: "8%" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#07070f]" />

        {/* Mesh gradient orbs */}
        <div className="glow-orb w-[600px] h-[600px] bg-primary-700 left-[-200px] top-[-100px]" style={{ opacity: 0.25 }} />
        <div className="glow-orb w-[500px] h-[500px] bg-purple-800 right-[-150px] top-[100px]" style={{ opacity: 0.2 }} />
        <div className="glow-orb w-[400px] h-[400px] bg-primary-900 left-[30%] bottom-[-50px]" style={{ opacity: 0.3 }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Noise texture */}
        <div className="noise-overlay" />

        {/* Fade to dark at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07070f] to-transparent" />

        {/* Floating icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/40"
            style={{ left: x, top: y }}
            animate={{ y: [0, -16, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-4 h-4" />
          </motion.div>
        ))}

        {/* Hero content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Achievement badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 backdrop-blur-md border border-white/12 text-white/80 text-xs font-medium mb-8 tracking-wide">
            <Trophy className="w-3.5 h-3.5 text-accent" />
            {personalInfo.achievementHighlight}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-5 tracking-tight leading-[1.05]"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 font-medium mb-2"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-white/40 mb-8">
            {personalInfo.university}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-7 py-3 rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-glow active:scale-[0.98] text-sm"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur-sm text-white/90 font-semibold px-7 py-3 rounded-xl border border-white/12 hover:bg-white/14 transition-all duration-200 active:scale-[0.98] text-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: `${averageSGPA}`, label: "Avg SGPA", suffix: "", icon: "📊" },
            { value: "3", label: "Semesters", suffix: "+", icon: "🎓" },
            { value: "1", label: "Internship", suffix: "", icon: "💼" },
            { value: "2025", label: "Ideathon", suffix: "", icon: "🏆" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card glass-hover p-6 text-center group cursor-default"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-heading font-bold gradient-text tracking-tight">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {skills.flatMap((cat) => cat.items).map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-4 py-2 glass-card text-sm font-medium text-gray-700 dark:text-gray-300 cursor-default border border-gray-200/50 dark:border-white/8 hover:border-primary-500/30 transition-colors"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/skills" className="btn-primary inline-flex items-center gap-2 text-sm">
            View All Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Achievement */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden group"
        >
          {/* Gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/6 via-transparent to-accent/6" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

          <div className="relative">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Trophy className="w-8 h-8 text-accent" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              Industrial Ideathon 2025
            </h2>
            <p className="text-primary-500 font-semibold text-base mb-4">2nd Runner&apos;s Up 🏆</p>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Worked on industry-focused engineering problems and presented an innovative solution
              evaluated by industry experts.
            </p>
            <Link href="/achievements" className="btn-primary inline-flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4" /> View Achievements
            </Link>
          </div>
        </motion.div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/3 to-transparent dark:from-white/2 dark:to-transparent" />
          <div className="flex items-center gap-4 relative">
            <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-800 border border-gray-800 dark:border-gray-700 flex items-center justify-center shadow-sm">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-gray-900 dark:text-white">
                @ShivaniMishra726
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Open source projects & contributions</p>
            </div>
          </div>
          <div className="flex gap-3 relative">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2 text-sm py-2.5 px-5">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 text-sm py-2.5 px-5"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
