import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { experiences } from '@/data/experience';
import { ExperienceCard } from '../elements/ExperienceCard';
export function ExperienceSection() {
  return (
    <section className="z-0 bg-background pt-16 pb-16" id="experiences">
      <div className="max-w-screen-md w-full mx-auto ">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold ">Experiences</h2>
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
              <ExperienceCard {...ex} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
