"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { ArticleItem } from "@/components/elements/article-item";
import { ArticleItemSkeleton } from "@/components/elements/articlee-item-skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Spotlight } from "@/components/ui/spotlight-new";
import { getArticles } from "@/lib/sanity/sanity-utils";
import { IArticle } from "@/types/article";

export default function Articles() {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const tag = undefined;
  const category = undefined;

  const {
    data: articles,
    error,
    isLoading,
  } = useQuery<IArticle[]>({
    queryKey: ["articles", page, pageSize, tag, category],
    queryFn: () => getArticles((page - 1) * pageSize, pageSize),
    placeholderData: (previousData) => previousData,
  });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  const canGoBack = page > 1;
  const canGoNext = articles && articles.length === pageSize;

  return (
    <>
      <div className="fixed inset-0">
        <Spotlight />
      </div>

      <section className="z-0 bg-background pt-8 pb-16">
        <div className="max-w-screen-lg w-full mx-auto">
          <div className="mb-8">
            <h1 data-aos="fade-up" className="text-4xl font-medium mb-4">
              Articles
            </h1>
            <p data-aos="fade-up" data-aos-delay="50" className="text-base sm:text-lg">
              Articles on software development, artificial intelligence, and self-improvement.
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
                <div className="text-semibold font-mono uppercase">Error fetching articles</div>
              </div>
            ) : (
              <ul>
                {articles?.map((article, i) => (
                  <li key={i} className="border-b border-border" data-aos="fade-up">
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
                    onClick={handlePreviousPage}
                    aria-disabled={!canGoBack}
                    style={{
                      opacity: canGoBack ? 1 : 0.5,
                      pointerEvents: canGoBack ? "auto" : "none",
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="text-sm cursor-pointer"
                    onClick={handleNextPage}
                    aria-disabled={!canGoNext}
                    style={{
                      opacity: canGoNext ? 1 : 0.5,
                      pointerEvents: canGoNext ? "auto" : "none",
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
}
