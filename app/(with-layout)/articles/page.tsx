'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types/article';
import { Loader } from '@/components/ui/loader';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ArticleItem } from '@/components/elements/ArticleItem';
import { getArticles } from '@/sanity/sanity-utils';

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
    queryFn: () => getArticles(page, limit),
    placeholderData: (previousData) => previousData,
  });

  console.log(articles);
  // const {} = useQuery<any>({
  //   queryKey: ['articles'],
  //   queryFn: () => getProjects(),
  // });

  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <section className="z-0 bg-background pt-8 pb-16" id="projects">
      <div className="max-w-screen-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold  mb-4">Articles</h1>
          <p className="text-base text-muted-foreground">
            Articles on software development, artificial intelligence, and
            self-improvement.
          </p>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center min-h-60 w-full">
            <Loader />
          </div>
        ) : (
          <ul>
            {articles?.map((article, i) => (
              <li key={i}>
                <ArticleItem
                  title={article.title}
                  date={article.date}
                  url={`/articles/${article.slug}`}
                />
              </li>
            ))}
          </ul>
        )}
        <Pagination className="w-full py-3">
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
