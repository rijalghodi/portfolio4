"use client";

import { MoveRight, Send } from "lucide-react";
import Link from "next/link";

import { contactEmail } from "@/data/contact";
import { cn } from "@/lib/utils";

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
              <div data-aos="fade-up" data-aos-delay="100">
                <h1 className="font-mono mt-4 md:mt-2 text-5xl sm:text-6xl sm:text-start lg:text-8xl font-semibold tracking-tight !leading-snug">
                  Full-stack <span className="inline lg:hidden">Developer</span>
                </h1>
              </div>
              <div data-aos="fade-up" data-aos-delay="150">
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
            </div>

            <div className="flex gap-3 items-start">
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="text-lg sm:text-xl py-4 text-foreground !leading-relaxed text-wrap-balance break-words">
                  2+ years of experience building modern React applications with strong backend
                  foundations.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="250">
                <span className="font-mono mt-4 md:mt-2 hidden lg:block text-4xl sm:text-6xl lg:text-8xl md:font-semibold tracking-tight text-end">
                  Developer
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-6 mt-6 items-center justify-center sm:justify-start flex-wrap">
            <div className="flex gap-4 flex-col xs:flex-row w-full xs:w-fit">
              <div data-aos="fade-up" data-aos-delay="300">
                <Button radius="full" size="lg" className="w-full xs:w-fit" onClick={open}>
                  <Send />
                  Contact Me
                </Button>
              </div>
              <div data-aos="fade-up" data-aos-delay="350">
                <CopyButton
                  value={contactEmail}
                  labelDefault="Copy Email"
                  labelCopied="Email Copied"
                  variant="secondary"
                  radius="full"
                  size="lg"
                  className="w-full xs:w-fit"
                  withConfetti
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
