'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export type ProjectGlimps = {
  name: string;
  description?: string;
  demo_link?: string;
  source_link?: string;
  slug?: string;
};
export function ProjectCard({
  description: shortDesc,
  name,
  demo_link: demoLink,
  source_link: sourceLink,
  slug,
}: ProjectGlimps) {
  const Wrapper = ({ children }: any) => {
    return slug ? (
      <Link href={`/projects/${slug}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </Link>
    ) : (
      children
    );
  };
  return (
    <Card className={cn('w-full')}>
      <CardHeader>
        <Wrapper>
          {slug ? (
            <div className="flex justify-between group">
              <CardTitle className="text-lg tracking-normal group-hover:text-primary">
                {name}
              </CardTitle>
              <IconArrowRight
                size={18}
                className="opacity-0 text-primary group-hover:opacity-100 transition-transform ease-in duration-300 group-hover:translate-x-1"
              />
            </div>
          ) : (
            <CardTitle className="text-lg tracking-normal">{name}</CardTitle>
          )}
        </Wrapper>
      </CardHeader>

      <CardContent className="text-muted-foreground">{shortDesc}</CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {demoLink && (
          <Button variant="outline" size="sm" radius="full" asChild>
            <Link
              href={demoLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <IconExternalLink />
              Demo
            </Link>
          </Button>
        )}
        {sourceLink && (
          <Button variant="outline" size="sm" radius="full" asChild>
            <Link
              href={sourceLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <IconBrandGithub /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
