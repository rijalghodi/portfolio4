import Link from 'next/link';
import { Collapsible, CollapsibleTrigger } from '../collapsible';
import { CollapsibleContent } from '@radix-ui/react-collapsible';

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
export const TableOfContents = ({
  outline,
}: {
  outline: Heading[];
  className?: string;
}) => {
  return (
    <Collapsible defaultOpen={window.innerWidth > 500}>
      <CollapsibleTrigger
        asChild
        className="hover:bg-accent px-1 py-2 rounded-lg cursor-pointer"
      >
        <p className="text-xl font-medium leading-snug">Table of Content</p>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <PerLevelHeadings outline={outline} />
      </CollapsibleContent>
    </Collapsible>
  );
};
