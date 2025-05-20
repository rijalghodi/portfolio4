"use client";

import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import LogoDark from "@/public/logo-dark.svg";
import LogoLight from "@/public/logo-light.svg";
import { MenuIcon, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useContactMe } from "./contact-form-context";

type Menu = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

const MENUS: Menu[] = [
  {
    title: "Home",
    link: "/",
  },
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
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { theme } = useTheme();
  const { open } = useContactMe();

  const activeMenu = React.useMemo(() => {
    const pathArray = pathname.split("/");
    const cleanedPath = `/${pathArray[1]}`;
    const link = MENUS.find((menu) => menu.link === cleanedPath);
    return link?.link;
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 0);

      if (currentY > lastScrollY.current + 10) {
        // scrolling down
        if (!timeoutId.current) {
          timeoutId.current = setTimeout(() => {
            setShowHeader(false);
            timeoutId.current = null;
          }, 300);
        }
      } else if (currentY < lastScrollY.current - 10) {
        // scrolling up
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
          timeoutId.current = null;
        }
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 right-0 left-0 top-0 px-6 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <header
        className={cn(
          "w-full flex justify-between mx-auto",
          "px-0 py-3 transition-all duration-300 ease-in-out",
          scrolled
            ? "px-7 top-2.5 max-w-[768px] bg-muted/50 backdrop-blur-md rounded-full border shadow-lg mt-3"
            : "top-0 max-w-[1024px] bg-transparent rounded-md mt-0",
        )}
      >
        <Link href="/" className="flex gap-2 items-center">
          {theme === "dark" ? <LogoDark width={28} height={28} /> : <LogoLight width={28} height={28} />}
          <div className="font-medium">rijalghodi</div>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <nav>
            <ul className="flex gap-1 items-center">
              {MENUS.map((menu) => (
                <li key={menu.link}>
                  <Link
                    href={menu.link}
                    className={cn(
                      "font-medium px-4 py-2 hover:bg-muted/80 rounded-full dark:text-muted-foreground dark:hover:text-foreground",
                      activeMenu === menu.link && "text-primary dark:text-primary dark:hover:text-primary",
                    )}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="hidden md:block">
            <Button variant="default" className="rounded-full" onClick={open}>
              Contact Me
            </Button>
          </div>
          {/* <ThemeSwitcher /> */}
          <div className="block md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button aria-label="Menu" title="Menu" variant="ghost" size="icon-lg">
                  <MenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80%] lg:h-[500px]">
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon-lg" className="absolute top-4 right-4">
                    <X />
                  </Button>
                </DrawerClose>
                <div className="px-6 py-12 flex flex-col gap-8 items-center pb-6 overflow-y-auto">
                  <nav>
                    <ul className="flex flex-col gap-10 items-center">
                      {MENUS.map((menu) => (
                        <li key={menu.link}>
                          <DrawerClose asChild>
                            <Link
                              href={menu.link}
                              className={cn(
                                "text-xl text-foreground hover:bg-silent/80 rounded-full px-8 py-3",
                                "data-[active=true]:text-primary",
                              )}
                              data-active={activeMenu === menu.link}
                            >
                              {menu.title}
                            </Link>
                          </DrawerClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <Button onClick={open} radius="full" size="lg">
                    <Send />
                    Contact Me
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
}
