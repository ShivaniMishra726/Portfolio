"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
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

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const color = languageColors[repo.language || ""] || languageColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-6 glass-hover flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading font-semibold text-base text-gray-900 dark:text-white line-clamp-1">
          {repo.name.replace(/-/g, " ")}
        </h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors flex-shrink-0 ml-2"
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
        {repo.description || "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-xs rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${color}`} />
            <span className="text-xs text-gray-500 dark:text-gray-400">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-3 ml-auto">
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Star className="w-3 h-3" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <GitFork className="w-3 h-3" />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
