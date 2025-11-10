"use client";

import aboutImage from "@/public/images/about.webp";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { StarHeading } from "./star-heading";
import { StatsSection } from "./stats-section";

export function AboutSection({ cvUrl }: { cvUrl?: string }) {
  return (
    <section className="z-0 py-24" id="about">
      <div className="max-w-screen-lg w-full mx-auto">
        <div data-aos="fade-up">
          <StarHeading title="About me" className="mb-8" />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex gap-8 flex-col md:gap-16 md:flex-row">
            <div className="flex flex-col gap-8" data-aos="fade-up">
              <p className="text-4xl">Hi, I'm Rijal Ghodi</p>
              <div className="flex items-start gap-4">
                <Image
                  src={aboutImage}
                  alt="About me"
                  width={100}
                  height={100}
                  className="rounded-full overflow-hidden object-cover"
                  data-aos="fade-up"
                />

                {cvUrl && (
                  <div data-aos="fade-up">
                    <Button asChild radius="full">
                      <Link
                        href={`${cvUrl}?dl=Rijal_Ghodi_Resume.pdf`}
                        download="Rijal_Ghodi_Resume.pdf"
                        title="Download Resume"
                      >
                        <IconDownload />
                        Download CV
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 space-y-4 text-base sm:text-xl text-muted-foreground dark:text-foreground">
              <p data-aos="fade-up" className="leading-relaxed">
                I'm a full-stack developer dedicated to turning ideas into
                creative solutions.
              </p>
              <p data-aos="fade-up" className="leading-relaxed">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <StatsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
