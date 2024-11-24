'use client';

import { projects } from '@/data';
import { ProjectCard } from '@/components/molecules/ProjectCard';

export default function Project() {
  return (
    <div>
      {/* --- Articles */}
      <section className="z-0 bg-background pt-8 pb-16" id="projects">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold font-mono mb-4">Projects</h1>
            <p className="text-base text-muted-foreground">
              Personal apps, client-requested apps, and artificial intelligence
              applications.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <li key={i}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
