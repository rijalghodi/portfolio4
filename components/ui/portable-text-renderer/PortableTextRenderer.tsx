"use client";

import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import { PortableText, PortableTextReactComponents, defaultComponents } from "@portabletext/react";
// import hljs from 'highlight.js'; // Highlight.js core

import { useTheme } from "@/contexts/theme-context";
import { env } from "@/lib/env";
import rijalDark from "@/public/hljs/rijal-dark";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SanityImage } from "sanity-image";
import { CopyButton } from "../copy-button";
import { TableOfContents } from "./TableOfContents";
import { parseOutline } from "./outline";

interface PortableTextRendererProps {
  value: any; // Replace `any` with your Portable Text type if defined
  withTableOfContents?: boolean;
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ value, withTableOfContents = false }) => {
  const { theme } = useTheme();

  const components: PortableTextReactComponents = {
    ...defaultComponents,
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <figure className="mb-6 flex items-center flex-col">
            <SanityImage
              id={value.asset._ref}
              projectId={env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={env.NEXT_PUBLIC_SANITY_DATASET}
              width={800}
              height={500}
              crop={value.crop}
              hotspot={value.hotspot}
              alt={value.alt}
              about={value.alt}
              className="rounded-xl mb-2"
            />
            {value.alt && <figcaption className="text-sm sm:text-base">{value.alt}</figcaption>}
          </figure>
        );
      },
      code: ({ value }: any) => {
        return (
          <div className="relative border rounded-md overflow-clip mb-6">
            <div className="text-muted-foreground border-b text-xs font-semibold flex items-center justify-between px-5 py-1 bg-secondary h-10 ">
              <div className="">{value.filename ?? value.language}</div>
              <div className="flex items-center gap-4">
                <CopyButton value={value.code} size="icon-sm" variant="secondary" aria-label="Copy code" />
              </div>
            </div>
            <SyntaxHighlighter
              language={value.language}
              style={theme === "dark" ? rijalDark : atomOneLight}
              wrapLines
              useInlineStyles
              customStyle={{
                padding: "1rem",
                fontSize: "0.9rem",
                maxHeight: 600,
                overflow: "auto",
              }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        );
      },
    },

    marks: {
      strong: ({ children }: any) => <strong className="text-foreground font-medium">{children}</strong>,
      link: ({ value, children }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-slate-500 dark:text-slate-300 "
        >
          {children}
        </a>
      ),
      code: ({ children }) => (
        <code className="font-mono text-[0.9rem] text-orange-500 dark:text-yellow-500 bg-secondary/70 px-1">
          {children}
        </code>
      ),
    },
    block: {
      normal: ({ children }) => <p className="mb-6 md:text-lg">{children}</p>,
      h1: ({ children, value }) => (
        <h1 className="text-4xl font-medium leading-snug mb-6 mt-10" id={value._key}>
          {children}
        </h1>
      ),
      h2: ({ children, value }) => (
        <h2 className="text-[1.75rem] font-medium leading-snug mb-6 mt-10" id={value._key}>
          {children}
        </h2>
      ),
      h3: ({ children, value }) => (
        <h3 className="text-xl font-medium leading-snug mb-6 mt-6" id={value._key}>
          {children}
        </h3>
      ),
      h4: ({ children, value }) => (
        <h4 className="text-lg font-semibold mb-6 mt-6" id={value._key}>
          {children}
        </h4>
      ),
      h5: ({ children, value }) => (
        <h5 className="text-base font-semibold tracking-tight uppercase mb-6 mt-6" id={value._key}>
          {children}
        </h5>
      ),
      h6: ({ children, value }) => (
        <h6 className="text-sm font-semibold uppercase tracking-tight mb-6 mt-6" id={value._key}>
          {children}
        </h6>
      ),

      hr: ({ value }) => <hr className="mb-6 mt-6" id={value._key} />,
    },
    list: {
      bullet: ({ children, value }) => (
        <ul className="list-disc pl-6 mb-6" id={value._key}>
          {children}
        </ul>
      ),
      number: ({ children, value }) => (
        <ol className="list-decimal pl-6 mb-6" id={value._key}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children, value }) => (
        <li id={value._key} className="mb-3 md:text-lg">
          {children}
        </li>
      ),
      number: ({ children, value }) => (
        <li id={value._key} className="mb-3 md:text-lg">
          {children}
        </li>
      ),
    },
  };

  const outline = parseOutline(value);

  return (
    <div>
      {withTableOfContents && (
        <section className="static mb-6 xl:absolute top-0 bottom-20 w-auto xl:w-80 left-full xl:translate-x-8">
          <div className="border rounded-xl static xl:sticky xl:top-20 ">
            <TableOfContents outline={outline} />
          </div>
        </section>
      )}
      <PortableText value={value} components={components} />
    </div>
  );
};

export { PortableTextRenderer };
