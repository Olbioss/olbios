---
name: Zync
description: Real-time 1-on-1 chat with friend requests, typing indicators, reactions, and file sharing in a playful custom design — React, Socket.IO, MongoDB.
thumbnail: ../../../assets/projects/zync.png
liveUrl: https://zync-61s3.onrender.com
sourceUrl: https://github.com/Olbioss/chat-app
tags: [React, Socket.IO, Express, MongoDB, Zustand, JWT]
featured: false
order: 4
---

## Overview

Zync is a real-time 1-on-1 messenger where your contact list is earned, not
given: you find people, send a friend request, and only chat once they accept.
Messages, presence, typing, and reactions all update live over WebSockets —
wrapped in a bespoke "Marshmallow" identity instead of stock component styling.

## Highlights

- Four custom palettes — Blueberry, Bubblegum, Matcha, and Sorbet — each in
  light and dark, built as DaisyUI themes with Baloo 2 + Nunito typography
- Live typing indicators ("typing…" in the sidebar, an animated bubble in the
  chat) and per-message emoji reactions, both synced instantly over Socket.IO
- Full friend-request lifecycle — send, accept, decline, cancel — with chat,
  typing, and reactions gated to accepted contacts only
- File attachments up to 10 MB with download cards in the chat, plus a
  slide-in details drawer holding the contact's profile, shared photos, and a
  per-conversation attachments list
- JWT auth in httpOnly cookies, shared by both the REST API and the socket
  layer; image messages and avatars backed by Cloudinary
- Loading skeletons throughout; integration tests with Vitest and
  mongodb-memory-server against real Mongoose models

## Tech notes

Monorepo with a React 19 + TypeScript + Vite client (Zustand stores for auth,
chat, contacts, and theme), an Express + Socket.IO + Mongoose (MongoDB) server,
and a shared package of socket-event and model types used by both. In
production the Express process serves the built SPA — a single-process deploy
on Render's free tier, so give the first visit a moment to cold-start.
