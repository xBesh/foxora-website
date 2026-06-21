import { motion } from "framer-motion";
import { ArrowRight, Download, Play, Code2, ServerCog, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/cn";

const CHAT_LINES = [
  { who: "you", text: "Launch my SaaS." },
  { who: "foxora", text: "On it — assembling the crew." },
];

const AGENT_HANDOFFS = [
  { name: "Planner", icon: ListChecksDot, color: "text-ink" },
  { name: "Coder", icon: Code2, color: "text-ink" },
  { name: "DevOps", icon: ServerCog, color: "text-ink" },
];

function ListChecksDot(props: React.SVGProps<SVGSVGElement>) {
  // Tiny helper to round out the line — keeps imports minimal.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      {...props}
    >
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </svg>
  );
}

function WordReveal({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.07,
          }}
          className="inline-block"
        >
          {w}
          {i < words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </span>
  );
}

function ProductMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[28px] bg-brand/20 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101012]/95 shadow-2xl backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            foxora · session
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            live
          </span>
        </div>

        {/* Conversation */}
        <div className="space-y-3 px-5 py-5">
          {CHAT_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.4 }}
              className={cn(
                "flex items-start gap-2.5",
                line.who === "you" ? "justify-end" : "justify-start",
              )}
            >
              {line.who === "foxora" && (
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand text-white shadow-[0_0_0_1px_rgba(249,115,22,0.5)]">
                  <Sparkles className="h-3 w-3" />
                </span>
              )}
              <div
                className={cn(
                  "rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
                  line.who === "you"
                    ? "bg-white/[0.06] text-ink"
                    : "bg-brand/10 text-ink",
                )}
              >
                {line.text}
              </div>
              {line.who === "you" && (
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.08] text-[10px] font-medium text-ink-secondary">
                  you
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Agent handoff row */}
        <div className="border-t border-white/5 bg-white/[0.02] px-5 py-3">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Delegated to
          </p>
          <div className="flex items-center gap-2">
            {AGENT_HANDOFFS.map(({ name, icon: Icon, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.7 + i * 0.25,
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px]"
              >
                <Icon className={cn("h-3 w-3", color)} />
                <span className="font-medium text-ink">{name}</span>
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.5 }}
              className="ml-auto text-[10px] uppercase tracking-[0.18em] text-ink-muted"
            >
              3 / 3
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Glow + grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-glow-orange"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-mask opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand/[0.06] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              Introducing Foxora 5.0
            </motion.div>

            <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
              <span className="block">
                <WordReveal text="Build your whole startup." />
              </span>
              <span className="block">
                <WordReveal text="In one app." delay={0.4} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg"
            >
              You&rsquo;re the founder. Your AI is everyone else — a crew that
              researches, builds, codes, and ships. From one app that never
              forgets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#download">
                <Button size="lg" className="gap-1.5">
                  <Download className="h-4 w-4" />
                  Download Foxora
                </Button>
              </a>
              <a href="#demo">
                <Button size="lg" variant="outline" className="gap-1.5">
                  <Play className="h-3.5 w-3.5" />
                  Watch it work
                  <ArrowRight className="h-3.5 w-3.5 opacity-70" />
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-5 text-xs text-ink-muted"
            >
              Free to start · No credit card · macOS, Windows &amp; Linux
            </motion.p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProductMock />
          </div>
        </div>
      </div>
    </section>
  );
}
