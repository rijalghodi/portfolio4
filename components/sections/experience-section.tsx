"use client";
import { dateToMMYYYY } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ExperienceView } from "../elements/experience-card";
import { Button } from "../ui/button";
import { Timeline } from "../ui/timeline";
import { StarHeading } from "./star-heading";

type Props = {
  experiences: ExperienceView[];
};
export function ExperienceSection({ experiences }: Props) {
  return (
    <section className="z-0 pt-32 pb-32" id="experiences">
      <div className="max-w-screen-lg w-full mx-auto space-y-8">
        <div className="space-y-6">
          <StarHeading>My Work Experience</StarHeading>
          {/* <p className="mb-8">
            In a mean time, I write articles about my experiences and learnings. As Feymann once said,
            <span className="italic">"I write to learn"</span>
          </p> */}
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
      </div>
    </section>
  );
}
