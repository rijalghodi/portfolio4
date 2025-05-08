"use client";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ProjectCard, ProjectGlimps } from "../elements/project-card";
import { Button } from "../ui/button";
import { StarHeading } from "./star-heading";
export function ProjectSection({ projects }: { projects: ProjectGlimps[] }) {
  return (
    <section className="z-0 pt-16 pb-16" id="projects">
      <div className="max-w-screen-lg w-full mx-auto ">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <StarHeading>Projects</StarHeading>
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
              <ProjectCard {...project} titleTag="h3" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8 sm:hidden">
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
