export type ProductCategorySlug =
  | 'excavator'
  | 'bulldozer'
  | 'wheel-loader'
  | 'dump-truck'
  | 'motor-grader'
  | 'compactor';

export type ProductStatus = 'Baru' | 'Bekas';

export interface ProductCategoryMeta {
  slug: ProductCategorySlug;
  name: string;
  description: string;
}

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductUnit {
  slug: string;
  name: string;
  category: ProductCategorySlug;
  categoryLabel: string;
  unitClass: string;
  status: ProductStatus;
  priceNote: string;
  options: ('Beli' | 'Sewa')[];
  shortDescription: string;
  overview: string;
  image: string;
  imageAlt: string;
  gallery: ProductGalleryItem[];
  keySpecs: ProductSpecItem[];
  fullSpecs: ProductSpecItem[];
  applications: string[];
  includedEquipment: string[];
  featured?: boolean;
}

/*
 * UBAH / TAMBAH: daftar kategori pada tombol filter halaman Produk.
 * EFEK: memperbarui bar filter kategori di halaman /produk dan pencocokan tautan dari Beranda.
 * CARA: jika menambah kategori baru, daftarkan `slug` pada tipe ProductCategorySlug di atas lalu tambahkan objeknya di sini.
 */
export const productCategories: ProductCategoryMeta[] = [
  {
    slug: 'excavator',
    name: 'Excavator',
    description: 'Unit gali hidrolik untuk pekerjaan fondasi, parit, hingga pengupasan tambang.',
  },
  {
    slug: 'bulldozer',
    name: 'Bulldozer',
    description: 'Unit pendorong beroda rantai untuk pembukaan lahan dan perataan tanah keras.',
  },
  {
    slug: 'wheel-loader',
    name: 'Wheel Loader',
    description: 'Unit muat beroda karet untuk memindahkan material curah di stockpile dan proyek.',
  },
  {
    slug: 'dump-truck',
    name: 'Dump Truck',
    description: 'Armada angkut tanah galian, batu pecah, dan material overburden.',
  },
  {
    slug: 'motor-grader',
    name: 'Motor Grader',
    description: 'Unit perata permukaan untuk pembentukan badan jalan dan perawatan jalan tambang.',
  },
  {
    slug: 'compactor',
    name: 'Compactor',
    description: 'Unit pemadat getar untuk lapisan tanah dasar, timbunan jalan, dan lantai gudang.',
  },
];

/*
 * UBAH / TAMBAH: katalog seluruh unit alat berat yang tampil di /produk dan /produk/[slug].
 * EFEK: menambah satu objek di array ini otomatis membuat kartu baru di halaman Produk sekaligus
 *       membangun halaman detail baru di /produk/<slug> saat build.
 * CARA: salin satu blok unit di bawah, ganti `slug` (huruf kecil tanpa spasi, pisahkan dengan tanda hubung),
 *       sesuaikan spesifikasi dan status ('Baru' atau 'Bekas'), lalu simpan gambar di public/images/.
 */
