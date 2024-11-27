import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/molecules/Header';
import { ThemeProvider } from '@/contexts/theme-context';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/molecules/Footer';
import { ReactQueryProvider } from '@/contexts/react-query-context';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

const geistMono = localFont({
  src: './fonts/GeistMono.ttf',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const title = "Rijal Ghodi's Portfolio";
const description =
  "Hello, I'm Rijal Ghodi 👋 I build software and artificial intelligence to benefit humanity. On this site, you can check out all the articles I've written or learn more about me.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Rijal Ghodi's Portfolio",
  },
  authors: [{ name: 'Rijal Ghodi', url: 'rijalghodi.dev@gmail.com' }],
  creator: 'Rijal Ghodi',
  applicationName: title,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rijalghodi.dev',
  ),
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: title,
    description,
    siteName: title,
  },
  keywords: [
    'Rijal Ghodi',
    'Rijal',
    'Ghodi',
    'Software Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'FullStack Developer',
    'ML Engineer',
    'AI Engineer',
  ],
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ReactQueryProvider>
            <div className="w-full">
              <Header />
              <main className="mt-14 py-4 px-5">{children}</main>
              <Footer />
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
