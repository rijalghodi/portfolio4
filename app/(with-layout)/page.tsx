import { AboutSection } from "@/components/sections/about-section";
import { ArticleSection } from "@/components/sections/article-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectSection } from "@/components/sections/project-section";
import { TechSection } from "@/components/sections/tech-section";
import { FallingStarsBackground } from "@/components/ui/falling-stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { getArticles, getExpereinces, getLatestPinnedAbout, getProjects } from "@/lib/sanity/sanity-utils";
import { IArticle } from "@/types/article";
import { IProject } from "@/types/project";

// export const revalidate = 7 * 24 * 60 * 60; // a week

export default async function Home() {
  const projects: IProject[] = await getProjects(1, 4);
  const articles: IArticle[] = await getArticles(1, 4);
  const about = await getLatestPinnedAbout();

  const experiences = await getExpereinces(1, 4);

  return (
    <>
      <div className="fixed inset-0">
        <Spotlight />
        <FallingStarsBackground minTwinkleSpeed={2} maxTwinkleSpeed={4} allStarsTwinkle starDensity={0.00006} />
        <ShootingStars />
      </div>
      <div className="relative">
        <HeroSection />
        <AboutSection cvUrl={about?.cv?.url} />
        <TechSection />
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
        <ExperienceSection
          experiences={experiences?.map((ex) => ({
            company: ex.company,
            companyLink: ex.url,
            iconUrl: ex.icon_url,
            position: ex.position,
            category: ex.category,
            location: ex.location,
            startDate: ex.start_date,
            endDate: ex.end_date,
            shortDesc: ex.short_desc,
            description: ex.description,
            stillWorking: ex.still_working,
          }))}
        />
        <ArticleSection articles={articles} />
      </div>
    </>
  );
}
