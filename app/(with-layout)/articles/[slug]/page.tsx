import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { PortableTextRenderer } from "@/components/ui/portable-text-renderer/PortableTextRenderer";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";
import { getArticleBySlug } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export const revalidate = 7 * 24 * 60 * 60; // a week

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // Fetch article data from the backend route
  const article = await getArticleBySlug(slug);

  const siteName = "Rijal Ghodi's Portfolio";

  return {
    title: `${article?.title ?? "Article"} | ${siteName}`,
    description: article?.description,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${slug}`,
      title: `${article?.title ?? "Article"} | ${siteName}`,
      description: article?.description,
      siteName: siteName,
      images: [article?.cover_image_url ?? `${process.env.NEXT_PUBLIC_SITE_URL}/article-opengraph-image.png`],
    },
    twitter: {
      title: `${article?.title ?? "Article"} | ${siteName}`,
      images: [article?.cover_image_url ?? `${process.env.NEXT_PUBLIC_SITE_URL}/article-opengraph-image.png`],
      description: article?.description,
      site: "@zalcode_id",
      card: "summary_large_image",
      creator: "@zalcode_id",
    },
    authors: [{ name: "Rijal Ghodi", url: "rijalghodi.dev@gmail.com" }],
    creator: "Rijal Ghodi",
    applicationName: "Rijal Ghodi's Portfolio",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://rijalghodi.dev"),
    keywords: [
      "Rijal Ghodi",
      "Rijal",
      "Ghodi",
      "Software Developer",
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "ML Engineer",
      "AI Engineer",
    ],
  };
}

type ArticleProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="fixed inset-0">
        <Spotlight />
      </div>
      <article className="max-w-[680px] w-full mx-auto pt-4 sm:pt-10 pb-12  flex flex-col gap-9">
        <header className="flex flex-col gap-4 sm:gap-5">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-medium leading-tight md:text-center">
            {article?.title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="50" className="sm:text-xl md:text-center">
            {article?.description}
          </p>
          <p data-aos="fade-up" data-aos-delay="50" className="uppercase text-sm md:text-center font-mono">
            {new Date(article?.date ?? article?._createdAt).toLocaleDateString("en", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </header>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className={cn("relative flex flex-col gap-9", article.toc && "xl:right-36")}
        >
          {article?.cover_image_url && (
            <figure className="relative max-w-2xl aspect-[3/2] sm:aspect-video">
              <Image src={article?.cover_image_url} alt={article?.title} fill className="rounded-xl object-cover" />
            </figure>
          )}
          <PortableTextRenderer value={article?.content} withTableOfContents={article.toc} tags={article?.tags} />
        </div>
      </article>
    </>
  );
}
