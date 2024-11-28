import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Props = {
  url: string;
  title: string;
  description?: string;
  date?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
};
export function ArticleItem(props: Props) {
  return (
    <Link
      href={props.url}
      className="group border-b border-border py-6 px-3 flex flex-col-reverse min-[500px]:flex-row gap-4 justify-between items-start hover:bg-secondary/30"
    >
      <div className="flex flex-col gap-3 flex-1">
        <p className="text-xl font-medium text-foreground tracking-wide">
          {props.title}
        </p>
        <p className="">{props.description}</p>
        {props.date && (
          <div className="font-semibold uppercase font-mono text-xs">
            {new Date(props.date).toLocaleDateString('en', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </div>
        )}
      </div>
      {props.coverImageUrl && (
        <div className="relative w-full min-[500px]:w-32 sm:w-32 md:w-40 bg-secondary aspect-[3/2]">
          <Image
            src={props.coverImageUrl}
            fill
            alt={props.coverImageAlt ?? 'cover'}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </Link>
  );
}
