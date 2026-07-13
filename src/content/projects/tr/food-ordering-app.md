---
name: Yemek Sipariş Uygulaması
description: Şehre göre restoran arama, Stripe ödeme, canlı sipariş takibi ve restoran sahibi paneliyle yemek siparişi pazaryeri.
thumbnail: ../../../assets/projects/food-ordering-app.png
liveUrl: https://food-ordering-app-client-npje.onrender.com
sourceUrl: https://github.com/Olbioss/food-ordering-app-client
tags: [React, Express, MongoDB, Auth0, Stripe, React Query]
featured: false
order: 5
---

## Genel bakış

MernEats, yeni baştan tasarlanmış yumuşak hatlı süper-uygulama tarzı
arayüzüyle iki taraflı bir yemek siparişi pazaryeri. Müşteriler restoranları
şehre göre arar — mutfak filtreleri, sıralama ve sayfalama ile — Stripe
üzerinden sipariş verir ve siparişlerinin *verildi*'den *teslim edildi*'ye
ilerleyişini izler. Restoran sahipleri ise restoran profilini, menüyü ve gelen
siparişleri yönetecekleri bir panele sahip.

## Öne çıkanlar

- Uçtan uca Auth0: istemcide SPA SDK oturum açmayı yönetir, API ise korunan
  her route'ta JWT bearer token doğrular
- Sipariş durumunu imza doğrulamalı webhook'un yönettiği Stripe Checkout —
  siparişler yalnızca ödeme gerçekten geçtiğinde onaylanır
- Tam yaşam döngüsü boyunca canlı sipariş takibi: verildi → ödendi →
  hazırlanıyor → dağıtımda → teslim edildi
- Restoran kurulumu, menü yönetimi ve sipariş durumu güncellemeleri için
  sahip paneli; puanlı, sahibin yanıtlayabildiği yorumlar
- Multipart yüklemeyle Cloudinary üzerinden restoran görselleri; yenilenen
  arayüz genelinde markalı yükleme durumları

## Teknik notlar

İki depoya bölünmüş durumda: bu sayfa React 18 + Vite + Tailwind (shadcn/ui)
istemcisine bağlanıyor; Express + Mongoose (MongoDB) API ise
[food-ordering-app-server](https://github.com/Olbioss/food-ordering-app-server)
deposunda. İstemcide sunucu durumunu React Query önbellekliyor; iki servis de
Render'da çalışıyor.
