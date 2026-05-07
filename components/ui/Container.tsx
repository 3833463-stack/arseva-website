import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  dark,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        dark ? "bg-graphite-900 text-bone-100" : "bg-bone-100 text-ink",
        "py-20 md:py-28 lg:py-36",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium",
        "text-ink-muted",
        className,
      )}
    >
      <span className="h-px w-6 bg-current opacity-40" />
      {children}
    </span>
  );
}
