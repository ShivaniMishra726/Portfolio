import { Suspense } from "react";
import { getGitHubRepos, getGitHubProfile } from "@/lib/github";
import { ProjectSkeleton } from "@/components/ui/Skeleton";
import ProjectsClient from "./ProjectsClient";

async function ProjectsList() {
  const [repos, profile] = await Promise.all([getGitHubRepos(), getGitHubProfile()]);

  return <ProjectsClient repos={repos} profile={profile} />;
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Open source work from GitHub</p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProjectsList />
      </Suspense>
    </div>
  );
}
