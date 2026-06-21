import { motion } from "framer-motion";
import { Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";

type Props = {
  name: string;
  blurb: string;
  icon: LucideIcon;
  variant?: "lead" | "specialist";
  delay?: number;
};

export function AgentCard({
  name,
  blurb,
  icon: Icon,
  variant = "specialist",
  delay = 0,
}: Props) {
  const isLead = variant === "lead";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      whileHover={isLead ? undefined : { y: -2 }}
      className={cn(
        "lift-on-hover group relative flex flex-col gap-3 rounded-2xl border p-5",
        isLead
          ? "border-brand/30 bg-brand/[0.04] shadow-[0_0_0_1px_rgba(249,115,22,0.18),0_30px_80px_-30px_rgba(249,115,22,0.4)] md:p-7"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
      )}
    >
      {isLead && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-60"
        />
      )}

      <div className="relative flex items-center gap-3">
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg",
            isLead
              ? "bg-brand text-white shadow-[0_0_0_1px_rgba(249,115,22,0.6),0_8px_24px_-6px_rgba(249,115,22,0.5)]"
              : "bg-white/[0.05] text-ink ring-1 ring-inset ring-white/10 group-hover:text-white",
          )}
        >
          {isLead ? <Sparkles className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
        </div>
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-sm font-medium",
              isLead ? "text-white" : "text-ink",
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              "truncate text-xs",
              isLead ? "text-brand/80" : "text-ink-muted",
            )}
          >
            {blurb}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
