### 3. `README.md`

```markdown
# Website Perusahaan PT Wirabaja Mesin Nusantara

Website profil perusahaan, katalog unit, layanan, proyek, dan permintaan penawaran alat berat untuk **PT Wirabaja Mesin Nusantara** (penjualan, penyewaan, servis berkala, dan suku cadang alat berat di Indonesia).

Dibangun dalam mode statis tanpa database dan tanpa pelacak pihak ketiga agar cepat dimuat, mudah dikelola, serta langsung siap ditayangkan di Vercel.

## Fitur Utama

- **Multi halaman nyata dengan transisi halus**: Beranda, Katalog Produk, 14 halaman Detail Produk (`/produk/[slug]`), Layanan (termasuk tabel perbandingan Beli vs Sewa), Proyek, Tentang Kami, Kontak, dan 404.
- **Data perusahaan terpusat**: seluruh kontak, alamat, jam layanan, menu, media sosial, dan jangkauan pengiriman dikelola dari satu berkas `src/config/site.ts`.
- **Filter interaktif tanpa muat ulang**: penyaringan kategori, kondisi unit (`Baru` / `Bekas`), pencarian kata kunci di halaman Produk, serta filter sektor dan panel rincian buka-tutup di halaman Proyek.
- **Formulir penawaran dua jalur tanpa server**: validasi langsung dengan pengiriman terformat ke WhatsApp (`wa.me`) dan Email (`mailto:`), lengkap dengan sanitasi input dan kolom anti-spam.
- **Font dan aset mandiri**: huruf Barlow Condensed dan Public Sans dipasang lewat `@fontsource`, seluruh logo dan ilustrasi tersimpan di repositori tanpa CDN pihak ketiga.
- **Keamanan dan SEO**: header keamanan ketat pada `vercel.json` (CSP, HSTS, X-Frame-Options, Permissions-Policy), tag Open Graph, data terstruktur `Organization` dan `Product`, `robots.txt`, serta `sitemap-index.xml`.

## Teknologi

- [Astro 5](https://astro.build/) (output statis + ClientRouter View Transitions)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- TypeScript dan JavaScript standar (tanpa framework klien tambahan)
- `@fontsource/barlow-condensed` dan `@fontsource/public-sans`
- `@astrojs/sitemap`

## Menjalankan di Komputer Lokal

Prasyarat: Node.js versi 18.20.8 atau lebih baru.

```bash
npm install
npm run dev