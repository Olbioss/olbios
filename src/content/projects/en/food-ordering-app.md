---
name: Food Ordering App
description: Food delivery marketplace with city-based restaurant search, Stripe checkout, live order tracking, and a restaurant-owner dashboard.
thumbnail: ../../../assets/projects/food-ordering-app.png
liveUrl: https://food-ordering-app-client-npje.onrender.com
sourceUrl: https://github.com/Olbioss/food-ordering-app-client
tags: [React, Express, MongoDB, Auth0, Stripe, React Query]
featured: false
order: 5
---

## Overview

MernEats is a two-sided food-delivery marketplace with a freshly redesigned,
rounded super-app-style interface. Diners search restaurants by city — with
cuisine filters, sorting, and pagination — order through Stripe, and watch
their order move from *placed* to *delivered*. Restaurant owners get a
dashboard to manage their restaurant profile, menu, and incoming orders.

## Highlights

- Auth0 end to end: the SPA SDK handles login on the client while the API
  validates JWT bearer tokens on every protected route
- Stripe Checkout with a signature-verified webhook driving order state, so
  orders only confirm when payment actually clears
- Live order-status tracking through the full lifecycle: placed → paid → in
  progress → out for delivery → delivered
- Owner dashboard for restaurant setup, menu management, and order-status
  updates; reviews with ratings and owner replies
- Restaurant imagery uploaded through Cloudinary with multipart handling;
  branded loading states throughout the redesigned UI

## Tech notes

Split into two repositories: this entry links the React 18 + Vite + Tailwind
(shadcn/ui) client, and the Express + Mongoose (MongoDB) API lives in
[food-ordering-app-server](https://github.com/Olbioss/food-ordering-app-server).
React Query handles server-state caching on the client; both services deploy to
Render.
