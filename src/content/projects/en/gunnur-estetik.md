---
name: Günnur Estetik
description: Production marketing and SEO site for a Turkish beauty clinic — static Astro with structured data, strict CSP, and auto-refreshed Google Reviews.
thumbnail: ../../../assets/projects/gunnur-estetik.png
liveUrl: https://www.igneliepilasyongunnur.com
tags: [Astro, Tailwind, SEO, Cloudflare Workers, GitHub Actions]
featured: true
order: 6
---

## Overview

A live production site built for a real client: a beauty clinic in Çorlu,
Turkey, operating since 1995 and specializing in FDA-approved needle
epilation. The site is written in Turkish and built local-SEO-first — its job is
to rank, load instantly, and convert visitors into consultations.

## Highlights

- Serious structured-data work: BeautySalon JSON-LD with geo data and an offer
  catalog, tuned sitemap priorities, `llms.txt` for AI crawlers, and a strict
  Content-Security-Policy with hashed styles
- A GitHub Action runs daily, fetches the clinic's Google Reviews through the
  Places API, and commits them into `testimonials.json` — testimonials stay
  fresh with no CMS and no manual editing
- Config-driven, white-label architecture: one config file plus a theme file
  re-brands the entire site for the next client
- Ten pages including a dynamic service route, an embla-carousel review
  slider, a WhatsApp click-to-chat button, and a live Google rating card

## Tech notes

Astro 6 static output with Tailwind CSS 4 and content collections, deployed to
the Cloudflare Workers edge. The repository is private at the client's request,
so there's no source link on this one.
