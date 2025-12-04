import "aos/dist/aos.css";
import "./globals.css";
import "aos/dist/aos.css";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";

import { ContactFormProvider } from "@/components/elements/contact-form-context";
import { Toaster } from "@/components/ui/sonner";
import { AOSInit } from "@/contexts/aos-init";
import { ReactQueryProvider } from "@/contexts/react-query-context";
import { ThemeProvider } from "@/contexts/theme-context";
import { metadata as brandMetadata } from "@/lib/brand";
import { env } from "@/lib/env";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
  fallback: ["sans-serif"],
});

const mono = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = brandMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
      <body className={`${inter.className} ${inter.variable} ${mono.variable} antialiased dark`}>
        <ThemeProvider>
          <ReactQueryProvider>
            <AOSInit>
              <ContactFormProvider>{children}</ContactFormProvider>
            </AOSInit>
            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
