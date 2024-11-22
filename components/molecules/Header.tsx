'use client';

import React from 'react';
import LogoLight from '@/public/logo-light.svg';
import LogoDark from '@/public/logo-dark.svg';
import Pulse from '@/public/icons/pulse.svg';
import { Button } from '../ui/button';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import { useTheme } from '@/contexts/theme-context';
import Link from 'next/link';
import { contactLinkedIn } from '@/data';

type Menu = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

export const MENUS: Menu[] = [
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Articles',
    link: '/articles',
  },
  {
    title: 'About Me',
    link: '/about',
  },
];

export function Header() {
  const { theme } = useTheme();
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        h-14
        bg-background/80
        backdrop-blur-sm
        border-b
        border-border
        border-opacity-40
        z-10
        flex
        items-center
        justify-center
        "
    >
      <div className="flex justify-between items-center w-full max-w-screen-md mx-auto">
        <Link href="/" className="flex gap-2 items-center">
          {theme === 'dark' ? (
            <LogoDark width={28} height={28} />
          ) : (
            <LogoLight width={28} height={28} />
          )}
          <div className="font-semibold">Rijal Ghodi</div>
        </Link>
        <div className="flex gap-6 items-center">
          <nav>
            <ul className="flex gap-6">
              {MENUS.map((menu) => (
                <li key={menu.link}>
                  <Link
                    href={menu.link}
                    className="text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full py-0.5 pl-2"
            asChild
          >
            <Link href={contactLinkedIn}>
              <Pulse width={40} height={40} />
              Open
            </Link>
          </Button>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
