import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_0_0_1px_rgba(249,115,22,0.6),0_10px_30px_-10px_rgba(249,115,22,0.55)] " +
    "hover:bg-brand-warm hover:shadow-[0_0_0_1px_rgba(251,146,60,0.7),0_14px_36px_-10px_rgba(249,115,22,0.6)] " +
    "hover:scale-[1.015]",
  ghost: "text-ink hover:text-white hover:bg-white/[0.04]",
  outline:
    "border border-white/15 bg-white/[0.02] text-ink hover:bg-white/[0.05] hover:border-white/25",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", size = "md", type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
});
