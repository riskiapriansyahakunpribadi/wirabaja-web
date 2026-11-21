export type ProjectSectorSlug =
  | 'pertambangan'
  | 'infrastruktur'
  | 'perkebunan'
  | 'konstruksi'
  | 'kehutanan'
  | 'pergudangan';

export interface ProjectSectorMeta {
  slug: ProjectSectorSlug;
  name: string;
}

export interface ProjectCase {
  id: string;
  sector: ProjectSectorSlug;
  sectorLabel: string;
  title: string;
  location: string;
  serviceMode: string;
  image: string;
  imageAlt: string;
  summary: string;
  clientNeed: string;
  unitsSupplied: string[];
  outcome: string;
  relatedProducts: { label: string; href: string }[];
}

/*
 * UBAH / TAMBAH: daftar sektor untuk tombol filter pada halaman Proyek.
 * EFEK: memperbarui bar filter sektor di /proyek.
 * CARA: jika menambah sektor baru, tambahkan slug-nya ke tipe ProjectSectorSlug di atas lalu masukkan ke array ini.
 */
export const projectSectors: ProjectSectorMeta[] = [
  { slug: 'pertambangan', name: 'Pertambangan' },
  { slug: 'infrastruktur', name: 'Infrastruktur' },
  { slug: 'perkebunan', name: 'Perkebunan' },
  { slug: 'konstruksi', name: 'Konstruksi' },
  { slug: 'kehutanan', name: 'Kehutanan' },
  { slug: 'pergudangan', name: 'Pergudangan' },
];

/*
 * UBAH / TAMBAH: daftar proyek yang ditampilkan di halaman /proyek.
 * CATATAN: tulis tanpa menyebut nama klien nyata dan tanpa angka klaim yang tidak dapat diverifikasi.
 * EFEK: menambah satu objek otomatis menampilkan kartu proyek baru dan ikut tersaring pada filter sektor.
 * CARA: salin satu blok di bawah, beri `id` unik (huruf kecil tanpa spasi), isi sektor yang sesuai,
 *       lalu perbarui gambar jika sudah memiliki foto lapangan asli.
 */
