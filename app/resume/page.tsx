"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText, User, GraduationCap, Briefcase, Trophy, Code } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { personalInfo, academicData, averageSGPA, experience, achievements, skills } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle">My professional summary</p>
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex justify-center gap-3 mb-10"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            <Eye className="w-4 h-4" /> Preview
          </a>
        </motion.div>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

          {/* Header */}
          <div className="text-center pb-8 border-b border-gray-100/80 dark:border-white/8 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-700 mx-auto mb-4 flex items-center justify-center shadow-glow">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-primary-500 font-medium text-sm mt-1">{personalInfo.title}</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{personalInfo.university}</p>
            <div className="flex justify-center flex-wrap gap-x-3 gap-y-1 mt-3 text-xs text-gray-400 dark:text-gray-500">
              <span>{personalInfo.email}</span>
              <span>·</span>
              <a href={personalInfo.github} className="hover:text-primary-500 transition-colors">GitHub</a>
              <span>·</span>
              <a href={personalInfo.linkedin} className="hover:text-primary-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Education */}
          <ResumeSection icon={GraduationCap} title="Education">
            <div>
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                    B.Tech — Mechanical & Automation Engineering
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    IGDTUW (Indira Gandhi Delhi Technical University for Women)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-primary-500">CGPA: {averageSGPA}</span>
                  <p className="text-[10px] text-gray-400">2023 — 2027</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                {academicData.map((sem) => (
                  <span
                    key={sem.semester}
                    className="text-[10px] px-2 py-1 rounded-lg bg-primary-500/8 border border-primary-500/15 text-primary-600 dark:text-primary-400"
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
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-white/6 border border-gray-200/60 dark:border-white/8 text-gray-500 dark:text-gray-400 h-fit">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/8 text-gray-500 dark:text-gray-400"
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
                <span className="text-lg mt-0.5">🏆</span>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {ach.position} — {ach.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{ach.description}</p>
                </div>
              </div>
            ))}
          </ResumeSection>

          {/* Skills */}
          <ResumeSection icon={Code} title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((cat) => (
                <div key={cat.category}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {cat.category}
                  </span>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
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
          className="text-center text-xs text-gray-400 dark:text-gray-500 mt-5 flex items-center justify-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" />
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
    <div className="mb-7">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20">
          <Icon className="w-3.5 h-3.5 text-primary-500" />
        </div>
        <h3 className="font-heading font-semibold text-xs text-gray-900 dark:text-white uppercase tracking-widest">{title}</h3>
        <div className="flex-1 h-px bg-gray-100/80 dark:bg-white/8 ml-1" />
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
