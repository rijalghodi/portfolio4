"use client";
import { dateToMMYYYY } from "@/lib/utils";
import { Building, MapPin } from "lucide-react";
import { ExperienceView } from "../elements/experience-card";
import { PortableTextRenderer } from "../ui/portable-text-renderer/PortableTextRenderer";
import { Timeline } from "../ui/timeline";
import { StarHeading } from "./star-heading";

type Props = {
  experiences: ExperienceView[];
};

export function ExperienceSection({ experiences }: Props) {
  return (
    <section className="z-0 py-24" id="experiences">
      <div className="max-w-screen-lg w-full mx-auto space-y-8">
        <div className="space-y-6">
          <StarHeading title="My Work Experience" description="Experiences that I've had throughout my career." />
          <Timeline>
            {experiences.map((ex, i) => (
              <Timeline.Item key={i}>
                <Timeline.Heading className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <time className="text-sm font-light">
                      {dateToMMYYYY(ex.startDate)} -{" "}
                      {ex.stillWorking ? "Now" : ex.endDate ? dateToMMYYYY(ex.endDate) : "Present"}
                    </time>
                    <h3 className="text-2xl font-medium text-primary">{ex.position}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {ex.company && (
                      <p className="text-sm flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {ex.company}
                      </p>
                    )}
                    {ex.location && (
                      <p className="text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {ex.location}
                      </p>
                    )}
                  </div>
                </Timeline.Heading>
                <Timeline.Content>
                  {ex.shortDesc && <p className="mb-4 text-base sm:text-lg">{ex.shortDesc}</p>}
                  {ex.description && (
                    <div className="sm:block hidden">
                      <PortableTextRenderer value={ex.description} />
                    </div>
                  )}
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
      {/* <div className="max-w-screen-lg w-full mx-auto space-y-8">
        <div className="space-y-6">
          <StarHeading>My Work Experience</StarHeading>
        </div>
        <Timeline>
          {experiences.map((ex, i) => (
            <Timeline.Item key={i}>
              <Timeline.Head>
                <p className="text-sm" data-aos="fade-up">
                  {dateToMMYYYY(ex.startDate)} -{" "}
                  {ex.stillWorking ? "Now" : ex.endDate ? dateToMMYYYY(ex.endDate) : "Present"}
                </p>
              </Timeline.Head>
              <Timeline.Body>
                <div className="mb-3" data-aos="fade-up" data-aos-delay="50">
                  <h3 className="font-normal text-xl sm:text-2xl mb-2">{ex.position}</h3>
                  {ex.companyLink ? (
                    <Link
                      href={ex.companyLink ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {ex.company}
                    </Link>
                  ) : (
                    <p className="text-primary">{ex.company}</p>
                  )}
                </div>
                {ex.shortDesc && (
                  <p data-aos="fade-up" data-aos-delay="100">
                    {ex.shortDesc}
                  </p>
                )}
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
        <div className="flex justify-center mt-8">
          <Button variant="outline" radius="full" asChild>
            <Link href="/about">
              More About Me <IconArrowRight />
            </Link>
          </Button>
        </div>
      </div> */}
    </section>
  );
}
