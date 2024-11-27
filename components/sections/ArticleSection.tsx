'use client';

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IArticle } from '@/types/article';
import { IconArrowRight } from '@tabler/icons-react';
import { ArticleItem } from '../elements/ArticleItem';
export function ArticleSection({ articles }: { articles: IArticle[] }) {
  return (
    <section className="z-0 bg-background pt-16 pb-16" id="articles">
      <div className="max-w-screen-md w-full mx-auto">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold ">Articles</h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/articles">
              All Articles{' '}
              <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <ul>
          {articles?.map((article, i) => (
            <li key={i}>
              <ArticleItem
                title={article.title}
                url={`/articles/${article.slug}`}
                date={article.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
