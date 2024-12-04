import { LoadingPage } from '@/components/ui/loading-page';
import { Suspense } from 'react';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
