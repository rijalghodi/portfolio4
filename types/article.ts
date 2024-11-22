export type Article = {
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  url: string;
  public_reaction_count: number;
  positive_reaction_count: number;
  public_views_count: number;
  cover_image: null | string;
  reading_time_minutes: number;
  tag_list?: string; // 'tag1, tag2, tag3'
  tags: string[];
  body_markdown: string;
  body_html: string;
};
