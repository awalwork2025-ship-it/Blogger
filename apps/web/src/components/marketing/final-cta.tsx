import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="pb-20">
      <Container>
        <GlassPanel className="flex flex-col items-center gap-6 bg-gradient-to-r from-sky-200/60 via-indigo-200/60 to-sky-100/50 p-10 text-center dark:from-sky-500/20 dark:via-indigo-500/20 dark:to-sky-400/10">
          <h2 className="text-3xl font-semibold text-foreground dark:text-white md:text-4xl">
            Ready to deploy your Web3 task marketplace?
          </h2>
          <p className="max-w-2xl text-base text-slate-600 dark:text-sky-100/75">
            Blogging is production-ready, investor-grade, and engineered for 100k+ active users. Let&apos;s build something audacious.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" isGlow>
              <Link href="/auth/register">Start now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Talk to sales</Link>
            </Button>
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}
