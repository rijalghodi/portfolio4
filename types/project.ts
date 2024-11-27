import { PortableTextBlock } from 'next-sanity';
import { ITechnology } from './technology';

export interface IProject {
  _id: string;
  _createdAt: string; // ISO string format for date
  name: string;
  slug?: string;
  description?: string;
  icon_url?: string; // URL to the icon image
  cover_image_url?: string; // URL to the cover image
  cover_image_alt?: string; // Optional, as "alt" might not always be provided
  technologies?: ITechnology[]; // Array of technology strings
  date?: string; // ISO string format for date
  demo_link?: string; // URL to the demo
  source_link?: string; // URL to the source
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
