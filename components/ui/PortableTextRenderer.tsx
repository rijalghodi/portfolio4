'use client';

import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import {
  defaultComponents,
  PortableText,
  PortableTextReactComponents,
} from '@portabletext/react';
// import hljs from 'highlight.js'; // Highlight.js core

import rijalDark from '@/public/hljs/rijal-dark';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '@/contexts/theme-context';
import { CopyButton } from './copy-button';
import { SanityImage } from 'sanity-image';
import { env } from '@/lib/env';

interface PortableTextRendererProps {
  value: any; // Replace `any` with your Portable Text type if defined
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({
  value,
}) => {
  const { theme } = useTheme();

  const components: PortableTextReactComponents = {
    ...defaultComponents,
    types: {
      image: ({ value }: { value: any }) => {
        return (
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
            className="rounded-xl"
          />
        );
        // return <Image width={400} height={400} src={imgUrl} alt={value.alt} />;
      },
      code: ({ value }: any) => {
        return (
          <div className="relative border rounded-md overflow-clip mb-6">
            <div className="text-muted-foreground border-b text-xs font-semibold flex items-center justify-between px-5 py-1 bg-secondary h-10 ">
              <div className="">{value.filename}</div>
              <div className="flex items-center gap-4">
                {value.language}
                <CopyButton
                  value={value.code}
                  size="icon-sm"
                  variant="secondary"
                />
              </div>
            </div>
            <SyntaxHighlighter
              language={value.language}
              style={theme === 'dark' ? rijalDark : atomOneLight}
              wrapLines
              useInlineStyles
              customStyle={{
                padding: '1rem',
                fontSize: '0.875em',
                maxHeight: 600,
                overflow: 'scroll',
              }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        );
      },
    },

    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
      link: ({ value, children }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          {children}
        </a>
      ),
      code: ({ children }) => (
        <code className="font-mono text-destructive">{children}</code>
      ),
    },
    block: {
      normal: ({ children }) => <p className="mb-6 md:text-lg">{children}</p>,
      h1: ({ children }) => (
        <h1 className="text-3xl font-medium leading-snug mb-6 mt-10">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-medium leading-snug mb-6 mt-10">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-medium leading-snug mb-6 mt-6">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-medium uppercase mb-6 mt-6">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-base font-medium uppercase mb-6 mt-6">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-sm font-medium uppercase mb-6 mt-6">{children}</h6>
      ),

      hr: ({ children }) => <hr className="mb-6 mt-6">{children}</hr>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-6">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 mb-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2 md:text-lg">{children}</li>,
      number: ({ children }) => <li className="mb-2 md:text-lg">{children}</li>,
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;
