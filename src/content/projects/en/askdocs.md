---
name: AskDocs
description: RAG document Q&A that answers with receipts — streamed, citation-grounded answers over your own PDFs and docs.
thumbnail: ../../../assets/projects/askdocs.png
liveUrl: https://askdocs-zeta.vercel.app
sourceUrl: https://github.com/Olbioss/askdocs
tags: [Next.js, RAG, pgvector, Supabase, Drizzle, Gemini]
featured: true
order: 2
---

## Overview

AskDocs is a retrieval-augmented-generation workspace: upload PDF, DOCX, TXT, or
Markdown files — scanned PDFs included — and ask questions in natural language.
Every answer streams in grounded in your own documents, with numbered citations
that reveal the exact source passage, page number, and similarity score —
answers with receipts, never from the model's imagination.

## Highlights

- End-to-end ingestion pipeline: extract → chunk (~2,000 chars with 200 overlap)
  → embed with `gemini-embedding-001` (768d, L2-normalized) → store in pgvector
  behind an HNSW cosine index → top-5 retrieval per question
- OCR fallback for scanned PDFs: when the text layer is missing or
  artifact-thin (under ~30 chars/page), the raw PDF goes to Gemini 2.5 Flash
  multimodal for a per-page verbatim transcription — same vendor, no rendering
  step, and a failed OCR degrades gracefully instead of crashing ingestion
- Custom NDJSON streaming protocol on top of the Vercel AI SDK and Gemini 2.5
  Flash: citations stream first, then the text deltas
- Multi-tenant isolation enforced twice — user-scoped queries at the data layer
  *and* Postgres row-level security on tables and storage
- Supabase Auth (email + Google + GitHub OAuth) with a private, owner-scoped
  storage bucket for originals
- Per-user rate limiting (20 uploads/hour, 60 questions/hour) and a Vitest suite
  covering chunking, retrieval scoping, the stream protocol, the OCR
  heuristics, and every API route

## Tech notes

Next.js 16 App Router with React 19, Supabase Postgres reached through Drizzle
ORM. The whole stack is designed to run on free tiers: Vercel for hosting,
Supabase for data/auth/storage, and Gemini for generation and embeddings.
