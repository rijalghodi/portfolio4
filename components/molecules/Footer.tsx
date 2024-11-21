'use client';

import { useTheme } from '@/contexts/theme-context';
import React from 'react';

import LogoLight from '@/public/logo-light.svg';
import LogoDark from '@/public/logo-dark.svg';
import { Button } from '../ui/button';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCopy,
} from '@tabler/icons-react';
import { contactGithubLink, contactIgLink, contactLinkedIn } from '@/data';
import Link from 'next/link';
export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="text-gray-300 pt-16 pb-12 px-4 rounded-t-xl">
      <div className="flex flex-col items-center space-y-5">
        {theme === 'dark' ? (
          <LogoDark width={40} height={40} />
        ) : (
          <LogoLight width={40} height={40} />
        )}

        <p className="text-lg font-semibold">Let&apos;s Work Together</p>
        <div className="flex gap-4">
          <Button radius="full">
            <IconArrowUpRight />
            Hire Me
          </Button>
          <Button variant="secondary" radius="full">
            <IconCopy />
            Copy Email
          </Button>
        </div>
        <div className="flex gap-8 items-center">
          <p>Follow My Journey</p>
          <div className="flex gap-4">
            <Link href={contactGithubLink}>
              <IconBrandGithub size={20} />
            </Link>
            <Link href={contactLinkedIn}>
              <IconBrandLinkedin size={20} />
            </Link>
            <Link href={contactIgLink}>
              <IconBrandInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
