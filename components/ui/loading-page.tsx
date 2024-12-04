'use client';

import { cn } from '@/lib/utils';
import { Loader } from './loader';
import { useTheme } from '@/contexts/theme-context';

export function LoadingPage() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6">
      <div
        className={cn(
          '-z-10 fixed left-1/2 -translate-x-1/2 w-full max-w-screen-md top-1/2 -translate-y-1/2 aspect-square bg-cover bg-center',
          theme === 'dark'
            ? "bg-[url('/icons/comet-dark.svg')]"
            : "bg-[url('/icons/comet-light.svg')]",
        )}
      ></div>
      <div className="flex flex-col gap-11 max-w-96 w-full">
        <div className="flex justify-center w-full z-10">
          <Loader />
        </div>
      </div>
    </div>
  );
}
