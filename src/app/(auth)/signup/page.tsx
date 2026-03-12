import { SignupForm } from "@/features/(auth)/signup/components/signup-form"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Capto AI",
  description:
    "Create your Capto AI account and start generating high-performing social media posts using AI. Turn simple ideas into engaging LinkedIn, Instagram, and Twitter content instantly.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Sign Up - Capto AI",
    description:
      "Join Capto AI and transform your ideas into optimized social media posts with AI.",
    url: "https://capto-ai.vercel.app/signup",
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
    title: "Sign Up - Capto AI",
    description:
      "Create your Capto AI account and start generating social media content with AI.",
    images: ["/og-image.png"],
  },
};

export default function SignupPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
