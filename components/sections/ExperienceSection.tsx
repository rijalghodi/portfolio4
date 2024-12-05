import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { ExperienceCard, ExperienceView } from '../elements/ExperienceCard';

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
        <ul className="grid grid-cols-1 gap-6">
          {experiences.slice(0, 4).map((ex, i) => (
            <li key={i}>
              <ExperienceCard {...ex} titleTag="h3" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="outline" radius="full" asChild>
            <Link href="/articles">
              More About Me <IconArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
