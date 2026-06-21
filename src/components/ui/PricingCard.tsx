import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/cn";
import type { Tier } from "../../lib/data";

type Props = {
  tier: Tier;
  delay?: number;
};

export function PricingCard({ tier, delay = 0 }: Props) {
  const isPro = !!tier.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "lift-on-hover relative flex h-full flex-col rounded-2xl border p-7 md:p-8",
        isPro
          ? "border-brand/40 bg-gradient-to-b from-brand/[0.07] to-white/[0.02] shadow-[0_30px_80px_-30px_rgba(249,115,22,0.45)] md:scale-[1.03]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20",
      )}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.6)]">
          {tier.badge}
        </span>
      )}

      <div>
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            isPro ? "text-brand" : "text-ink-muted",
          )}
        >
          {tier.name}
        </p>
        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            {tier.price}
          </span>
          <span className="text-sm text-ink-muted">/ {tier.per}</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {tier.blurb}
        </p>
      </div>

      <ul className="mt-7 space-y-3 border-t border-white/5 pt-6">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                isPro ? "bg-brand/20 text-brand" : "bg-white/[0.06] text-ink-secondary",
              )}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <Button
          variant={isPro ? "primary" : "outline"}
          size="md"
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </motion.div>
  );
}
