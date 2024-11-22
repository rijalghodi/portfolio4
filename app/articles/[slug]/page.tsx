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

      <article className="max-w-screen-md w-full mx-auto leading-relaxed pt-10 pb-10">
        {article.cover_image && (
          <div className="relative w-full aspect-video">
            <Image
              src={article.cover_image}
              alt={article.title}
              objectFit="fill"
              className="w-full h-auto mb-6 rounded"
            />
          </div>
        )}
        <h1 className="text-text-2xl sm:text-3xl font-bold mb-4 leading-relaxed">
          {article.title}
        </h1>
        <p className="text-muted-foreground text-sm mb-4">
          Published on {new Date(article.published_at).toLocaleDateString()}
        </p>
        {article.tags && (
          <div className="mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <section
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        />
      </article>
    </>
  );
}
