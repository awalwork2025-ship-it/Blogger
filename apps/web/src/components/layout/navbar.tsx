"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#task-flow", label: "Task Flow" },
  { href: "#referrals", label: "Referrals" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-200/60 bg-white/80 px-4 py-3 text-slate-900 shadow-[0_18px_48px_rgba(172,184,199,0.35)] transition-colors duration-300 dark:border-white/10 dark:bg-[#061020]/80 dark:text-white md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 text-white shadow-lg">
            <span className="text-xl font-bold">ß</span>
          </span>
          <span>Blogging</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-sky-100/80 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              className="relative transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
              >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="secondary" className="hidden md:inline-flex" asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button asChild isGlow>
            <Link href="/auth/register">Create Account</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
