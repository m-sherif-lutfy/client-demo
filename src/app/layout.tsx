import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Blue Fields — Informative Site Demo",
    template: "%s — Blue Fields",
  },
  description: "Polished 5-page informative site demo with WhatsApp CTA, contact form, and clean UI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Blue Fields — Informative Site Demo",
    description: "Polished 5-page site with clean UI, fast performance, and SEO basics.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Blue Fields Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Fields — Informative Site Demo",
    description: "Polished 5-page site with clean UI, fast performance, and SEO basics.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
