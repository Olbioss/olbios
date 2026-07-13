---
name: Zync
description: Arkadaşlık istekleri, yazıyor göstergeleri, tepkiler ve dosya paylaşımıyla gerçek zamanlı birebir sohbet; eğlenceli özel tasarım — React, Socket.IO, MongoDB.
thumbnail: ../../../assets/projects/zync.png
liveUrl: https://zync-61s3.onrender.com
sourceUrl: https://github.com/Olbioss/chat-app
tags: [React, Socket.IO, Express, MongoDB, Zustand, JWT]
featured: false
order: 4
---

## Genel bakış

Zync, kişi listesinin kazanıldığı bir gerçek zamanlı birebir mesajlaşma
uygulaması: insanları bulur, arkadaşlık isteği gönderir ve ancak kabul
ettiklerinde sohbet edersiniz. Mesajlar, çevrimiçi durumu, yazıyor bilgisi ve
tepkiler WebSocket üzerinden anlık güncellenir — hepsi hazır bileşen stilleri
yerine özgün bir "Marshmallow" kimliğine sarılı.

## Öne çıkanlar

- Dört özel palet — Blueberry, Bubblegum, Matcha ve Sorbet — her biri açık ve
  koyu modda; Baloo 2 + Nunito tipografisiyle özel DaisyUI temaları
- Canlı yazıyor göstergeleri (kenar çubuğunda "yazıyor…", sohbette animasyonlu
  baloncuk) ve mesaj başına emoji tepkileri; ikisi de Socket.IO ile anında
  senkronize
- Eksiksiz arkadaşlık isteği yaşam döngüsü — gönder, kabul et, reddet, iptal
  et — sohbet, yazıyor bilgisi ve tepkiler yalnızca kabul edilmiş kişilerle
- 10 MB'a kadar dosya ekleri ve sohbette indirme kartları; kişinin profili,
  paylaşılan fotoğraflar ve konuşma başına ek listesi için kayan detay
  çekmecesi
- REST API ile socket katmanının paylaştığı httpOnly çerezlerde JWT kimlik
  doğrulama; Cloudinary destekli görselli mesajlar ve avatarlar
- Her yerde yükleme iskeletleri; gerçek Mongoose modellerine karşı Vitest ve
  mongodb-memory-server ile entegrasyon testleri

## Teknik notlar

React 19 + TypeScript + Vite istemcisi (kimlik, sohbet, kişiler ve tema için
Zustand store'ları), Express + Socket.IO + Mongoose (MongoDB) sunucusu ve iki
tarafın da kullandığı socket olayı/model tiplerini barındıran paylaşımlı
paketten oluşan monorepo. Üretimde Express süreci derlenmiş SPA'yı da sunuyor —
Render'ın ücretsiz katmanında tek süreçli dağıtım, bu yüzden ilk ziyarette
soğuk başlatmaya biraz süre tanıyın.
