'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronsDown,
} from '@tabler/icons-react';
import { cn, fetchArticles } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import {
  contactEmail,
  contactGithubLink,
  contactIgLink,
  contactLinkedIn,
  experiences,
  projects,
} from '@/data';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ExperienceCard } from '@/components/molecules/ExperienceCard';
import CopyButton from '@/components/ui/copy-button';
import { useQuery } from '@tanstack/react-query';
import { Article } from '@/types/article';
import { Loader } from '@/components/ui/loader';

export default function Home() {
  const { theme } = useTheme();

  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: () => fetchArticles(1, 5),
    placeholderData: (previousData) => previousData,
  });

  const scrollToContent = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section
        id="intro"
        style={{ minHeight: 'calc(100vh - 80px)' }}
        className="relative pt-16 pb-16 flex items-center"
      >
        <div className="max-w-screen-md w-full mx-auto">
          <p className="font-extrabold font-mono text-4xl py-2 tracking-wider leading-relaxed">
            Hey, I&apos;m Rijal 👋
          </p>
          <p className="text-xl py-2 leading-relaxed">
            I build{' '}
            <Link href="/project" className="text-primary hover:underline">
              software and artificial intelligence
            </Link>{' '}
            to benefit humanity. On this site, you can check out all the{' '}
            <Link href="/articles" className="text-primary hover:underline">
              articles
            </Link>{' '}
            I&apos;ve written or learn more{' '}
            <Link href="/about" className="text-primary hover:underline">
              about me.
            </Link>
          </p>

          <div className="flex gap-6 mt-6 xs:gap-1 items-center flex-wrap">
            <div className="flex gap-4">
              <Button radius="full">
                <IconArrowUpRight />
                Hire Me
              </Button>
              <CopyButton
                value={contactEmail}
                labelDefault="Copy Email"
                labelCopied="Email Copied"
                variant="secondary"
                radius="full"
              ></CopyButton>
            </div>
            <div className="flex gap-4">
              <Link href={contactGithubLink} aria-label="Github">
                <IconBrandGithub />
              </Link>
              <Link href={contactLinkedIn} aria-label="LinkedIn">
                <IconBrandLinkedin />
              </Link>
              <Link href={contactIgLink} aria-label="Instagram">
                <IconBrandInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
          <button className="animate-bounce" onClick={scrollToContent}>
            <IconChevronsDown size={24} />
          </button>
        </div>
        <div
          className={cn(
            '-z-10 absolute top-0 left-0 right-0 aspect-square bg-cover bg-center',
            theme === 'dark'
              ? "bg-[url('/icons/comet-dark.svg')]"
              : "bg-[url('/icons/comet-light.svg')]",
          )}
        ></div>
      </section>
      {/* --- Projects */}
      <section className="z-0 bg-background pt-16 pb-16" id="projects">
        <div className="max-w-screen-md w-full mx-auto ">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-extrabold font-mono text-3xl">Projects</h1>
            <Button variant="ghost" className="group" asChild>
              <Link href="/project">
                All Projects
                <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <li key={i}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Tech Stack */}
      {/* --- Articles */}
      <section className="z-0 bg-background pt-16 pb-16" id="articles">
        <div className="max-w-screen-md w-full mx-auto ">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold font-mono">Articles</h1>
            <Button variant="ghost" className="group" asChild>
              <Link href="/articles">
                All Articles{' '}
                <IconArrowRight className="transition-transform ease-in duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center min-h-60 w-full">
              <Loader />
            </div>
          ) : (
            <ul>
              {articles?.map((article, i) => (
                <li key={i}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group border-b border-border py-3 flex flex-wrap gap-2 justify-between items-center"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary">
                      {article.title}
                    </div>
                    <div className="font-mono text-sm ">
                      {new Date(article.published_at).toLocaleDateString('en', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {/* --- Experience */}
      <section className="z-0 bg-background pt-16 pb-16" id="experiences">
        <div className="max-w-screen-md w-full mx-auto ">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold font-mono">Experiences</h1>
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
    </div>
  );
}
