import { Sparkles, Github, Twitter, MessageCircle } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "#download" },
      { label: "Docs", href: "#docs" },
      { label: "Pricing", href: "#pricing" },
      { label: "Brand", href: "#brand" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Changelog", href: "#changelog" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Research", href: "#research" },
      { label: "Den paper (PDF)", href: "#den-paper" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers · 3 open", href: "#careers" },
      { label: "Security", href: "#security" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0b]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2" aria-label="Foxora home">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white shadow-[0_0_0_1px_rgba(249,115,22,0.5),0_6px_18px_-6px_rgba(249,115,22,0.6)]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-brand">foxora</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-secondary">
              Build with Foxora — your virtual AI workforce. A crew of 17 specialists that
              researches, builds, codes, and ships.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "GitHub", icon: Github, href: "#github" },
                { label: "Twitter", icon: Twitter, href: "#twitter" },
                { label: "Discord", icon: MessageCircle, href: "#discord" },
              ].map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-secondary transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink-secondary transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Foxora — build your whole startup.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="transition-colors hover:text-ink-secondary">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-ink-secondary">
              Terms
            </a>
            <a href="#cookies" className="transition-colors hover:text-ink-secondary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
