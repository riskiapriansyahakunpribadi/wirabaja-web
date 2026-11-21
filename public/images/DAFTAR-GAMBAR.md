# Daftar Gambar dan Panduan Penggantian Foto

Seluruh gambar bawaan website PT Wirabaja Mesin Nusantara tersimpan di folder `public/images/` dalam format vektor SVG agar ringan dimuat dan langsung terlihat rapi saat presentasi. Anda dapat menggantinya dengan foto asli dari yard, workshop, maupun lokasi proyek kapan saja.

## Cara Mengganti Gambar

1. **Penggantian tanpa mengubah kode (nama berkas sama persis):**
   Jika Anda mengganti berkas SVG dengan berkas SVG baru bernama persis sama (misalnya menimpa `public/images/cat-excavator.svg`), website langsung menampilkan gambar baru tanpa perlu mengedit kode apa pun.
2. **Penggantian memakai foto asli (`.webp` atau `.jpg`):**
   - Simpan foto yang sudah dioptimalkan (disarankan format `.webp` berukuran di bawah 250 KB per foto) ke dalam folder `public/images/`, misalnya `hero-excavator.webp`.
   - Ganti akhiran `.svg` menjadi `.webp` pada nama berkas di `src/pages/index.astro`, `src/data/products.ts`, `src/data/services.ts`, `src/data/projects.ts`, atau `src/layouts/Base.astro` sesuai kolom "Dipakai di" pada tabel di bawah.
   - Pastikan nama berkas tidak berekstensi ganda (hindari penamaan seperti `cat-excavator.webp.webp`).

## Daftar Lengkap Berkas Gambar

| Nama Berkas | Dipakai di Halaman dan Bagian | Ukuran Ideal (px) | Rasio | Kata Kunci Pencarian Foto yang Cocok |
| :--- | :--- | :--- | :--- | :--- |
| `hero-excavator.svg` | Beranda (bagian Hero penuh layar) dan gambar pratinjau Open Graph bawaan di `Base.astro` | 1600 x 1067 | 3:2 | `yellow hydraulic excavator construction site wide shot`, `heavy equipment excavator working quarry` |
| `cat-excavator.svg` | Beranda (kartu kategori unggulan Excavator), Katalog dan Detail Produk (4 unit Excavator), Layanan (bagian Penjualan), Proyek (proyek Konstruksi Bekasi) | 1200 x 900 | 4:3 | `crawler excavator digging earthworks`, `20 ton hydraulic excavator side view` |
| `cat-bulldozer.svg` | Beranda (kartu kategori Bulldozer), Katalog dan Detail Produk (2 unit Bulldozer), Proyek (proyek Kehutanan Kalimantan Tengah) | 1200 x 900 | 4:3 | `crawler bulldozer pushing dirt construction`, `heavy bulldozer land clearing` |
| `cat-wheel-loader.svg` | Beranda (kartu kategori Wheel Loader), Katalog dan Detail Produk (2 unit Wheel Loader), Layanan (bagian Suku Cadang), Proyek (proyek Pergudangan Karawang) | 1200 x 900 | 4:3 | `wheel loader loading gravel stockpile`, `front end loader quarry aggregates` |
| `cat-dump-truck.svg` | Beranda (kartu kategori Dump Truck), Katalog dan Detail Produk (2 unit Dump Truck), Layanan (bagian Pembiayaan) | 1200 x 900 | 4:3 | `heavy dump truck mining haul road`, `construction tipper truck earthmoving` |
| `cat-motor-grader.svg` | Beranda (kartu kategori Motor Grader), Katalog dan Detail Produk (2 unit Motor Grader) | 1200 x 900 | 4:3 | `motor grader leveling gravel road`, `road grader construction site` |
| `cat-compactor.svg` | Beranda (kartu kategori Compactor), Katalog dan Detail Produk (2 unit Compactor) | 1200 x 900 | 4:3 | `vibratory soil compactor road roller`, `single drum compactor earthworks` |
| `workshop-inspeksi.svg` | Beranda (bagian Mengapa Memilih Wirabaja), Tentang Kami (Cerita Perusahaan), Layanan (bagian Servis), Detail Produk (galeri inspeksi) | 1200 x 900 | 4:3 | `heavy equipment mechanic workshop inspection`, `excavator hydraulic repair garage` |
| `proyek-tambang.svg` | Beranda (Proyek Pilihan 1), Proyek (proyek Pertambangan Kalimantan Timur), Detail Produk (galeri unit tambang) | 1200 x 810 | 16:11 | `open pit mining excavator loading dump truck`, `coal mining heavy machinery` |
| `proyek-infrastruktur.svg` | Beranda (Proyek Pilihan 2), Proyek (proyek Infrastruktur Jawa Barat), Layanan (bagian Penyewaan), Detail Produk (galeri unit jalan) | 1200 x 810 | 16:11 | `highway road construction grader compactor`, `infrastructure earthworks heavy equipment` |
| `proyek-perkebunan.svg` | Beranda (Proyek Pilihan 3), Proyek (proyek Perkebunan Riau), Detail Produk (galeri unit perkebunan) | 1200 x 810 | 16:11 | `bulldozer land clearing plantation road`, `excavator drainage ditch plantation` |

## Tips Persiapan Foto Sebelum Unggah

- Gunakan foto berorientasi mendatar (*landscape*) agar tidak terpotong di bagian atas atau bawah kartu.
- Khusus foto hero (`hero-excavator`), pilih foto dengan objek alat berat berada di sisi kanan atau tengah kanan sehingga sisi kiri tetap bersih untuk teks judul.
- Kompres foto memakai alat lokal atau konverter ke format WebP sebelum dimasukkan ke repositori agar waktu muat halaman tetap cepat pada jaringan seluler.
- Pastikan seluruh foto berasal dari dokumentasi perusahaan sendiri atau memiliki lisensi bebas royalti untuk penggunaan komersial.