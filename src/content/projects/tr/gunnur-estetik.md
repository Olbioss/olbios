---
name: Günnur Estetik
description: Çorlu'daki bir güzellik kliniği için yayında pazarlama ve SEO sitesi — yapılandırılmış veri, sıkı CSP ve otomatik yenilenen Google yorumlarıyla statik Astro.
thumbnail: ../../../assets/projects/gunnur-estetik.png
liveUrl: https://www.igneliepilasyongunnur.com
tags: [Astro, Tailwind, SEO, Cloudflare Workers, GitHub Actions]
featured: true
order: 6
---

## Genel bakış

Gerçek bir müşteri için yayında olan üretim sitesi: 1995'ten beri Çorlu'da
hizmet veren, FDA onaylı iğneli epilasyonda uzman bir güzellik kliniği. Site
yerel SEO öncelikli kuruldu — görevi aramalarda üst sıralara çıkmak, anında
yüklenmek ve ziyaretçiyi konsültasyona dönüştürmek.

## Öne çıkanlar

- Ciddi yapılandırılmış veri çalışması: coğrafi veriler ve hizmet kataloğuyla
  BeautySalon JSON-LD, ayarlanmış sitemap öncelikleri, yapay zekâ tarayıcıları
  için `llms.txt` ve hash'lenmiş stillerle sıkı Content-Security-Policy
- Her gün çalışan bir GitHub Action, kliniğin Google yorumlarını Places API
  üzerinden çekip `testimonials.json` dosyasına commit'liyor — referanslar
  CMS'siz ve elle düzenleme olmadan güncel kalıyor
- Yapılandırma temelli, white-label mimari: tek bir config dosyası ve tema
  dosyası tüm siteyi bir sonraki müşteri için yeniden markalıyor
- Dinamik hizmet sayfası dahil on sayfa, embla-carousel yorum kaydırıcısı,
  WhatsApp hızlı mesaj düğmesi ve canlı Google puan kartı

## Teknik notlar

Tailwind CSS 4 ve içerik koleksiyonlarıyla statik Astro 6 çıktısı, Cloudflare
Workers edge'inde yayında. Depo müşterinin isteğiyle gizli — bu yüzden bu
projede kaynak bağlantısı yok.
