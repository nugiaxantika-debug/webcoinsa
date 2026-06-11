# TikTok Top Up Coin Website

Website untuk top up coin TikTok dengan antarmuka yang menarik dan fungsional.

## Fitur

✨ **Fitur Lengkap:**
- ✅ Halaman utama dengan form input username
- ✅ Pilihan paket coin berbeda (70, 350, 700, 1,400, 3,500, 7,000, 17,500, Custom)
- ✅ Modal ringkasan pesanan
- ✅ Pilihan metode pembayaran (Credit Card, PayPal)
- ✅ Proses pembayaran dengan loading animation
- ✅ Notifikasi sukses pembayaran
- ✅ Desain responsif untuk mobile, tablet, dan desktop
- ✅ Animasi smooth dan transisi yang halus

## Struktur File

```
webcoinsa/
├── index.html          # File HTML utama
├── styles.css          # Styling dan responsive design
├── script.js           # JavaScript interaktif
└── README.md           # Dokumentasi
```

## Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/nugiaxantika-debug/webcoinsa.git
cd webcoinsa
```

### 2. Buka di Browser
Buka file `index.html` langsung di browser atau gunakan live server:

```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan pada index.html dan pilih "Open with Live Server"
```

### 3. Atau Deploy ke GitHub Pages
```bash
# Push ke repository
git add .
git commit -m "Initial commit: TikTok coin top-up website"
git push origin main

# Aktifkan GitHub Pages di settings repository
# Website akan bisa diakses di: https://nugiaxantika-debug.github.io/webcoinsa/
```

## Cara Kerja

### Alur Pembelian:
1. **Input Username** - User memasukkan username TikTok
2. **Pilih Paket** - User memilih jumlah coin yang diinginkan
3. **Lihat Total** - Total harga secara otomatis terupdate
4. **Klik Recharge** - Tombol Recharge akan aktif setelah username dan paket dipilih
5. **Order Summary** - Modal menampilkan ringkasan pesanan
6. **Pilih Pembayaran** - User memilih metode pembayaran (Card atau PayPal)
7. **Setujui Policy** - User mengecek checkbox untuk menyetujui Coins Policy
8. **Pay Now** - Proses pembayaran dimulai
9. **Processing** - Animasi loading dengan countdown
10. **Success** - Notifikasi sukses pembayaran

## Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan Flexbox dan Grid
- **JavaScript (Vanilla)** - Interaktivitas tanpa library
- **Responsive Design** - Mobile-first approach

## Paket Coin

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

## Metode Pembayaran

✅ Credit/Debit Card (Visa, Mastercard, Apple Pay, American Express)
✅ PayPal

## Customization

### Mengubah Warna

Edit file `styles.css` dan cari:
```css
/* Warna utama */
background-color: #ff2050; /* Ubah sesuai kebutuhan */
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

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Lisensi

MIT License - Bebas digunakan dan dimodifikasi

## Author

Created for TikTok Coin Top-Up Service

## Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.