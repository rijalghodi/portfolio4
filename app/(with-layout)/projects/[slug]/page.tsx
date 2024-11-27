import React from 'react';

import Image from 'next/image';

import type { Metadata } from 'next';
import { getProjectBySlug } from '@/sanity/sanity-utils';
import PortableTextRenderer from '@/components/ui/PortableTextRenderer';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // Fetch project data from the backend route
  const project = await getProjectBySlug(slug);

  const siteName = "Rijal Ghodi's Portfolio";

  return {
    title: `${project?.name ?? 'Project'} | ${siteName}`,
    description: project?.description,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
      title: `${project?.name ?? 'Project'} | ${siteName}`,
      description: project?.description,
      siteName: siteName,
      images: [
        project?.cover_image_url ??
          `${process.env.NEXT_PUBLIC_SITE_URL}/project-opengraph-image.png`,
      ],
    },
    twitter: {
      title: `${project?.name ?? 'Project'} | ${siteName}`,
      images: [
        project?.cover_image_url ??
          `${process.env.NEXT_PUBLIC_SITE_URL}/project-opengraph-image.png`,
      ],
      description: project?.description,
      site: '@zalcode_id',
      card: 'summary_large_image',
      creator: '@zalcode_id',
    },
    authors: [{ name: 'Rijal Ghodi', url: 'rijalghodi.dev@gmail.com' }],
    creator: 'Rijal Ghodi',
    applicationName: "Rijal Ghodi's Portfolio",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rijalghodi.dev',
    ),
    keywords: [
      'Rijal Ghodi',
      'Rijal',
      'Ghodi',
      'Software Developer',
      'Software Engineer',
      'Frontend Developer',
      'Backend Developer',
      'FullStack Developer',
      'ML Engineer',
      'AI Engineer',
    ],
  };
}

type ProjectProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectProps) {
  const { slug } = params;

  // Fetch project data from the backend route
  const project = await getProjectBySlug(slug);

  return (
    <>
      <div className="max-w-screen-md w-full mx-auto">
        {project?.icon_url && (
          <div className="relative w-20 aspect-square mt-5">
            <Image
              src={project.icon_url}
              alt={project.name}
              fill
              objectFit="cover"
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}
        <div className="pt-8 pb-12 flex flex-col gap-10">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {project?.name}
          </h1>
          {project?.technologies && project?.technologies.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {project?.technologies.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="article">
          <PortableTextRenderer value={project?.content} />
        </div>
      </div>
    </>
  );
}
