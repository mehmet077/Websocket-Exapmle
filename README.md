# 📱 WhatsApp Tarzı WebSocket Chat Uygulaması

Bu proje, **WebSocket teknolojisini** kullanarak gerçek zamanlı çalışan,
**WhatsApp benzeri arayüze sahip** bir chat uygulamasının örnek (demo) çalışmasıdır.

Tek bir HTML dosyası üzerinde **iki farklı telefon (kullanıcı) simülasyonu**
bulunur ve bu telefonlar aynı WebSocket sunucusuna bağlanarak
**anlık mesajlaşma** yapar.

---

# 🔌 WebSocket Nedir? (Detaylı Anlatım)

WebSocket, istemci (client) ile sunucu (server) arasında  
**tek bir bağlantı üzerinden, çift yönlü ve sürekli iletişim** kurulmasını
sağlayan bir protokoldür.

HTTP’den farklı olarak bağlantı **kapanmaz** ve taraflar istedikleri zaman
birbirlerine veri gönderebilir.

---

## ❌ HTTP (Klasik Yapı)

```text
Client → Request → Server
Server → Response → Client
(bağlantı kapanır)
Her istekte yeni bağlantı açılır

Sürekli veri almak için polling gerekir

Gerçek zamanlı uygulamalar için verimsizdir

✅ WebSocket (Gerçek Zamanlı Yapı)
Client ⇄ Server
(bağlantı sürekli açık)
Tek bağlantı

Düşük gecikme

Sunucu client’a kendiliğinden veri gönderebilir

Gerçek zamanlı sistemler için idealdir

🔄 WebSocket Nasıl Çalışır?
Client, HTTP üzerinden WebSocket bağlantı isteği atar

Server bu isteği kabul eder (upgrade)

TCP üzerinden sürekli açık bir kanal oluşur

Client ve Server istedikleri anda mesaj gönderebilir

📌 WebSocket Nerelerde Kullanılır?
Chat uygulamaları (WhatsApp, Discord)

Canlı dashboard’lar

Online oyunlar

Borsa ve finans uygulamaları

Anlık bildirim sistemleri

🧠 Bu Projede WebSocket’i Nasıl Kullandık?
Bu projenin amacı:

WebSocket mantığını en sade ve görsel şekilde göstermek

Bunun için:

1 adet WebSocket Server (Node.js)

1 HTML dosyası içinde 2 farklı kullanıcı (telefon)
oluşturuldu.

🖥️ Server Tarafı (Node.js)
Sunucu özellikleri:

8080 portunda çalışır

Bağlanan tüm client’ları tutar

Gelen mesajı tüm client’lara gönderir (broadcast)

🔁 Server Çalışma Akışı
Client bağlanır
↓
Sunucu bağlantıyı kabul eder
↓
Client mesaj gönderir
↓
Sunucu mesajı alır
↓
Tüm client’lara gönderir
