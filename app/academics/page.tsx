"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, BookOpen } from "lucide-react";
import { academicData, averageSGPA } from "@/data/portfolio";
import SGPAChart from "@/components/ui/SGPAChart";
import PageTransition from "@/components/ui/PageTransition";

export default function AcademicsPage() {
  const bestSem = academicData.reduce((max, d) => (d.sgpa > max.sgpa ? d : max), academicData[0]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Academics</h1>
          <p className="section-subtitle">My academic journey at IGDTUW</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: TrendingUp,
              label: "Average SGPA",
              value: averageSGPA.toString(),
              sub: "Across 3 semesters",
              color: "text-primary-500",
              bg: "bg-primary-500/10",
              border: "border-primary-500/20",
            },
            {
              icon: Award,
              label: "Best SGPA",
              value: bestSem.sgpa.toString(),
              sub: bestSem.semester,
              color: "text-accent",
              bg: "bg-accent/10",
              border: "border-accent/20",
            },
            {
              icon: BookOpen,
              label: "Semesters",
              value: academicData.length.toString(),
              sub: "Completed",
              color: "text-green-500",
              bg: "bg-green-500/10",
              border: "border-green-500/20",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex items-center gap-4 relative overflow-hidden"
            >
              <div className={`p-3 rounded-xl ${stat.bg} border ${stat.border} flex-shrink-0`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-3xl font-heading font-bold ${stat.color} tracking-tight`}>{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">{stat.label}</div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SGPA Chart */}
        <div className="mb-8">
          <SGPAChart data={academicData} average={averageSGPA} />
        </div>

        {/* Semester breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-6 mb-6"
        >
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white mb-6 uppercase tracking-widest">
            Semester Breakdown
          </h3>
          <div className="space-y-5">
            {academicData.map((sem, i) => (
              <motion.div
                key={sem.semester}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 text-xs font-semibold text-gray-600 dark:text-gray-300 shrink-0">
                  {sem.semester}
                </div>
                <div className="flex-1 h-7 bg-gray-100/80 dark:bg-white/6 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${((sem.sgpa - 7) / 3) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full flex items-center justify-end pr-3"
                    style={{ background: "linear-gradient(90deg, #7B2D8B, #a855f7)" }}
                  >
                    <span className="text-[11px] font-bold text-white">{sem.sgpa}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-6"
        >
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white mb-5 uppercase tracking-widest">
            Academic Highlights
          </h3>
          <ul className="space-y-3">
            {[
              "Consistent academic performance with SGPA above 8.0 in all semesters",
              "Highest SGPA of 8.81 achieved in Semester 2",
              "Strong foundation in core mechanical and automation engineering subjects",
              "Active participation in technical competitions and industry events",
            ].map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-gray-500 dark:text-gray-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                <span className="text-sm leading-relaxed">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </PageTransition>
  );
}
