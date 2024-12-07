'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { IconLoader, IconRefresh } from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

type Props = {
  path?: string;
};
export function RevalidateAffix({ path }: Props) {
  const [authCookie, setAuthCookie] = useState<string>();
  const pathname = usePathname();
  const { mutateAsync: revalidate, isPending } = useMutation({
    mutationKey: ['revalidate'],
    mutationFn: async () => {
      const res = await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: path ?? pathname }),
      });

      if (!res.ok) {
        throw new Error('Revalidate failed');
      }

      return res.json(); // Assuming response is in JSON format
    },
    onSuccess: () => {
      window.location.reload();
      toast('Page has been revalidated', {
        description: 'Try to refresh the page',
      });
    },
    onError: (error: Error) => {
      toast('Fail to revalidate', {
        description: error.message,
        className: 'bg-destructive',
      });
    },
  });

  useEffect(() => {
    setAuthCookie(Cookies.get('rijalghodi.dev.token'));
  }, []);

  // Don't show the button if the cookie is not set
  if (!authCookie) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Button onClick={() => revalidate()} radius="full" disabled={isPending}>
        {isPending ? <IconLoader className="animate-spin" /> : <IconRefresh />}
        Revalidate
      </Button>
    </div>
  );
}
