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
        <div data-aos="fade-up">
          <StarHeading
            title="Featured Projects"
            description="Crafted with love and passion, here are some of the projects I've worked on."
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <li key={i}>
              <ProjectCard {...project} titleTag="h3" />
            </li>
          ))}
        </ul>

        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mt-8">
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
