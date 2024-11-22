import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/molecules/Header';
import { ThemeProvider } from '@/contexts/theme-context';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/molecules/Footer';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: "Rijal Ghodi's Portfolio",
    template: "%s | Rijal Ghodi's Portfolio",
  },
  authors: [{ name: 'Rijal Ghodi', url: 'rijalghodi.dev@gmail.com' }],
  creator: 'Rijal Ghodi',
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
  description:
    "Hey, I'm Rijal Ghodi 👋 I build software and artificial intelligence to benefit humanity. On this site, you can check out all the articles I've written or learn more about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="w-full">
            <Header />
            <main className="mt-14 py-4">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
