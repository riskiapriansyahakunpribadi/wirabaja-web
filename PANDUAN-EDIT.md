Panduan Lengkap Mengubah, Menambah, dan Menghapus Seluruh Isi Website PT Wirabaja Mesin Nusantara
Panduan ini memetakan setiap bagian yang tampil di layar website beserta lokasi berkas kode, nama bagian di dalam kode, cara mengubah isi, cara menambah item baru, hingga cara menghapus atau menyembunyikan bagian tertentu tanpa merusak tampilan maupun fungsi website.

Peta Cepat: Mau Edit Apa, Buka File Mana?
Bagian Website yang Ingin Diubah	Lokasi File di VS Code
Nama perusahaan, alamat, WhatsApp, email, jam kerja, medsos, menu atas, wilayah kirim	src/config/site.ts
Warna tema, jenis huruf (font), ukuran judul, kelengkungan sudut	src/styles/global.css
Logo perusahaan (header, footer, ikon tab browser)	public/logo/ dan src/components/BrandLogo.astro
Gambar alat berat, workshop, dan foto proyek	public/images/ (dan nama file di src/data/ atau src/pages/index.astro)
Teks halaman Beranda (judul besar hero, alasan memilih, alur proses, sektor industri)	src/pages/index.astro
Daftar dan spesifikasi Produk (tambah unit, ubah spesifikasi, hapus unit, status Baru/Bekas)	src/data/products.ts
Isi halaman Layanan (5 layanan utama dan tabel perbandingan Beli vs Sewa)	src/data/services.ts dan src/pages/layanan.astro
Isi halaman Proyek (daftar proyek dan filter sektor)	src/data/projects.ts
Isi halaman Tentang Kami (cerita perusahaan, nilai kerja, fasilitas, divisi tim)	src/pages/tentang.astro
Isi halaman Kontak dan panduan kunjungan yard	src/pages/kontak.astro
Kolom Formulir Penawaran dan susunan teks pesan WhatsApp otomatis	src/components/QuoteForm.astro dan src/scripts/quote-form.ts
Tombol WhatsApp Melayang di pojok kanan bawah	src/components/WhatsAppFloat.astro dan src/layouts/Base.astro
Kotak ajakan berwarna Kuning Lebar di bagian bawah halaman	src/components/CtaBanner.astro
Daftar tautan Footer bagian bawah	src/components/Footer.astro
Halaman 404 (alamat tidak ditemukan)	src/pages/404.astro
Nama domain website untuk Google (SEO dan sitemap)	astro.config.mjs, src/config/site.ts, dan public/robots.txt
Aturan Dasar Sebelum Mengedit Kode
Simpan setiap perubahan: setelah mengedit di VS Code, tekan Ctrl + S sampai tanda titik putih di samping nama tab file hilang.

Perhatikan tanda kutip dan koma:

