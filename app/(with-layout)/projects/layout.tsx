import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects I've created over the years include this website, personal apps, client-requested apps, and artificial intelligence applications.",
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
