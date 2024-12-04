import { SchemaTypeDefinition } from 'sanity';

export const about: SchemaTypeDefinition = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
      description: 'The latest pinned about will be shown',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date you write this about',
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
      description: 'Your latest CV',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for accessibility and SEO.',
              options: {
                isHighlighted: true, // Makes this field accessible in the Studio UI
              },
            },
          ],
        },
        {
          name: 'code',
          title: 'Code Block',
          type: 'code',
          options: {
            withFilename: true, // optional
            highlightedLines: true, // optional
          },
        },
      ],
    },
  ],
};
