import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, action, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto flex w-full flex-col gap-4", align === "center" ? "text-center" : "items-start text-left")}>
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-200/80">
        {eyebrow}
      </span>
      <h2 className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance text-lg text-slate-600 dark:text-sky-100/75 md:text-xl">
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}
