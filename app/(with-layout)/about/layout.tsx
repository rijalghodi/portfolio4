import { LoadingPage } from '@/components/ui/loading-page';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Hello! My name is Rijal Ghodi, and I’m a web developer passionate about turning ideas into functional, beautiful, and user-friendly web applications. I specialize in modern tech stacks like Next.js, React.js, Nest.js, and PostgreSQL. I also dabble in Docker, GraphQL, and TypeScript to create scalable systems with sleek and intuitive user interfaces. ',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
