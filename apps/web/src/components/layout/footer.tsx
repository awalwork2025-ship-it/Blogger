import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "How it works", href: "#task-flow" },
      { label: "Referral program", href: "#referrals" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Support", href: "#contact" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/70 py-10 text-slate-600 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/40 dark:text-sky-100/70">
      <Container className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:items-start">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 text-white shadow-lg">
              <span className="text-xl font-bold">ß</span>
            </span>
            Blogging
          </Link>
          <p className="max-w-sm text-sm text-slate-600 dark:text-sky-100/70">
            Solana-native task-to-earn infrastructure engineered for growth teams, creators, and ambitious DAOs.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.heading} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
              {section.heading}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="mt-10 flex flex-col gap-4 border-t border-slate-200/60 pt-6 text-xs text-slate-500 transition-colors duration-300 dark:border-white/10 dark:text-sky-100/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Blogging Labs. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Security</Link>
        </div>
      </Container>
    </footer>
  );
}
