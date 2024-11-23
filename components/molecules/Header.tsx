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
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '../ui/drawer';
import { IconMenu4 } from '@tabler/icons-react';

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
  const pathname = usePathname();
  const activeMenu = React.useMemo(() => {
    const pathArray = pathname.split('/');
    const cleanedPath = `/${pathArray[1]}`;
    const link = MENUS.find((menu) => menu.link === cleanedPath);
    return link?.link;
  }, [pathname]);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        h-14
        bg-background/60
        backdrop-blur-sm
        border-b
        border-border
        border-opacity-40
        z-10
        flex
        items-center
        justify-center
        px-5
        "
    >
      <div className="flex justify-between items-center w-full max-w-screen-md mx-auto">
        <Link href="/" className="flex gap-2 items-center">
          {theme === 'dark' ? (
            <LogoDark width={28} height={28} />
          ) : (
            <LogoLight width={28} height={28} />
          )}
          <div className="font-bold font-mono">Rijal Ghodi</div>
        </Link>
        <div className="hidden sm:flex gap-6 items-center ">
          <nav>
            <ul className="flex gap-6">
              {MENUS.map((menu) => (
                <li key={menu.link}>
                  <Link
                    href={menu.link}
                    className={cn(
                      'text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-foreground',
                      activeMenu === menu.link &&
                        'text-primary dark:text-primary dark:hover:text-primary',
                    )}
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
        <div className="flex gap-4">
          <ThemeSwitcher />
          <div className="block sm:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  aria-label="Menu"
                  title="Menu"
                  variant="outline"
                  size="sm"
                  className="p-2"
                >
                  <IconMenu4 />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="px-6 py-12 flex flex-col gap-8 items-start">
                  <nav>
                    <ul className="flex flex-col gap-8">
                      {MENUS.map((menu) => (
                        <li key={menu.link}>
                          <DrawerClose asChild>
                            <Link
                              href={menu.link}
                              className={cn(
                                'text-xl text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-foreground',
                                activeMenu === menu.link &&
                                  'text-primary dark:text-primary',
                              )}
                            >
                              {menu.title}
                            </Link>
                          </DrawerClose>
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
                      Open To Work
                    </Link>
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
