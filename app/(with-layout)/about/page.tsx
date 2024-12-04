import { Button } from '@/components/ui/button';
import { PortableTextRenderer } from '@/components/ui/portable-text-renderer/PortableTextRenderer';
import { getLatestPinnedAbout } from '@/sanity/sanity-utils';
import { IconDownload } from '@tabler/icons-react';
import Link from 'next/link';

// Revalidate the data every 5 minutes
export const revalidate = 60 * 5;

export default async function Articles() {
  const about = await getLatestPinnedAbout();

  return (
    <div className="z-0 bg-background pt-8 pb-16">
      <article className="max-w-screen-md w-full mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-medium mb-4 text-center sm:text-left">
            About Me
          </h1>
          <div className="w-full flex items-center justify-center sm:justify-between gap-6 flex-wrap">
            {about?.date && (
              <p className="font-semibold uppercase font-mono text-sm text-center sm:text-left">
                Updated at{' '}
                {new Date(about?.date ?? about._createdAt).toLocaleDateString(
                  'en',
                  {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  },
                )}
              </p>
            )}
            {about.cv.url && (
              <Button asChild>
                <Link
                  href={`${about?.cv?.url}?dl=Rijal_Ghodi_Resume.pdf`}
                  download="Rijal_Ghodi_Resume.pdf"
                  title="Download Resume"
                >
                  <IconDownload />
                  Resume
                </Link>
              </Button>
            )}
          </div>
        </header>

        <PortableTextRenderer value={about?.content} />
      </article>
    </div>
  );
}
