import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  headline: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
  className?: string;
  glow?: "none" | "orange" | "violet";
};

export function Section({
  id,
  eyebrow,
  headline,
  sub,
  children,
  className,
  glow = "none",
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden py-24 md:py-32",
        className,
      )}
    >
      {glow === "orange" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-glow-orange"
        />
      )}
      {glow === "violet" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-glow-violet"
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-mask opacity-50"
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && (
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            {headline}
          </h2>
          {sub && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-ink-secondary md:text-lg">
              {sub}
            </p>
          )}
        </motion.div>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
