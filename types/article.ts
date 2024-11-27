import { PortableTextBlock } from 'next-sanity';

export interface IArticle {
  _id: string;
  _createdAt: string; // ISO string format for date
  title: string;
  slug: string;
  description?: string;
  cover_image_url?: string; // URL to the cover image
  cover_image_alt?: string; // Optional, as "alt" might not always be provided
  tags?: string[]; // Array of technology strings
  date?: string; // ISO string format for date
  content?: Array<
    | PortableTextBlock
    | {
        _type: 'code'; // Code block
        language?: string; // Optional, language of the code block
        code?: string; // Optional, the code content
        filename?: string; // Optional, filename of the code block
        highlightedLines?: number[]; // Optional, array of highlighted line numbers
      }
  >;
}
