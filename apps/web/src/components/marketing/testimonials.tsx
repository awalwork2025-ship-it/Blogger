import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";

const testimonials = [
  {
    company: "Stealth DeFi Fund",
    name: "VP Growth",
    quote:
      "Blogging unlocks institutional-grade task execution. Campaign setup that used to take weeks now ships overnight.",
  },
  {
    company: "Streaming Collective",
    name: "Head of Community",
    quote:
      "Our creators finally have a sustainable reward loop. Approval queues dropped by 78% once we switched.",
  },
  {
    company: "Global Gaming DAO",
    name: "Operations Lead",
    quote:
      "Referral tiers, Solana payouts, and compliance dashboards—without inheriting protocol risk."
  },
];

export function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by elite growth teams"
          description="Full case studies are in production. Early partners are already scaling to 7-figure campaign volume."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlassPanel key={testimonial.company} className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-sky-100/80">
                <span className="uppercase tracking-[0.3em] text-slate-500 dark:text-sky-100/60">{testimonial.company}</span>
                <span>{testimonial.name}</span>
              </div>
              <p className="text-base text-slate-600 dark:text-sky-100/80">“{testimonial.quote}”</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-sky-100/50">Full quote coming soon</p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
