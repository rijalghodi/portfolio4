'use client';

import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';

import {
  defaultComponents,
  PortableText,
  PortableTextReactComponents,
} from '@portabletext/react';
// import hljs from 'highlight.js'; // Highlight.js core

import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '@/contexts/theme-context';
import { CopyButton } from './copy-button';

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
      code: ({ value }: any) => {
        return (
          <div className="relative border rounded-md overflow-clip my-2">
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
              style={theme === 'dark' ? atomOneDark : atomOneLight}
              wrapLines
              useInlineStyles
              customStyle={{
                padding: '1rem 2rem',
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
        <a href={value?.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h1: ({ children }) => (
        <h1 className="text-3xl font-semibold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold">{children}</h2>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
      number: ({ children }) => (
        <ol className="list-decimal pl-5">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;