Teks diapit tanda kutip tunggal '...'. Jika di dalam teks ada tanda petik tunggal (misalnya kata Jum'at), gunakan tanda kutip ganda "Jum'at".

Setiap item di dalam daftar [ ... ] atau objek { ... } dipisahkan tanda koma , di akhir baris. Jangan menghapus koma pemisah antar-item.

Cara menyembunyikan bagian sementara (tanpa menghapus permanen):

Di dalam file berakhiran .ts (seperti site.ts, products.ts), tambahkan // di depan baris yang ingin dimatikan.

Di dalam file berakhiran .astro (seperti index.astro, Base.astro), bungkus bagian yang ingin disembunyikan dengan {/* di awal dan */} di akhir.

Uji hasil edit di terminal VS Code: jalankan npm run dev untuk melihat perubahan langsung di http://localhost:4321, dan jalankan npm run build sebelum mengirim ke GitHub/Vercel untuk memastikan tidak ada kesalahan penulisan kode.

1. Identitas Perusahaan, Kontak, Menu, dan Wilayah Kirim
Lokasi file: src/config/site.ts

Bagian di dalam file: export const siteConfig = { ... }

Mengubah data di file ini otomatis memperbarui bar atas, header, footer, tombol WhatsApp melayang, formulir kontak, kartu alamat, meta Google, dan data terstruktur Organization di seluruh halaman.

A. Mengubah Nama, Tagline, Alamat, Jam Kerja, WhatsApp, dan Email
Cari bagian atas siteConfig di src/config/site.ts lalu ganti teks di sebelah kanan titik dua:

TypeScript
export const siteConfig = {
  legalName: 'PT Wirabaja Mesin Nusantara', // Nama resmi perusahaan
  shortName: 'Wirabaja',                   // Nama singkat
  tagline: 'Alat berat siap kerja, dari pengadaan sampai purna jual',
  businessField: 'Penjualan, penyewaan, servis, dan suku cadang alat berat',
  seoDescription: 'Deskripsi singkat untuk hasil pencarian Google...',
  siteUrl: 'https://wirabaja.id',          // Ganti dengan domain asli saat sudah aktif

  address: {
    street: 'Jl. Industri Raya No. 28, Kawasan Industri Pulogadung',
    city: 'Jakarta Timur',
    postalCode: '13920',
    province: 'DKI Jakarta',
    country: 'Indonesia',
    short: 'Kawasan Industri Pulogadung, Jakarta Timur', // Tampil di bar atas & footer
    full: 'Jl. Industri Raya No. 28, Kawasan Industri Pulogadung, Jakarta Timur 13920',
    // Ganti URL di bawah dengan link "Share / Bagikan" dari Google Maps lokasi asli perusahaan:
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=...',
  },

  hours: {
    label: 'Senin sampai Sabtu, 08.00 sampai 17.00 WIB',
    compact: 'Senin s.d. Sabtu, 08.00 s.d. 17.00 WIB',
    days: 'Senin sampai Sabtu',
    time: '08.00 sampai 17.00 WIB',
  },

  contact: {
    // WAJIB format angka internasional Indonesia tanpa tanda + atau spasi (awalan 62):
    whatsappNumber: '6281200000000',
    whatsappDisplay: '+62 812-0000-0000',
    email: 'penjualan@wirabaja.id',
    defaultWhatsappMessage: 'Halo Tim Penjualan PT Wirabaja Mesin Nusantara...',
  },
B. Mengubah, Menambah, atau Menghapus Media Sosial
Masih di src/config/site.ts, cari properti social: [ ... ]:

Mengubah: ganti isi href dan handle.

Menghapus salah satu medsos (misalnya YouTube belum ada): hapus seluruh blok { name: 'YouTube', ... },.

Catatan ikon: tipe ikon medsos yang tersedia saat ini adalah 'LinkedIn', 'Instagram', dan 'YouTube'. Jika ingin menambah medsos lain, daftarkan juga ikonnya di src/types/icon.ts, src/components/Icon.astro, dan socialIconMap di src/components/Footer.astro.

C. Mengubah, Menambah, atau Menghapus Menu Navigasi Atas
Cari properti navigation: [ ... ] dan headerCta di src/config/site.ts:

TypeScript
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Produk', href: '/produk' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Kontak', href: '/kontak' },
  ],

  headerCta: {
    label: 'Minta Penawaran', // Teks tombol kuning di pojok kanan header
    href: '/kontak',
  },
Mengubah nama menu: ganti teks label (misalnya 'Produk' menjadi 'Katalog Unit').

Menghapus menu: hapus baris objeknya (misalnya { label: 'Proyek', href: '/proyek' },). Menu di header desktop, menu laci ponsel, dan kolom Halaman di footer otomatis ikut hilang.

Menambah halaman dan menu baru:

Buat file halaman baru di src/pages/, misalnya src/pages/suku-cadang.astro (salin isi dari src/pages/tentang.astro lalu ganti teksnya).

Tambahkan { label: 'Suku Cadang', href: '/suku-cadang' }, ke dalam navigation di src/config/site.ts.

D. Mengubah, Menambah, atau Menghapus Wilayah Pengiriman
Cari properti serviceAreas: [ ... ] di src/config/site.ts. Bagian ini tampil di Beranda dan halaman Kontak, serta otomatis dihitung jumlahnya pada bar fakta Beranda (5 Wilayah Kirim):

Mengubah: ganti teks region (nama wilayah) dan coverage (keterangan pengiriman).

Menambah: salin satu blok { region: '...', coverage: '...' }, di dalam array serviceAreas.

