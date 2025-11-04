import { Hero } from "@/components/marketing/hero";
import { Stats } from "@/components/marketing/stats";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { TaskFlow } from "@/components/marketing/task-flow";
import { ReferralSection } from "@/components/marketing/referral";
import { Testimonials } from "@/components/marketing/testimonials";
import { FAQ } from "@/components/marketing/faq";
import { ContactSection } from "@/components/marketing/contact";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeatureGrid />
      <TaskFlow />
      <ReferralSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
