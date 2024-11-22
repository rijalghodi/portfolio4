import Head from 'next/head';
import React from 'react';

import axios from 'axios';

import { Article } from '@/types/article';
import Image from 'next/image';

type ArticleProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = params;

  // Fetch article data from the backend route
  const res = await axios.get<Article>(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/articles/${slug}`,
  );

  const article = res.data;

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
      </Head>

      <article className="max-w-[712px] w-full mx-auto">
        {article.cover_image && (
          <div className="relative w-full aspect-video mt-5">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              objectFit="cover"
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}
        <div className="pt-12 pb-12 flex flex-col gap-6">
          <h1 className="text-text-2xl sm:text-3xl font-bold leading-relaxed">
            {article.title}
          </h1>

          {article.tags && article.tags.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {article.tags.map((tag) => (
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
        <section
          className="prose prose-lg article"
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        />
      </article>
    </>
  );
}
