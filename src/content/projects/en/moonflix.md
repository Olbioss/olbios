---
name: MoonFlix
description: Movie & TV discovery with accounts, favorites, and reviews, wrapped in a lunar-noir design — React, Express, MongoDB, and the TMDB API.
thumbnail: ../../../assets/projects/moonflix.png
liveUrl: https://moonflix-avb1.onrender.com
sourceUrl: https://github.com/Olbioss/MoonFlix
tags: [React, TypeScript, Express, MongoDB, React Query, MUI]
featured: true
order: 3
---

## Overview

MoonFlix is a full-stack movie and TV discovery app with a nocturnal identity
of its own. Browse what's popular, dig into cast, trailers, and recommendations,
keep favorites, and write reviews — all inside "Selene", a lunar-noir design of
champagne gold on ink-blue night with engraved serif display type and a
TV-style rail layout.

## Highlights

- Immersive home: a full-bleed backdrop hero carousel that dissolves into the
  night background, with the first poster row riding over it
- Popular and top-rated movies and series with infinite "load more", plus
  debounced search across movies, TV, and people with inline skeletons
- Detail pages with cast, trailers, backdrops, recommendations, and user
  reviews; person pages with full filmographies
- JWT accounts: favorites with gold-glow cards, personal review history, and
  password update
- Considered chrome — icon nav rail on desktop, translucent top bar and drawer
  on mobile, gold "NEW" ribbons on releases under 30 days
- TanStack React Query v5 with a persisted cache; Vitest suites on both client
  and server

## Tech notes

React 19 + TypeScript + Vite client styled with MUI v6 on a bespoke theme
(Marcellus display over Archivo body, both self-hosted), with Zustand for UI
state. The Express + Mongoose (MongoDB) server is the only thing that talks to
TMDB — the client consumes `/api/v1/*` and gets augmented responses such as
`isFavorite`. Deployed on Render from a blueprint (API service + static
client), so give the first visit a moment to cold-start.
