'use client';

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { ExperienceView } from '../elements/ExperienceCard';
import { Timeline } from '../ui/timeline';
import { dateToMMYYYY } from '@/lib/utils';

type Props = {
  experiences: ExperienceView[];
};
export function ExperienceSection({ experiences }: Props) {
  return (
    <section className="z-0 bg-background pt-16 pb-16" id="experiences">
      <div className="max-w-screen-md w-full mx-auto ">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experiences</h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/about">
              More About Me{' '}
              <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <Timeline>
          {experiences.map((ex, i) => (
            <Timeline.Item key={i}>
              <Timeline.Head>
                <p className="text-sm" data-aos="fade-up">
                  {dateToMMYYYY(ex.startDate)} -{' '}
                  {ex.stillWorking
                    ? 'Now'
                    : ex.endDate
                      ? dateToMMYYYY(ex.endDate)
                      : 'Present'}
                </p>
              </Timeline.Head>
              <Timeline.Body>
                <div className="mb-3" data-aos="fade-up" data-aos-delay="50">
                  <h3 className="font-normal text-xl sm:text-2xl mb-2">
                    {ex.position}
                  </h3>
                  {ex.companyLink ? (
                    <Link
                      href={ex.companyLink ?? '#'}
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
                {ex.shortDesc && (
                  <p data-aos="fade-up" data-aos-delay="100">
                    {ex.shortDesc}
                  </p>
                )}
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="outline" radius="full" asChild>
            <Link href="/about">
              More About Me <IconArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
