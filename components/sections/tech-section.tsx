"use client";

import expressLogo from "@/public/tech/express.webp";
import framerMotionLogo from "@/public/tech/framer-motion.webp";
import javascriptLogo from "@/public/tech/js.webp";
import mantineLogo from "@/public/tech/mantine.webp";
import mongodbLogo from "@/public/tech/mongodb.webp";
import mysqlLogo from "@/public/tech/mysql.webp";
import nestLogo from "@/public/tech/nest.webp";
import nextLogo from "@/public/tech/next.webp";
import nodeLogo from "@/public/tech/node.webp";
import postgresqlLogo from "@/public/tech/postgresql.webp";
import prismaLogo from "@/public/tech/prisma.webp";
import reactLogo from "@/public/tech/react.webp";
import shadcnLogo from "@/public/tech/shadcn.webp";
import tailwindLogo from "@/public/tech/tailwind.webp";
import typescriptLogo from "@/public/tech/ts.webp";
import Image from "next/image";
import { StarHeading } from "./star-heading";

import dockerLogo from "@/public/tech/docker.webp";
export function TechSection() {
  return (
    <section className="z-0 pt-32 pb-32" id="tech">
      <div className="max-w-screen-lg w-full mx-auto">
        <StarHeading className="mb-12">My Tech Stacks</StarHeading>
        <div className="flex flex-col gap-12">
          <section aria-labelledby="frontend-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="frontend-heading" className="text-3xl col-span-1">
                Frontend
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-8 text-xl">
                <li className="flex items-center gap-2">
                  <Image src={typescriptLogo} alt="TypeScript" width={32} height={32} /> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <Image src={javascriptLogo} alt="JavaScript" width={32} height={32} /> JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <Image src={reactLogo} alt="React" width={32} height={32} /> React.js
                </li>
                <li className="flex items-center gap-2">
                  <Image src={nextLogo} alt="Next.js" width={32} height={32} /> Next.js
                </li>
                <li className="flex items-center gap-2">
                  <Image src={tailwindLogo} alt="Tailwind CSS" width={32} height={32} /> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <Image src={shadcnLogo} alt="Shadcn" width={32} height={32} className="rounded-sm" /> Shadcn
                </li>
                <li className="flex items-center gap-2">
                  <Image src={mantineLogo} alt="Mantine" width={32} height={32} className="rounded-sm" /> Mantine
                </li>
                <li className="flex items-center gap-2">
                  <Image src={framerMotionLogo} alt="Framer Motion" width={32} height={32} className="rounded-sm" />{" "}
                  Framer Motion
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="backend-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="backend-heading" className="text-3xl col-span-1">
                Backend
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-8 text-xl">
                <li className="flex items-center gap-2">
                  <Image src={nodeLogo} alt="Node.js" width={32} height={32} className="rounded-sm" /> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <Image src={expressLogo} alt="Express.js" width={32} height={32} className="rounded-sm" /> Express.js
                </li>
                <li className="flex items-center gap-2">
                  <Image src={nestLogo} alt="Nest.js" width={32} height={32} className="rounded-sm" /> Nest.js
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="database-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="database-heading" className="text-3xl col-span-1">
                Database
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-8 text-xl">
                <li className="flex items-center gap-2">
                  <Image src={postgresqlLogo} alt="PostgreSQL" width={32} height={32} className="rounded-sm" />{" "}
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <Image src={mysqlLogo} alt="MySQL" width={32} height={32} className="rounded-sm" /> MySQL
                </li>
                <li className="flex items-center gap-2">
                  <Image src={mongodbLogo} alt="MongoDB" width={32} height={32} className="rounded-sm" /> MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <Image src={prismaLogo} alt="Prisma" width={32} height={32} className="rounded-sm" /> Prisma
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="devops-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="devops-heading" className="text-3xl col-span-1">
                DevOps
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4">
                <li className="flex items-center gap-2">
                  <Image src={dockerLogo} alt="Docker" width={32} height={32} className="rounded-sm" /> Docker
                </li>
                <li>AWS</li>
                <li>CI/CD</li>
                <li>Git</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
