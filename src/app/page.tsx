import { ArrowRight, Github, Sparkles, Zap, LayoutGrid, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const platforms = ["LinkedIn", "Instagram", "Twitter / X"];
const tones = ["Professional", "Casual", "Storytelling", "Educational"];
const lengths = ["Short", "Medium", "Long"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1f2937_0,_transparent_50%),_radial-gradient(circle_at_bottom,_#111827_0,_transparent_55%)] opacity-70" />

      <header className="border-b border-zinc-800/80 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 text-xs font-semibold text-black shadow-lg shadow-sky-500/40">
              CA
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-50">
              Capto AI
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-400 sm:flex">
            <a href="#product" className="transition-colors hover:text-zinc-100">
              Product
            </a>
            <a href="#features" className="transition-colors hover:text-zinc-100">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-zinc-100">
              How it works
            </a>
            <a href="#use-cases" className="transition-colors hover:text-zinc-100">
              Use cases
            </a>
            <a href="#future" className="transition-colors hover:text-zinc-100">
              Future vision
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden border-zinc-800 bg-transparent text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 sm:inline-flex"
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-zinc-50 px-4 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] transition hover:bg-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center"
        >
          <div className="space-y-6">
            <Badge className="flex w-fit items-center gap-2 rounded-full border border-sky-500/40 bg-zinc-900/80 px-3 py-1 text-[11px] font-medium text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.45)]">
              <Sparkles className="h-3 w-3" />
              Powered by Google Gemini
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                Turn ideas into{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300 bg-clip-text text-transparent">
                  high-performing social posts
                </span>{" "}
                with AI.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Capto AI helps creators, founders, developers, and personal brands
                transform rough ideas into polished, platform-optimized social
                content. Choose your platform, tone, and length—Capto handles the
                rest.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] transition hover:bg-white">
                Start Generating Posts
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-zinc-800 bg-zinc-950/60 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900"
              >
                See How It Works
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500">
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
          <section
            id="product"
            className="relative"
            aria-label="Capto AI demo"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-transparent opacity-70 blur-3xl" />
            <Card className="relative overflow-hidden border-zinc-800/80 bg-zinc-950/70 shadow-[0_18px_80px_rgba(0,0,0,0.75)]">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-gradient-to-b from-white/5 via-white/[0.01] to-transparent opacity-80" />
              <CardHeader className="border-b border-zinc-800/80 pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-zinc-100">
                    Social Post Generator
                  </CardTitle>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
                    Live preview
                  </span>
                </div>
                <CardDescription className="text-xs text-zinc-400">
                  Describe your idea, pick where you&apos;re posting, and Capto AI
                  writes the rest.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5 pt-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-zinc-300">
                      Post Idea
                    </label>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs text-zinc-200 shadow-inner shadow-zinc-900/80">
                      Share a behind-the-scenes story about building my SaaS and
                      invite people to join the beta.
                    </div>
                  </div>
                  <div className="grid gap-3 text-[11px] sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="font-medium text-zinc-300">Platform</label>
                      <div className="flex flex-wrap gap-1.5">
                        {platforms.map((platform) => (
                          <button
                            key={platform}
                            className={`rounded-full border px-2.5 py-1 text-[11px] ${
                              platform === "LinkedIn"
                                ? "border-sky-500/70 bg-sky-500/10 text-sky-100"
                                : "border-zinc-700/80 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
                            }`}
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-medium text-zinc-300">Tone</label>
                      <div className="flex flex-wrap gap-1.5">
                        {tones.map((tone) => (
                          <button
                            key={tone}
                            className={`rounded-full border px-2.5 py-1 text-[11px] ${
                              tone === "Storytelling"
                                ? "border-indigo-400/80 bg-indigo-500/10 text-indigo-100"
                                : "border-zinc-700/80 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
                            }`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <label className="font-medium text-zinc-300">Length</label>
                    <div className="flex gap-1.5">
                      {lengths.map((length) => (
                        <button
                          key={length}
                          className={`flex-1 rounded-full border px-2.5 py-1 ${
                            length === "Medium"
                              ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100"
                              : "border-zinc-700/80 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
                          }`}
                        >
                          {length}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-3 py-2 text-xs font-semibold text-black shadow-[0_15px_50px_rgba(56,189,248,0.55)] hover:bg-sky-400">
                    Generate optimized post
                    <Zap className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 text-xs">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-300">
                      <Sparkles className="h-3 w-3 text-sky-400" />
                      AI Output Preview
                    </span>
                    <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-500">
                      LinkedIn • Storytelling • Medium
                    </span>
                  </div>
                  <div className="space-y-2 rounded-lg bg-zinc-900/70 p-3 text-[11px] leading-relaxed text-zinc-200">
                    <p className="font-medium text-zinc-100">
                      From late-night commits to launch day nerves 🚀
                    </p>
                    <p>
                      For the past few months I&apos;ve been quietly building an
                      AI copilot for social media — a way to turn messy notes and
                      half-baked ideas into clear, platform-ready posts in
                      seconds.
                    </p>
                    <p>
                      We&apos;re finally opening the beta for{" "}
                      <span className="font-medium text-sky-300">Capto AI</span>.
                      If you&apos;re a builder, creator, or dev who wants to ship
                      more content without living in a blank editor, I&apos;d love
                      for you to try it.
                    </p>
                    <p className="text-zinc-400">
                      Comment &quot;CAPTO&quot; or send me a DM — I&apos;ll share
                      an early access link. ⚡
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-zinc-500">
                    <span>Optimized for reach & clarity</span>
                    <span>Gemini • 3.2ms draft time</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </section>

        {/* Features Section */}
        <section id="features" className="space-y-6">
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
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="space-y-6">
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
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="space-y-6">
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
        </section>

        {/* Future Vision Section */}
        <section id="future" className="space-y-6">
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
        </section>

        {/* Final CTA Section */}
        <section className="space-y-6">
          <Card className="border-zinc-800/80 bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900">
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
              <div className="flex flex-shrink-0 flex-wrap gap-3">
                <Button className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(250,250,250,0.35)] hover:bg-white">
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border-zinc-700 bg-zinc-950/60 px-4 py-2 text-[11px] font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Join waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
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
              <a
                href="#product"
                className="transition-colors hover:text-zinc-200"
              >
                Product
              </a>
              <a
                href="#features"
                className="transition-colors hover:text-zinc-200"
              >
                Features
              </a>
              <a
                href="#future"
                className="transition-colors hover:text-zinc-200"
              >
                Roadmap
              </a>
              <a
                href="https://github.com/your-org/capto-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
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
