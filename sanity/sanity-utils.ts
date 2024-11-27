import { IProject } from '@/types/project';
import { createClient, groq } from 'next-sanity';
import { clientConfig } from './config/client-config';

export async function getProjects(): Promise<IProject[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        description,
        "icon_url": icon.asset->url,
        "cover_image_url": cover_image.asset->url,
        "cover_image_alt": cover_image.alt,
        technologies[],
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
        technologies[],
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