Menghapus: hapus satu blok { region: '...', coverage: '...' },.

2. Warna, Huruf (Font), dan Tampilan Dasar
Lokasi file: src/styles/global.css

A. Mengubah Warna Website
Di bagian atas src/styles/global.css, cari blok @theme { ... }:

CSS
@theme {
  --color-steel-980: #071528;      /* Biru paling gelap (bar paling atas & bawah footer) */
  --color-steel-950: #0B1F3A;      /* Biru tua utama (header, hero, footer, bagian gelap) */
  --color-steel-900: #112A4D;      /* Biru tua kartu di atas latar gelap */
  --color-steel-800: #1C3A63;      /* Biru aksen hover tombol gelap */
  --color-steel-gray: #4A596D;     /* Warna teks paragraf sekunder di latar terang */
  --color-surface-warm: #F4F2EE;   /* Warna latar halaman terang hangat */
  --color-surface-white: #FFFFFF;  /* Warna latar kartu putih */
  --color-safety: #FFB400;         /* Warna aksen utama (tombol kuning, garis penanda) */
  --color-safety-hover: #E5A200;   /* Warna kuning saat tombol ditekan */
}
Cukup ganti kode warna hex (#...) sesuai warna baru yang diinginkan.

B. Mengubah Huruf (Font)
Buka terminal VS Code, pasang paket font yang diinginkan dari Fontsource, misalnya:

Bash
npm install @fontsource/oswald
Di baris paling atas src/styles/global.css, ganti baris @import '@fontsource/barlow-condensed/...' dengan font baru tersebut.

Di dalam blok @theme di src/styles/global.css, ganti nama font pada:

--font-display: huruf untuk seluruh judul (h1, h2, h3) dan tombol.

--font-body: huruf untuk seluruh teks paragraf dan tabel.

3. Logo dan Gambar Alat Berat
A. Mengubah Logo
Logo berada di dua tempat:

File SVG statis di folder public/logo/ (logo-lengkap.svg, logo-ikon.svg, logo-putih.svg) dan public/favicon.svg (ikon kecil di tab browser). Ganti file tersebut dengan logo baru memakai nama file yang sama persis.

Komponen logo di Header dan Footer (src/components/BrandLogo.astro):

Jika Anda sudah memiliki file logo gambar sendiri (.svg atau .png) dan tidak memakai animasi garis lambang bawaan, buka src/components/BrandLogo.astro, hapus seluruh tag <svg>...</svg>, lalu ganti dengan:

Cuplikan kode
<img
  src={variant === 'dark' ? '/logo/logo-putih.svg' : '/logo/logo-lengkap.svg'}
  alt=""
  width="220"
  height="52"
  class={`h-10 w-auto sm:h-11 ${className}`}
/>
B. Mengubah Gambar Alat Berat dan Proyek
Simpan foto baru (disarankan format .webp agar ringan) ke folder public/images/. Pastikan nama file tidak berekstensi ganda (hindari .webp.webp atau .svg.svg).

Jika nama file baru sama persis dengan yang lama, gambar otomatis berganti tanpa mengedit kode.

Jika format atau namanya berbeda (misalnya mengganti /images/cat-excavator.svg menjadi /images/excavator-20t.webp), ganti alamat path gambarnya di:

src/pages/index.astro (gambar hero, kategori, workshop, dan proyek pilihan)

src/data/products.ts (gambar utama dan gallery tiap unit)

src/data/services.ts (gambar pendamping tiap layanan)

src/data/projects.ts (gambar tiap proyek)

src/layouts/Base.astro (properti ogImage bawaan untuk pratinjau tautan WhatsApp/medsos)

Daftar ukuran ideal dan rasio tiap gambar tersedia lengkap di public/images/DAFTAR-GAMBAR.md.

4. Halaman Beranda
Lokasi file: src/pages/index.astro

Halaman Beranda terbagi menjadi bagian data di atas (antara tanda --- dan ---) serta susunan tampilan HTML di bawahnya.

A. Mengubah Data di Bagian Atas src/pages/index.astro
const featuredCategory = { ... }: mengubah kartu kategori unggulan besar (saat ini Excavator), termasuk judul, rentang kelas, ringkasan, 3 poin keunggulan (highlights), dan gambar.

const unitCategories = [ ... ]: mengubah 5 kartu kategori pendamping (Bulldozer, Wheel Loader, Dump Truck, Motor Grader, Compactor).

const factItems = [ ... ]: mengubah 4 kotak fakta tepat di bawah Hero. Angka kategori (6 Kategori Unit) dan wilayah (5 Wilayah Kirim) terhitung otomatis dari daftar kategori dan siteConfig.serviceAreas.

const homeServices = [ ... ]: mengubah daftar 5 layanan ringkas di Beranda.

const whyChooseItems = [ ... ]: mengubah 4 alasan memilih Wirabaja di bagian latar biru gelap.

const processSteps = [ ... ]: mengubah 4 langkah alur pengadaan (01 sampai 04).

const featuredProjects = [ ... ]: mengubah 3 kartu proyek pilihan di Beranda. Pastikan nilai href: '/proyek#id-proyek' cocok dengan id proyek yang ada di src/data/projects.ts.

const sectorsServed = [ ... ]: mengubah 6 kartu sektor industri (Konstruksi, Pertambangan, Perkebunan, Infrastruktur, Kehutanan, Pergudangan).

B. Mengubah Teks Judul Hero atau Menghilangkan Bagian Tertentu di Beranda
Di bagian bawah src/pages/index.astro (setelah tanda --- kedua), setiap bagian sudah diberi penanda komentar:

<!-- 1. HERO PENUH LAYAR -->: tempat mengubah judul besar (Alat Berat Siap Kerja / Untuk Proyek Anda), kalimat penjelas di bawahnya, teks dua tombol utama, dan 3 penanda bawah (Unit siap kirim, Layanan servis, Dukungan suku cadang).

<!-- 2. BAR FAKTA TERUKUR --> sampai <!-- 9. PENUTUP CTA KUNING LEBAR -->:

Jika ingin menghilangkan salah satu bagian di Beranda (misalnya bagian Proyek Pilihan belum ingin ditampilkan), cukup bungkus seluruh blok <section ...> ... </section> bagian tersebut dengan {/* di atasnya dan */} di bawahnya.

5. Katalog Produk dan Halaman Detail Produk
Lokasi file: src/data/products.ts

(Halaman /produk dan seluruh halaman detail /produk/[slug] membaca otomatis dari file ini.)

A. Mengubah Data Unit yang Sudah Ada
Cari nama unit di dalam export const products: ProductUnit[] = [ ... ], lalu ubah bagian yang diperlukan:

name: nama unit yang tampil di kartu dan judul halaman detail.

status: isi 'Baru' (lencana kuning) atau 'Bekas' (lencana biru tua).

priceNote: teks harga (saat ini 'Hubungi untuk harga').

options: pilihan pengadaan, misalnya ['Beli', 'Sewa'] atau ['Beli'] saja.

shortDescription: ringkasan singkat pada kartu katalog.

overview: penjelasan lengkap di halaman detail produk.

keySpecs: 3 spesifikasi utama yang muncul di kartu katalog (jangan lebih dari 3 agar tata letak kartu tetap rapi).

fullSpecs: baris tabel spesifikasi lengkap di halaman detail (boleh ditambah atau dikurangi barisnya).

applications: daftar poin kegunaan di lapangan.

includedEquipment: daftar poin kelengkapan unit.

B. Menambah Unit Baru
Buka src/data/products.ts dan salin satu blok unit secara utuh mulai dari { sampai },.

Tempelkan sebelum tanda ]; di bagian bawah daftar products.

