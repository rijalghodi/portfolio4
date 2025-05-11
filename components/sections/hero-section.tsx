"use client";

import { contactEmail } from "@/data/contact";
import { cn } from "@/lib/utils";
import { MoveRight, Send } from "lucide-react";
import Link from "next/link";
import { useContactMe } from "../elements/contact-form-context";
import { SocialLinks } from "../elements/social-links";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";

export function HeroSection() {
  const { open } = useContactMe();
  return (
    <section id="intro" className="relative pt-20 pb-24 sm:py-24 flex items-center">
      <div className="relative max-w-screen-lg w-full mx-auto">
        <div className="w-full">
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 flex-col lg:flex-row lg:items-end lg:gap-10">
              <h1 className="font-mono mt-4 md:mt-2 text-5xl sm:text-6xl sm:text-start lg:text-8xl font-semibold tracking-tight !leading-snug">
                Full-stack <span className="inline lg:hidden">Developer</span>
              </h1>
              <Button
                variant="plain"
                radius="full"
                size="xl"
                className={cn(
                  "bg-primary text-primary-foreground border-none hover:bg-primary/80 dark:bg-white dark:text-black dark:hover:bg-gray-300",
                  "w-full sm:w-[240px] h-10 px-5 py-0.5 text-base [&_svg]:size-5 sm:h-11 sm:px-6 sm:text-lg sm:[&_svg]:size-6",
                )}
                asChild
              >
                <Link href="#projects">
                  Projects
                  <MoveRight />
                </Link>
              </Button>
            </div>

            <div className="flex gap-3 items-start">
              <p
                data-aos="fade-up"
                data-aos-delay="50"
                className="text-lg sm:text-xl py-4 text-foreground !leading-relaxed text-wrap-balance break-words"
              >
                2+ years of experience turn ideas into beautiful web applications. Focus in clean code, intuitive
                design, and scalable solutions.
              </p>
              <span className="font-mono  mt-4 md:mt-2 hidden lg:block text-4xl sm:text-6xl lg:text-8xl md:font-semibold tracking-tight text-end">
                Developer
              </span>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-6 mt-6 items-center justify-center sm:justify-start flex-wrap">
            <div className="flex gap-4 flex-col xs:flex-row w-full xs:w-fit ">
              <Button
                radius="full"
                variant="default"
                data-aos="fade-up"
                data-aos-delay="100"
                size="lg"
                className="w-full xs:w-fit"
                onClick={open}
              >
                <Send />
                Contact Me
              </Button>
              <CopyButton
                value={contactEmail}
                labelDefault="Copy Email"
                labelCopied="Email Copied"
                variant="secondary"
                radius="full"
                data-aos-delay="150"
                data-aos="fade-up"
                size="lg"
                className="w-full xs:w-fit"
              />
            </div>
            <div data-aos-delay="200" data-aos="fade-up">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
