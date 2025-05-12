import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Type for the outline structure
type Heading = {
  _key: string;
  children: (string | { text: string })[]; // Children can be either a string or an object with a `text` property
  subheadings: Heading[]; // Nested subheadings for the table of contents
};

// Utility function to get text from children nodes
const getChildrenText = (props: (string | { text: string })[]): string =>
  props.map((node) => (typeof node === "string" ? node : node.text || "")).join("");

export const PerLevelHeadings = ({ outline }: { outline: Heading[] }) => (
  <ol className="flex flex-col gap-0">
    {outline.map(({ _key, children, subheadings }) => (
      <li key={_key} className="flex flex-col gap-0">
        <Link className="rounded-md hover:bg-muted hover:text-primary p-2 text-sm" href={`#${_key}`}>
          {getChildrenText(children)}
        </Link>
        {subheadings.length > 0 && (
          <div className="pl-4">
            <PerLevelHeadings outline={subheadings} />
          </div>
        )}
      </li>
    ))}
  </ol>
);

export const TableOfContents = ({
  outline,
  className = "",
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
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out w-full",
          // !open ? `h-0` : `h-full`,
        )}
        style={{
          height: contentHeight === undefined ? "0px" : `${contentHeight}px`,
        }}
      >
        <section className="mt-2 px-4 xl:max-h-[calc(100vh-174px)] overflow-y-auto">
          <PerLevelHeadings outline={outline} />
          {/* <div className="mx-auto mt-4 mb-4 h-2 w-[100px] rounded-full bg-muted" /> */}
        </section>
      </div>
    </div>
  );
};
