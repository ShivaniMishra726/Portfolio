"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, User } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import type { GitHubRepo, GitHubProfile } from "@/lib/github";
import { personalInfo } from "@/data/portfolio";

interface Props {
  repos: GitHubRepo[];
  profile: GitHubProfile | null;
}

export default function ProjectsClient({ repos, profile }: Props) {
  return (
    <div>
      {/* GitHub Profile Card */}
      {profile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/3 to-transparent dark:from-white/2 dark:to-transparent" />
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200/60 dark:border-white/10">
            {profile.avatar_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatar_url}
                alt={`${profile.name || profile.login} GitHub avatar`}
                className="w-14 h-14 rounded-xl"
              />
            ) : (
              <div className="w-14 h-14 bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1 text-center sm:text-left relative">
            <h3 className="font-heading font-bold text-base text-gray-900 dark:text-white tracking-tight">
              {profile.name || profile.login}
            </h3>
            {profile.bio && (
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-relaxed">{profile.bio}</p>
            )}
            <div className="flex justify-center sm:justify-start gap-4 mt-2 text-xs text-gray-400 dark:text-gray-500">
              <span>{profile.public_repos} repos</span>
              <span>{profile.followers} followers</span>
            </div>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm py-2 px-4 relative"
          >
            <Github className="w-4 h-4" /> View GitHub
          </a>
        </motion.div>
      )}

      {/* Repos grid */}
      {repos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 glass-card"
        >
          <Github className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-gray-600 dark:text-gray-400 mb-2 text-sm">
            No public repositories found
          </h3>
          <p className="text-gray-400 dark:text-gray-500 text-xs mb-5">
            Check back later or visit GitHub directly
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm py-2.5"
          >
            <ExternalLink className="w-4 h-4" /> Visit GitHub Profile
          </a>
        </motion.div>
      )}

      {/* View more on GitHub */}
      {repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            <Github className="w-4 h-4" /> View All on GitHub
          </a>
        </motion.div>
      )}
    </div>
  );
}
