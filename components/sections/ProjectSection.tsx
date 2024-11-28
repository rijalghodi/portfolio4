import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { ProjectCard, ProjectGlimps } from '../elements/ProjectCard';
export function ProjectSection({ projects }: { projects: ProjectGlimps[] }) {
  return (
    <section className="z-0 bg-background pt-16 pb-16" id="projects">
      <div className="max-w-screen-md w-full mx-auto ">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <h2 className="font-semibold  text-2xl sm:text-3xl">Projects</h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/projects">
              All Projects
              <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <li key={i}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
