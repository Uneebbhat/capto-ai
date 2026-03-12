import { LoginForm } from "@/features/(auth)/login/components/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Capto AI",
  description:
    "Login to your Capto AI account to generate AI-powered social media posts for LinkedIn, Instagram, and Twitter. Continue creating engaging content with your AI writing assistant.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Login - Capto AI",
    description:
      "Access your Capto AI account and start generating optimized social media posts with AI.",
    url: "https://capto-ai.vercel.app/login",
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
    title: "Login - Capto AI",
    description:
      "Login to Capto AI and continue generating AI-powered social media content.",
    images: ["/og-image.png"],
  },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
