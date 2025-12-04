import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles I've written over the years on software development, artificial intelligence, and self-improvement.",
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
