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
  description: "Front-end Developer specializing in React, Next.js, and TypeScript. Available for remote work and freelance projects.",
  keywords: ["Front-end Developer", "React", "Next.js", "TypeScript", "Freelance", "Remote"],
  authors: [{ name: "Sabbi Arrafta Sahib" }],
  openGraph: {
    title: "Sabbi Arrafta Sahib | Front-end Developer",
    description: "Front-end Developer specializing in React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
