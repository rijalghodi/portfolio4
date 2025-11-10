"use client";

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
import { useQuery } from "@tanstack/react-query";

export default function Articles() {
  const [lastId, setLastId] = useState<string | undefined>(undefined);
  const [previousIds, setPreviousIds] = useState<string[]>([]);
  const limit = 20;
  const tag = undefined;
  const category = undefined;

  const {
    data: articles,
    error,
    isLoading,
  } = useQuery<IArticle[]>({
    queryKey: ["articles", lastId, limit, tag, category],
    queryFn: () => getArticles(lastId, limit),
    placeholderData: (previousData) => previousData,
  });

  const handleNextPage = () => {
    if (articles && articles.length > 0) {
      const newLastId = articles[articles.length - 1]._id;
      setPreviousIds((prev) => [...prev, lastId || ""]);
      setLastId(newLastId);
    }
  };

  const handlePreviousPage = () => {
    if (previousIds.length > 0) {
      const prevId = previousIds[previousIds.length - 1];
      setPreviousIds((prev) => prev.slice(0, -1));
      setLastId(prevId || undefined);
    }
  };

  const canGoBack = previousIds.length > 0;
  const canGoNext = articles && articles.length === limit;

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
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="text-base sm:text-lg"
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
                  <li
                    key={i}
                    className="border-b border-border"
                    data-aos="fade-up"
                  >
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
