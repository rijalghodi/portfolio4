"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ITechnology } from "@/types/technology";

import AccessibleDiv from "../ui/accessible-div";
import { badgeVariants } from "../ui/badge";
export type ProjectGlimps = {
  name: string;
  description?: string;
  slug?: string;
  iconUrl?: string;
  coverImageUrl?: string;
  role?: string;
  titleTag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  technologies?: ITechnology[];
};
export function ProjectCard({
  description: shortDesc,
  name,
  slug,
  iconUrl,
  role,
  titleTag = "p",
  technologies,
}: ProjectGlimps) {
  // const coverImageUrl = null;
  const Wrapper = ({ children }: any) => {
    return slug ? (
      <Link
        href={`/projects/${slug}`}
        onClick={(e: any) => e.stopPropagation()}
        className="group relative"
      >
        {children}
      </Link>
    ) : (
      children
    );
  };
  return (
    <Wrapper>
      {/* Image background */}
      <div
        className={cn(
          "min-h-72 w-full rounded-2xl border overflow-hidden relative px-6 py-6 flex flex-col justify-end bg-background/50 hover:bg-muted/50 dark:bg-muted/50 dark:hover:bg-silent/50 backdrop-blur-md",
        )}
        data-aos="fade-up"
        // style={{
        //   backgroundImage: coverImageUrl ? `url(${coverImageUrl})` : 'none',
        // }}
      >
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div>
              {iconUrl && (
                <Image
                  src={iconUrl}
                  alt="Icon"
                  width={50}
                  height={50}
                  className="rounded-full h-10 w-auto overflow-clip object-fill"
                />
              )}
            </div>
            <div className="flex justify-between group">
              <AccessibleDiv
                tag={titleTag}
                className="text-foreground font-medium text-xl tracking-normal"
              >
                {name}
              </AccessibleDiv>
              <IconArrowRight
                size={24}
                className="opacity-0 text-primary group-hover:opacity-100 transition-transform ease-in duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
          <p className="text-normal">{shortDesc}</p>
          <p className=" font-medium text-xs font-mono uppercase">{role}</p>
          {technologies && technologies.length > 0 && (
            <div className="flex gap-2 flex-wrap items-center">
              {technologies.slice(0, 4).map((tech) => (
                <div key={tech.name} className={badgeVariants({ variant: "secondary" })}>
                  {tech.icon_url && (
                    <Image
                      src={tech.icon_url}
                      width={18}
                      height={18}
                      alt="tech icon"
                      className="rounded-full overflow-clip object-fill"
                    />
                  )}
                  <span className="text-muted-foreground text-xs font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white light:text-black md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-neutral-400 light:text-black md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
