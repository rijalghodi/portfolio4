import { ArticleSection } from "@/components/sections/article-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectSection } from "@/components/sections/project-section";
import { IconOrion } from "@/components/ui/icon-orion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
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
        <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none" id="parallax-container">
          <div className="absolute top-12 right-12">
            <IconOrion className="animate-float w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]" />
          </div>
          <Spotlight />
          <StarsBackground minTwinkleSpeed={2} maxTwinkleSpeed={4} allStarsTwinkle starDensity={0.0001} />
          <ShootingStars />
        </div>
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
