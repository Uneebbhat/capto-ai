"use client"

import {
  ArrowRight,
  Github,
  Sparkles,
  Zap,
  LayoutGrid,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const platforms = ["LinkedIn", "Instagram", "Twitter / X"];
const tones = ["Professional", "Casual", "Storytelling", "Educational"];
const lengths = ["Short", "Medium", "Long"];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-950 to-black text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1f2937_0,transparent_50%),radial-gradient(circle_at_bottom,#111827_0,transparent_55%)] opacity-70" />

      <motion.header
        className="border-b border-zinc-800/80 bg-black/40 backdrop-blur"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo/Brand */}
          <div>
            <span className="text-sm font-semibold tracking-tight text-zinc-50">
              <Link href={"/"}>
                Capto AI
              </Link>
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-400 sm:flex">
            <Link href="#product" className="transition-colors hover:text-zinc-100">
              Product
            </Link>
            <Link href="#features" className="transition-colors hover:text-zinc-100">
              Features
            </Link>
            <Link href="#how-it-works" className="transition-colors hover:text-zinc-100">
              How it works
            </Link>
            <Link href="#use-cases" className="transition-colors hover:text-zinc-100">
              Use cases
            </Link>
            <Link href="#future" className="transition-colors hover:text-zinc-100">
              Future vision
            </Link>
          </nav>
          {/* Desktop Auth Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-800 bg-transparent text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
              asChild
            >
              <Link href={"/login"}>
                Log in
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-zinc-50 px-4 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] transition hover:bg-white"
              asChild
            >
              <Link href={"/signup"}>
                Get Started
              </Link>
            </Button>
          </div>
          {/* Mobile Burger/Menu Button & Auth */}
          <div className="flex flex-1 sm:hidden justify-end items-center gap-2">
            {/* Navigation for mobile as a dropdown or modal */}
            {/* Simple mobile menu using details/summary or can replace with menu button for actual dropdown later */}
            <details className="relative">
              <summary className="list-none cursor-pointer py-2 px-3 rounded-lg border border-zinc-700 bg-zinc-900/90 text-sm text-zinc-100">
                Menu
              </summary>
              <div className="absolute right-0 mt-1 w-40 rounded-lg bg-zinc-950/95 border border-zinc-800 shadow-lg z-50 py-2">
                <Link href="#product" className="block px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800/50">Product</Link>
                <Link href="#features" className="block px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800/50">Features</Link>
                <Link href="#how-it-works" className="block px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800/50">How it works</Link>
                <Link href="#use-cases" className="block px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800/50">Use cases</Link>
                <Link href="#future" className="block px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800/50">Future vision</Link>
                <hr className="my-1 border-zinc-700" />
                <Link href={"/login"} className="block px-4 py-2 text-xs font-medium text-sky-300 hover:bg-zinc-800/50">Log in</Link>
                <Link href={"/signup"} className="block px-4 py-2 text-xs font-medium text-black bg-zinc-50 rounded mt-1 hover:bg-white">Get Started</Link>
              </div>
            </details>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="flex flex-col items-center gap-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-6 flex flex-col items-center">
            <Badge className="flex w-fit items-center gap-2 rounded-full border border-sky-500/40 bg-zinc-900/80 p-4 text-[11px] font-medium text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.45)] mx-auto">
              <Sparkles className="h-3 w-3" />
              Powered by Google Gemini
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                Turn ideas into{" "}
                <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-emerald-300 bg-clip-text text-transparent">
                  high-performing social posts
                </span>{" "}
                with AI.
              </h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Capto AI helps creators, founders, developers, and personal brands
                transform rough ideas into polished, platform-optimized social
                content. Choose your platform, tone, and length—Capto handles the
                rest.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Button className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] transition hover:bg-white" asChild>
                <Link href={"/create-post"}>
                  Start Generating Posts
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-zinc-800 bg-zinc-950/60 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                asChild
              >
                <Link href="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Built for creators, founders & devs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Content optimized per platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Future: personalized on your writing style</span>
              </div>
            </div>
          </div>

          {/* Product Demo Section */}
          <motion.section
            id="product"
            className="relative"
            aria-label="Capto AI demo"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {/* Vibrant Glow Background */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-400/60 via-indigo-400/50 to-emerald-400/70 blur-[100px] opacity-100" />

            <Card className="relative overflow-visible rounded-3xl border-2 border-sky-500/50 bg-gradient-to-tr from-zinc-950/90 via-zinc-900/75 to-blue-950/80 shadow-[0_0_100px_38px_rgba(56,189,248,0.37),0_0px_140px_0_rgba(0,0,0,0.9)] ring-2 ring-sky-500/10">

              {/* Animated highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-20 w-[85%] rounded-b-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-90 blur-md z-10" />

              <CardHeader className="border-b border-sky-400/10 pb-4 relative z-20">
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-sky-400 animate-bounce-slow" />
                    Social Post Generator
                  </CardTitle>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold text-sky-400 border border-sky-700/40">
                    Live preview
                  </span>
                </div>
                <CardDescription className="text-sm text-zinc-300">
                  Share your idea, pick a platform, customize tone & length. Capto AI instantly generates your ready-to-post content.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-8 pt-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">

                {/* Left Panel */}
                <div className="flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-200 flex items-center gap-2">
                        <Sparkles className="h-3 w-3 text-emerald-400" />
                        Post Idea
                      </label>
                      <div className="flex items-start gap-2">
                        <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-200 shadow-inner shadow-zinc-900/80 flex-1 whitespace-pre-line">
                          <span className="italic opacity-80">Share a behind-the-scenes story about building my SaaS and invite people to join the beta.</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="rounded-full border border-zinc-700/60 bg-zinc-900 hover:border-sky-400 text-xs px-2 py-1 text-sky-300"
                          size="icon"
                          tabIndex={-1}
                        >
                          <span role="img" aria-label="Edit">✏️</span>
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-3 text-xs sm:grid-cols-2">
                      {/* Platform Selection */}
                      <div className="space-y-1.5">
                        <label className="font-medium text-zinc-300 flex gap-1 items-center">
                          <LayoutGrid className="h-3 w-3 text-sky-300" />
                          Platform
                        </label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {platforms.map((platform) => (
                            <Button
                              key={platform}
                              type="button"
                              variant="ghost"
                              className={`rounded-full border px-3 py-1.5 text-xs min-w-0 h-auto transition-all duration-200 ${platform === "LinkedIn"
                                ? "border-sky-500 bg-sky-500/20 text-sky-100 shadow-[0_0_8px_1px_rgba(56,189,248,.16)]"
                                : "border-zinc-700/70 bg-zinc-900 text-zinc-200 hover:border-sky-300 hover:bg-sky-400/10 hover:text-sky-100"
                                }`}
                            >
                              {platform}
                            </Button>
                          ))}
                        </div>
                      </div>
                      {/* Tone Selection */}
                      <div className="space-y-1.5">
                        <label className="font-medium text-zinc-300 flex gap-1 items-center">
                          <Sparkles className="h-3 w-3 text-indigo-300" />
                          Tone
                        </label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {tones.map((tone) => (
                            <Button
                              key={tone}
                              type="button"
                              variant="ghost"
                              className={`rounded-full border px-3 py-1.5 text-xs min-w-0 h-auto transition-all duration-200 ${tone === "Storytelling"
                                ? "border-indigo-400 bg-indigo-400/15 text-indigo-100 shadow-[0_0_8px_1px_rgba(129,140,248,.09)]"
                                : "border-zinc-700/80 bg-zinc-900 text-zinc-200 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-100"
                                }`}
                            >
                              {tone}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Length Selection */}
                    <div className="space-y-1.5 text-xs">
                      <label className="font-medium text-zinc-300 flex gap-1 items-center">
                        <span role="img" aria-label="Lines">〰️</span>
                        Length
                      </label>
                      <div className="flex gap-2 mt-1">
                        {lengths.map((length) => (
                          <Button
                            key={length}
                            type="button"
                            variant="ghost"
                            className={`flex-1 rounded-full border px-3 py-1.5 min-w-0 h-auto transition-all duration-200 ${length === "Medium"
                              ? "border-emerald-400 bg-emerald-400/15 text-emerald-100 shadow-[0_0_8px_1px_rgba(52,211,153,.08)]"
                              : "border-zinc-700/80 bg-zinc-900 text-zinc-200 hover:border-emerald-400 hover:bg-emerald-100/5 hover:text-emerald-100"
                              }`}
                          >
                            {length}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300 px-3 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_4px_24px_0_rgba(56,189,248,.10)] hover:from-sky-400 hover:via-indigo-300 hover:to-green-200 transition-all duration-150">
                    <Zap className="h-5 w-5 animate-pulse text-black" />
                    Generate optimized post
                  </Button>
                </div>

                {/* Right Panel */}
                <div className="flex flex-col h-full space-y-3 rounded-xl border border-sky-800 bg-zinc-950/90 p-4 text-sm shadow-lg relative z-10">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium text-sky-300 text-xs">
                      <Sparkles className="h-4 w-4 animate-twinkle" />
                      AI Output Preview
                    </span>
                    <span className="rounded-full border border-indigo-600/20 bg-zinc-900/70 px-2 py-0.5 text-[11px] text-sky-400 font-medium">
                      LinkedIn • Storytelling • Medium
                    </span>
                  </div>

                  <div className="space-y-2 rounded-lg bg-gradient-to-tl from-zinc-900/90 via-zinc-800/90 to-sky-950/80 p-4 text-sm leading-relaxed text-zinc-200 border border-zinc-800/60 shadow-inner relative overflow-hidden">
                    <span className="absolute top-2 right-2 opacity-80">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full border border-zinc-700/50 bg-zinc-800/60 text-sky-300 hover:bg-sky-500/15 hover:border-sky-400 hover:text-sky-200"
                        tabIndex={-1}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <title>Copy</title>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-7 8V3m6 13V3a2 2 0 00-2-2h-4a2 2 0 00-2 2v16a2 2 0 002 2h4a2 2 0 002-2v-1" />
                        </svg>
                      </Button>
                    </span>
                    <p className="font-semibold text-white text-base">
                      From late-night commits to launch day nerves 🚀
                    </p>
                    <p>
                      For the past few months I&apos;ve been quietly building an AI copilot for social media — a way to turn messy notes and half-baked ideas into clear, platform-ready posts in seconds.
                    </p>
                    <p>
                      We&apos;re finally opening the beta for{" "}
                      <span className="font-semibold text-sky-300">Capto AI</span>.
                      If you&apos;re a builder, creator, or dev who wants to ship more content without living in a blank editor, I&apos;d love for you to try it.
                    </p>
                    <p className="text-zinc-400">
                      Comment &quot;CAPTO&quot; or send me a DM — I&apos;ll share an early access link. ⚡
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-[11px] text-zinc-500">
                    <span className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-sky-400" />Optimized for reach & clarity</span>
                    <span className="">Gemini • 3.2ms draft time</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Features
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Everything you need to go from a single sentence idea to a
                publish-ready thread, caption, or post.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                  <LayoutGrid className="h-3.5 w-3.5" />
                </div>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Platform-Optimized Content
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Generate posts tailored for LinkedIn, Instagram, or Twitter/X with
                structure, pacing, and formatting tuned to each platform.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Tone Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Choose Professional, Casual, Storytelling, or Educational tones
                that stay aligned with your brand without feeling robotic.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                  <Zap className="h-3.5 w-3.5" />
                </div>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  AI Writing Copilot
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Start from a raw thought or bullet list and let Capto shape it
                into clear hooks, body copy, and calls to action.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70 border-dashed">
              <CardHeader className="space-y-2 pb-3">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
                  <LineChart className="h-3.5 w-3.5" />
                </div>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Writing Style Personalization
                </CardTitle>
                <Badge className="w-fit rounded-full border border-purple-500/40 bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-100">
                  Coming soon
                </Badge>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                A future RAG layer learns from your past posts to match your
                cadence, phrasing, and narrative style automatically.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          id="how-it-works"
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                How it works
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Simple, guided steps from idea to publish-ready content.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-zinc-200">
                  1
                </span>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Enter your idea
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Paste a note, thought, or outline. Capto understands context and
                fills in the narrative gaps for you.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-zinc-200">
                  2
                </span>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Choose tone & platform
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Select where you&apos;re posting and how you want to sound. Capto
                adjusts formatting, hooks, and voice automatically.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-zinc-200">
                  3
                </span>
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Generate instantly
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Get multiple variations in seconds, tweak what matters, and ship
                more content without overthinking every word.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          id="use-cases"
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Use cases
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Designed for the people actually sharing what they build, learn,
                and ship.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-2">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Personal branding
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Show up consistently with thoughtful posts that sound like you,
                not a generic AI template.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-2">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Founders building in public
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Turn product updates, metrics, and learnings into transparent,
                engaging build-in-public posts.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-2">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Content creators & marketers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Repurpose long-form content into snackable threads, carousels,
                and captions across channels.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70 md:col-span-2">
              <CardHeader className="space-y-2 pb-2">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Developers sharing learning journeys
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Share daily learnings, code snippets, and side projects without
                spending an hour editing each post.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Future Vision Section */}
        <motion.section
          id="future"
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Future vision
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Capto AI today is a powerful generator. Tomorrow, it becomes your
                personal content brain.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Style-aware generation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                A RAG system that indexes your historical content so Capto can
                mirror your storytelling patterns, intros, and signature phrases
                with every new post.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Smart content suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                See prompts for what to share next based on what&apos;s performed
                well and gaps in your current narrative.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  Content history & library
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Searchable history of everything you&apos;ve shipped, with quick
                re-generation for new formats and platforms.
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-950/70">
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-50">
                  AI performance scoring
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-zinc-400">
                Get feedback loops on hooks, CTAs, and clarity so every new post
                edges closer to your top performers.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="border-zinc-800/80 bg-linear-to-r from-zinc-950 via-zinc-950 to-zinc-900">
            <CardContent className="flex flex-col items-start gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
              <div className="space-y-2">
                <h2 className="text-balance text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
                  Start generating better social media posts in seconds.
                </h2>
                <p className="max-w-xl text-xs text-zinc-400 sm:text-sm">
                  Join the early access list and be one of the first to use Capto
                  AI with Google Gemini-powered generation and upcoming
                  personalization.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] hover:bg-white" asChild>
                  <Link href={"/signup"}>
                    Get Started
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/90 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-xs font-semibold text-zinc-100">Capto AI</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>AI-powered social post generator</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <nav className="flex items-center gap-4">
              <Link
                href="#product"
                className="transition-colors hover:text-zinc-200"
              >
                Product
              </Link>
              <Link
                href="#features"
                className="transition-colors hover:text-zinc-200"
              >
                Features
              </Link>
              <Link
                href="https://github.com/Uneebbhat/capto-ai.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </Link>
            </nav>
            <span className="text-[10px] text-zinc-600">
              © {new Date().getFullYear()} Capto AI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
