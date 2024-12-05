import { ExperienceCard } from '@/components/elements/ExperienceCard';
import { Button } from '@/components/ui/button';
import { PortableTextRenderer } from '@/components/ui/portable-text-renderer/PortableTextRenderer';
import { getExpereinces, getLatestPinnedAbout } from '@/sanity/sanity-utils';
import { IconDownload } from '@tabler/icons-react';
import Link from 'next/link';

export const revalidate = 60 * 10;

export default async function About() {
  const about = await getLatestPinnedAbout();
  const experiences = await getExpereinces();

  return (
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
          <ul className="grid grid-cols-1 gap-6">
            {experiences?.map((ex, i) => (
              <li key={i}>
                <ExperienceCard
                  company={ex.company}
                  iconUrl={ex.icon_url}
                  position={ex.position}
                  category={ex.category}
                  startDate={ex.start_date}
                  endDate={ex.end_date}
                  description={ex.description}
                />
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
