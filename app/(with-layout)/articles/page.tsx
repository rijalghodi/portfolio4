'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types/article';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ArticleItem } from '@/components/elements/ArticleItem';
import { getArticles } from '@/sanity/sanity-utils';
import { ArticleItemSkeleton } from '@/components/elements/ArticleItemSkeleton';

export default function Articles() {
  const [page, setPage] = useState(1);
  const limit = 20;
  const tag = undefined;
  const category = undefined;

  const {
    data: articles,
    error,
    isLoading,
  } = useQuery<IArticle[]>({
    queryKey: ['articles', page, limit, tag, category],
    queryFn: () => getArticles(),
    placeholderData: (previousData) => previousData,
  });

  return (
    <section className="z-0 bg-background pt-8 pb-16" id="projects">
      <div className="max-w-screen-md w-full mx-auto">
        <div className="mb-8">
          <h1 data-aos="fade-up" className="text-4xl font-medium mb-4">
            Articles
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-base text-muted-foreground"
          >
            Articles on software development, artificial intelligence, and
            self-improvement.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          {isLoading ? (
            <ul className="flex w-full flex-col">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={i} className="border-b border-border">
                  <ArticleItemSkeleton />
                </li>
              ))}
            </ul>
          ) : error ? (
            <div className="flex items-center justify-center min-h-60 w-full">
              <div className="text-semibold font-mono uppercase">
                Error fetching articles
              </div>
            </div>
          ) : (
            <ul>
              {articles?.map((article, i) => (
                <li key={i} className="border-b border-border">
                  <ArticleItem
                    title={article.title}
                    description={article.description}
                    date={article.date}
                    url={`/articles/${article.slug}`}
                    coverImageUrl={article.cover_image_url}
                    coverImageAlt={article.cover_image_alt}
                    titleTag="h2"
                  />
                </li>
              ))}
            </ul>
          )}
          <Pagination className="w-full py-6">
            <PaginationContent className="w-full flex items-center justify-between">
              <PaginationItem>
                <PaginationPrevious
                  className="text-sm cursor-pointer"
                  onClick={() => setPage((prev) => prev - 1)}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="text-sm cursor-pointer"
                  onClick={() => setPage((prev) => prev + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
