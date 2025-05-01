import { SchemaTypeDefinition } from "sanity";

export const article: SchemaTypeDefinition = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      description: "Pin this article to appear at the top",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "cover_image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "toc",
      title: "Table of Contents?",
      type: "boolean",
      description: "Enable table of content?",
      initialValue: true,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          title: "Block",
          of: [{ type: "latex", icon: "Σ", title: "Inline math" }],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for accessibility and SEO.",
              options: {
                isHighlighted: true, // Makes this field accessible in the Studio UI
              },
            },
          ],
        },
        {
          name: "code",
          title: "Code Block",
          type: "code",
          options: {
            withFilename: true, // optional
            highlightedLines: true, // optional
          },
        },

        { type: "latex", icon: "Σ", title: "Math block" },
      ],
    },
  ],
};
