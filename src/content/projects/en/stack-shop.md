---
name: Stack Shop
description: Multi-vendor e-commerce platform with a storefront, vendor dashboards, and an admin surface — TanStack Start, Stripe, and Postgres.
thumbnail: ../../../assets/projects/stack-shop.png
liveUrl: https://stack-shop-zeta.vercel.app
sourceUrl: https://github.com/Olbioss/stack-shop
tags: [TanStack Start, React, PostgreSQL, Drizzle, Stripe, Better Auth]
featured: true
order: 1
---

## Overview

Stack Shop is my largest project: a full multi-vendor commerce platform where one
deployment serves three distinct surfaces — the public storefront at `/`, a
per-vendor dashboard at `/shop/$slug`, and a platform admin panel at `/admin`.
Customers browse and buy, vendors run their own shops with their own staff, and
the platform operates everything above them.

## Highlights

- Command palette (⌘K / Ctrl+K) across the vendor and admin dashboards — jump to
  any page, run quick actions like theme and sign-out, and search orders,
  products, users, and shops, with "View all" rows that deep-link into filtered,
  URL-addressable lists
- Stripe checkout with a signature-verified webhook (`/api/webhooks/stripe`) and
  a multi-vendor transfer design for routing money to sellers
- Better Auth with two-factor authentication, Google/GitHub OAuth, and role-based
  route middleware (customer / vendor / admin) guarding each surface
- Full catalog model — product variants and attributes, categories, brands, and
  tags — plus cart, wishlist, coupons, reviews, and order tracking
- Transactional email built with React Email and delivered over Brevo SMTP;
  product imagery through Uploadcare

## Tech notes

Built on TanStack Start (React 19 with SSR and server functions) using TanStack
Router, Query, Form, and Table end to end — one type-safe data layer from route
loader to table cell. Neon Postgres via Drizzle ORM with a schema split per
domain. The interface is a Tailwind CSS 4 design-token system in OKLCH (light and
dark) over shadcn/ui and Radix, with a distinctive "editorial-wireframe" dashed
aesthetic, self-hosted Archivo and Space Mono type, cmdk for the command palette,
and Recharts for dashboard analytics. Tooling is Bun, Biome, and Vitest with
Testing Library.
