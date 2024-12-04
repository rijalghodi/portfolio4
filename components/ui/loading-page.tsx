import { cn } from '@/lib/utils';
import { Loader } from './loader';

export function LoadingPage() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6">
      <div
        className={cn(
          '-z-10 fixed left-0 right-0 top-1/2 -translate-y-1/2 aspect-square bg-cover bg-center',
          "bg-[url('/icons/comet-dark.svg')]",
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
