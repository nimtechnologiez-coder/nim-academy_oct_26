import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090e17" },
  ],
};

export const metadata: Metadata = {
  title: "NIM Academy — Become the AI Engineer Companies Hire | Generative AI Engineering",
  description:
    "6-month live Generative AI Engineering program from NIM Academy × NIM Technologies. Zero-prerequisite to job-ready with 3 Gateway evaluations, Azure AI-900 preparation, real production projects, and structured placement assistance.",
  keywords: [
    "Generative AI Course",
    "AI Engineer Training",
    "NIM Academy",
    "NIM Technologies",
    "LLM Engineering",
    "RAG Systems",
    "Azure AI-900 Certification",
    "MLOps",
    "LangChain",
    "AI Placements",
  ],
  authors: [{ name: "NIM Academy × NIM Technologies", url: "https://nimacademy.in" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
