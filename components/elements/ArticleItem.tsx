import Link from 'next/link';
import React from 'react';
type Props = {
  url: string;
  title: string;
  date?: string;
};
export function ArticleItem(props: Props) {
  return (
    <Link
      href={props.url}
      className="group border-b border-border py-4 px-3 flex flex-col sm:flex-row flex-wrap gap-2 justify-between hover:bg-secondary/30 sm:items-center"
    >
      <div className="font-medium text-foreground tracking-wide">
        {props.title}
      </div>
      {props.date && (
        <div className=" text-sm">
          {new Date(props.date).toLocaleDateString('en', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </div>
      )}
    </Link>
  );
}
