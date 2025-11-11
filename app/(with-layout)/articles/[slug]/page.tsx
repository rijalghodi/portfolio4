import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PortableTextRenderer } from "@/components/ui/portable-text-renderer/portable-text-renderer";
import { TableOfContents } from "@/components/ui/portable-text-renderer/table-of-contents";
import { Spotlight } from "@/components/ui/spotlight-new";
import { getArticleBySlug } from "@/lib/sanity/sanity-utils";
import { IconArrowLeft } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND, metadata as brandMetadata } from "@/lib/brand";

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

  return {
    ...brandMetadata,
    title: `${article?.title ?? "Article"} | ${BRAND.SITE_NAME}`,
    description: article?.description ?? BRAND.SITE_DESCRIPTION,
    openGraph: {
      ...brandMetadata.openGraph,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${slug}`,
      title: `${article?.title ?? "Article"} | ${BRAND.SITE_NAME}`,
      description: article?.description ?? BRAND.SITE_DESCRIPTION,
      images: [article?.cover_image_url ?? BRAND.OG_IMAGE_URL],
    },
    twitter: {
      ...brandMetadata.twitter,
      title: `${article?.title ?? "Article"} | ${BRAND.SITE_NAME}`,
      images: [article?.cover_image_url ?? BRAND.OG_IMAGE_URL],
      description: article?.description ?? BRAND.SITE_DESCRIPTION,
    },
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
      <div className="fixed inset-0 z-[0]">
        <Spotlight />
      </div>
      <div className="relative max-w-[700px] mx-auto pt-2">
        <Button variant="ghost" size="default" radius="full" asChild>
          <Link href="/articles">
            <IconArrowLeft />
            Back to Articles
          </Link>
        </Button>
        <article className="w-full mx-auto pt-4 sm:pt-10 pb-12  flex flex-col gap-9">
          <header className="flex flex-col gap-4 sm:gap-5">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-medium leading-tight md:text-center"
            >
              {article?.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="sm:text-xl md:text-center"
            >
              {article?.description}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="uppercase text-sm md:text-center font-mono"
            >
              {new Date(
                article?.date ?? article?._createdAt
              ).toLocaleDateString("en", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </header>
          <div
            // data-aos="fade-up"
            // data-aos-delay="100"
            className="flex flex-col gap-9"
          >
            {article?.cover_image_url && (
              <figure className="relative max-w-2xl aspect-[3/2] sm:aspect-video">
                <Image
                  src={article?.cover_image_url}
                  alt={article?.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </figure>
            )}
            <PortableTextRenderer
              value={article?.content}
              withTableOfContents={article.toc}
              tags={article?.tags}
            />
          </div>

          {/* <div className="mb-8 rounded-2xl border bg-muted/30 fixed left-4 top-1/2 -translate-y-1/2">
            <div className="px-4 pb-2 pt-4">
              <h2 className="text-lg font-semibold leading-snug mb-2">
                In This Article
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto h-[calc(100vh-200px)] px-4 py-2">
              <TableOfContents content={article?.content} />
            </div>
          </div> */}
        </article>
      </div>
    </>
  );
}
