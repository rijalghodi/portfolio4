"use client";

import Image from "next/image";
import { StarHeading } from "./star-heading";

// Tech stack data
const techStacks = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "Next.js", logo: "/tech/next.webp" },
      { name: "React.js", logo: "/tech/react.webp" },
      { name: "TypeScript", logo: "/tech/ts.webp" },
      { name: "Tailwind CSS", logo: "/tech/tailwind.webp" },
      { name: "Shadcn", logo: "/tech/shadcn.webp" },
      { name: "Mantine", logo: "/tech/mantine.webp" },
      { name: "Framer Motion", logo: "/tech/framer-motion.webp" },
      { name: "GSAP", logo: "/tech/gsap.webp" },
      { name: "Three.js", logo: "/tech/three.webp" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", logo: "/tech/node.webp" },
      { name: "Express.js", logo: "/tech/express.svg" },
      { name: "Nest.js", logo: "/tech/nest.webp" },
      { name: "Golang", logo: "/tech/go.webp" },
      { name: "Go Fiber", logo: "/tech/fiber.webp" },
      { name: "GraphQL", logo: "/tech/graphql.webp" },
      { name: "RESTful API", logo: "/tech/restful-api.webp" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
      { name: "MySQL", logo: "/tech/mysql.webp" },
      { name: "MariaDB", logo: "/tech/mariadb.webp" },
      { name: "Redis", logo: "/tech/redis.webp" },
      { name: "MongoDB", logo: "/tech/mongodb.webp" },
      { name: "Firestore", logo: "/tech/firestore.webp" },
      { name: "Supabase", logo: "/tech/supabase.webp" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    items: [
      { name: "Docker", logo: "/tech/docker.svg" },
      { name: "Kubernetes", logo: "/tech/kubernetes.webp" },
      { name: "Git", logo: "/tech/git.svg" },
      { name: "Linux", logo: "/tech/linux.svg" },
      { name: "Jenkins", logo: "/tech/jenkins.webp" },
      { name: "GitHub Actions", logo: "/tech/github-actions.webp" },
      { name: "GitLab CI/CD", logo: "/tech/gitlab-ci-cd.webp" },
    ],
  },
];

export function TechSection() {
  return (
    <section className="z-0 py-24" id="tech">
      <div className="max-w-screen-lg w-full mx-auto">
        <div data-aos="fade-up">
          <StarHeading
            description="Extended hands that I've used to build my projects."
            title="My Tech Stacks"
            className="mb-12"
          />
        </div>

        <div className="flex flex-col gap-16">
          {techStacks.map(({ id, title, items }, index) => (
            <section key={id} aria-labelledby={`${id}-heading`} data-aos="fade-up" data-aos-delay={`${100 * index}`}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h3 id={`${id}-heading`} className="text-3xl col-span-1">
                  {title}
                </h3>
                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4 text-sm sm:text-lg">
                  {items.map(({ name, logo }) => (
                    <li
                      key={name}
                      className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-border hover:rotate-[6deg] transition-transform duration-300"
                    >
                      {logo && (
                        <Image
                          src={logo}
                          alt={`${name} Logo`}
                          width={16}
                          height={16}
                          className="rounded-sm group-hover:scale-[1.5] transition-transform duration-200"
                        />
                      )}
                      <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
