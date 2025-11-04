# Blogging – Web3 Task-to-Earn Platform

Premium Solana-powered growth platform where teams launch verifiable task campaigns, reward contributors, and run enterprise-grade referral programs.

## Monorepo Overview

- `apps/web` – Next.js 16 (App Router) client with TailwindCSS v4, ShadCN-ready UI primitives, Framer Motion animations, and Phantom wallet scaffolding.
- `apps/api` – Express.js + TypeScript REST API with hardened middleware stack, Prisma repositories, and MongoDB adapter.
- `packages/ui` – Shared UI tokens and soon reusable component exports.
- `packages/shared` – Domain models, Zod schemas, RBAC matrices, and Anchor IDL placeholders.
- `packages/auth` – JWT helpers, OTP utilities, and signature verification primitives.
- `packages/utils` – Formatting helpers and shared utilities.
- `packages/db` – Prisma schema, migration scripts, and MongoDB connector.
- `packages/tsconfig` / `packages/eslint-config` – Centralised TypeScript & linting presets for Turborepo tasks.

## Getting Started

```bash
pnpm install

# Start frontend and backend together
pnpm dev

# Or run individually
pnpm --filter @blogging/web dev
pnpm --filter api dev
```

> **Note:** Some Solana wallet adapters still publish React 18 peer ranges. With Next.js 16 (+ React 19) they emit warnings but operate normally. We will revisit once official React 19 builds ship.

## Environment Variables

- `apps/web/.env.local` – NEXT_PUBLIC_API_URL, NEXT_PUBLIC_SOLANA_CLUSTER, NEXT_PUBLIC_HCAPTCHA_KEY
- `apps/api/.env` – DATABASE_URL, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, SOLANA_RPC_URL, SOLANA_ADMIN_PRIVATE_KEY, REDIS_URL
- Use 1Password/Vault to store secrets. Never commit `.env*` files.

## Development Standards

- Follow component-driven architecture: colocate feature components under `apps/web/src/components` by domain (`marketing`, `dashboards`, `admin`).
- Leverage shared `packages/ui` primitives for consistent glassmorphism, gradients, and theme tokens.
- All new endpoints: request/response validation with `@/packages/shared` Zod schemas and RBAC checks.
- Prisma migrations live in `packages/db/prisma/migrations`; run `pnpm --filter @blogging/db prisma migrate dev` while iterating locally.
- CI ready scripts: `pnpm lint`, `pnpm build`, `pnpm test` (to be wired with Vitest/Jest + Playwright).

## Initial Landing Experience

- Ultra-modern hero with glassmorphism, animated stats, and enterprise CTAs.
- Feature grid, workflow diagrams, referral economics, testimonials placeholder, FAQ, and premium contact form.
- Dark/light theme ready via `next-themes` + Tailwind v4 tokens.

## Next Steps

1. Flesh out dashboard route groups (`app/(dashboard)`, `app/(admin)`) with shell layouts and protected routes.
2. Add API modules for auth, tasks, referrals, payouts; integrate Prisma + Solana service layer.
3. Expand `packages/ui` with charts, skeleton loaders, form controls, and avatar stacks.
4. Implement CI (GitHub Actions) running lint, type-check, tests, and preview deploys (Vercel + Render/Fly.io).
