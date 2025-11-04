"use client";

import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
        variant: {
          primary:
            "bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 text-white shadow-[0_12px_40px_rgba(56,189,248,0.35)] hover:shadow-[0_18px_60px_rgba(56,189,248,0.45)] hover:brightness-105",
          secondary:
            "bg-white text-slate-700 ring-1 ring-slate-200/70 backdrop-blur-xl hover:bg-slate-50 hover:text-slate-900 dark:bg-white/10 dark:text-sky-100 dark:ring-white/20 dark:hover:bg-white/15 dark:hover:text-white",
          outline:
            "border border-slate-300 text-slate-700 hover:border-sky-300 hover:text-sky-600 dark:border-white/20 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-100",
          ghost:
            "text-slate-700 hover:bg-slate-100/60 hover:text-slate-900 dark:text-sky-100 dark:hover:bg-white/5 dark:hover:text-white",
      },
      size: {
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        sm: "h-10 px-5 text-sm",
        icon: "h-12 w-12",
      },
      isGlow: {
        true: "after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:bg-sky-500/40 after:blur-3xl after:opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      isGlow: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isGlow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, isGlow }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
