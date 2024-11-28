import { HeroSection } from '@/components/sections/HeroSection';
import { ArticleSection } from '@/components/sections/ArticleSection';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { getArticles, getProjects } from '@/sanity/sanity-utils';
import { IProject } from '@/types/project';
import { IArticle } from '@/types/article';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = false; // or false, to 404 on unknown paths

export default async function Home() {
  const projects: IProject[] = await getProjects(1, 4);
  const articles: IArticle[] = await getArticles(1, 4);
  return (
    <div>
      <HeroSection />
      <ProjectSection
        projects={projects.map((project) => ({
          name: project.name,
          coverImageUrl: project.cover_image_url,
          description: project.description,
          slug: project.slug,
          iconUrl: project.icon_url,
          role: project.role,
        }))}
      />
      <ArticleSection articles={articles} />
      <ExperienceSection />
    </div>
  );
}
