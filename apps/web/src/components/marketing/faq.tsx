import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassPanel } from "@/components/ui/glass-panel";

const faqs = [
  {
    question: "How fast can we launch a campaign?",
    answer:
      "Most teams deploy their first task board in under 24 hours. Import your brief, configure reward tiers, define verification rules, and Blogging handles the rest.",
  },
  {
    question: "Do contributors need a Solana wallet?",
    answer:
      "Contributors authenticate via email and can connect Phantom or Backpack once they are ready to withdraw. Non-custodial wallets stay in full control of funds.",
  },
  {
    question: "What security features are in place?",
    answer:
      "JWT + refresh flow, RBAC, 2FA-ready sessions, anomaly detection, multi-sig payout approvals, and full audit logging are standard.",
  },
  {
    question: "Can brands pay in fiat?",
    answer:
      "Yes. Brands settle in USD to the admin treasury. Blogging automatically converts to the platform's SPL token before releasing payouts.",
  },
  {
    question: "How do referrals work?",
    answer:
      "Invite links track attribution end-to-end. Approved earnings trigger 20% rewards by default, with advanced tiers configurable per campaign.",
  },
];

export function FAQ() {
  return (
    <section className="py-24" id="faq">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers for operators"
          description="We partner with compliance teams and investor-backed founders to deliver secure, scalable task economies."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <GlassPanel key={faq.question} className="p-6">
              <h4 className="text-lg font-semibold text-foreground dark:text-white">{faq.question}</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-sky-100/75">{faq.answer}</p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
