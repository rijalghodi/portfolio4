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
  // Query parameters
  const [page, setPage] = useState(1); // Set the current page
  const limit = 20; // Set the number of articles per page
  const tag = undefined; // Set a specific tag (optional)
  const category = undefined; // Set a specific category (optional)

  const {
    data: articles,
    error,
    isLoading,
  } = useQuery<IArticle[]>({
    queryKey: ['articles', page, limit, tag, category],
    queryFn: () => getArticles(),
    placeholderData: (previousData) => previousData,
  });

  // const {} = useQuery<any>({
  //   queryKey: ['articles'],
  //   queryFn: () => getProjects(),
  // });

  return (
    <section className="z-0 bg-background pt-8 pb-16" id="projects">
      <div className="max-w-screen-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-medium mb-4">Articles</h1>
          <p className="text-base text-muted-foreground">
            Articles on software development, artificial intelligence, and
            self-improvement.
          </p>
        </div>

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
    </section>
  );
}
