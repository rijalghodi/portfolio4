import { Footer } from '@/components/elements/Footer';
import { Header } from '@/components/elements/Header';
import { LoadingPage } from '@/components/ui/loading-page';
import React, { Suspense } from 'react';
type Props = {
  children: React.ReactNode;
};
export default function WithLayout(props: Props) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="w-full">
        <Header />
        <main className="mt-14 py-4 px-5" role="main">
          {props.children}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
