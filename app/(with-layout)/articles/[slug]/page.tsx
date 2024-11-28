import React from 'react';

import Image from 'next/image';

import type { Metadata } from 'next';
import PortableTextRenderer from '@/components/ui/PortableTextRenderer';
import { getArticleBySlug } from '@/sanity/sanity-utils';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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
      <article className="max-w-screen-md w-full mx-auto">
        {article.cover_image_url && (
          <div className="relative w-full aspect-video mt-5">
            <Image
              src={article.cover_image_url}
              alt={article.title}
              fill
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        )}
        <div className="pt-12 pb-12 flex flex-col gap-6">
          <h1 className="text-text-2xl sm:text-3xl font-semibold leading-tight">
            {article.title}
          </h1>

          {article.tags && article.tags.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="article">
          <PortableTextRenderer value={article?.content} />
        </div>
      </article>
    </>
  );
}
