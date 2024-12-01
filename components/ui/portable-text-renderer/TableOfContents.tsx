import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Type for the outline structure
type Heading = {
  _key: string;
  children: (string | { text: string })[]; // Children can be either a string or an object with a `text` property
  subheadings: Heading[]; // Nested subheadings for the table of contents
};

// Utility function to get text from children nodes
const getChildrenText = (props: (string | { text: string })[]): string =>
  props
    .map((node) => (typeof node === 'string' ? node : node.text || ''))
    .join('');

const scrollToElement = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
// TableOfContents component that takes an array of headings as the outline

const PerLevelHeadings = ({ outline }: { outline: Heading[] }) => (
  <ol className="flex flex-col gap-3">
    {outline.map(({ _key, children, subheadings }) => (
      <li key={_key} className="flex flex-col gap-3">
        <Link
          className="underline hover:text-slate-500 dark:hover:text-slate-400 text-sm"
          href={'#' + _key}
          onClick={(e) => {
            e.preventDefault();
            scrollToElement(_key, 100);
          }}
        >
          {getChildrenText(children)}
        </Link>
        {subheadings.length > 0 && (
          <div className="pl-6">
            <PerLevelHeadings outline={subheadings} />
          </div>
        )}
      </li>
    ))}
  </ol>
);
import React from 'react';

export const TableOfContents = ({
  outline,
  className = '',
}: {
  outline: Heading[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    // Set initial state based on window width
    setOpen(window.innerWidth > 500);
  }, []);

  const toggleOpen = () => setOpen(!open);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [open]);

  return (
    <div className={`w-full ${className}`}>
      {/* Trigger */}
      <div
        className="flex justify-between items-center hover:bg-accent dark:hover:bg-secondary px-1 py-2 rounded-lg cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-xl font-medium leading-snug text-foreground">
          Table of Content
        </p>
        <IconChevronDown
          size={16}
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </div>

      {/* Content with Smooth Transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: contentHeight === undefined ? 'auto' : `${contentHeight}px`,
        }}
        // onTransitionEnd={handleTransitionEnd}
      >
        <div className="mt-2">
          <PerLevelHeadings outline={outline} />
        </div>
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-secondary" />
      </div>
    </div>
  );
};
