import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

type Props = {
  title: string;
  blurb: string;
  staffs: string[];
  delay?: number;
};

export function GoalCard({ title, blurb, staffs, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -2 }}
      className="lift-on-hover relative flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
          {title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {blurb}
        </p>
      </div>

      <div>
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Staffs
        </p>
        <div className="flex flex-wrap gap-1.5">
          {staffs.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-4">
        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full",
            "bg-brand/15 text-brand",
          )}
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
          Shipped
        </span>
      </div>
    </motion.div>
  );
}
