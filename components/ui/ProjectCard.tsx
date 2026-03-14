"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Github } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

const languageColors: Record<string, string> = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Java: "bg-orange-500",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  R: "bg-blue-600",
  "Jupyter Notebook": "bg-orange-400",
  default: "bg-gray-500",
};

const languageBg: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400",
  JavaScript: "bg-yellow-500/10 text-yellow-500",
  TypeScript: "bg-blue-400/10 text-blue-400",
  Java: "bg-orange-500/10 text-orange-400",
  HTML: "bg-red-500/10 text-red-400",
  CSS: "bg-purple-500/10 text-purple-400",
  R: "bg-blue-600/10 text-blue-500",
  "Jupyter Notebook": "bg-orange-400/10 text-orange-400",
  default: "bg-gray-500/10 text-gray-400",
};

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const color = languageColors[repo.language || ""] || languageColors.default;
  const langBg = languageBg[repo.language || ""] || languageBg.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="glass-card glass-hover p-6 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/8 flex items-center justify-center flex-shrink-0">
            <Github className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <h3 className="font-heading font-semibold text-sm text-gray-900 dark:text-white line-clamp-1">
            {repo.name.replace(/-/g, " ")}
          </h3>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-150 flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1 leading-relaxed">
        {repo.description || "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-[10px] rounded-full bg-primary-500/8 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium border border-primary-500/15"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100/80 dark:border-white/6">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${color} opacity-90`} />
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${langBg}`}>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-3 ml-auto">
          <span className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
            <Star className="w-3 h-3" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
            <GitFork className="w-3 h-3" />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