export const products: ProductUnit[] = [
  {
    slug: 'excavator-mini-6-ton',
    name: 'Excavator Mini Kelas 6 Ton',
    category: 'excavator',
    categoryLabel: 'Excavator',
    unitClass: 'Kelas 6 Ton',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Excavator ringkas dengan radius ayun pendek untuk penggalian saluran air, jaringan pipa utilitas, dan area proyek perkotaan yang sempit.',
    overview:
      'Excavator Mini Kelas 6 Ton dirancang untuk pekerjaan galian di ruang terbatas tanpa mengorbankan gaya gali. Dilengkapi bilah dozer depan untuk membantu perataan ringan dan penopang kestabilan saat penggalian.',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto Excavator Mini Kelas 6 Ton untuk pekerjaan saluran dan proyek perkotaan',
    gallery: [
      {
        src: '/images/cat-excavator.jpg',
        alt: 'Tampak samping Excavator Mini Kelas 6 Ton',
        caption: 'Konfigurasi boom standar dan bilah dozer depan',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan sistem hidrolik excavator di workshop Pulogadung',
        caption: 'Uji tekanan hidrolik dan kelengkapan unit di workshop',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Pekerjaan utilitas dan badan jalan pada proyek infrastruktur',
        caption: 'Penerapan pada proyek drainase dan jalan kawasan',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '6.050 kg' },
      { label: 'Kapasitas Bucket', value: '0,24 m³' },
      { label: 'Tenaga Mesin', value: '42 kW (56 HP)' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '6.050 kg' },
      { label: 'Kapasitas Bucket Standar', value: '0,24 m³' },
      { label: 'Tenaga Mesin Bersih', value: '42 kW (56 HP)' },
      { label: 'Kedalaman Gali Maksimum', value: '3.820 mm' },
      { label: 'Jangkauan Gali Maksimum', value: '6.150 mm' },
      { label: 'Lebar Track Shoe', value: '400 mm (baja dengan opsi pad karet)' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '125 liter' },
      { label: 'Jalur Hidrolik Tambahan', value: 'Tersedia jalur breaker' },
    ],
    applications: [
      'Penggalian saluran drainase perkotaan dan pemasangan box culvert kecil',
      'Pekerjaan galian jaringan kabel bawah tanah dan pipa air bersih',
      'Penggalian fondasi rumah tinggal, ruko, dan bangunan bertingkat rendah',
      'Penataan lahan sempit di kawasan perumahan dan pergudangan',
    ],
    includedEquipment: [
      'Bucket gali standar 0,24 m³ dengan kuku bucket terpasang',
      'Bilah dozer depan dengan kendali hidrolik',
      'Kabin tertutup berpendingin udara dan kaca pengaman',
      'Jalur pipa hidrolik tambahan untuk pemasangan hydraulic breaker',
      'Buku panduan operasional, jadwal servis berkala, dan kotak perkakas dasar',
    ],
  },
  {
    slug: 'excavator-kelas-13-ton',
    name: 'Excavator Kelas 13 Ton',
    category: 'excavator',
    categoryLabel: 'Excavator',
    unitClass: 'Kelas 13 Ton',
    status: 'Bekas',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Unit kelas menengah yang telah melewati pemeriksaan mesin, pompa hidrolik, dan undercarriage untuk pekerjaan tanah harian.',
    overview:
      'Excavator Kelas 13 Ton menawarkan keseimbangan antara kemudahan mobilisasi antar lokasi dan kapasitas gali yang produktif. Seluruh unit bekas telah diperiksa secara menyeluruh di workshop Pulogadung, termasuk penggantian oli, filter, dan pengecekan kebocoran seal.',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto Excavator Kelas 13 Ton kondisi bekas siap kerja',
    gallery: [
      {
        src: '/images/cat-excavator.jpg',
        alt: 'Tampak samping Excavator Kelas 13 Ton',
        caption: 'Unit kelas 13 ton siap mobilisasi ke lokasi proyek',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan teknis unit bekas di workshop Pulogadung',
        caption: 'Laporan hasil pengecekan mesin dan undercarriage tersedia saat inspeksi',
      },
      {
        src: '/images/proyek-perkebunan.jpg',
        alt: 'Penggunaan alat berat untuk pembukaan parit dan lahan',
        caption: 'Cocok untuk pekerjaan konstruksi menengah dan saluran perkebunan',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '13.400 kg' },
      { label: 'Kapasitas Bucket', value: '0,55 m³' },
      { label: 'Tenaga Mesin', value: '74 kW (99 HP)' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '13.400 kg' },
      { label: 'Kapasitas Bucket Standar', value: '0,55 m³' },
      { label: 'Tenaga Mesin Bersih', value: '74 kW (99 HP)' },
      { label: 'Kedalaman Gali Maksimum', value: '5.540 mm' },
      { label: 'Jangkauan Gali Maksimum', value: '8.280 mm' },
      { label: 'Lebar Track Shoe', value: '500 mm' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '240 liter' },
      { label: 'Status Pemeriksaan', value: 'Lulus inspeksi teknis workshop sebelum serah terima' },
    ],
    applications: [
      'Pematangan lahan kavling dan pemindahan tanah proyek bangunan komersial',
      'Pembuatan saluran irigasi dan normalisasi sungai ukuran menengah',
      'Pemuatan tanah dan agregat ke dump truck ringan hingga menengah',
      'Pembentukan terasering serta parit kebun pada lahan perkebunan',
    ],
    includedEquipment: [
      'Bucket gali 0,55 m³ kondisi siap pakai',
      'Catatan inspeksi tekanan hidrolik, kompresi mesin, dan ketebalan rantai track',
      'Penggantian oli mesin, oli hidrolik, serta seluruh filter sebelum pengiriman',
      'Lampu kerja LED depan dan atas kabin',
    ],
  },
  {
    slug: 'excavator-kelas-20-ton',
    name: 'Excavator Kelas 20 Ton',
    category: 'excavator',
    categoryLabel: 'Excavator',
    unitClass: 'Kelas 20 Ton',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    featured: true,
    shortDescription:
      'Excavator serbaguna kelas 20 ton untuk proyek konstruksi besar, penggalian tanah keras, pembuatan jalan, dan pembukaan lahan.',
    overview:
      'Excavator Kelas 20 Ton adalah tulang punggung pekerjaan tanah pada hampir seluruh sektor proyek di Indonesia. Rangka boom dan arm diperkuat untuk menahan beban siklik tinggi, dengan konsumsi bahan bakar yang terjaga melalui mode kerja yang dapat dipilih operator.',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto Excavator Kelas 20 Ton baru untuk proyek konstruksi dan infrastruktur',
    gallery: [
      {
        src: '/images/cat-excavator.jpg',
        alt: 'Tampak samping Excavator Kelas 20 Ton baru',
        caption: 'Konfigurasi bucket 0,95 m³ dengan rangka boom diperkuat',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Persiapan pengiriman unit excavator baru di workshop',
        caption: 'Pengecekan pra-pengiriman dan pengujian fungsi lengkap',
      },
      {
        src: '/images/proyek-tambang.jpg',
        alt: 'Pengoperasian excavator pada proyek galian besar',
        caption: 'Siap mendukung pekerjaan galian intensif harian',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '21.200 kg' },
      { label: 'Kapasitas Bucket', value: '0,95 m³' },
      { label: 'Tenaga Mesin', value: '118 kW (158 HP)' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '21.200 kg' },
      { label: 'Kapasitas Bucket Standar', value: '0,95 m³ (opsi rock bucket 0,85 m³)' },
      { label: 'Tenaga Mesin Bersih', value: '118 kW (158 HP)' },
      { label: 'Kedalaman Gali Maksimum', value: '6.620 mm' },
      { label: 'Jangkauan Gali Maksimum', value: '9.880 mm' },
      { label: 'Lebar Track Shoe', value: '600 mm (opsi 800 mm untuk lahan lunak)' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '400 liter' },
      { label: 'Sistem Pendingin Kabin', value: 'AC kabin dengan filtrasi debu' },
    ],
    applications: [
      'Pekerjaan galian tanah besar pada proyek jalan tol, bendungan, dan kawasan industri',
      'Pemuatan tanah dan batu pecah ke dump truck kapasitas 20 ton',
      'Pembukaan lahan perkebunan dan pembuatan parit utama bervolume besar',
      'Pekerjaan penghancuran struktur beton dengan pemasangan hydraulic breaker',
    ],
    includedEquipment: [
      'Bucket gali standar 0,95 m³ berlapis pelat aus',
      'Kabin ROPS tertutup dengan kursi bersuspensi dan AC',
      'Panel monitor digital indikator suhu, tekanan oli, dan jam kerja',
      'Alarm mundur, lampu rotator keselamatan, dan cermin pandang luas',
      'Kit perkakas perawatan harian dan panduan operator berbahasa Indonesia',
    ],
  },
  {
    slug: 'excavator-tambang-30-ton',
    name: 'Excavator Tambang Kelas 30 Ton',
    category: 'excavator',
    categoryLabel: 'Excavator',
    unitClass: 'Kelas 30 Ton',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    featured: true,
    shortDescription:
      'Excavator kelas berat dengan rock bucket dan undercarriage diperkuat untuk pengupasan lapisan penutup dan pemuatan tambang terbuka.',
    overview:
      'Dirancang khusus untuk jam kerja panjang di lokasi pertambangan batu bara, nikel, dan quarry batu andesit. Struktur boom berat, sistem pendinginan berkapasitas besar, serta proteksi undercarriage membantu menjaga produktivitas pada medan abrasif.',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto Excavator Tambang Kelas 30 Ton dengan bucket batu untuk tambang terbuka',
    gallery: [
      {
        src: '/images/cat-excavator.jpg',
        alt: 'Tampak samping Excavator Tambang Kelas 30 Ton',
        caption: 'Konfigurasi tambang dengan rock bucket 1,6 m³',
      },
      {
        src: '/images/proyek-tambang.jpg',
        alt: 'Excavator bekerja memuat material ke dump truck tambang',
        caption: 'Pasangan kerja untuk dump truck kelas 30 ton',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Inspeksi pra-pengiriman di workshop Wirabaja',
        caption: 'Pemeriksaan menyeluruh sebelum mobilisasi kapal LCT atau lowbed',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '32.500 kg' },
      { label: 'Kapasitas Bucket', value: '1,60 m³' },
      { label: 'Tenaga Mesin', value: '188 kW (252 HP)' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '32.500 kg' },
      { label: 'Kapasitas Rock Bucket', value: '1,60 m³' },
      { label: 'Tenaga Mesin Bersih', value: '188 kW (252 HP)' },
      { label: 'Kedalaman Gali Maksimum', value: '7.180 mm' },
      { label: 'Jangkauan Gali Maksimum', value: '10.720 mm' },
      { label: 'Lebar Track Shoe', value: '600 mm tipe heavy duty' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '580 liter' },
      { label: 'Pelindung Kabin', value: 'Kisi pelindung depan dan atap kabin (opsional)' },
    ],
    applications: [
      'Pengupasan lapisan tanah penutup (overburden) pada tambang terbuka',
      'Pemuatan material batu bara dan bijih mineral ke dump truck besar',
      'Penggalian material keras pada lokasi quarry batu pecah',
      'Pekerjaan pemindahan tanah berskala masif pada proyek pelabuhan dan bendungan',
    ],
    includedEquipment: [
      'Rock bucket 1,60 m³ dengan gigi bucket tipe tambang',
      'Pelindung silinder boom dan pelindung penuh track roller',
      'Sistem filtrasi bahan bakar ganda untuk kondisi solar lapangan',
      'Lampu sorot kerja malam dan perlengkapan keselamatan tambang dasar',
    ],
  },
  {
    slug: 'bulldozer-kelas-160-hp',
    name: 'Bulldozer Kelas 160 HP',
    category: 'bulldozer',
    categoryLabel: 'Bulldozer',
    unitClass: 'Kelas 160 HP',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Bulldozer serbaguna dengan bilah semi-U untuk pembukaan lahan perkebunan, perataan tanah proyek, dan pembentukan badan jalan.',
    overview:
      'Bulldozer Kelas 160 HP menggabungkan daya dorong kuat dengan distribusi bobot merata sehingga stabil di tanah miring maupun lahan belum padat. Perawatan harian mudah dilakukan karena titik pengisian pelumas dan filter tersusun pada satu sisi mesin.',
    image: '/images/cat-bulldozer.jpg',
    imageAlt: 'Foto Bulldozer Kelas 160 HP dengan bilah pendorong depan',
    gallery: [
      {
        src: '/images/cat-bulldozer.jpg',
        alt: 'Tampak samping Bulldozer Kelas 160 HP',
        caption: 'Bilah pendorong kapasitas 4,5 m³ dengan transmisi power shift',
      },
      {
        src: '/images/proyek-perkebunan.jpg',
        alt: 'Bulldozer membuka lahan perkebunan',
        caption: 'Ideal untuk pembukaan blok tanam dan perataan lahan',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Persiapan unit bulldozer di workshop Pulogadung',
        caption: 'Pemeriksaan undercarriage dan bilah sebelum pengiriman',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '17.400 kg' },
      { label: 'Tenaga Mesin', value: '120 kW (160 HP)' },
      { label: 'Kapasitas Bilah', value: '4,5 m³' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '17.400 kg' },
      { label: 'Tenaga Mesin Bersih', value: '120 kW (160 HP)' },
      { label: 'Tipe dan Kapasitas Bilah', value: 'Semi-U, kapasitas 4,5 m³' },
      { label: 'Lebar Bilah', value: '3.380 mm' },
      { label: 'Lebar Track Shoe', value: '510 mm (opsi 760 mm untuk lahan rawa)' },
      { label: 'Transmisi', value: 'Power shift 3 maju, 3 mundur' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '315 liter' },
      { label: 'Opsi Tambahan Belakang', value: 'Ripper 3 gigi atau winch tarik' },
    ],
    applications: [
      'Pembukaan lahan perkebunan sawit, karet, dan hutan tanaman industri',
      'Pendorongan timbunan tanah pada proyek jalan baru dan kawasan industri',
      'Perataan material stockpile batu bara serta area pembuangan tanah',
      'Pembuatan jalur rintisan pada medan berbukit dan tanah liat',
    ],
    includedEquipment: [
      'Bilah semi-U 4,5 m³ dengan cutting edge yang dapat dibalik',
      'Kabin tertutup ber-AC dengan pelindung rangka ROPS',
      'Pelindung bawah mesin dan radiator tipe tugas berat',
      'Kotak perkakas perawatan dan dokumen serah terima unit',
    ],
  },
  {
    slug: 'bulldozer-kelas-230-hp',
    name: 'Bulldozer Kelas 230 HP dengan Ripper',
    category: 'bulldozer',
    categoryLabel: 'Bulldozer',
    unitClass: 'Kelas 230 HP',
    status: 'Bekas',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Bulldozer bertenaga besar dilengkapi ripper belakang untuk menggemburkan batuan lunak dan tanah keras di lokasi tambang.',
    overview:
      'Unit bekas pakai pilihan yang telah menjalani rekondisi sistem pendingin, pemeriksaan transmisi, dan penyetelan ketegangan rantai di workshop internal kami. Kehadiran ripper 3 gigi di belakang memudahkan pemecahan lapisan tanah keras sebelum didorong.',
    image: '/images/cat-bulldozer.jpg',
    imageAlt: 'Foto Bulldozer Kelas 230 HP dengan ripper belakang untuk tambang',
    gallery: [
      {
        src: '/images/cat-bulldozer.jpg',
        alt: 'Tampak samping Bulldozer Kelas 230 HP',
        caption: 'Konfigurasi bilah dorong besar dan ripper belakang',
      },
      {
        src: '/images/proyek-tambang.jpg',
        alt: 'Aktivitas tambang terbuka untuk pekerjaan pendorongan material',
        caption: 'Disiapkan untuk pekerjaan pendorongan lapisan keras di tambang',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan teknis bulldozer di workshop',
        caption: 'Inspeksi penuh komponen transmisi dan final drive sebelum kirim',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '24.800 kg' },
      { label: 'Tenaga Mesin', value: '172 kW (230 HP)' },
      { label: 'Kapasitas Bilah', value: '6,4 m³' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '24.800 kg (termasuk ripper)' },
      { label: 'Tenaga Mesin Bersih', value: '172 kW (230 HP)' },
      { label: 'Tipe dan Kapasitas Bilah', value: 'Semi-U, kapasitas 6,4 m³' },
      { label: 'Lebar Bilah', value: '3.720 mm' },
      { label: 'Kedalaman Ripping Maksimum', value: '695 mm (ripper 3 gigi)' },
      { label: 'Lebar Track Shoe', value: '560 mm heavy duty' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '480 liter' },
      { label: 'Status Pemeriksaan', value: 'Tersedia laporan uji tekan transmisi dan final drive' },
    ],
    applications: [
      'Pemecahan lapisan tanah keras dan batuan lunak sebelum penggalian excavator',
      'Pendorongan overburden dan penataan disposal area pada tambang terbuka',
      'Pembukaan akses jalan angkut di wilayah kehutanan dan pertambangan',
      'Pekerjaan pemindahan tanah bervolume tinggi pada proyek bendungan',
    ],
    includedEquipment: [
      'Bilah semi-U 6,4 m³ siap pakai',
      'Ripper hidrolik 3 gigi terpasang di bagian belakang',
      'Catatan inspeksi undercarriage, tekanan oli transmisi, dan radiator',
      'Servis lengkap oli dan seluruh filter sebelum dikirim ke lokasi',
    ],
  },
  {
    slug: 'wheel-loader-bucket-2-m3',
    name: 'Wheel Loader Kapasitas Bucket 2,0 m³',
    category: 'wheel-loader',
    categoryLabel: 'Wheel Loader',
    unitClass: 'Bucket 2,0 m³',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Wheel loader lincah dengan radius putar ringkas untuk bongkar muat pasir, split, dan material batching plant.',
    overview:
      'Wheel Loader Kapasitas Bucket 2,0 m³ cocok untuk area kerja dengan ruang manuver terbatas seperti batching plant beton, gudang logistik material curah, dan proyek bangunan bertingkat. Rangka artikulasi tengah membuat perpindahan arah kerja berlangsung cepat.',
    image: '/images/cat-wheel-loader.jpg',
    imageAlt: 'Foto Wheel Loader Kapasitas Bucket 2,0 m³ untuk batching plant dan proyek',
    gallery: [
      {
        src: '/images/cat-wheel-loader.jpg',
        alt: 'Tampak samping Wheel Loader Kapasitas Bucket 2,0 m³',
        caption: 'Bucket serbaguna 2,0 m³ dengan ketinggian buang 2.860 mm',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan pra-pengiriman wheel loader di workshop',
        caption: 'Pengujian rem, sistem kemudi artikulasi, dan tekanan hidrolik',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Dukungan pengangkutan material pada proyek jalan',
        caption: 'Mendukung pasokan agregat pada proyek infrastruktur',
      },
    ],
    keySpecs: [
      { label: 'Kapasitas Bucket', value: '2,0 m³' },
      { label: 'Beban Angkut', value: '3.200 kg' },
      { label: 'Tenaga Mesin', value: '92 kW (123 HP)' },
    ],
    fullSpecs: [
      { label: 'Kapasitas Bucket', value: '2,0 m³' },
      { label: 'Beban Angkut Terukur', value: '3.200 kg' },
      { label: 'Berat Operasi', value: '10.600 kg' },
      { label: 'Tenaga Mesin Bersih', value: '92 kW (123 HP)' },
      { label: 'Tinggi Buang Maksimum (45 derajat)', value: '2.860 mm' },
      { label: 'Ukuran Ban', value: '17.5-25 PR16' },
      { label: 'Waktu Siklus Total', value: '9,4 detik' },
      { label: 'Opsi Attachment', value: 'Pallet fork dan log grapple (opsional)' },
    ],
    applications: [
      'Pemuatan pasir dan batu split ke hopper batching plant beton',
      'Bongkar muat material curah di kawasan pergudangan dan pelabuhan',
      'Pemuatan material timbunan ke truk engkel maupun dump truck 6 roda',
      'Pembersihan dan penataan area kerja konstruksi gedung',
    ],
    includedEquipment: [
      'Bucket serbaguna 2,0 m³ lengkap dengan pelat tepi potong',
      'Kabin ber-AC dengan visibilitas lebar ke ujung bucket',
      'Tuas kendali pilot hidrolik yang ringan dioperasikan',
      'Ban tugas berat 17.5-25 serta lampu kerja depan dan belakang',
    ],
  },
  {
    slug: 'wheel-loader-bucket-3-m3',
    name: 'Wheel Loader Kapasitas Bucket 3,0 m³',
    category: 'wheel-loader',
    categoryLabel: 'Wheel Loader',
    unitClass: 'Bucket 3,0 m³',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    featured: true,
    shortDescription:
      'Wheel loader berkapasitas besar untuk pemuatan batu bara, batu pecah quarry, dan material proyek ke dump truck 10 roda.',
    overview:
      'Wheel Loader Kapasitas Bucket 3,0 m³ dirancang untuk siklus pemuatan berulang di stockpile batu bara, instalasi stone crusher, dan pelabuhan curah. Tenaga mesin 220 HP dipadukan dengan gaya dobrak tinggi agar pengisian bucket tetap penuh pada tumpukan material padat.',
    image: '/images/cat-wheel-loader.jpg',
    imageAlt: 'Foto Wheel Loader Kapasitas Bucket 3,0 m³ untuk stockpile dan quarry',
    gallery: [
      {
        src: '/images/cat-wheel-loader.jpg',
        alt: 'Tampak samping Wheel Loader Kapasitas Bucket 3,0 m³',
        caption: 'Bucket 3,0 m³ untuk pemuatan cepat ke dump truck kapasitas besar',
      },
      {
        src: '/images/proyek-tambang.jpg',
        alt: 'Operasional stockpile dan pengangkutan material tambang',
        caption: 'Efektif untuk stockpile batu bara dan area stone crusher',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Uji operasional wheel loader di workshop Pulogadung',
        caption: 'Pemeriksaan akhir sistem rem basah dan pelumasan gardan',
      },
    ],
    keySpecs: [
      { label: 'Kapasitas Bucket', value: '3,0 m³' },
      { label: 'Beban Angkut', value: '5.000 kg' },
      { label: 'Tenaga Mesin', value: '162 kW (217 HP)' },
    ],
    fullSpecs: [
      { label: 'Kapasitas Bucket', value: '3,0 m³ (opsi coal bucket 4,2 m³)' },
      { label: 'Beban Angkut Terukur', value: '5.000 kg' },
      { label: 'Berat Operasi', value: '17.100 kg' },
      { label: 'Tenaga Mesin Bersih', value: '162 kW (217 HP)' },
      { label: 'Tinggi Buang Maksimum (45 derajat)', value: '3.120 mm' },
      { label: 'Ukuran Ban', value: '23.5-25 L3 heavy duty' },
      { label: 'Gaya Dobrak (Breakout Force)', value: '165 kN' },
      { label: 'Sistem Rem', value: 'Cakram kaliper berbantu udara pada empat roda' },
    ],
    applications: [
      'Pemuatan batu pecah dari stockpile stone crusher ke dump truck 10 roda',
      'Penataan dan pemuatan batu bara di pelabuhan serta stockpile tambang',
      'Pengumpanan material curah pada pabrik semen dan pabrik pengolahan mineral',
      'Penanganan material tanah timbunan proyek infrastruktur skala besar',
    ],
    includedEquipment: [
      'Bucket material berat 3,0 m³ dengan pelindung samping dan kuku bucket',
      'Kabin kedap debu ber-AC dengan kamera mundur',
      'Sistem pemutus arus baterai (battery disconnect switch) untuk keselamatan tambang',
      'Alat pemadam api ringan kabin dan buku perawatan berkala',
    ],
  },
  {
    slug: 'dump-truck-20-ton',
    name: 'Dump Truck Angkut Kelas 20 Ton',
    category: 'dump-truck',
    categoryLabel: 'Dump Truck',
    unitClass: 'Kapasitas 20 Ton',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Dump truck penggerak 6x4 berbak baja tebal untuk pengangkutan tanah galian, pasir, dan agregat proyek konstruksi maupun jalan.',
    overview:
      'Dump Truck Angkut Kelas 20 Ton menghadirkan rangka sasis berlapis dan silinder jungkit hidrolik depan yang stabil saat pembongkaran muatan. Penggerak 6x4 dengan reduksi hub belakang menjaga traksi saat melintasi jalan proyek berlumpur atau menanjak.',
    image: '/images/cat-dump-truck.jpg',
    imageAlt: 'Foto Dump Truck Angkut Kelas 20 Ton penggerak 6x4',
    gallery: [
      {
        src: '/images/cat-dump-truck.jpg',
        alt: 'Tampak samping Dump Truck Angkut Kelas 20 Ton',
        caption: 'Bak baja 16 m³ dengan sistem jungkit silinder hidrolik depan',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Pekerjaan infrastruktur jalan dengan dukungan armada angkut',
        caption: 'Cocok untuk pasokan agregat dan pembuangan tanah galian',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan sistem rem dan hidrolik jungkit di workshop',
        caption: 'Uji beban silinder jungkit dan pengereman sebelum serah terima',
      },
    ],
    keySpecs: [
      { label: 'Daya Angkut', value: '20 Ton' },
      { label: 'Volume Bak', value: '16 m³' },
      { label: 'Penggerak', value: '6x4 (280 HP)' },
    ],
    fullSpecs: [
      { label: 'Daya Angkut Operasional', value: '20.000 kg' },
      { label: 'Volume Bak Baja', value: '16 m³ (pelat lantai 8 mm, dinding 6 mm)' },
      { label: 'Konfigurasi Penggerak', value: '6x4 dengan pengunci diferensial' },
      { label: 'Tenaga Mesin', value: '206 kW (280 HP)' },
      { label: 'Transmisi', value: 'Manual 10 percepatan maju, 2 mundur' },
      { label: 'Sistem Jungkit', value: 'Silinder hidrolik teleskopik depan' },
      { label: 'Ukuran Ban', value: '11.00R20 tipe proyek' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '350 liter' },
    ],
    applications: [
      'Pengangkutan tanah galian dan pembuangan lumpur proyek gedung maupun kawasan industri',
      'Distribusi batu pecah, sirtu, dan pasir dari quarry ke lokasi proyek jalan',
      'Pengangkutan material timbunan untuk pematangan lahan pergudangan',
      'Angkutan material curah di dalam area pabrik dan pelabuhan',
    ],
    includedEquipment: [
      'Bak dump baja siap pakai lengkap pintu belakang otomatis',
      'Kabin pengemudi ber-AC dengan tempat istirahat singkat',
      'Ban cadangan lengkap dengan dongkrak hidrolik dan kunci roda',
      'Lampu kerja belakang dan alarm mundur',
    ],
  },
  {
    slug: 'dump-truck-tambang-30-ton',
    name: 'Dump Truck Tambang Kelas 30 Ton',
    category: 'dump-truck',
    categoryLabel: 'Dump Truck',
    unitClass: 'Kapasitas 30 Ton',
    status: 'Bekas',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Armada angkut tambang 6x4 tugas berat dengan bak berpelat tahan aus untuk mengangkut overburden dan batu bara di jalur hauling.',
    overview:
      'Dump Truck Tambang Kelas 30 Ton dalam kondisi bekas pakai terawat, telah menjalani pengecekan rangka, gardan belakang, pegas daun, serta uji sistem pengereman udara. Tepat untuk menambah kapasitas hauling secara cepat tanpa menunggu waktu inden unit baru.',
    image: '/images/cat-dump-truck.jpg',
    imageAlt: 'Foto Dump Truck Tambang Kelas 30 Ton kondisi bekas siap operasi',
    gallery: [
      {
        src: '/images/cat-dump-truck.jpg',
        alt: 'Tampak samping Dump Truck Tambang Kelas 30 Ton',
        caption: 'Bak kapasitas 22 m³ berpelat tahan benturan material tambang',
      },
      {
        src: '/images/proyek-tambang.jpg',
        alt: 'Operasional hauling di area tambang terbuka',
        caption: 'Dirancang berpasangan dengan excavator kelas 30 ton',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pengecekan gardan dan rem di workshop Pulogadung',
        caption: 'Laporan hasil pemeriksaan sasis dan sistem rem tersedia di yard',
      },
    ],
    keySpecs: [
      { label: 'Daya Angkut', value: '30 Ton' },
      { label: 'Volume Bak', value: '22 m³' },
      { label: 'Tenaga Mesin', value: '279 kW (380 HP)' },
    ],
    fullSpecs: [
      { label: 'Daya Angkut Operasional', value: '30.000 kg' },
      { label: 'Volume Bak Tambang', value: '22 m³ (pelat lantai 10 mm tahan aus)' },
      { label: 'Konfigurasi Penggerak', value: '6x4 heavy duty hub reduction' },
      { label: 'Tenaga Mesin', value: '279 kW (380 HP)' },
      { label: 'Transmisi', value: 'Manual 12 percepatan maju, 2 mundur' },
      { label: 'Sistem Pengereman', value: 'Rem udara sirkuit ganda + rem gas buang' },
      { label: 'Ukuran Ban', value: '12.00R20 tipe tambang' },
      { label: 'Status Pemeriksaan', value: 'Lulus pengecekan transmisi, gardan, dan silinder jungkit' },
    ],
    applications: [
      'Pengangkutan overburden dari area penggalian ke lokasi disposal tambang',
      'Angkutan batu bara dari pit menuju stockpile atau pelabuhan muat',
      'Pengangkutan batu gunung pada proyek reklamasi dan pembangunan pelabuhan',
      'Pengangkutan material tanah keras pada proyek bendungan skala besar',
    ],
    includedEquipment: [
      'Bak tambang 22 m³ dengan pelindung kanopi kabin',
      'Lampu rotator keselamatan dan tiang bendera tambang (buggy whip)',
      'Penggantian seluruh oli mesin, transmisi, gardan, dan filter sebelum kirim',
      'Catatan inspeksi menyeluruh dari mekanik workshop Wirabaja',
    ],
  },
  {
    slug: 'motor-grader-140-hp',
    name: 'Motor Grader Bilah 3,7 Meter',
    category: 'motor-grader',
    categoryLabel: 'Motor Grader',
    unitClass: 'Kelas 140 HP',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Motor grader presisi dengan lebar bilah 3,7 meter untuk perataan lapisan agregat, pembentukan bahu jalan, dan pembuatan parit tepi.',
    overview:
      'Motor Grader Bilah 3,7 Meter menghadirkan kendali putaran circle blade yang halus untuk menghasilkan elevasi permukaan jalan yang konsisten. Ukuran sasisnya memudahkan pergerakan di proyek jalan kabupaten, kawasan pergudangan, maupun perumahan.',
    image: '/images/cat-motor-grader.jpg',
    imageAlt: 'Foto Motor Grader Bilah 3,7 Meter untuk perataan badan jalan',
    gallery: [
      {
        src: '/images/cat-motor-grader.jpg',
        alt: 'Tampak samping Motor Grader Bilah 3,7 Meter',
        caption: 'Bilah tengah 3.660 mm dengan rentang sudut potong lebar',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Motor grader bekerja meratakan lapisan badan jalan',
        caption: 'Pembentukan kemiringan melintang dan parit sisi jalan',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Kalibrasi bilah dan sistem hidrolik grader di workshop',
        caption: 'Pengujian pergerakan circle blade dan sistem artikulasi',
      },
    ],
    keySpecs: [
      { label: 'Lebar Bilah', value: '3.660 mm' },
      { label: 'Berat Operasi', value: '13.800 kg' },
      { label: 'Tenaga Mesin', value: '105 kW (140 HP)' },
    ],
    fullSpecs: [
      { label: 'Lebar Bilah Tengah', value: '3.660 mm x 610 mm' },
      { label: 'Berat Operasi', value: '13.800 kg' },
      { label: 'Tenaga Mesin Bersih', value: '105 kW (140 HP)' },
      { label: 'Sudut Artikulasi Rangka', value: '20 derajat kiri dan kanan' },
      { label: 'Sudut Kemiringan Roda Depan', value: '17 derajat kiri dan kanan' },
      { label: 'Transmisi', value: 'Power shift 6 maju, 3 mundur' },
      { label: 'Ukuran Ban', value: '13.00-24 tipe grader' },
      { label: 'Opsi Tambahan', value: 'Scarifier depan atau ripper belakang' },
    ],
    applications: [
      'Perataan lapisan pondasi agregat kelas A dan kelas B sebelum pengaspalan',
      'Pembentukan badan jalan kawasan industri, pelabuhan, dan perumahan',
      'Pembuatan dan perapian saluran parit tepi jalan secara cepat',
      'Perawatan rutin jalan tanah pada kawasan perkebunan',
    ],
    includedEquipment: [
      'Bilah perata 3,66 meter dengan pisau ujung yang mudah diganti',
      'Kabin operator dengan jendela rendah untuk pandangan langsung ke ujung bilah',
      'Pendingin udara kabin dan lampu kerja malam',
      'Perlengkapan kunci perawatan harian dan panduan pengoperasian',
    ],
  },
  {
    slug: 'motor-grader-180-hp',
    name: 'Motor Grader Bilah 4,3 Meter',
    category: 'motor-grader',
    categoryLabel: 'Motor Grader',
    unitClass: 'Kelas 180 HP',
    status: 'Bekas',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Motor grader kelas berat dengan bilah 4,3 meter dan ripper belakang untuk perawatan jalan angkut tambang serta proyek jalan tol.',
    overview:
      'Motor Grader Bilah 4,3 Meter bekas siap kerja ini memiliki jangkauan perataan lebih lebar sehingga mengurangi jumlah lintasan pada jalur hauling tambang maupun badan jalan tol. Telah melewati pengecekan circle gear, tandem drive, dan keausan pisau bilah.',
    image: '/images/cat-motor-grader.jpg',
    imageAlt: 'Foto Motor Grader Bilah 4,3 Meter untuk jalan hauling tambang dan tol',
    gallery: [
      {
        src: '/images/cat-motor-grader.jpg',
        alt: 'Tampak samping Motor Grader Bilah 4,3 Meter',
        caption: 'Lebar bilah 4.270 mm untuk perawatan jalan angkut lebar',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Pekerjaan pembentukan permukaan jalan proyek besar',
        caption: 'Menjaga kelayakan permukaan hauling road dan badan jalan tol',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Inspeksi circle gear grader di workshop',
        caption: 'Pemeriksaan rantai tandem dan celah circle sebelum pengiriman',
      },
    ],
    keySpecs: [
      { label: 'Lebar Bilah', value: '4.270 mm' },
      { label: 'Berat Operasi', value: '16.500 kg' },
      { label: 'Tenaga Mesin', value: '136 kW (182 HP)' },
    ],
    fullSpecs: [
      { label: 'Lebar Bilah Tengah', value: '4.270 mm x 640 mm' },
      { label: 'Berat Operasi', value: '16.500 kg' },
      { label: 'Tenaga Mesin Bersih', value: '136 kW (182 HP)' },
      { label: 'Sudut Artikulasi Rangka', value: '20 derajat kiri dan kanan' },
      { label: 'Transmisi', value: 'Power shift 8 maju, 4 mundur' },
      { label: 'Ukuran Ban', value: '17.5-25 tipe grader heavy duty' },
      { label: 'Kelengkapan Belakang', value: 'Ripper 5 gigi terpasang' },
      { label: 'Status Pemeriksaan', value: 'Lulus pengecekan tandem drive dan circle blade' },
    ],
    applications: [
      'Perawatan harian hauling road tambang batu bara dan nikel agar ban dump truck awet',
      'Pembentukan lapisan pondasi pada proyek jalan tol dan landasan pacu',
      'Pengupasan lapisan jalan rusak memakai ripper belakang sebelum pemadatan ulang',
      'Perataan area parkir kendaraan berat di kawasan logistik dan pelabuhan',
    ],
    includedEquipment: [
      'Bilah perata 4,27 meter dengan pisau potong baru terpasang',
      'Ripper belakang 5 gigi untuk menggemburkan permukaan padat',
      'Laporan inspeksi mesin, transmisi, dan sistem hidrolik',
      'Penggantian seluruh pelumas dan filter sebelum serah terima',
    ],
  },
  {
    slug: 'vibratory-compactor-12-ton',
    name: 'Vibratory Compactor Kelas 12 Ton',
    category: 'compactor',
    categoryLabel: 'Compactor',
    unitClass: 'Kelas 12 Ton',
    status: 'Baru',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Pemadat getar drum baja halus kelas 12 ton dengan frekuensi getar ganda untuk pemadatan tanah dasar, timbunan jalan, dan lantai gudang.',
    overview:
      'Vibratory Compactor Kelas 12 Ton memberikan gaya sentrifugal tinggi dengan dua pilihan amplitudo sehingga efektif untuk pemadatan lapisan tebal maupun perapian permukaan akhir. Penggerak hidrostatis membuat perpindahan arah maju dan mundur berlangsung halus tanpa merusak permukaan lapisan.',
    image: '/images/cat-compactor.jpg',
    imageAlt: 'Foto Vibratory Compactor Kelas 12 Ton berdrum baja halus',
    gallery: [
      {
        src: '/images/cat-compactor.jpg',
        alt: 'Tampak samping Vibratory Compactor Kelas 12 Ton',
        caption: 'Drum baja lebar 2.130 mm dengan dua pilihan amplitudo getar',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Pemadatan lapisan badan jalan bersama motor grader',
        caption: 'Pasangan kerja utama motor grader pada proyek jalan',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pengujian motor getar compactor di workshop',
        caption: 'Uji sistem getar dan kelurusan drum sebelum pengiriman',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '12.100 kg' },
      { label: 'Lebar Drum', value: '2.130 mm' },
      { label: 'Gaya Sentrifugal', value: '260 / 155 kN' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '12.100 kg' },
      { label: 'Beban Statis Drum Depan', value: '6.800 kg' },
      { label: 'Lebar Drum Baja', value: '2.130 mm' },
      { label: 'Frekuensi Getar', value: '30 / 35 Hz' },
      { label: 'Gaya Sentrifugal (Tinggi / Rendah)', value: '260 kN / 155 kN' },
      { label: 'Tenaga Mesin Bersih', value: '93 kW (125 HP)' },
      { label: 'Kemampuan Tanjak', value: '38 persen' },
      { label: 'Kapasitas Tangki Bahan Bakar', value: '230 liter' },
    ],
    applications: [
      'Pemadatan tanah dasar (subgrade) dan lapis pondasi agregat proyek jalan',
      'Pemadatan lantai kerja kawasan pergudangan, pabrik, dan lapangan peti kemas',
      'Pemadatan timbunan bahu jalan dan area parkir kendaraan berat',
      'Pekerjaan pematangan tanah pada pengembangan kawasan perumahan',
    ],
    includedEquipment: [
      'Drum baja halus lebar 2.130 mm dengan bilah pembersih tanah depan dan belakang',
      'Kabin ROPS ber-AC dengan peredam getaran dudukan kabin',
      'Sakelar pemilih amplitudo getar rendah dan tinggi di konsol operator',
      'Lampu rotator, alarm mundur, dan dokumen panduan servis',
    ],
  },
  {
    slug: 'padfoot-compactor-16-ton',
    name: 'Padfoot Compactor Kelas 16 Ton',
    category: 'compactor',
    categoryLabel: 'Compactor',
    unitClass: 'Kelas 16 Ton',
    status: 'Bekas',
    priceNote: 'Hubungi untuk harga',
    options: ['Beli', 'Sewa'],
    shortDescription:
      'Compactor drum berkaki (padfoot) kelas 16 ton untuk pemadatan tanah lempung, tanah kohesif berkadar air tinggi, dan tanggul bendungan.',
    overview:
      'Padfoot Compactor Kelas 16 Ton bekas siap kerja ini ideal untuk medan tanah liat yang sulit dipadatkan memakai drum halus. Kaki baja pada drum menembus permukaan tanah untuk meremas rongga udara dari bawah ke atas dan mempercepat pengeringan lapisan timbunan.',
    image: '/images/cat-compactor.jpg',
    imageAlt: 'Foto Padfoot Compactor Kelas 16 Ton untuk pemadatan tanah lempung',
    gallery: [
      {
        src: '/images/cat-compactor.jpg',
        alt: 'Tampak samping Padfoot Compactor Kelas 16 Ton',
        caption: 'Konfigurasi drum berkaki untuk pemadatan tanah lempung dan tanggul',
      },
      {
        src: '/images/proyek-infrastruktur.jpg',
        alt: 'Pekerjaan pemadatan tanah timbunan infrastruktur',
        caption: 'Efektif pada timbunan badan jalan tol dan inti bendungan',
      },
      {
        src: '/images/workshop-inspeksi.jpg',
        alt: 'Pemeriksaan bearing drum getar di workshop',
        caption: 'Lulus pengecekan bearing vibrator dan pompa penggerak',
      },
    ],
    keySpecs: [
      { label: 'Berat Operasi', value: '16.200 kg' },
      { label: 'Lebar Drum', value: '2.130 mm' },
      { label: 'Gaya Sentrifugal', value: '310 / 195 kN' },
    ],
    fullSpecs: [
      { label: 'Berat Operasi', value: '16.200 kg' },
      { label: 'Tipe Drum', value: 'Padfoot (drum berkaki baja 130 titik)' },
      { label: 'Lebar Drum', value: '2.130 mm' },
      { label: 'Frekuensi Getar', value: '28 / 33 Hz' },
      { label: 'Gaya Sentrifugal (Tinggi / Rendah)', value: '310 kN / 195 kN' },
      { label: 'Tenaga Mesin Bersih', value: '118 kW (158 HP)' },
      { label: 'Kemampuan Tanjak', value: '42 persen' },
      { label: 'Status Pemeriksaan', value: 'Lulus pengecekan sistem getar dan pelumasan eksentrik' },
    ],
    applications: [
      'Pemadatan lapisan timbunan tanah lempung dan tanah kohesif pada jalan tol',
      'Pemadatan tubuh tanggul, waduk, dan area reklamasi berpasir lempung',
      'Penyiapan dasar jalan angkut pada proyek perkebunan dan tambang',
      'Pemadatan lapisan dalam sebelum penyelesaian akhir memakai smooth drum',
    ],
    includedEquipment: [
      'Drum padfoot dengan pembersih sela kaki baja terpasang',
      'Laporan pengecekan tekanan pompa hidrostatis dan suhu bearing vibrator',
      'Servis oli mesin, oli vibrator, dan seluruh filter sebelum dikirim',
      'Kabin ber-AC lengkap lampu kerja dan alarm mundur',
    ],
  },
];

export function getProductBySlug(slug: string): ProductUnit | undefined {
  return products.find((item) => item.slug === slug);
}

export function getRelatedProducts(current: ProductUnit, limit = 3): ProductUnit[] {
  const sameCategory = products.filter(
    (item) => item.category === current.category && item.slug !== current.slug
  );
  const others = products.filter(
    (item) => item.category !== current.category && item.slug !== current.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}