"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText, User, GraduationCap, Briefcase, Trophy, Code } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { personalInfo, academicData, averageSGPA, experience, achievements, skills } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle">My professional summary</p>
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Eye className="w-4 h-4" /> Preview PDF
          </a>
        </motion.div>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center pb-8 border-b border-gray-200 dark:border-gray-700 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white">
              {personalInfo.name}
            </h2>
            <p className="text-primary-500 font-medium mt-1">{personalInfo.title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{personalInfo.university}</p>
            <div className="flex justify-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <a href={personalInfo.github} className="hover:text-primary-500 transition-colors">
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} className="hover:text-primary-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <ResumeSection icon={GraduationCap} title="Education">
            <div>
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    B.Tech — Mechanical & Automation Engineering
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    IGDTUW (Indira Gandhi Delhi Technical University for Women)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-primary-500">CGPA: {averageSGPA}</span>
                  <p className="text-xs text-gray-400">2023 — 2027</p>
                </div>
              </div>
              <div className="mt-3 flex gap-3 flex-wrap">
                {academicData.map((sem) => (
                  <span
                    key={sem.semester}
                    className="text-xs px-2 py-1 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  >
                    {sem.semester}: {sem.sgpa}
                  </span>
                ))}
              </div>
            </div>
          </ResumeSection>

          {/* Experience */}
          <ResumeSection icon={Briefcase} title="Experience">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 h-fit">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </ResumeSection>

          {/* Achievements */}
          <ResumeSection icon={Trophy} title="Achievements">
            {achievements.map((ach, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-accent text-lg mt-0.5">🏆</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {ach.position} — {ach.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ach.description}</p>
                </div>
              </div>
            ))}
          </ResumeSection>

          {/* Skills */}
          <ResumeSection icon={Code} title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((cat) => (
                <div key={cat.category}>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {cat.category}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">
                    {cat.items.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 dark:text-gray-500 mt-6"
        >
          <FileText className="w-4 h-4 inline mr-1" />
          PDF version available for download above
        </motion.p>
      </div>
    </PageTransition>
  );
}

function ResumeSection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-primary-500" />
        <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
