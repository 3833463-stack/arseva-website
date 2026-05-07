"use client";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "champagne" | "outline-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-swift will-change-transform select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-graphite-900 text-bone-100 hover:bg-graphite-800 active:scale-[0.98] shadow-soft",
  secondary:
    "bg-bone-100 text-ink hover:bg-bone-200 bezel active:scale-[0.98]",
  ghost: "text-ink hover:bg-ink/5",
  champagne:
    "bg-champagne-500 text-graphite-900 hover:bg-champagne-400 active:scale-[0.98] shadow-soft",
  "outline-dark":
    "border border-white/15 text-bone-100 hover:bg-white/5 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", href, external, className, children, iconLeft, iconRight, onClick, ...props },
  ref,
) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const inner = (
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    );
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className={cls} onClick={onClick as any}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick as any}>
        {inner}
      </Link>
    );
  }
  return (
    <button ref={ref} className={cls} onClick={onClick} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
});
