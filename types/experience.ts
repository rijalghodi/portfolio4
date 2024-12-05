import { PortableTextBlock } from 'next-sanity';

export interface IExperience {
  _id: string;
  _createdAt: string;
  position: string;
  icon_url?: string;
  company: string;
  url?: string;
  category?: string;
  still_working?: boolean;
  start_date?: string;
  end_date?: string;
  pinned?: boolean;
  description?: Array<PortableTextBlock>;
}
