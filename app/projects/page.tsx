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
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              Projects I&apos;ve created over the years include this website,
              personal apps, client-requested apps, and artificial intelligence
              applications.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-6">
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
