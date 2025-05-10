"use client";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ProjectCard, ProjectGlimps } from "../elements/project-card";
import { Button } from "../ui/button";
import { StarHeading } from "./star-heading";
export function ProjectSection({ projects }: { projects: ProjectGlimps[] }) {
  return (
    <section className="z-0 py-24" id="projects">
      <div className="max-w-screen-lg w-full mx-auto space-y-8">
        <div className="space-y-6">
          <StarHeading>Featured Projects</StarHeading>
          <p className="mb-8">Crafted with love and passion, here are some of the projects I&apos;ve worked on.</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <li key={i}>
              <ProjectCard {...project} titleTag="h3" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8">
          <Button variant="outline" radius="full" asChild>
            <Link href="/projects">
              All Projects <IconArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
