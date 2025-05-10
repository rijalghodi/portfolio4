"use client";

import Image from "next/image";
import { StarHeading } from "./star-heading";

// Tech stack data
const techStacks = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "TypeScript", logo: "ts" },
      { name: "JavaScript", logo: "js" },
      { name: "React.js", logo: "react" },
      { name: "Next.js", logo: "next" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "Shadcn", logo: "shadcn" },
      { name: "Mantine", logo: "mantine" },
      { name: "Framer Motion", logo: "framer-motion" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", logo: "node" },
      { name: "Express.js", logo: "express" },
      { name: "Nest.js", logo: "nest" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MySQL", logo: "mysql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Prisma", logo: "prisma" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    items: [{ name: "Docker", logo: "docker" }, { name: "Github Actions" }, { name: "Git" }],
  },
];

// Logo imports (mapped by filename key)
const logos = {
  express: require("@/public/tech/express.webp"),
  "framer-motion": require("@/public/tech/framer-motion.webp"),
  js: require("@/public/tech/js.webp"),
  mantine: require("@/public/tech/mantine.webp"),
  mongodb: require("@/public/tech/mongodb.webp"),
  mysql: require("@/public/tech/mysql.webp"),
  nest: require("@/public/tech/nest.webp"),
  next: require("@/public/tech/next.webp"),
  node: require("@/public/tech/node.webp"),
  postgresql: require("@/public/tech/postgresql.webp"),
  prisma: require("@/public/tech/prisma.webp"),
  react: require("@/public/tech/react.webp"),
  shadcn: require("@/public/tech/shadcn.webp"),
  tailwind: require("@/public/tech/tailwind.webp"),
  ts: require("@/public/tech/ts.webp"),
  docker: require("@/public/tech/docker.webp"),
};

export function TechSection() {
  return (
    <section className="z-0 pt-32 pb-32" id="tech">
      <div className="max-w-screen-lg w-full mx-auto">
        <StarHeading className="mb-12">My Tech Stacks</StarHeading>
        <div className="flex flex-col gap-16">
          {techStacks.map(({ id, title, items }) => (
            <section key={id} aria-labelledby={`${id}-heading`}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h3 id={`${id}-heading`} className="text-3xl col-span-1">
                  {title}
                </h3>
                <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-8 text-lg sm:text-xl">
                  {items.map(({ name, logo }) => (
                    <li key={name} className="flex items-center gap-2">
                      {logo && (
                        <Image
                          src={logos[logo as keyof typeof logos]}
                          alt={name}
                          width={32}
                          height={32}
                          className="rounded-sm"
                        />
                      )}
                      {name}
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
