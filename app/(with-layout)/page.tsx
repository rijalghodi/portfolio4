import { AboutSection } from "@/components/sections/about-section";
import { ArticleSection } from "@/components/sections/article-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectSection } from "@/components/sections/project-section";
import { getArticles, getExpereinces, getProjects } from "@/sanity/sanity-utils";
import { IArticle } from "@/types/article";
import { IProject } from "@/types/project";

// export const revalidate = 7 * 24 * 60 * 60; // a week

export default async function Home() {
  const projects: IProject[] = await getProjects(1, 4);
  const articles: IArticle[] = await getArticles(1, 4);
  const experiences = await getExpereinces(1, 4);

  return (
    <>
      <div className="relative">
        <HeroSection />
        <AboutSection />
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
        <ExperienceSection
          experiences={experiences?.map((ex) => ({
            company: ex.company,
            companyLink: ex.url,
            iconUrl: ex.icon_url,
            position: ex.position,
            category: ex.category,
            startDate: ex.start_date,
            endDate: ex.end_date,
            shortDesc: ex.short_desc,
            stillWorking: ex.still_working,
          }))}
        />
      </div>
    </>
  );
}
