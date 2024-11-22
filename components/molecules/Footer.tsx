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
} from '@tabler/icons-react';
import {
  contactEmail,
  contactGithubLink,
  contactIgLink,
  contactLinkedIn,
} from '@/data';
import Link from 'next/link';
import CopyButton from '../ui/copy-button';
export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="pt-16 pb-12 px-4 rounded-t-xl">
      <div className="flex flex-col items-center space-y-5">
        {theme === 'dark' ? (
          <LogoDark width={40} height={40} />
        ) : (
          <LogoLight width={40} height={40} />
        )}

        <p className="text-lg font-semibold">Let&apos;s Work Together</p>
        <div className="flex gap-4">
          <Button radius="full" asChild>
            <Link href={contactLinkedIn}>
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
          ></CopyButton>
        </div>
        <div className="flex gap-8 items-center">
          <p>Follow My Journey</p>
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
    </footer>
  );
}
