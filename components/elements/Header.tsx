"use client";

import { useTheme } from "@/contexts/theme-context";
import { contactLinkedIn } from "@/data/contact";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import Pulse from "@/public/icons/pulse.svg";
import LogoDark from "@/public/logo-dark.svg";
import LogoLight from "@/public/logo-light.svg";
import { IconMenu4 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../ui/drawer";

type Menu = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

export const MENUS: Menu[] = [
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "About Me",
    link: "/about",
  },
];

export function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const activeMenu = React.useMemo(() => {
    const pathArray = pathname.split("/");
    const cleanedPath = `/${pathArray[1]}`;
    const link = MENUS.find((menu) => menu.link === cleanedPath);
    return link?.link;
  }, [pathname]);

  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed z-10 left-1/2 -translate-x-1/2 w-full flex justify-between",
        "px-7 py-3 transition-all duration-300 ease-in-out",
        scrolled
          ? "top-2.5 max-w-[768px] bg-background-1/50 backdrop-blur-md rounded-full border shadow-lg"
          : "top-0 max-w-[1024px] bg-background rounded-md",
      )}
    >
      <Link href="/" className="flex gap-2 items-center text-primary">
        {theme === "dark" ? <LogoDark width={28} height={28} /> : <LogoLight width={28} height={28} />}
        <div className="text-base font-mono font-semibold tracking-tighter">Rijal Ghodi</div>
      </Link>
      <div className="hidden sm:flex gap-6 items-center">
        <nav>
          <ul className="flex gap-2 items-center">
            {MENUS.map((menu) => (
              <li key={menu.link}>
                <Link
                  href={menu.link}
                  className={cn(
                    "font-medium px-3 py-2 hover:bg-secondary/80 rounded-md dark:text-muted-foreground dark:hover:text-foreground",
                    activeMenu === menu.link && "text-primary dark:text-primary dark:hover:text-primary",
                  )}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button size="sm" variant="secondary" className="rounded-full py-0.5 pl-2" asChild>
          <Link href={contactLinkedIn}>
            <Pulse width={40} height={40} />
            Contact
          </Link>
        </Button>
      </div>
      <div className="flex gap-4">
        <ThemeSwitcher />
        <div className="block sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button aria-label="Menu" title="Menu" variant="outline" size="sm" className="p-2">
                <IconMenu4 />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="px-6 py-12 flex flex-col gap-8 items-start">
                <nav>
                  <ul className="flex flex-col gap-6">
                    {MENUS.map((menu) => (
                      <li key={menu.link}>
                        <DrawerClose asChild>
                          <Link
                            href={menu.link}
                            className={cn(
                              "text-lg text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-foreground",
                              activeMenu === menu.link && "text-primary dark:text-primary",
                            )}
                          >
                            {menu.title}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button size="sm" variant="secondary" className="rounded-full py-0.5 pl-2" asChild>
                  <Link href={contactLinkedIn}>
                    <Pulse width={40} height={40} />
                    Contact
                  </Link>
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
