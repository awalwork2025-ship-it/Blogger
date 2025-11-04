import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[color:var(--glass-surface)] p-6 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.25)]",
        className
      )}
      {...props}
    />
  );
}
