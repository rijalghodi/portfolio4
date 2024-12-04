'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button } from '../ui/button';
import { contactEmail, contactLinkedIn } from '@/data/contact';
import { IconArrowUpRight, IconChevronsDown } from '@tabler/icons-react';
import { CopyButton } from '../ui/copy-button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import { SocialLinks } from '../elements/SocialLinks';
export function HeroSection() {
  const { theme } = useTheme();

  const typedText = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: ['Web Developer', 'Full Stack Dev', 'Freelancer'],
      typeSpeed: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToContent = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      id="intro"
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="relative pt-16 pb-16 flex items-center"
    >
      <div className="max-w-screen-md w-full mx-auto ">
        <h1
          data-aos="fade-up"
          className="text-3xl font-mono font-medium sm:text-5xl py-2 tracking-normal leading-normal sm:leading-normal"
        >
          👋
          <br /> Hello, I&apos;m{' '}
          <span className="font-mono tracking-tight">Rijal</span>
          <br />
          <span ref={typedText}></span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-lg sm:text-xl py-2 leading-relaxed text-foreground"
        >
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
            <Button
              radius="full"
              asChild
              variant="default"
              className="bg-primary/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link href={contactLinkedIn} target="_blank">
                <IconArrowUpRight />
                Hire Me
              </Link>
            </Button>
            <CopyButton
              value={contactEmail}
              labelDefault="Copy Email"
              labelCopied="Email Copied"
              variant="secondary"
              radius="full"
              data-aos-delay="150"
              data-aos="fade-up"
            ></CopyButton>
          </div>
          <div data-aos-delay="200" data-aos="fade-up">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2">
        <button
          className="animate-bounce"
          aria-label="Scroll To Content"
          title="Scroll To Content"
          onClick={scrollToContent}
        >
          <IconChevronsDown size={24} />
        </button>
      </div>
      <div
        className={cn(
          '-z-10 fixed top-1/2 sm:top-0 left-0 right-0 -translate-y-1/2 sm:translate-y-0 aspect-square bg-cover bg-center',
          theme === 'dark'
            ? "bg-[url('/icons/comet-dark.svg')]"
            : "bg-[url('/icons/comet-light.svg')]",
        )}
      ></div>
    </section>
  );
}
