import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6">
      <div
        className={cn(
          '-z-10 fixed top-0 left-0 right-0 aspect-square bg-cover bg-center',
          "bg-[url('/icons/comet-dark.svg')]",
        )}
      ></div>
      <div className="flex flex-col gap-11 max-w-96 w-full">
        <h1 className="text-center">Page Not Found</h1>
        <p className="text-center text-lg">
          Page not found We couldn’t find the page you were looking for. Check
          again.
        </p>
        <div className="flex justify-center w-full">
          <Button asChild radius="full">
            <Link href="/">
              <IconHome />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
