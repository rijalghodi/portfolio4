import { HeroSection } from '@/components/sections/HeroSection';
import { ArticleSection } from '@/components/sections/ArticleSection';
import { ProjectSection } from '@/components/sections/ProjectSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <div>
      <HeroSection />
      <ProjectSection projects={projects} />
      <ArticleSection />
      <ExperienceSection />
    </div>
  );
}
