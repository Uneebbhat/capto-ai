import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: "Capto AI - AI Social Media Post Generator for LinkedIn, Instagram & Twitter",
    template: "%s | Capto AI",
  },

  description:
    "Capto AI is an AI-powered social media content generator that helps creators, founders, and developers turn simple ideas into engaging posts. Generate optimized content for LinkedIn, Instagram, and Twitter instantly using AI.",

  keywords: [
    "AI social media post generator",
    "AI content generator",
    "LinkedIn post generator AI",
    "Instagram caption generator",
    "Twitter post generator",
    "AI writing assistant",
    "AI copywriting tool",
    "AI content creation platform",
    "social media caption generator",
    "AI SaaS content generator"
  ],

  authors: [{ name: "Capto AI" }],
  creator: "Capto AI",
  publisher: "Capto AI",

  metadataBase: new URL("https://capto-ai.vercel.app/"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Capto AI - AI Social Media Content Generator",
    description:
      "Turn simple ideas into high-performing social media posts with Capto AI. Generate optimized content for LinkedIn, Instagram, and Twitter using AI-powered writing assistance.",
    url: "https://capto-ai.vercel.app/",
    siteName: "Capto AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Capto AI - AI Social Media Content Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Capto AI - Generate Social Media Posts with AI",
    description:
      "Create engaging LinkedIn posts, Instagram captions, and Twitter content in seconds using Capto AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
