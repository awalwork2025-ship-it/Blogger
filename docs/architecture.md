## Overview

The Blogging Web3 Task-to-Earn platform is organized as a modular Turborepo monorepo that separates the public-facing Next.js application, the backend REST API, and a set of shared packages for UI, configuration, and business logic. The architecture prioritizes scalability, developer velocity, and consistent premium user experience across all surfaces.

## Monorepo Structure

- `apps/web`: Next.js 14 App Router client, hosting the landing page, authenticated dashboard, and admin UI.
- `apps/api`: Express.js + TypeScript REST API exposing task, user, and payout endpoints.
- `packages/ui`: ShadCN-based component library with Tailwind design tokens, glassmorphism utilities, and motion primitives.
- `packages/config`: Centralized ESLint, Prettier, Tailwind, and TS configurations.
- `packages/shared`: Cross-app domain models, DTOs, validation schemas (Zod), and RBAC policy definitions.
- `packages/db`: Prisma ORM client, schema, and database migrations targeting MongoDB (via Prisma Mongo connector).
- `packages/auth`: Auth helpers for JWT issuance, verification, 2FA hooks, and Solana wallet signatures.
- `packages/utils`: Logging, telemetry, caching adapters (Redis), and common helpers.

## Frontend Architecture (`apps/web`)

- **Rendering**: Next.js App Router with React Server Components for static/SSR sections and Client Components for interactive dashboards.
- **Styling**: TailwindCSS with CSS variables supporting light/dark themes, enhanced by glassmorphism utilities and gradient presets.
- **Animations**: Framer Motion composition layer, micro-interactions implemented via reusable animation variants.
- **State/Data**: TanStack Query for API data, Zustand for client state (wallet connection, timers), and WebSocket subscription hooks for real-time task updates.
- **Forms & Validation**: React Hook Form + Zod resolvers, integrated with ShadCN form components.
- **Internationalization**: Next-intl ready scaffold to scale to multi-language marketing content.

### Frontend Directory Layout

```
apps/web
├─ app
│  ├─ (marketing)        // Landing page routes
│  ├─ (dashboard)        // Authenticated user dashboard layout
│  ├─ (admin)            // Admin panel routes
│  ├─ api                // Route handlers (Next RSC actions)
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ layout             // Shells, nav bars, footers
│  ├─ surface            // Cards, glass panes, panels
│  ├─ inputs             // Forms, buttons, toggles
│  ├─ data-display       // Tables, charts, badges
│  ├─ feedback           // Toasts, skeletons, loaders
│  ├─ marketing          // Hero, testimonials, FAQ slices
│  └─ dashboards         // Stats grid, token distribution chart
├─ lib                   // Hooks, utilities, theme providers
├─ providers             // Query, theme, wallet providers
└─ styles                // Tailwind base, tokens, motion configs
```

### Reusable Component System

**Foundations**
- `ThemeProvider`: toggles dark/light modes, reads persisted preference.
- `MotionWrapper`: standardizes easing, transition durations, and GPU-accelerated animations.
- `GlassPanel`: base translucent surface with blur, border glows, and optional gradient overlay.
- `GradientText`/`GradientBorder`: primary branding accents.

**Layout Shells**
- `LandingLayout`: sticky premium navbar, gradient hero background, mobile-first responsive stacking.
- `DashboardShell`: collapsible sidebar, top status bar with wallet + notifications, mobile bottom nav variant.
- `AdminShell`: dense data-focused layout with audit logs and quick action tiles.

**Navigation Components**
- `PrimaryNav`, `MobileNavDrawer`, `Breadcrumbs`, `TabSwitcher`.

**Inputs & Forms**
- `CommandSelect` (tasks filter), `TokenAmountInput`, `DualActionButton` (CTA with connect wallet + register), `FileDropzone` for proof submissions, `TimerControls` for task tracking.

**Data Visualization**
- `StatsCounter` with animated numbers.
- `SparklineChart`, `DistributionDonut`, `ActivityTimeline` leveraging Recharts or Tremor.
- `ProgressBadge` for task statuses.

**Feedback & System**
- `SkeletonCard`, `ShimmerButton`, `Toaster` with premium glass styling, `ErrorBoundary` pages.

**Marketing Sections**
- `HeroShowcase`: 3D gradient, floating Solana token motif, call-to-action buttons.
- `TrustedBy`: logos placeholder with reflective effects.
- `TestimonialsCarousel`: placeholder cards.
- `FaqAccordion`, `ContactSection`, `Footer` with social proof.

## Backend Architecture (`apps/api`)

- Layered modules: `routes` → `controllers` → `services` → `repositories`.
- Dependency injection via lightweight container (Awilix or TSyringe).
- Prisma-based repositories targeting MongoDB, with caching layer (Redis) for leaderboard/stats.
- Authentication middleware stack: rate limiting, JWT verification, RBAC scope checks, 2FA challenge hooks.
- Task workflow engine handling admin and user-created tasks, statuses, timers, and proof validation pipelines.
- Webhook/event system to communicate with Solana processor for token transfers.

## Blockchain Integration

- Solana programs managed via Anchor; program IDLs stored in `packages/shared`.
- Backend transaction service signs and submits token transfers using admin-held authority key (stored in secure vault env).
- Frontend wallet adapter integrates Phantom, storing verified signatures in API for audit trail.

## Security Controls

- JWTs with rotating signing keys (JWK set) and short-lived access tokens + refresh flow.
- RBAC roles: `user`, `creator`, `admin`, `superadmin`, with permission matrix defined in `packages/shared`.
- Input validation via Zod schemas; anti-bot measures (hCaptcha) on public forms.
- API rate limiting, audit logging, suspicious activity alerts.

## Deployment & CI/CD

- Vercel for `apps/web` (preview + production environments).
- Render or Fly.io for `apps/api` with horizontal scaling, Redis add-on, and MongoDB Atlas cluster.
- GitHub Actions pipeline running lint, type-check, unit tests, e2e tests (Playwright) before deploy.
- Turborepo caching accelerating CI builds across apps.

## Landing Page Concept

- Above-the-fold hero with animated gradient background, Solana-glass token stack, dual CTA: `Get Started` & `Connect Wallet`.
- Social proof stripe with stats counters (users, tasks completed).
- Feature highlights using `GlassPanel` components with motion reveal.
- Testimonials placeholder with frosted glass cards.
- FAQ accordion, newsletter/contact form with hCaptcha, premium footer with subtle particle animation.

This architecture blueprint informs the initial component scaffolding and landing page build-out while leaving room for iterative enhancements across dashboard, task system, and admin portal.
