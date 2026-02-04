// ws modülünü yükleyip WebSocket Server oluşturuyoruz
const ws = require('ws');

// WebSocket Server'ı 8080 portunda başlatıyoruz
const server = new ws.Server({ port: 8080 });

// -----------------------------
// Yeni bir client bağlandığında tetiklenen olay
// -----------------------------
server.on('connection', (socket) => {
    console.log('New client connected'); // Konsola bağlantı mesajı

    // -----------------------------
    // Client'tan mesaj geldiğinde tetiklenen olay
    // -----------------------------
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`); // Konsola gelen mesajı yazdır

        // Sunucuya bağlı tüm client'lara mesajı gönderiyoruz
        server.clients.forEach((client) => {
            // Client bağlantısı açık mı kontrolü
            if(client.readyState === ws.OPEN){
                client.send(`${message}`); // Mesajı gönder
            }
        });
    });

    // Yeni bağlanan client'a hoşgeldin mesajı gönderiyoruz
    socket.send('Welcome to the WebSocket server!');
});

// Sunucunun hangi portta çalıştığını konsola yazdır
console.log('WebSocket server is running on ws://localhost:8080');
