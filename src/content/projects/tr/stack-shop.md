---
name: Stack Shop
description: Vitrin, satıcı panelleri ve yönetici arayüzüyle çok satıcılı e-ticaret platformu — TanStack Start, Stripe ve Postgres.
thumbnail: ../../../assets/projects/stack-shop.png
liveUrl: https://stack-shop-zeta.vercel.app
sourceUrl: https://github.com/Olbioss/stack-shop
tags: [TanStack Start, React, PostgreSQL, Drizzle, Stripe, Better Auth]
featured: true
order: 1
---

## Genel bakış

Stack Shop en büyük projem: tek bir dağıtımın üç ayrı yüzeye hizmet verdiği
eksiksiz bir çok satıcılı ticaret platformu — `/` altında herkese açık vitrin,
`/shop/$slug` altında satıcıya özel panel ve `/admin` altında platform yönetim
paneli. Müşteriler gezinip satın alır, satıcılar kendi ekipleriyle kendi
mağazalarını işletir, platform ise hepsinin üzerinde her şeyi yönetir.

## Öne çıkanlar

- Satıcı ve yönetici panellerinde komut paleti (⌘K / Ctrl+K) — herhangi bir
  sayfaya atlayın, tema ve oturumu kapatma gibi hızlı işlemleri çalıştırın,
  siparişleri, ürünleri, kullanıcıları ve mağazaları arayın; "Tümünü gör"
  satırları filtrelenmiş, URL ile adreslenebilir listelere derin bağlantı verir
- İmza doğrulamalı webhook (`/api/webhooks/stripe`) ile Stripe ödeme akışı ve
  satıcılara para aktarımı için çok satıcılı transfer tasarımı
- İki faktörlü kimlik doğrulama, Google/GitHub OAuth ve her yüzeyi koruyan rol
  tabanlı route middleware (müşteri / satıcı / yönetici) ile Better Auth
- Eksiksiz katalog modeli — ürün varyantları ve öznitelikler, kategoriler,
  markalar ve etiketler — artı sepet, istek listesi, kuponlar, yorumlar ve
  sipariş takibi
- React Email ile hazırlanıp Brevo SMTP üzerinden gönderilen işlemsel
  e-postalar; Uploadcare ile ürün görselleri

## Teknik notlar

TanStack Start (SSR ve server functions ile React 19) üzerine, uçtan uca
TanStack Router, Query, Form ve Table ile kuruldu — route loader'dan tablo
hücresine tek bir tip güvenli veri katmanı. Drizzle ORM üzerinden Neon
Postgres, alan bazında bölünmüş şema. Arayüz, shadcn/ui ve Radix üzerinde OKLCH
tabanlı (açık ve koyu) bir Tailwind CSS 4 tasarım-token sistemi; kendine özgü
"editöryel tel kafes" kesikli çizgi estetiği, kendi kendine barındırılan Archivo
ve Space Mono yazı tipleri, komut paleti için cmdk ve pano analitiği için
Recharts ile kuruldu. Araçlar: Bun, Biome ve Testing Library ile Vitest.
