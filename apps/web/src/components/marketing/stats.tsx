"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";

const stats = [
  {
    label: "Verified contributors",
    end: 18240,
    suffix: "+",
  },
  {
    label: "Campaign completion rate",
    end: 96,
    suffix: "%",
  },
  {
    label: "Average approval time",
    end: 4,
    suffix: " mins",
  },
  {
    label: "Referral uplift",
    end: 5,
    suffix: "x",
  },
];

function Counter({ end, suffix }: { end: number; suffix?: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (value) => Math.round(value).toLocaleString());

  useEffect(() => {
    const controls = animate(motionValue, end, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [end, motionValue]);

  return (
    <motion.span className="text-4xl font-semibold text-foreground dark:text-white md:text-5xl">
      {rounded}
      {suffix}
    </motion.span>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-12 pb-24">
      <Container>
        <GlassPanel className="grid gap-8 bg-white/70 px-8 py-12 text-slate-700 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-lg dark:bg-[#0b172b]/80 dark:text-sky-100 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <Counter end={stat.end} suffix={stat.suffix} />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-sky-100/60">
                {stat.label}
              </p>
            </div>
          ))}
        </GlassPanel>
      </Container>
    </section>
  );
}
