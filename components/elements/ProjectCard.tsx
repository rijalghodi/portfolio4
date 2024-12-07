'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import AccessibleDiv from '../ui/accessible-div';
export type ProjectGlimps = {
  name: string;
  description?: string;
  slug?: string;
  iconUrl?: string;
  coverImageUrl?: string;
  role?: string;
  titleTag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export function ProjectCard({
  description: shortDesc,
  name,
  slug,
  iconUrl,
  role,
  titleTag = 'p',
}: ProjectGlimps) {
  // const coverImageUrl = null;
  const Wrapper = ({ children }: any) => {
    return slug ? (
      <Link
        href={`/projects/${slug}`}
        onClick={(e) => e.stopPropagation()}
        className="group"
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
          'h-72 w-full rounded-xl border overflow-clip relative px-6 py-6 flex flex-col justify-end dark:bg-secondary hover:bg-secondary/50 dark:hover:bg-slate-800',
        )}
        data-aos="fade-up"
        // style={{
        //   backgroundImage: coverImageUrl ? `url(${coverImageUrl})` : 'none',
        // }}
      >
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="h-9 w-9 relative rounded-full overflow-clip">
              {iconUrl && (
                <Image
                  src={iconUrl}
                  alt="Icon"
                  width={40}
                  height={40}
                  className="rounded-full overflow-clip object-fill"
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
        </div>
      </div>
    </Wrapper>
  );
}
