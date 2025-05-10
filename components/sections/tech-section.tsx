"use client";

import { StarHeading } from "./star-heading";

export function TechSection() {
  return (
    <section className="z-0 pt-24 pb-24" id="tech">
      <div className="max-w-screen-lg w-full mx-auto">
        <StarHeading className="mb-12">My Tech Stacks</StarHeading>
        <div className="flex flex-col gap-12">
          <section aria-labelledby="frontend-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="frontend-heading" className="text-3xl col-span-1">
                Frontend
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="backend-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="backend-heading" className="text-3xl col-span-1">
                Backend
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="database-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="database-heading" className="text-3xl col-span-1">
                Database
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Prisma</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="devops-heading">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h3 id="devops-heading" className="text-3xl col-span-1">
                DevOps
              </h3>
              <ul className="col-span-1 md:col-span-3 flex flex-wrap gap-4">
                <li>Docker</li>
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
