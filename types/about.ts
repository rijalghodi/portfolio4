import { PortableTextBlock } from "next-sanity";

export interface IAbout {
  _id: string;
  _createdAt: string; // ISO string format for date
  date?: string; // ISO string format for date
  pinned?: boolean; //
  cv: {
    url: string;
    size: string;
    mimeType: string;
  };
  content?: Array<
    | PortableTextBlock
    | {
        _type: "code"; // Code block
        language?: string; // Optional, language of the code block
        code?: string; // Optional, the code content
        filename?: string; // Optional, filename of the code block
        highlightedLines?: number[]; // Optional, array of highlighted line numbers
      }
  >;
}
