import { SchemaTypeDefinition } from 'sanity';

export const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation(rule) {
        return rule.max(80);
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cover_image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },

    {
      name: 'previews',
      title: 'Previews',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Preview Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'Technology',
          to: [
            {
              type: 'tech',
            },
          ],
        },
      ],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'demo_link',
      title: 'Demo Link',
      type: 'url',
    },
    {
      name: 'source_link',
      title: 'Source Link',
      type: 'url',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
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
