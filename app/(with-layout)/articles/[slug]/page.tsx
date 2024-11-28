import React from 'react';

import Image from 'next/image';

import type { Metadata } from 'next';
import PortableTextRenderer from '@/components/ui/PortableTextRenderer';
import { getArticleBySlug } from '@/sanity/sanity-utils';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 60 * 4;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // Fetch article data from the backend route
  const article = await getArticleBySlug(slug);

  const siteName = "Rijal Ghodi's Portfolio";

  return {
    title: `${article.title ?? 'Article'} | ${siteName}`,
    description: article.description,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${slug}`,
      title: `${article.title ?? 'Article'} | ${siteName}`,
      description: article.description,
      siteName: siteName,
      images: [
        article.cover_image_url ??
          `${process.env.NEXT_PUBLIC_SITE_URL}/article-opengraph-image.png`,
      ],
    },
    twitter: {
      title: `${article.title ?? 'Article'} | ${siteName}`,
      images: [
        article.cover_image_url ??
          `${process.env.NEXT_PUBLIC_SITE_URL}/article-opengraph-image.png`,
      ],
      description: article.description,
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

type ArticleProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = params;

  const article = await getArticleBySlug(slug);

  return (
    <>
      <article className="max-w-[680px] w-full mx-auto pt-10 pb-12  flex flex-col gap-9">
        <header className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl font-medium leading-tight md:text-center">
            {article.title}
          </h1>
          <p className="sm:text-xl md:text-center">{article?.description}</p>
          <p className="uppercase text-sm md:text-center font-mono">
            {new Date(article.date ?? article._createdAt).toLocaleDateString(
              'en',
              {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              },
            )}
          </p>
        </header>
        {article.cover_image_url && (
          <div className="relative max-w-2xl aspect-[3/2] sm:aspect-video">
            <Image
              src={article.cover_image_url}
              alt={article.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        )}
        <div className="article">
          <PortableTextRenderer value={article?.content} />
        </div>
        {article.tags && article.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <Badge variant="outline" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </>
  );
}
