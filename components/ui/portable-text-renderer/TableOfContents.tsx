import Link from 'next/link';

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
export const TableOfContents = ({
  outline,
}: {
  outline: Heading[];
  className?: string;
}) => (
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
            <TableOfContents outline={subheadings} />
          </div>
        )}
      </li>
    ))}
  </ol>
);
