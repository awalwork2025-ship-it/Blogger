import { Zap, ShieldCheck, Gauge, Timer, UsersRound, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";

const features = [
  {
    icon: Zap,
    title: "Launch in hours",
    description:
      "Spin up curated Solana task boards with no code. Templates for paid views, deep engagement, and creator challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Proof-first moderation",
    description:
      "Hybrid AI + human review pipeline with fraud heuristics, duplicate detection, and tamper-proof audit trails.",
  },
  {
    icon: Gauge,
    title: "Realtime analytics",
    description:
      "Observe funnels, view distributions, and campaign velocity with enterprise-grade observability dashboards.",
  },
  {
    icon: Timer,
    title: "Precision timers",
    description:
      "Structured timers for 10s to 10m tasks with automated screenshots, browser focus checks, and penalty rules.",
  },
  {
    icon: UsersRound,
    title: "Referral multiplier",
    description:
      "Reward super connectors with configurable tiers. Transparent accrual, link tracking, and payout automation.",
  },
  {
    icon: Workflow,
    title: "Role-based orchestration",
    description:
      "Separate workspaces for admins, brands, and community managers with granular permissions and approvals.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24" id="platform-features">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Experience"
          title="An ultra-modern Web3 growth stack"
          description="Bring Binance-level execution to every community activation with dedicated surfaces for creators, contributors, and admins."
          align="left"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <GlassPanel key={feature.title} className="relative overflow-hidden p-8">
              <feature.icon className="h-10 w-10 text-sky-500 dark:text-sky-200" />
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-base text-slate-600 dark:text-sky-100/75">{feature.description}</p>
              <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-[var(--glass-border)]" />
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
