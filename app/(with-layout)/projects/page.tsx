// import { projects } from '@/data/project';
import { ProjectCard } from '@/components/elements/ProjectCard';
import { getProjects } from '@/sanity/sanity-utils';

export default async function Project() {
  const projects = await getProjects();

  return (
    <div>
      {/* --- Articles */}
      <section className="z-0 bg-background pt-8 pb-16" id="projects">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <p className="text-base text-muted-foreground">
              Personal apps, client-requested apps, and artificial intelligence
              applications.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <li key={i}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  slug={project.slug}
                  demo_link={project.demo_link}
                  source_link={project.source_link}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
