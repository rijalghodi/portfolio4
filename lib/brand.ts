import { Metadata } from "next";

export const BRAND = {
  AUTHOR: "Rijal Ghodi",
  EMAIL: "rijalghodi.dev@gmail.com",
  SITE_NAME: "Rijal Ghodi's Portfolio",
  OG_IMAGE_URL: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
  SITE_DESCRIPTION:
    "Hello, I'm Rijal Ghodi 👋 I build software and artificial intelligence to benefit humanity. On this site, you can check out all the articles I've written or learn more about me.",
  KEYWORDS: [
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
    "Web Developer",
    "ReactJS Developer",
    "NextJS Developer",
  ],
};

export const metadata: Metadata = {
  title: {
    default: BRAND.SITE_NAME,
    template: `%s | ${BRAND.AUTHOR} - Full-stack Developer`,
  },
  authors: [{ name: BRAND.AUTHOR, url: BRAND.EMAIL }],
  creator: BRAND.AUTHOR,
  applicationName: BRAND.SITE_NAME,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://rijalghodi.dev"),
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: BRAND.SITE_NAME,
    description: BRAND.SITE_DESCRIPTION,
    siteName: BRAND.SITE_NAME,
    images: [BRAND.OG_IMAGE_URL],
  },
  twitter: {
    title: BRAND.SITE_NAME,
    description: BRAND.SITE_DESCRIPTION,
    site: "@zalcode_id",
    card: "summary_large_image",
    creator: "@zalcode_id",
    images: [BRAND.OG_IMAGE_URL],
  },
  keywords: BRAND.KEYWORDS,
  description: BRAND.SITE_DESCRIPTION,
};
