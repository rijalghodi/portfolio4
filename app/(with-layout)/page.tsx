import { HeroSection } from '@/components/sections/HeroSection';
import { ArticleSection } from '@/components/sections/ArticleSection';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { getArticles, getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects(1, 4);
  const articles = await getArticles(1, 4);

  return (
    <div>
      <HeroSection />
      <ProjectSection projects={projects} />
      <ArticleSection articles={articles} />
      <ExperienceSection />
    </div>
  );
}
