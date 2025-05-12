"use client";
import { IArticle } from "@/types/article";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ArticleItem } from "../elements/article-item";
import { Button } from "../ui/button";
import { StarHeading } from "./star-heading";
export function ArticleSection({ articles }: { articles: IArticle[] }) {
  return (
    <section className="z-0 py-24" id="articles">
      <div className="max-w-screen-lg w-full mx-auto space-y-8">
        <StarHeading
          title="Blog Articles"
          description="In a mean time, I write articles about my experiences and learnings."
          className="mb-8"
        />

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
        <div className="flex justify-center mt-8">
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
