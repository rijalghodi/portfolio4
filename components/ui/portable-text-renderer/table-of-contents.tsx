"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { parseOutline } from "./outline";

// Type for the outline structure
type Heading = {
  _key: string;
  children: (string | { text: string })[];
  subheadings: Heading[];
};

// Utility function to get text from children nodes
const getChildrenText = (props: (string | { text: string })[]): string =>
  props
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

// Flatten outline to get all heading IDs in order
const flattenHeadings = (headings: Heading[]): string[] => {
  return headings.reduce((acc: string[], heading) => {
    acc.push(heading._key);
    if (heading.subheadings.length > 0) {
      acc.push(...flattenHeadings(heading.subheadings));
    }
    return acc;
  }, []);
};

const HeadingsList = ({
  outline,
  activeId,
}: {
  outline: Heading[];
  activeId: string | null;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    e.preventDefault();
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${key}`);
    }
  };

  return (
    <ol className="flex flex-col gap-0">
      {outline.map(({ _key, children, subheadings }) => (
        <li
          key={_key}
          className="flex flex-col gap-0 line-clamp-1 text-ellipsis"
        >
          <Link
            className={cn(
              "rounded-md hover:bg-muted p-2 text-sm transition-colors",
              activeId === _key
                ? "bg-muted text-primary font-medium"
                : "text-muted-foreground"
            )}
            href={`#${_key}`}
            onClick={(e) => handleClick(e, _key)}
          >
            {getChildrenText(children)}
          </Link>
          {subheadings.length > 0 && (
            <div className="pl-4">
              <HeadingsList outline={subheadings} activeId={activeId} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export const TableOfContents = ({ content }: { content: any }) => {
  const outline = parseOutline(content);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headingIds = flattenHeadings(outline);
    const headingElements = headingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    const observerOptions = {
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [outline]);

  return <HeadingsList outline={outline} activeId={activeId} />;
};
