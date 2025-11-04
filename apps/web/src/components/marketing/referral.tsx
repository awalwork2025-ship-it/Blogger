import { Gift, Sparkle, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";

const perks = [
  {
    icon: Trophy,
    title: "Tiered earnings",
    description: "Earn up to 20% of approved payouts with transparent tiering and instant ledger updates.",
  },
  {
    icon: Sparkle,
    title: "Momentum bonuses",
    description: "Unlock surge multipliers when referred contributors hit streaks or complete spotlight campaigns.",
  },
  {
    icon: Gift,
    title: "Custom rewards",
    description: "Drop branded collectibles or whitelists directly into referrer wallets as surprise moments.",
  },
];

export function ReferralSection() {
  return (
    <section className="py-24" id="referrals">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Referrals"
          title="Growth loops your investors will love"
          description="Design viral flywheels with configurable rewards, smart attribution, and payout automation."
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <GlassPanel className="space-y-6 bg-white/80 p-8 dark:bg-[#091326]/80">
            <h3 className="text-2xl font-semibold text-foreground dark:text-white">Operator dashboard</h3>
            <p className="text-base text-slate-600 dark:text-sky-100/75">
              Track referral velocity with predictive forecasting, anomaly alerts, and treasury-safe payout batching.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-sky-100/70">
              <div className="flex justify-between">
                <span>Referral conversion</span>
                <span className="font-semibold text-foreground dark:text-white">32% ↑</span>
              </div>
              <div className="flex justify-between">
                <span>Average approved earnings</span>
                <span className="font-semibold text-foreground dark:text-white">$184</span>
              </div>
              <div className="flex justify-between">
                <span>Instant payout ratio</span>
                <span className="font-semibold text-foreground dark:text-white">88%</span>
              </div>
            </div>
          </GlassPanel>
          <div className="grid gap-6 md:grid-cols-3">
            {perks.map((perk) => (
              <GlassPanel key={perk.title} className="p-6">
                <div className="rounded-2xl bg-sky-100 p-3 text-sky-600 dark:bg-white/10 dark:text-sky-200">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground dark:text-white">{perk.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-sky-100/75">{perk.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
