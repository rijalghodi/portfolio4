"use client";

import aboutImage from "@/public/images/about.jpg";
import Image from "next/image";
import { StarHeading } from "./star-heading";
import { StatsSection } from "./stats-section";

export function AboutSection() {
  return (
    <section className="z-0 pt-24 pb-24" id="about">
      <div className="max-w-screen-lg w-full mx-auto">
        <StarHeading className="mb-8">About me</StarHeading>
        <div className="flex flex-col gap-16">
          <div className="flex gap-8 flex-col md:gap-16 md:flex-row">
            <div className="flex flex-col gap-8">
              <p className="text-4xl">Hi, I'm Rijal Ghodi</p>
              <Image
                src={aboutImage}
                alt="About me"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-full overflow-hidden"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-muted-foreground mb-4">
                I'm a full-stack developer dedicated to turning ideas into creative solutions. I specialize in creating
                seamless and intuitive user experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and
                business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver
                experiences that not only engage users but also drive tangible results.
              </p>
            </div>
          </div>
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
