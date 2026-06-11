# TikTok Top Up Coin Website

Website untuk top up coin TikTok dengan antarmuka yang menarik dan fungsional.

## ✨ Fitur Lengkap

- ✅ Halaman utama dengan form input username
- ✅ Pilihan paket coin berbeda (70, 350, 700, 1,400, 3,500, 7,000, 17,500, Custom)
- ✅ Modal ringkasan pesanan
- ✅ Pilihan metode pembayaran (Credit Card, PayPal)
- ✅ Proses pembayaran dengan loading animation
- ✅ Notifikasi sukses pembayaran
- ✅ Desain responsif untuk mobile, tablet, dan desktop
- ✅ Animasi smooth dan transisi yang halus
- ✅ Kompatibel dengan Vercel deployment

## 📁 Struktur File

```
webcoinsa/
├── index.html          # File HTML utama
├── styles.css          # Styling dan responsive design
├── script.js           # JavaScript interaktif
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/nugiaxantika-debug/webcoinsa.git
cd webcoinsa
```

### 2. Buka di Browser Lokal
Buka file `index.html` langsung di browser atau gunakan live server:

```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan pada index.html dan pilih "Open with Live Server"
```

### 3. Deploy ke Vercel

**Opsi A: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Opsi B: GitHub Integration**
1. Push repository ke GitHub
2. Buka https://vercel.com
3. Klik "Add New Project"
4. Pilih repository `webcoinsa`
5. Klik "Deploy"

**Opsi C: Drag & Drop**
1. Buka https://vercel.com/new
2. Drag folder project ke area upload
3. Tunggu deployment selesai

### 4. Deploy ke GitHub Pages
```bash
# Push ke repository
git add .
git commit -m "TikTok coin top-up website"
git push origin main

# Aktifkan GitHub Pages di settings repository
# Website akan bisa diakses di: https://nugiaxantika-debug.github.io/webcoinsa/
```

## 🔄 Alur Pembelian

1. **Input Username** - User memasukkan username TikTok
2. **Pilih Paket** - User memilih jumlah coin yang diinginkan
3. **Lihat Total** - Total harga secara otomatis terupdate
4. **Klik Recharge** - Tombol Recharge akan aktif setelah username dan paket dipilih
5. **Order Summary** - Modal menampilkan ringkasan pesanan
6. **Pilih Pembayaran** - User memilih metode pembayaran (Card atau PayPal)
7. **Setujui Policy** - User mengecek checkbox untuk menyetujui Coins Policy
8. **Pay Now** - Proses pembayaran dimulai
9. **Processing** - Animasi loading dengan countdown 60 detik
10. **Success** - Notifikasi sukses pembayaran

## 💻 Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan Flexbox dan Grid
- **JavaScript (Vanilla)** - Interaktivitas tanpa library/framework
- **Responsive Design** - Mobile-first approach

## 💰 Paket Coin

| Jumlah | Harga (EUR) |
|--------|-------------|
| 70 | €0.85 |
| 350 | €4.15 |
| 700 | €8.29 |
| 1,400 | €16.49 |
| 3,500 | €41.25 |
| 7,000 | €82.08 |
| 17,500 | €205.19 |
| Custom | Sesuai kebutuhan |

## 💳 Metode Pembayaran

- ✅ Credit/Debit Card (Visa, Mastercard, Apple Pay, American Express)
- ✅ PayPal

## ⚙️ Customization

### Mengubah Warna

Edit file `styles.css` dan cari warna utama:
```css
/* Warna utama (Pink/Red) */
background-color: #ff2050;
hover-color: #e51840;
```

### Menambah Paket Baru

Edit file `index.html` dan tambahkan di section "Recharge Packages":
```html
<div class="package" data-coins="25000" data-price="250.00">
    <div class="coin-icon">💰</div>
    <div class="coin-amount">25,000</div>
    <div class="coin-price">€ 250.00</div>
</div>
```

### Mengubah Negara

Edit file `index.html`, cari `<strong>France</strong>` dan ubah dengan negara Anda.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Website tidak responsif di mobile
- Pastikan meta viewport ada di `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Tombol tidak berfungsi
- Buka browser DevTools (F12)
- Cek Console tab untuk error messages
- Pastikan script.js dimuat dengan benar

### Modal tidak muncul
- Pastikan ID modal di HTML sesuai dengan JavaScript
- Cek z-index di CSS (harus lebih besar dari 100)

## 📱 Testing

### Desktop
1. Buka di Chrome DevTools
2. Tekan Ctrl+Shift+I
3. Klik icon responsive design mode (Ctrl+Shift+M)
4. Test berbagai ukuran: 320px, 480px, 768px, 1024px

### Mobile
1. Deploy ke Vercel
2. Akses URL dari smartphone
3. Test semua fitur: input, pilih paket, modal, checkout

## 📄 Lisensi

MIT License - Bebas digunakan dan dimodifikasi

## 👤 Author

Created by nugiaxantika-debug

## 💬 Support

Jika ada pertanyaan atau masalah:
1. Cek GitHub Issues
2. Buat GitHub Discussion
3. Hubungi via email

## 🔗 Links

- **GitHub**: https://github.com/nugiaxantika-debug/webcoinsa
- **Live Demo**: https://webcoinsa.vercel.app (setelah deploy)

---

**Terakhir diupdate**: 2026-06-11