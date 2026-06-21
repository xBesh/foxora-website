import { useEffect, useState } from "react";
import { Download, Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/cn";

const links = [
  { label: "Crew", href: "#crew" },
  { label: "Use Cases", href: "#goals" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0b]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="group inline-flex items-center gap-2"
          aria-label="Foxora home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white shadow-[0_0_0_1px_rgba(249,115,22,0.5),0_6px_18px_-6px_rgba(249,115,22,0.6)]">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-brand">
            foxora
          </span>
          <span className="hidden rounded-full border border-brand/30 bg-brand/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand sm:inline-block">
            5.0
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#signin"
            className="text-sm text-ink-secondary transition-colors hover:text-ink"
          >
            Sign in
          </a>
          <a href="#download" className="inline-block">
            <Button size="sm" className="gap-1.5">
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-secondary transition-colors hover:text-ink md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0b]/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#signin"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink"
            >
              Sign in
            </a>
            <a href="#download" onClick={() => setOpen(false)} className="mt-2">
              <Button size="md" className="w-full gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Download
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
