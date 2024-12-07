import React from 'react';

import Image from 'next/image';

import type { Metadata } from 'next';
import { getProjectBySlug } from '@/sanity/sanity-utils';
import { PortableTextRenderer } from '@/components/ui/portable-text-renderer/PortableTextRenderer';
import { badgeVariants } from '@/components/ui/badge';
import { ProjectPreviewCarousel } from '@/components/elements/ProjectPreviewCarousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export const revalidate = 7 * 24 * 60 * 60; // a week

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

  if (!project) {
    notFound();
  }

  return (
    <>
      <article className="max-w-[700px] w-full mx-auto pt-4 pb-12 flex flex-col gap-9">
        <header className=" flex flex-col gap-5">
          {project?.icon_url && (
            <figure data-aos="fade-up">
              <Image
                src={project?.icon_url}
                alt="Icon"
                width={50}
                height={50}
                className="rounded-full h-10 w-10 overflow-clip object-fill"
              />
            </figure>
          )}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-medium leading-tight"
          >
            {project?.name}
          </h1>
          <p data-aos="fade-up" data-aos-delay="50" className="sm:text-lg">
            {project?.description}
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-between flex-wrap-reverse gap-5 items-center"
          >
            {project?.technologies && project?.technologies.length > 0 && (
              <div className="flex gap-2 flex-wrap items-center">
                {project?.technologies.map((tech) => (
                  <Link
                    key={tech.name}
                    href={tech.link ?? '#'}
                    className={badgeVariants({ variant: 'outline' })}
                    target={tech.link && '_blank'}
                  >
                    {tech.icon_url && (
                      <Image
                        src={tech.icon_url}
                        width={18}
                        height={18}
                        alt="tech icon"
                        className="rounded-full overflow-clip object-fill"
                      />
                    )}
                    <span className="text-accent-foreground text-xs font-semibold">
                      {tech.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
            {project?.role && (
              <div className="text-sm font-semibold font-mono uppercase">
                {project.role}
              </div>
            )}
          </div>
        </header>
        {/* Gallery */}
        {project?.previews && (
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center w-full justify-center"
          >
            <ProjectPreviewCarousel
              previews={project.previews
                .filter(({ image_url }) => image_url)
                .map((v) => ({
                  imageAlt: v.alt,
                  imageUrl: v.image_url,
                }))}
            />
          </div>
        )}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex gap-2 items-center justify-center w-full"
        >
          {project?.demo_link && (
            <Button asChild variant="default" className="rounded-full">
              <Link href={project?.demo_link} target="_blank">
                <IconExternalLink size={16} />
                See Demo
              </Link>
            </Button>
          )}
          {project?.source_link && (
            <Button asChild variant="outline" className="rounded-full">
              <Link href={project?.source_link} target="_blank">
                <IconBrandGithub size={16} />
                Source Code
              </Link>
            </Button>
          )}
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="article">
          <PortableTextRenderer value={project?.content} />
        </div>
      </article>
    </>
  );
}