Ubah properti berikut agar unik:

slug: alamat URL unit, wajib huruf kecil tanpa spasi (pakai tanda hubung -), misalnya 'excavator-kelas-25-ton'.

category: pilih salah satu dari 'excavator', 'bulldozer', 'wheel-loader', 'dump-truck', 'motor-grader', atau 'compactor'.

categoryLabel: nama kategori yang tampil, misalnya 'Excavator'.

Simpan file. Kartu unit baru otomatis muncul di halaman /produk, terhitung pada tombol filter kategori dan status, serta memiliki halaman detail sendiri di /produk/excavator-kelas-25-ton.

C. Menghapus Unit
Hapus seluruh blok unit tersebut mulai dari kurung kurawal buka { sampai kurung kurawal tutup dan komanya },. Periksa apakah unit tersebut tertaut di relatedProducts pada file src/data/projects.ts; jika ada, hapus juga tautannya di projects.ts agar tidak mengarah ke halaman 404.

D. Menambah Kategori Alat Berat Baru
Di baris paling atas src/data/products.ts, tambahkan slug kategori baru pada export type ProductCategorySlug = ... | 'forklift';.

Tambahkan objek kategori baru di array export const productCategories = [ ... ].

Tambahkan unit produk yang memakai category: 'forklift' pada array products.

