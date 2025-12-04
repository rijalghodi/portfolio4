import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

import { ExperienceTimeline } from "@/components/sections/experience-section";
import { Button } from "@/components/ui/button";
import { PortableTextRenderer } from "@/components/ui/portable-text-renderer/portable-text-renderer";
import { getExpereinces, getLatestPinnedAbout } from "@/lib/sanity/sanity-utils";

// export const revalidate = 7 * 24 * 60 * 60; // a week

export default async function About() {
  const about = await getLatestPinnedAbout();
  const experiences = await getExpereinces();

  return (
    <>
      {/* <div className="fixed inset-0">
        <Spotlight />
      </div> */}
      <article className="z-0 bg-background pt-8 pb-16 max-w-screen-lg mx-auto">
        <section className="w-full mx-auto flex flex-col gap-8">
          <header>
            <h1 data-aos="fade-up" className="text-4xl font-medium mb-4 text-center sm:text-left">
              About Me
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-between gap-4 flex-wrap"
            >
              {about?.date && (
                <p className="font-semibold uppercase font-mono text-sm text-center sm:text-left">
                  Updated at{" "}
                  {new Date(about?.date ?? about._createdAt).toLocaleDateString("en", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </header>
          <div data-aos="fade-up" data-aos-delay="100">
            {about.cv.url && (
              <Button radius="full" asChild>
                <Link
                  href={`${about?.cv?.url}?dl=Rijal_Ghodi_Resume.pdf`}
                  download="Rijal_Ghodi_Resume.pdf"
                  title="Download Resume"
                >
                  <IconDownload />
                  Download CV
                </Link>
              </Button>
            )}
          </div>
          <section data-aos="fade-up" data-aos-delay="100">
            <PortableTextRenderer value={about?.content} />
          </section>
        </section>
        <section className="flex flex-col gap-0">
          <h2 className="text-[1.75rem] font-medium leading-snug mb-6 mt-10">My Work Experience</h2>
          <ExperienceTimeline
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
        </section>
      </article>
    </>
  );
}
