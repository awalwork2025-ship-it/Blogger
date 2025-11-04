import { ArrowRight, Clock3, Layers, ShieldCheck, Target, WalletMinimal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";

const flows = [
  {
    title: "Admin intelligence",
    description: "Curate campaigns, enforce policy, and approve payouts with laser precision.",
    steps: [
      {
        icon: Layers,
        title: "Blueprint tasks",
        detail: "Use templates for video views, time-on-page, or custom actions with dynamic pricing tiers.",
      },
      {
        icon: ShieldCheck,
        title: "Smart verification",
        detail: "AI vision checks, hCaptcha, and manual review escalations to guard against manipulation.",
      },
      {
        icon: WalletMinimal,
        title: "Authorize payouts",
        detail: "Trigger instant SPL transfers from secure custody with dual approval policies.",
      },
    ],
  },
  {
    title: "Contributor journey",
    description: "Delight users with cinematic dashboards and transparent earnings.",
    steps: [
      {
        icon: Target,
        title: "Discover tasks",
        detail: "Personalized board powered by on-chain reputation, preferences, and referral tiers.",
      },
      {
        icon: Clock3,
        title: "Capture proof",
        detail: "Precision timers, inline uploads, and wallet-signed submissions guarantee integrity.",
      },
      {
        icon: ArrowRight,
        title: "Earn instantly",
        detail: "Pending → approved → wallet credit loops with progress tracking and compliance flags.",
      },
    ],
  },
];

export function TaskFlow() {
  return (
    <section className="py-24" id="task-flow">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Workflow"
          title="Task execution engineered for trust"
          description="Every touchpoint is orchestrated for enterprise stability—from admin ops to contributor delight."
          align="left"
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {flows.map((flow) => (
            <GlassPanel key={flow.title} className="space-y-8 bg-gradient-to-b from-white/80 via-white/70 to-white/80 p-8 dark:from-white/6 dark:via-white/4 dark:to-white/6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground dark:text-white">{flow.title}</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-sky-100/75">{flow.description}</p>
              </div>
              <div className="space-y-6">
                {flow.steps.map((step) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="rounded-2xl bg-sky-100 p-3 text-sky-600 dark:bg-white/10 dark:text-sky-200">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-lg font-semibold text-foreground dark:text-white">{step.title}</p>
                      <p className="text-sm text-slate-600 dark:text-sky-100/75">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
