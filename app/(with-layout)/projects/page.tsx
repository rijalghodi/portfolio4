// import { projects } from '@/data/project';
import { ProjectCard } from "@/components/elements/project-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import { getProjects } from "@/lib/sanity/sanity-utils";

// export const revalidate = 7 * 24 * 60 * 60; // a week

export default async function Project() {
  const projects = await getProjects();

  return (
    <>
      {/* <div className="fixed inset-0">
        <Spotlight />
      </div> */}
      {/* --- Articles */}
      <div className="z-0 bg-background pt-8 pb-16" id="projects">
        <div className="max-w-screen-lg w-full mx-auto">
          <div className="mb-8">
            <h1 data-aos="fade-up" className="text-4xl font-medium mb-4">
              Projects
            </h1>
            <p data-aos="fade-up" data-aos-delay="50" className="text-base sm:text-lg">
              Personal apps, client-requested apps, and artificial intelligence applications.
            </p>
          </div>
          <ul
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <li key={i}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  slug={project.slug}
                  iconUrl={project.icon_url}
                  coverImageUrl={project.cover_image_url}
                  role={project.role}
                  titleTag="h2"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