6. Halaman Layanan dan Perbandingan Beli vs Sewa
Lokasi file: src/data/services.ts (dan src/pages/layanan.astro untuk teks kepala halaman)

A. Mengubah, Menambah, atau Menghapus Layanan
Di src/data/services.ts, cari export const services: ServiceItem[] = [ ... ]:

Mengubah layanan: edit title, summary, details, daftar scope (cakupan layanan), requirements (syarat pengajuan), atau steps (alur 4 langkah pengerjaan).

Menambah layanan baru:

Daftarkan id barunya pada tipe ServiceItem di bagian atas src/data/services.ts (misalnya | 'operator').

Salin satu blok layanan di array services dan sesuaikan isinya.

Tambahkan juga tautan ringkasnya di homeServices (src/pages/index.astro) dan serviceLinks (src/components/Footer.astro).

Menghapus layanan: hapus blok layanannya di src/data/services.ts, lalu hapus juga item yang sama pada homeServices di src/pages/index.astro dan serviceLinks di src/components/Footer.astro.

B. Mengubah Tabel Perbandingan Beli vs Sewa
Di bagian bawah src/data/services.ts, cari export const buyVsRentComparison: BuyVsRentRow[] = [ ... ]:

Mengubah isi perbandingan: edit teks pada properti aspect, buy, atau rent.

Menambah baris perbandingan: salin satu blok { aspect: '...', buy: '...', rent: '...' },.

Menghapus baris perbandingan: hapus satu blok { aspect: '...', ... },.

Menghilangkan seluruh bagian perbandingan Beli vs Sewa: buka src/pages/layanan.astro, cari komentar <!-- Tabel perbandingan jujur: Beli vs Sewa -->, lalu bungkus seluruh <section id="perbandingan-beli-sewa" ...> ... </section> dengan {/* ... */}.

7. Halaman Proyek dan Filter Sektor
Lokasi file: src/data/projects.ts

A. Mengubah, Menambah, atau Menghapus Proyek
Cari export const projects: ProjectCase[] = [ ... ]:

Mengubah proyek: edit title, location, serviceMode, summary, clientNeed (kebutuhan klien), unitsSupplied (daftar unit yang dipasok), outcome (hasil pelaksanaan), atau relatedProducts (tautan ke halaman detail unit).

Menambah proyek baru:

Salin satu blok proyek di array projects.

Beri id unik berhuruf kecil tanpa spasi (misalnya 'tambang-nikel-morowali').

Isi sector dengan salah satu dari 'pertambangan', 'infrastruktur', 'perkebunan', 'konstruksi', 'kehutanan', atau 'pergudangan'.

Menghapus proyek: hapus seluruh blok proyek tersebut di src/data/projects.ts. Jika proyek yang dihapus sempat ditampilkan di Beranda, hapus atau ganti juga item tersebut pada featuredProjects di src/pages/index.astro.

8. Halaman Tentang Kami dan Halaman Kontak
A. Halaman Tentang Kami (src/pages/tentang.astro)
Buka src/pages/tentang.astro untuk mengubah:

Cerita Perusahaan: cari bagian <!-- 1. CERITA PERUSAHAAN --> di bagian HTML bawah lalu edit paragraf <p>...</p> di dalamnya.

Nilai Kerja (4 prinsip): edit array const workValues = [ ... ] di bagian atas file.

Fasilitas Operasional (Kantor, Workshop, Gudang): edit array const facilities = [ ... ] di bagian atas file.

Struktur Divisi Tim (4 lencana inisial): edit array const teamDivisions = [ ... ] (ubah initials 2 huruf, role, division, dan focus). Jika ada divisi yang ingin dihapus atau ditambah, cukup hapus atau tambah objeknya di array ini.

