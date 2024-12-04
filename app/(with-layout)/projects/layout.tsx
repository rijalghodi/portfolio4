import { LoadingPage } from '@/components/ui/loading-page';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Projects I've created over the years include this website, personal apps, client-requested apps, and artificial intelligence applications.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
