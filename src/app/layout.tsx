import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabbi Arrafta Sahib | Front-end Developer",
  description: "Front-end Developer specializing in React, Next.js, and TypeScript. Available for remote work and freelance projects. BSc in Computer Science & Engineering.",
  keywords: [
    "Front-end Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Freelance Developer",
    "Remote Developer",
    "Web Developer",
    "Full Stack Developer",
    "Vue.js",
    "Laravel",
  ],
  authors: [{ name: "Sabbi Arrafta Sahib" }],
  creator: "Sabbi Arrafta Sahib",
  metadataBase: new URL("https://sabbiarraftasahib.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sabbi Arrafta Sahib | Front-end Developer",
    description:
      "Front-end Developer specializing in React, Next.js, and TypeScript. Available for remote work and freelance projects.",
    url: "https://sabbiarraftasahib.com", // Replace with actual domain
    siteName: "Sabbi Arrafta Sahib Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Add OG image later
        width: 1200,
        height: 630,
        alt: "Sabbi Arrafta Sahib - Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbi Arrafta Sahib | Front-end Developer",
    description:
      "Front-end Developer specializing in React, Next.js, and TypeScript. Available for remote work and freelance projects.",
    images: ["/og-image.png"], // Add Twitter card image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
