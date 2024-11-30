import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { ReactQueryProvider } from '@/contexts/react-query-context';
import { AOSInit } from '@/contexts/aos-init';
import 'aos/dist/aos.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { env } from '@/lib/env';

// const inter = Inter({
//   weight: ['400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMono.ttf',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

const inter = localFont({
  src: './fonts/Inter.ttf',
  variable: '--font-inter-visual',
  weight: '100 900',
  fallback: ['sans-serif'],
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
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
      <body
        className={`${inter.className} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider>
          <ReactQueryProvider>
            <AOSInit>{children}</AOSInit>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
