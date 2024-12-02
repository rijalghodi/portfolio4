import { Footer } from '@/components/elements/Footer';
import { Header } from '@/components/elements/Header';
import React from 'react';
type Props = {
  children: React.ReactNode;
};
export default function WithLayout(props: Props) {
  return (
    <div className="w-full">
      <Header />
      <main className="mt-14 py-4 px-5" role="main">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
