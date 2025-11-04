import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="absolute right-[5%] top-[35%] h-[320px] w-[320px] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute -left-[10%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