Alur Kerja Internal: edit array const operationalWorkflow = [ ... ].

B. Halaman Kontak (src/pages/kontak.astro)
Buka src/pages/kontak.astro untuk mengubah:

Judul dan pengantar halaman: berada di dalam <section> pertama (<!-- Kepala halaman Kontak -->).

Panduan Kunjungan Inspeksi Unit: edit daftar poin di array const visitChecklist = [ ... ] pada bagian atas src/pages/kontak.astro.

Alamat, jam kerja, nomor WhatsApp, email, dan link Google Maps: semuanya otomatis membaca dari src/config/site.ts.

9. Formulir Penawaran, Tombol WhatsApp Melayang, CTA Kuning, dan Footer
A. Formulir Permintaan Penawaran (src/components/QuoteForm.astro dan src/scripts/quote-form.ts)
Mengubah pilihan "Jenis Kebutuhan" pada dropdown formulir:
Buka src/components/QuoteForm.astro, cari const needs = ['Beli', 'Sewa', 'Servis', 'Suku Cadang'];. Jika Anda menambah opsi baru di sini, daftarkan juga pasangannya di VALID_NEEDS pada src/scripts/contact-prefill.ts.

Mengubah format pesan yang masuk ke WhatsApp saat pengunjung menekan tombol kirim:
Buka src/scripts/quote-form.ts, cari fungsi function formatQuoteMessage(data: QuoteFields), lalu sesuaikan susunan kalimat di dalam array [ ... ].join('\n').

Menghilangkan tombol "Kirim lewat Email" (hanya menyisakan WhatsApp):
Di src/components/QuoteForm.astro, bungkus elemen <button type="button" data-submit-channel="email" ...> ... </button> dengan {/* ... */}.

B. Tombol WhatsApp Melayang di Pojok Kanan Bawah
Mengubah tulisan tombol (CHAT TIM PENJUALAN): buka src/components/WhatsAppFloat.astro dan ubah teks di dalam <span>Chat Tim Penjualan</span>.

Menghilangkan tombol WhatsApp melayang di seluruh halaman: buka src/layouts/Base.astro, cari baris <WhatsAppFloat/> di bagian bawah, lalu ubah menjadi {/* <WhatsAppFloat/> */}.

C. Kotak Ajakan Kuning Lebar (src/components/CtaBanner.astro)
Mengubah teks bawaan kotak kuning di semua halaman: buka src/components/CtaBanner.astro, ubah nilai awal heading, description, whatsappMessage, atau emailSubject.

Menghilangkan kotak kuning di halaman tertentu saja: buka file halaman yang bersangkutan (misalnya src/pages/proyek.astro), cari baris <CtaBanner .../> di bagian bawah, lalu bungkus dengan {/* <CtaBanner .../> */}.

D. Tautan Layanan di Footer (src/components/Footer.astro)
Buka src/components/Footer.astro, cari const serviceLinks = [ ... ] di bagian atas untuk menambah, mengubah, atau menghapus daftar tautan layanan di kolom tengah footer.

10. Mengubah Nama Domain Sebelum Website Online
Saat domain resmi perusahaan sudah siap dipakai di Vercel, ganti alamat [https://wirabaja.id](https://wirabaja.id) di tiga file berikut agar sitemap dan SEO Google mengarah ke domain asli:

astro.config.mjs: ubah baris site: '[https://wirabaja.id](https://wirabaja.id)',

src/config/site.ts: ubah baris siteUrl: '[https://wirabaja.id](https://wirabaja.id)',

public/robots.txt: ubah baris Sitemap: [https://wirabaja.id/sitemap-index.xml](https://wirabaja.id/sitemap-index.xml)

11. Cara Mengunggah Perubahan ke GitHub dan Vercel
Setiap selesai mengedit isi website di komputer lokal, jalankan langkah berikut di terminal VS Code agar perubahan tampil online:

Bash
npm run build
git add .
git commit -m "Perbarui isi website Wirabaja"
git push
Jika proyek sudah terhubung ke Vercel, Vercel akan otomatis membangun ulang dan memperbarui website live dalam waktu sekitar satu menit setelah git push.