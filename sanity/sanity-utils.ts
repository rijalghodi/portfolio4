import { IProject } from '@/types/project';
import { createClient, groq } from 'next-sanity';
import { clientConfig } from './config/client-config';
import { IArticle } from '@/types/article';

import imageUrlBuilder from '@sanity/image-url';
import { SanityClientLike } from '@sanity/image-url/lib/types/types';
import { IAbout } from '@/types/about';
import { IExperience } from '@/types/experience';

const builder = imageUrlBuilder(clientConfig as SanityClientLike);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects(
  page?: number,
  limit?: number,
): Promise<IProject[]> {
  const start = ((page ?? 1) - 1) * (limit ?? 100); // Calculate the start index for pagination

  return await createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(pinned asc, date desc) [${start}...${start + (limit ?? 100)}] {
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
              language, 
              code, 
              filename, 
              highlightedLines 
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
    groq`*[_type == "article"] | order(pinned asc, date desc) [${start}...${start + (limit ?? 100)}] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      "cover_image_url": cover_image.asset->url,
      "cover_image_alt": cover_image.alt,
      tags[],
      date,
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
        toc,
        content[]{
          ...,
          _type == "code" => { 
              language, 
              code, 
              filename, 
              highlightedLines 
          }
      }
      }`,
    { slug },
  );
}

export const getLatestPinnedAbout = async (): Promise<IAbout> => {
  const query = groq`
    *[_type == "about"] | order(pinned desc, date desc) [0] {
      _createdAt,
      pinned,
      date,
      "cv": {
        "url": cv.asset->url,
        "size": cv.asset->size,
        "mimeType": cv.asset->mimeType
      },
      content[] {
        ...,
        _type == "code" => {
          language,
          code,
          filename,
          highlightedLines
        }
      }
    }
  `;

  // Fetch the data using the Sanity client
  return createClient(clientConfig).fetch(query);
};

export async function getExpereinces(
  page?: number,
  limit?: number,
): Promise<IExperience[]> {
  const start = ((page ?? 1) - 1) * (limit ?? 100); // Calculate the start index for pagination

  return await createClient(clientConfig).fetch(
    groq`*[_type == "experience"] | order(pinned asc, start_date desc) [${start}...${start + (limit ?? 100)}] {
      _id,
      _createdAt,
      "icon_url": icon.asset->url,
      position,
      company,
      url,
      still_working,
      start_date,
      end_date,
      category,
      pinned,
      description,
    }`,
  );
}
