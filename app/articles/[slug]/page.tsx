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

      <article className="max-w-screen-md w-full mx-auto leading-relaxed pt-4 pb-4 ">
        {article.cover_image && (
          <div className="relative w-full max-w-2xl aspect-video mx-auto">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              objectFit="cover"
              className="w-full h-auto mb-6 rounded-xl"
            />
          </div>
        )}
        <div className="pt-10">
          <h1 className="text-text-2xl sm:text-3xl font-bold mb-4 leading-relaxed">
            {article.title}
          </h1>

          {article.tags && (
            <div className="mb-6 flex gap-2 flex-wrap">
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
