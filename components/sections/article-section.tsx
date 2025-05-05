"use client";
import { IArticle } from "@/types/article";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ArticleItem } from "../elements/article-item";
import { Button } from "../ui/button";
export function ArticleSection({ articles }: { articles: IArticle[] }) {
  return (
    <section className="z-0 bg-background pt-16 pb-16" id="articles">
      <div className="max-w-screen-lg w-full mx-auto">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold ">Articles</h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/articles">
              All Articles{" "}
              <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <ul>
          {articles?.map((article, i) => (
            <li key={i} className="border-b border-border" data-aos="fade-up" data-aos-delay={`${i * 50}`}>
              <ArticleItem
                title={article.title}
                url={`/articles/${article.slug}`}
                date={article.date}
                description={article.description}
                coverImageUrl={article.cover_image_url}
                coverImageAlt={article.cover_image_alt}
                titleTag="h3"
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="outline" radius="full" asChild>
            <Link href="/articles">
              All Articles <IconArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
