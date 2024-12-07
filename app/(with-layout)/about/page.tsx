import { Button } from '@/components/ui/button';
import { PortableTextRenderer } from '@/components/ui/portable-text-renderer/PortableTextRenderer';
import { Timeline } from '@/components/ui/timeline';
import { dateToMMYYYY } from '@/lib/utils';
import { getExpereinces, getLatestPinnedAbout } from '@/sanity/sanity-utils';
import { IconDownload } from '@tabler/icons-react';
import Link from 'next/link';

export const revalidate = 7 * 24 * 60 * 60; // a week

export default async function About() {
  const about = await getLatestPinnedAbout();
  const experiences = await getExpereinces();

  return (
    <>
      <div className="z-0 bg-background pt-8 pb-16">
        <article className="w-full mx-auto max-w-[680px]">
          <header className="mb-8">
            <h1
              data-aos="fade-up"
              className="text-4xl font-medium mb-4 text-center sm:text-left"
            >
              About Me
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-between gap-4 flex-wrap"
            >
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
              <div>
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
            </div>
          </header>
          <section data-aos="fade-up" data-aos-delay="100">
            <PortableTextRenderer value={about?.content} />
          </section>
          <section data-aos="fade-up" id="experience">
            <h2 className="text-[1.75rem] font-medium leading-snug mb-6 mt-10">
              Experience
            </h2>
            <Timeline>
              {experiences.map((ex, i) => (
                <Timeline.Item key={i}>
                  <Timeline.Head>
                    <p className="text-sm" data-aos="fade-up">
                      {dateToMMYYYY(ex.start_date)} -{' '}
                      {ex.still_working
                        ? 'Now'
                        : dateToMMYYYY(ex.end_date ?? '')}
                    </p>
                  </Timeline.Head>
                  <Timeline.Body>
                    <div
                      className="mb-3"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    >
                      <h3 className="font-normal text-2xl mb-2">
                        {ex.position}
                      </h3>
                      {ex.url ? (
                        <Link
                          href={ex.url ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {ex.company}
                        </Link>
                      ) : (
                        <p className="text-primary">{ex.company}</p>
                      )}
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                      <PortableTextRenderer value={ex.description} />
                    </div>
                  </Timeline.Body>
                </Timeline.Item>
              ))}
            </Timeline>
          </section>
        </article>
      </div>
    </>
  );
}