export const projects: ProjectCase[] = [
  {
    id: 'pengupasan-tambang-kaltim',
    sector: 'pertambangan',
    sectorLabel: 'Pertambangan',
    title: 'Pasokan Unit Pengupasan Lapisan Tanah Tambang Terbuka',
    location: 'Kalimantan Timur',
    serviceMode: 'Penjualan Unit dan Pasokan Suku Cadang',
    image: '/images/proyek-tambang.jpg',
    imageAlt: 'Foto excavator tambang dan dump truck bekerja di lokasi pengupasan tanah terbuka',
    summary:
      'Pengadaan paket excavator kelas berat dan armada angkut untuk mendukung pengupasan overburden serta pengiriman material ke area disposal.',
    clientNeed:
      'Pelaksana tambang terbuka membutuhkan tambahan alat gali berbucket batu dan dump truck angkut berat yang siap kerja panjang di jalur berlumpur dan menanjak, lengkap dengan kesiapan suku cadang filter serta kuku bucket di awal operasi.',
    unitsSupplied: [
      'Excavator Tambang Kelas 30 Ton dengan rock bucket dan pelindung undercarriage',
      'Dump Truck Tambang Kelas 30 Ton penggerak 6x4 berbak baja tebal',
      'Paket suku cadang perawatan berkala awal (filter, seal hidrolik, dan kuku bucket)',
    ],
    outcome:
      'Seluruh unit diberangkatkan melalui kapal LCT sesudah melewati uji beban di yard Pulogadung. Pengoperasian di pit berjalan sesuai jadwal pengupasan dengan pasokan komponen perawatan rutin yang dikirim berkala dari gudang kami.',
    relatedProducts: [
      { label: 'Excavator Tambang Kelas 30 Ton', href: '/produk/excavator-tambang-30-ton' },
      { label: 'Dump Truck Tambang Kelas 30 Ton', href: '/produk/dump-truck-tambang-30-ton' },
    ],
  },
  {
    id: 'badan-jalan-jabar',
    sector: 'infrastruktur',
    sectorLabel: 'Infrastruktur',
    title: 'Pembentukan dan Pemadatan Badan Jalan Akses Kawasan',
    location: 'Jawa Barat',
    serviceMode: 'Penyewaan Unit dan Perawatan Berkala',
    image: '/images/proyek-infrastruktur.jpg',
    imageAlt: 'Foto motor grader dan vibratory compactor membentuk serta memadatkan badan jalan',
    summary:
      'Penyewaan paket alat perata dan pemadat untuk pekerjaan pembentukan elevasi jalan, lapisan pondasi agregat, dan parit tepi jalan.',
    clientNeed:
      'Kontraktor pekerjaan jalan memerlukan kombinasi grader berbilah lebar dan compactor getar untuk mengejar tahapan penyiapan lapisan pondasi sebelum pekerjaan pengaspalan dimulai, tanpa perlu membeli aset baru untuk durasi kontrak terbatas.',
    unitsSupplied: [
      'Motor Grader Bilah 4,3 Meter lengkap ripper belakang',
      'Vibratory Compactor Kelas 12 Ton drum baja halus dengan frekuensi getar ganda',
      'Layanan perawatan berkala lapangan sesuai interval jam operasi',
    ],
    outcome:
      'Tahap pembentukan kemiringan melintang, perataan agregat, dan pemadatan badan jalan terlaksana lancar sesuai tahapan uji kepadatan proyek. Mekanik lapangan melakukan servis berkala di luar jam kerja utama sehingga jadwal pengaspalan tidak tertunda.',
    relatedProducts: [
      { label: 'Motor Grader Bilah 4,3 Meter', href: '/produk/motor-grader-180-hp' },
      { label: 'Vibratory Compactor Kelas 12 Ton', href: '/produk/vibratory-compactor-12-ton' },
    ],
  },
  {
    id: 'pembukaan-lahan-riau',
    sector: 'perkebunan',
    sectorLabel: 'Perkebunan',
    title: 'Pembukaan Lahan dan Pembuatan Parit Drainase Perkebunan',
    location: 'Riau, Sumatra',
    serviceMode: 'Penjualan Unit Baru',
    image: '/images/proyek-perkebunan.jpg',
    imageAlt: 'Foto bulldozer membuka lahan dan meratakan jalur pada area perkebunan',
    summary:
      'Pengadaan bulldozer dan excavator untuk penataan blok tanam baru, perataan jalan kebun, serta pembuatan jaringan saluran air utama.',
    clientNeed:
      'Pengelola lahan perkebunan memerlukan unit yang stabil di tanah lunak dan mudah dirawat oleh tim mekanik kebun, khususnya untuk pekerjaan pembukaan blok, perataan jalur panen, dan penggalian parit pembuangan air.',
    unitsSupplied: [
      'Bulldozer Kelas 160 HP dengan bilah semi-U dan pelindung radiator tugas berat',
      'Excavator Kelas 20 Ton dengan pilihan track shoe lebar untuk daya apung lebih baik',
      'Pelatihan singkat pengecekan harian bagi operator dan mekanik lokasi saat serah terima',
    ],
    outcome:
      'Unit tiba sesuai urutan pembukaan blok tanam dan langsung dipakai untuk pembersihan lahan serta penggalian parit drainase. Panduan perawatan harian dan daftar kode suku cadang membantu tim kebun menjaga kesiapan alat secara mandiri.',
    relatedProducts: [
      { label: 'Bulldozer Kelas 160 HP', href: '/produk/bulldozer-kelas-160-hp' },
      { label: 'Excavator Kelas 20 Ton', href: '/produk/excavator-kelas-20-ton' },
    ],
  },
  {
    id: 'pematangan-lahan-bekasi',
    sector: 'konstruksi',
    sectorLabel: 'Konstruksi',
    title: 'Penggalian Fondasi dan Pematangan Kavling Komersial',
    location: 'Bekasi, Jawa Barat',
    serviceMode: 'Penyewaan Unit Proyek',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto excavator hidrolik untuk galian fondasi dan pematangan lahan konstruksi',
    summary:
      'Dukungan alat gali dan angkutan tanah untuk penggalian ruang bawah tanah, pemindahan tanah galian, serta penataan saluran proyek.',
    clientNeed:
      'Proyek bangunan komersial di kawasan padat membutuhkan excavator ukuran ringkas untuk saluran tepi dan excavator kelas menengah untuk galian utama, serta dump truck yang mampu bermanuver di akses gerbang proyek perkotaan.',
    unitsSupplied: [
      'Excavator Mini Kelas 6 Ton untuk pekerjaan parit dan utilitas dekat batas bangunan',
      'Excavator Kelas 20 Ton untuk penggalian tanah utama dan pemuatan ke truk',
      'Dump Truck Angkut Kelas 20 Ton untuk pembuangan tanah galian keluar lokasi',
    ],
    outcome:
      'Pembagian tugas antara excavator mini dan kelas 20 ton menjaga kelancaran pekerjaan di area tepi maupun tengah lahan. Mobilisasi dari yard Pulogadung yang berjarak dekat turut mempercepat penggantian komponen selang hidrolik saat dibutuhkan.',
    relatedProducts: [
      { label: 'Excavator Mini Kelas 6 Ton', href: '/produk/excavator-mini-6-ton' },
      { label: 'Dump Truck Angkut Kelas 20 Ton', href: '/produk/dump-truck-20-ton' },
    ],
  },
  {
    id: 'jalan-akses-kehutanan-kalteng',
    sector: 'kehutanan',
    sectorLabel: 'Kehutanan',
    title: 'Pembukaan dan Perawatan Jalur Akses Angkut Kehutanan',
    location: 'Kalimantan Tengah',
    serviceMode: 'Penjualan Unit Bekas Terinspeksi',
    image: '/images/cat-bulldozer.jpg',
    imageAlt: 'Foto bulldozer bertenaga besar dengan ripper untuk jalur akses kehutanan',
    summary:
      'Pengadaan unit bekas pakai terinspeksi untuk membuka jalur rintisan dan merawat permukaan jalan angkut di area kerja berbukit.',
    clientNeed:
      'Operasional kehutanan memerlukan unit dorong bertenaga besar dengan ripper belakang serta motor grader tangguh yang siap dikirim cepat tanpa waktu tunggu inden pabrik, disertai riwayat pemeriksaan mekanis yang terbuka.',
    unitsSupplied: [
      'Bulldozer Kelas 230 HP dengan Ripper untuk pembukaan jalur dan pemecahan lapisan keras',
      'Motor Grader Bilah 3,7 Meter untuk perapian permukaan jalan angkut dan parit sisi',
      'Dokumentasi hasil inspeksi transmisi, final drive, dan sistem pendingin dari workshop',
    ],
    outcome:
      'Tim teknis pembeli meninjau langsung hasil uji tekan dan pengujian gerak unit di Pulogadung sebelum pengiriman. Kedua unit beroperasi menjaga akses jalur angkut tetap layak dilalui kendaraan logistik pada musim hujan maupun kemarau.',
    relatedProducts: [
      { label: 'Bulldozer Kelas 230 HP dengan Ripper', href: '/produk/bulldozer-kelas-230-hp' },
      { label: 'Motor Grader Bilah 3,7 Meter', href: '/produk/motor-grader-140-hp' },
    ],
  },
  {
    id: 'pemadatan-kawasan-gudang-karawang',
    sector: 'pergudangan',
    sectorLabel: 'Pergudangan',
    title: 'Penyiapan Lantai Kerja dan Stockpile Kawasan Pergudangan',
    location: 'Karawang, Jawa Barat',
    serviceMode: 'Penyewaan Unit dan Dukungan Mekanik',
    image: '/images/cat-wheel-loader.jpg',
    imageAlt: 'Foto wheel loader memuat material curah pada area persiapan kawasan pergudangan',
    summary:
      'Penyediaan wheel loader dan padfoot compactor untuk penataan timbunan tanah lempung, pengumpanan agregat, serta pemadatan lantai kerja gudang.',
    clientNeed:
      'Pengembangan area pergudangan di atas lahan tanah lempung membutuhkan pemadatan lapisan dalam memakai drum berkaki serta alat muat roda karet yang cepat memindahkan sirtu dan pasir urug ke titik hamparan.',
    unitsSupplied: [
      'Padfoot Compactor Kelas 16 Ton untuk pemadatan lapisan timbunan tanah lempung',
      'Wheel Loader Kapasitas Bucket 3,0 m³ untuk pemuatan agregat dan penataan stockpile',
      'Kunjungan mekanik terjadwal untuk pengecekan sistem getar dan pelumasan harian',
    ],
    outcome:
      'Kombinasi pemadatan drum berkaki dan pemindahan material yang ritmis mempercepat kesiapan hamparan lantai kerja sebelum pengecoran beton. Seluruh armada beroperasi stabil hingga tahap serah terima lahan selesai.',
    relatedProducts: [
      { label: 'Padfoot Compactor Kelas 16 Ton', href: '/produk/padfoot-compactor-16-ton' },
      { label: 'Wheel Loader Kapasitas Bucket 3,0 m³', href: '/produk/wheel-loader-bucket-3-m3' },
    ],
  },
];