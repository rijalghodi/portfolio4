import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Im usually not confident talking about myself, but you’re lucky—this time, I’ll give it a try.',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
