import { IProject } from '@/types/project';
import { createClient, groq } from 'next-sanity';
import { clientConfig } from './config/client-config';
import { IArticle } from '@/types/article';

export async function getProjects(
  page?: number,
  limit?: number,
): Promise<IProject[]> {
  const start = ((page ?? 1) - 1) * (limit ?? 100); // Calculate the start index for pagination

  return await createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(date desc) [${start}...${start + (limit ?? 100)}] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        description,
        "icon_url": icon.asset->url,
        "cover_image_url": cover_image.asset->url,
        "cover_image_alt": cover_image.alt,
         technologies[]->{
          _id,
          name,
          "icon_url": icon.asset->url,
        },
        role,
        date,
        demo_link,
        source_link,
      }`,
  );
}

export async function getProjectBySlug(slug: string): Promise<IProject | null> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        description,
        "icon_url": icon.asset->url,
        "cover_image_url": cover_image.asset->url,
        "cover_image_alt": cover_image.alt,
        technologies[]->{
          _id,
          name,
          "icon_url": icon.asset->url,
          link,
        },
        previews[] {
          "image_url": asset -> url,
          alt
        },
        role,
        date,
        demo_link,
        source_link,
        content[]{
          ...,
          _type == "code" => {
            "language": language,
            "code": code,
            "filename": filename,
            "highlightedLines": highlightedLines
          }
        }
      }`,
    { slug },
  );
}

export async function getArticles(
  page?: number,
  limit?: number,
): Promise<IArticle[]> {
  const start = ((page ?? 1) - 1) * (limit ?? 100); // Calculate the start index for pagination

  return await createClient(clientConfig).fetch(
    groq`*[_type == "article"] | order(date desc) [${start}...${start + (limit ?? 100)}] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      "cover_image_url": cover_image.asset->url,
      "cover_image_alt": cover_image.alt,
      tags[],
      date,
      content[]{
        ...,
        _type == "code" => {
          "language": language,
          "code": code,
          "filename": filename,
          "highlightedLines": highlightedLines
        }
      }
    }`,
  );
}

export async function getArticleBySlug(slug: string): Promise<IArticle> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        description,
        "cover_image_url": cover_image.asset->url,
        "cover_image_alt": cover_image.alt,
        tags[],
        date,
        content[]{
          ...,
          _type == "code" => {
            "language": language,
            "code": code,
            "filename": filename,
            "highlightedLines": highlightedLines
          }
        }
      }`,
    { slug },
  );
}
