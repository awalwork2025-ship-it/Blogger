"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";

const badges = [
  { title: "Audit ready", subtitle: "SOC2 controls" },
  { title: "Solana native", subtitle: "SPL token payouts" },
  { title: "<2s", subtitle: "Average task match" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-24" id="platform">
      <Container className="relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-10">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-sm text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-sky-100/80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Enterprise-grade Web3 growth engine
          </motion.div>
          <motion.h1
            className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Activate global communities with Solana task-to-earn experiences.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-slate-600 dark:text-sky-100/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Blogging orchestrates verified micro-tasks, proofs, and automated payouts so your team can launch campaigns in minutes—not months.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Button size="lg" isGlow asChild>
              <Link href="/auth/register">Launch your campaign</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Book a strategy call</Link>
            </Button>
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.title}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-sm text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-sky-100/75"
              >
                <p className="font-semibold text-foreground dark:text-white">{badge.title}</p>
                <p>{badge.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-transparent blur-3xl" />
          <GlassPanel className="w-full max-w-xl space-y-6 bg-gradient-to-b from-white/80 via-white/70 to-white/60 px-8 py-10 dark:from-white/10 dark:via-white/5 dark:to-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-sky-100/50">Live campaigns</p>
                <p className="text-2xl font-semibold text-foreground dark:text-white">+214</p>
              </div>
              <div className="rounded-full bg-slate-200/90 px-4 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-sky-100/80">
                Auto-verified
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-sky-100/70">
              <div className="flex items-center justify-between">
                <span>Instant wallet payouts</span>
                <span className="font-semibold text-foreground dark:text-white">97.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Human-reviewed proofs</span>
                <span className="font-semibold text-foreground dark:text-white">12,840</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Referral conversion uplift</span>
                <span className="font-semibold text-foreground dark:text-white">4.6x</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/globe.svg" alt="Solana globe" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-sky-100/50">New launch</p>
                <p className="font-semibold text-foreground dark:text-white">Creator Studio in public beta</p>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </Container>
    </section>
  );
}
