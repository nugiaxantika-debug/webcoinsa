# TikTok Top Up Coin Website

Website sederhana untuk top up coin TikTok dengan desain yang mirip dengan referensi gambar.

## ✨ Fitur

- Input username TikTok
- Pilihan 8 paket coin atau custom
- Modal order summary
- Pilihan metode pembayaran (Card & PayPal)
- Animasi processing payment dengan countdown
- Modal success notification
- Design responsive untuk mobile, tablet, desktop

## 🚀 Deploy di Vercel

### Opsi 1: Via GitHub
1. Pastikan repo sudah push ke GitHub
2. Buka https://vercel.com
3. Klik "New Project"
4. Select repository "webcoinsa"
5. Deploy!

### Opsi 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opsi 3: Drag & Drop
1. Buka https://vercel.com/new
2. Drag folder ke area upload
3. Selesai!

## 📁 File Structure

- `index.html` - HTML utama
- `style.css` - Styling
- `app.js` - JavaScript logic
- `README.md` - Dokumentasi

## 🎯 Cara Kerja

1. Masukkan username TikTok
2. Pilih paket coin
3. Lihat total harga update otomatis
4. Klik tombol "Recharge"
5. Modal order summary terbuka
6. Pilih payment method
7. Agree policy
8. Klik "Pay now"
9. Lihat animasi processing
10. Terima notifikasi sukses

## 💡 Customization

### Mengubah warna
Edit `style.css`:
```css
/* Ubah #ff2050 ke warna favorit */
#ff2050 = warna utama
#e51840 = warna hover
```

### Menambah paket coin
Edit `index.html` di section `coins-grid`:
```html
<div class="coin-card" data-coins="25000" data-price="250.00">
    <span class="coin-icon">💰</span>
    <p class="coin-amount">25,000</p>
    <p class="coin-price">€ 250.00</p>
</div>
```

## ✅ Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 License

MIT License
