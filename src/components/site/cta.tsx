import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useConcierge } from "@/components/concierge/concierge-context";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-300";

export function ConciergeButton({
  prompt,
  children,
  variant = "solid",
  className,
  ...props
}: ComponentProps<"button"> & {
  prompt?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const { open } = useConcierge();
  return (
    <button
      type="button"
      onClick={() => open(prompt)}
      className={cn(
        base,
        variant === "solid"
          ? "bg-gold text-primary-foreground hover:bg-gold-soft"
          : "border border-cream/25 text-cream hover:border-gold/60 hover:text-gold",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  children,
  variant = "outline",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        base,
        variant === "solid"
          ? "bg-gold text-primary-foreground hover:bg-gold-soft"
          : "border border-cream/25 text-cream hover:border-gold/60 hover:text-gold",
        className,
      )}
    >
      {children}
    </Link>
  );
}
