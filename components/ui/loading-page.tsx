'use client';

import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-context';
import { IconLoader } from '@tabler/icons-react';

export function LoadingPage() {
  const { theme } = useTheme();
  return (
    <div className="relative w-full min-h-screen max-w-2xl -z-10 flex items-center justify-center p-6 mx-auto">
      <div
        className={cn(
          '-z-10 w-full max-w-screen-md aspect-square bg-cover bg-center',
          theme === 'dark'
            ? "bg-[url('/icons/comet-dark.svg')]"
            : "bg-[url('/icons/comet-light.svg')]",
        )}
      ></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <IconLoader size={28} className="animate-spin text-primary" />
      </div>
    </div>
  );
}
