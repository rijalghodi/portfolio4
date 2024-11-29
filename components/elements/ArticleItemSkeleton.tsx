import React from 'react';

export function ArticleItemSkeleton() {
  return (
    <div className="animate-pulse rounded-lg py-6 px-3 flex flex-col-reverse min-[500px]:flex-row gap-4 justify-between items-start w-full">
      <div className="flex flex-col gap-6 flex-1 w-full">
        <div className="w-3/4 sm:w-1/2 h-2 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
        <div className="flex flex-col gap-3">
          <div className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
          <div className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
          <div className="w-1/4 h-2 bg-gray-200 dark:bg-slate-800 rounded-full"></div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-slate-800 w-full rounded-xl min-[500px]:w-32 sm:w-32 md:w-40 bg-secondary aspect-[3/2]"></div>
    </div>
  );
}
