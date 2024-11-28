'use client';

import React from 'react';

import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
export type ProjectGlimps = {
  name: string;
  description?: string;
  slug?: string;
  iconUrl?: string;
  coverImageUrl?: string;
  role?: string;
};
export function ProjectCard({
  description: shortDesc,
  name,
  slug,
  iconUrl,
  coverImageUrl,
  role,
}: ProjectGlimps) {
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
          'h-72 w-full rounded-xl border overflow-clip relative px-6 py-6 flex flex-col justify-end',
          coverImageUrl && `bg-center bg-cover] border-0`,
        )}
        style={{
          backgroundImage: coverImageUrl ? `url(${coverImageUrl})` : 'none',
        }}
      >
        {/* Gradient background */}
        <div
          className={cn(
            coverImageUrl
              ? 'bg-dark-image-gradient'
              : 'dark:bg-secondary hover:bg-secondary/50 dark:hover:bg-secondary/70',
            'absolute inset-0',
          )}
        ></div>
        <div className="relative flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="h-9 w-9 relative rounded-full overflow-clip">
              {iconUrl && (
                <Image src={iconUrl} fill alt="Icon" className="object-fill" />
              )}
            </div>
            <div className="flex justify-between group">
              <div className="font-medium text-background dark:text-foreground text-lg tracking-normal">
                {name}
              </div>
              <IconArrowRight
                size={24}
                className="opacity-0 text-primary group-hover:opacity-100 transition-transform ease-in duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>

          <div className="text-gray-300 dark:text-muted-foreground">
            {shortDesc}
          </div>
          <div className="text-gray-300 dark:text-muted-foreground font-medium text-xs font-mono uppercase">
            {role}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
