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
          className="glass-card p-6 mb-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            {profile.avatar_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatar_url}
                alt={`${profile.name || profile.login} GitHub avatar`}
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
              {profile.name || profile.login}
            </h3>
            {profile.bio && (
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{profile.bio}</p>
            )}
            <div className="flex justify-center sm:justify-start gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{profile.public_repos} repos</span>
              <span>{profile.followers} followers</span>
            </div>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Github className="w-4 h-4" /> View GitHub
          </a>
        </motion.div>
      )}

      {/* Repos grid */}
      {repos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-gray-600 dark:text-gray-400 mb-2">
            No public repositories found
          </h3>
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
            Check back later or visit GitHub directly
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
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
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> View All on GitHub
          </a>
        </motion.div>
      )}
    </div>
  );
}
