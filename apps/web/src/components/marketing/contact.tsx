"use client";

import { type ComponentProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="pb-24" id="contact">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Contact"
          title="Request a private walkthrough"
          description="Tell us about your growth goals and we'll architect a Solana-powered task economy tailored to your KPIs."
          align="left"
        />
        <GlassPanel className="p-8">
            {submitted ? (
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-foreground dark:text-white">Thank you</h3>
                <p className="text-sm text-slate-600 dark:text-sky-100/75">
                  Our partnerships team will reach out within 24 hours. Keep an eye on your inbox for the onboarding guide.
                </p>
              </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Work email" name="email" placeholder="you@company.com" type="email" required />
                <Field label="Company" name="company" placeholder="Blogging Labs" required />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Role" name="role" placeholder="Head of Growth" required />
                <Field label="Campaign volume" name="volume" placeholder="$100k per month" />
              </div>
              <div>
                <Field label="Goals" name="goals" placeholder="Share your KPIs and timelines" as="textarea" rows={4} />
              </div>
                <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-sky-100/75">
                  Blogging uses hCaptcha, SOC2-grade monitoring, and encrypted environment secrets. No private keys are ever collected.
              </div>
              <Button type="submit" size="lg" isGlow className="w-full">
                Secure my walkthrough
              </Button>
            </form>
          )}
        </GlassPanel>
      </Container>
    </section>
  );
}

interface FieldProps extends ComponentProps<"input"> {
  as?: "input" | "textarea";
  rows?: number;
  label: string;
}

function Field({ label, as = "input", className, rows = 3, ...props }: FieldProps) {
  const Component = as === "textarea" ? "textarea" : "input";
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-sky-100/70">
      <span className="font-semibold text-slate-800 dark:text-white/80">{label}</span>
      <Component
      className={cn(
        "rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-base text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-sky-100/50",
        className
      )}
        rows={as === "textarea" ? rows : undefined}
        {...props}
      />
    </label>
  );
}
