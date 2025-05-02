"use client";

import { useTheme } from "@/contexts/theme-context";
import { contactEmail, contactLinkedIn } from "@/data/contact";
import { cn } from "@/lib/utils";
import { IconArrowUpRight, IconChevronsDown } from "@tabler/icons-react";
import Link from "next/link";
import { SocialLinks } from "../elements/social-links";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";
export function HeroSection() {
  const { theme } = useTheme();

  const scrollToContent = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="intro" style={{ minHeight: "calc(100vh - 80px)" }} className="relative pt-16 pb-16 flex items-center">
      <div className="max-w-screen-md w-full mx-auto ">
        <h1 data-aos="fade-up" className=" font-medium py-4 font-mono sm:leading-[2.2]">
          {/* <span data-aos="fade-up" data-aos-delay="50" className="text-lg sm:text-xl text-foreground">
            Hi, there 👋
          </span> */}
          <br />
          <span className="font-mono text-4xl md:text-5xl">I&apos;m Rijal Ghodi</span>
          <br />
          <span className="font-mono  mt-4 md:mt-2 text-4xl md:text-5xl">Full Stack Developer</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="50" className="text-lg sm:text-xl py-4 text-foreground leading-loose">
          2+ years of experience turn ideas into beautiful web applications. Focus in clean code, intuitive design, and
          scalable solutions.
        </p>

        <div className="flex gap-6 mt-6 xs:gap-1 items-center flex-wrap">
          <div className="flex gap-4">
            <Button
              radius="full"
              asChild
              variant="default"
              className="bg-primary/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link href={contactLinkedIn} target="_blank">
                <IconArrowUpRight />
                Hire Me
              </Link>
            </Button>
            <CopyButton
              value={contactEmail}
              labelDefault="Copy Email"
              labelCopied="Email Copied"
              variant="secondary"
              radius="full"
              data-aos-delay="150"
              data-aos="fade-up"
            />
          </div>
          <div data-aos-delay="200" data-aos="fade-up">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
        <button
          className="animate-bounce"
          aria-label="Scroll To Content"
          title="Scroll To Content"
          onClick={scrollToContent}
        >
          <IconChevronsDown size={24} />
        </button>
      </div>
      <div
        className={cn(
          "-z-10 fixed top-1/2 sm:top-0 left-0 right-0 -translate-y-1/2 sm:translate-y-0 aspect-square bg-cover bg-center",
          theme === "dark" ? "bg-[url('/icons/comet-dark.svg')]" : "bg-[url('/icons/comet-light.svg')]",
        )}
      />
    </section>
  );
}
