'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export function ReactQueryProvider(props: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
