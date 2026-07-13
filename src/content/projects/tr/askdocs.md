---
name: AskDocs
description: Kanıtıyla yanıt veren RAG belge soru-cevabı — kendi PDF ve belgeleriniz üzerinde akışlı, atıf temelli yanıtlar.
thumbnail: ../../../assets/projects/askdocs.png
liveUrl: https://askdocs-zeta.vercel.app
sourceUrl: https://github.com/Olbioss/askdocs
tags: [Next.js, RAG, pgvector, Supabase, Drizzle, Gemini]
featured: true
order: 2
---

## Genel bakış

AskDocs bir retrieval-augmented-generation çalışma alanı: PDF, DOCX, TXT veya
Markdown dosyalarınızı — taranmış PDF'ler dahil — yükleyin ve doğal dilde soru
sorun. Her yanıt kendi belgelerinize dayanarak akışla gelir; numaralı atıflar
tam kaynak pasajı, sayfa numarasını ve benzerlik puanını gösterir — kanıtıyla
yanıtlar, asla modelin hayal gücünden değil.

## Öne çıkanlar

- Uçtan uca içe aktarma hattı: çıkar → parçala (~2.000 karakter, 200 örtüşme)
  → `gemini-embedding-001` ile göm (768d, L2 normalize) → HNSW kosinüs
  indeksli pgvector'da sakla → soru başına en benzer 5 pasajı getir
- Taranmış PDF'ler için OCR yedeği: metin katmanı yoksa ya da sayfa başına ~30
  karakterin altındaysa, PDF olduğu gibi Gemini 2.5 Flash'ın çok modlu
  girişine gönderilir ve sayfa sayfa birebir metne dökülür — yeni sağlayıcı
  yok, ayrı görüntüleme adımı yok; OCR başarısız olursa içe aktarma çökmek
  yerine zarifçe geriler
- Vercel AI SDK ve Gemini 2.5 Flash üzerinde özel NDJSON akış protokolü: önce
  atıflar, ardından metin parçaları akar
- İki kez uygulanan çok kiracılı izolasyon — veri katmanında kullanıcı
  kapsamlı sorgular *ve* tablolar ile depolamada Postgres satır düzeyi
  güvenlik (RLS)
- Orijinal dosyalar için özel, sahibiyle sınırlı depolama alanıyla Supabase
  Auth (e-posta + Google + GitHub OAuth)
- Kullanıcı başına hız limiti (saatte 20 yükleme, 60 soru) ve parçalama,
  getirme kapsamı, akış protokolü, OCR sezgileri ile tüm API route'larını
  kapsayan Vitest test paketi

## Teknik notlar

React 19 ile Next.js 16 App Router, Drizzle ORM üzerinden Supabase Postgres.
Tüm yığın ücretsiz katmanlarda çalışacak şekilde tasarlandı: barındırma için
Vercel, veri/kimlik/depolama için Supabase, üretim ve gömme için Gemini.
