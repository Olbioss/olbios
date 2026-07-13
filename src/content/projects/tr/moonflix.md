---
name: MoonFlix
description: Hesap, favoriler ve yorumlarla film & dizi keşfi; ay ışığı temalı noir bir tasarım — React, Express, MongoDB ve TMDB API.
thumbnail: ../../../assets/projects/moonflix.png
liveUrl: https://moonflix-avb1.onrender.com
sourceUrl: https://github.com/Olbioss/MoonFlix
tags: [React, TypeScript, Express, MongoDB, React Query, MUI]
featured: true
order: 3
---

## Genel bakış

MoonFlix, kendine ait gece kimliği olan tam yığın bir film ve dizi keşif
uygulaması. Popüler yapımlara göz atın; oyuncu kadrosuna, fragmanlara ve
önerilere inin; favoriler biriktirin ve yorum yazın — hepsi "Selene" içinde:
mürekkep mavisi gecenin üzerinde şampanya altını, kazınmış serif başlık
tipografisi ve TV tarzı ray düzeniyle lunar-noir bir tasarım.

## Öne çıkanlar

- Sürükleyici ana sayfa: gece arka planına karışan tam ekran backdrop hero
  karuseli ve üzerinden akan ilk afiş sırası
- Sonsuz "daha fazla yükle" ile popüler ve en yüksek puanlı film/diziler;
  film, dizi ve kişiler genelinde debounce'lu arama ve satır içi iskeletler
- Oyuncu kadrosu, fragmanlar, backdrop'lar, öneriler ve kullanıcı yorumlarıyla
  detay sayfaları; filmografili kişi sayfaları
- JWT hesaplar: altın parıltılı kartlarla favoriler, kişisel yorum geçmişi ve
  parola güncelleme
- Özenli arayüz — masaüstünde ikon navigasyon rayı, mobilde yarı saydam üst
  çubuk ve çekmece, 30 günden yeni yapımlarda altın "NEW" kurdeleleri
- Kalıcı önbellekli TanStack React Query v5; istemci ve sunucuda Vitest
  testleri

## Teknik notlar

Özel bir tema üzerinde MUI v6 ile stillenmiş React 19 + TypeScript + Vite
istemcisi (başlıklar Marcellus, gövde Archivo; ikisi de self-hosted) ve UI
durumu için Zustand. TMDB ile yalnızca Express + Mongoose (MongoDB) sunucusu
konuşuyor — istemci `/api/v1/*` uçlarını tüketiyor ve `isFavorite` gibi
zenginleştirilmiş yanıtlar alıyor. Render'da blueprint ile dağıtıldı (API
servisi + statik istemci); ilk ziyarette soğuk başlatmaya biraz süre tanıyın.
