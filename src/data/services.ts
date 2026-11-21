import type { IconName } from '@/types/icon';

export interface ServiceItem {
  id: 'penjualan' | 'penyewaan' | 'servis' | 'suku-cadang' | 'pembiayaan';
  number: string;
  icon: IconName;
  title: string;
  shortTitle: string;
  summary: string;
  details: string;
  scope: string[];
  requirements: string[];
  steps: string[];
  ctaLabel: string;
  ctaHref: string;
  needParam: 'Beli' | 'Sewa' | 'Servis' | 'Suku Cadang';
  image: string;
  imageAlt: string;
}

export interface BuyVsRentRow {
  aspect: string;
  buy: string;
  rent: string;
}

/*
 * UBAH / TAMBAH: rincian lima layanan utama PT Wirabaja Mesin Nusantara.
 * EFEK: memperbarui seluruh bagian layanan pada halaman /layanan.
 * CARA: edit teks di dalam objek yang ada, atau salin satu blok lengkap dengan `id` baru
 *       jika perusahaan membuka layanan tambahan.
 */
export const services: ServiceItem[] = [
  {
    id: 'penjualan',
    number: '01',
    icon: 'bucket',
    title: 'Penjualan Unit Baru dan Bekas',
    shortTitle: 'Penjualan Unit',
    summary:
      'Pengadaan alat berat baru dan bekas siap pakai untuk kontraktor, tambang, dan perkebunan lengkap dengan hasil pemeriksaan teknis sebelum serah terima.',
    details:
      'Setiap unit yang dijual melalui pemeriksaan mesin, tekanan pompa hidrolik, sistem kemudi, rangka bawah, serta pengujian fungsi kerja di yard Pulogadung. Pembeli dapat menjadwalkan kunjungan pengecekan fisik bersama mekanik internal sebelum transaksi disepakati.',
    scope: [
      'Unit baru dan unit bekas pilihan pada enam kategori alat berat',
      'Laporan pemeriksaan teknis yard sebelum pengiriman unit',
      'Pemasangan attachment sesuai pekerjaan seperti rock bucket atau hydraulic breaker',
      'Pengaturan pengiriman darat memakai trailer lowbed maupun laut memakai kapal LCT',
    ],
    requirements: [
      'Identitas badan usaha atau penanggung jawab pembelian beserta NPWP',
      'Surat pesanan (Purchase Order) setelah penawaran tertulis disepakati',
      'Jadwal pengecekan fisik unit (opsional bagi pembeli luar kota, tersedia laporan foto dan video inspeksi)',
      'Konfirmasi alamat penerima dan akses jalan masuk trailer di lokasi proyek',
    ],
    steps: [
      'Konsultasi jenis pekerjaan dan kelas kapasitas alat yang dibutuhkan',
      'Pemeriksaan unit di yard Pulogadung dan penerbitan penawaran resmi',
      'Penandatanganan perjanjian jual beli serta pembayaran sesuai kesepakatan',
      'Servis akhir, pengiriman unit, dan penandatanganan berita acara serah terima',
    ],
    ctaLabel: 'Minta Penawaran Pembelian Unit',
    ctaHref: '/kontak?kebutuhan=Beli',
    needParam: 'Beli',
    image: '/images/cat-excavator.jpg',
    imageAlt: 'Foto unit excavator siap jual untuk kebutuhan proyek konstruksi dan tambang',
  },
  {
    id: 'penyewaan',
    number: '02',
    icon: 'track',
    title: 'Penyewaan Alat Berat Proyek',
    shortTitle: 'Penyewaan Unit',
    summary:
      'Skema sewa jangka pendek, bulanan, dan kontrak proyek untuk memenuhi kebutuhan alat pada masa puncak pekerjaan tanpa mengikat modal aset.',
    details:
      'Penyewaan mencakup persiapan unit layak operasi, penjadwalan perawatan berkala selama masa kontrak, serta opsi pengadaan bersama operator berpengalaman atau unit saja sesuai kebijakan proyek Anda.',
    scope: [
      'Pilihan durasi sewa harian (dengan batas jam minimal), bulanan, hingga kontrak proyek',
      'Opsi sewa unit saja maupun sewa lengkap bersama operator',
      'Perawatan berkala rutin sesuai jam kerja alat selama masa sewa',
      'Dukungan mekanik lapangan jika terjadi kendala teknis saat operasi berlangsung',
    ],
    requirements: [
      'Keterangan lokasi kerja, jenis material yang ditangani, serta perkiraan durasi sewa',
      'Surat pesanan sewa dan penandatanganan perjanjian sewa alat berat',
      'Kesiapan area parkir aman dan pasokan bahan bakar di lokasi proyek',
      'Pembayaran uang muka sewa serta biaya mobilisasi dan demobilisasi sesuai perjanjian',
    ],
    steps: [
      'Penentuan jenis unit, jumlah jam kerja per bulan, dan durasi penyewaan',
      'Penerbitan penawaran sewa beserta rincian biaya mobilisasi dan ketentuan perawatan',
      'Pemeriksaan kondisi awal unit dan tanda tangan kontrak sewa',
      'Mobilisasi ke lokasi kerja, pencatatan jam kerja (timesheet), dan demobilisasi setelah selesai',
    ],
    ctaLabel: 'Ajukan Permintaan Sewa Unit',
    ctaHref: '/kontak?kebutuhan=Sewa',
    needParam: 'Sewa',
    image: '/images/proyek-infrastruktur.jpg',
    imageAlt: 'Foto alat berat sewa bekerja pada proyek pembentukan badan jalan',
  },
  {
    id: 'servis',
    number: '03',
    icon: 'wrench',
    title: 'Servis dan Perawatan Berkala',
    shortTitle: 'Servis dan Perawatan',
    summary:
      'Perawatan preventif berkala, diagnosa gangguan hidrolik dan mesin, hingga perbaikan menyeluruh di workshop Pulogadung maupun di lokasi kerja.',
    details:
      'Waktu henti alat di lapangan berdampak langsung pada keterlambatan jadwal proyek. Tim mekanik kami melayani perawatan berkala kelipatan jam kerja, penggantian seal dan selang hidrolik, penyetelan undercarriage, serta perbaikan komponen utama.',
    scope: [
      'Perawatan berkala sesuai interval jam operasi (ganti oli, filter, dan pengecekan sistem)',
      'Diagnosa serta perbaikan mesin diesel, pompa hidrolik, silinder, dan sistem kelistrikan',
      'Perbaikan di workshop Pulogadung maupun kunjungan mekanik lapangan (field service)',
      'Kontrak perawatan rutin armada bagi kontraktor dan pengelola tambang',
    ],
    requirements: [
      'Informasi tipe unit, nomor seri mesin bila tersedia, dan catatan jam kerja terakhir',
      'Uraian gejala gangguan atau daftar pekerjaan perawatan berkala yang diminta',
      'Persetujuan estimasi pekerjaan dan daftar komponen sebelum pembongkaran dilakukan',
      'Akses kerja aman bagi teknisi apabila pengerjaan dilakukan di lokasi proyek',
    ],
    steps: [
      'Penerimaan keluhan atau jadwal perawatan berkala dari tim proyek',
      'Pemeriksaan awal oleh mekanik untuk memetakan sumber gangguan dan kebutuhan komponen',
      'Penyampaian estimasi biaya jasa, suku cadang, dan perkiraan waktu pengerjaan',
      'Pelaksanaan perbaikan, uji coba beban kerja, dan serah terima laporan servis',
    ],
    ctaLabel: 'Jadwalkan Servis Unit',
    ctaHref: '/kontak?kebutuhan=Servis',
    needParam: 'Servis',
    image: '/images/workshop-inspeksi.jpg',
    imageAlt: 'Foto perawatan dan inspeksi sistem hidrolik alat berat di dalam workshop',
  },
  {
    id: 'suku-cadang',
    number: '04',
    icon: 'gear',
    title: 'Pasokan Suku Cadang',
    shortTitle: 'Suku Cadang',
    summary:
      'Penyediaan komponen perawatan rutin dan suku cadang aus dari gudang Pulogadung dengan pengiriman ke seluruh wilayah proyek di Indonesia.',
    details:
      'Gudang suku cadang kami menyimpan komponen cepat habis maupun komponen pengganti utama untuk meminimalkan waktu tunggu unit di lapangan. Setiap permintaan dicek berdasarkan nomor bagian (part number) agar spesifikasi benar-benar cocok.',
    scope: [
      'Komponen servis rutin: filter oli, filter bahan bakar, filter hidrolik, dan filter udara',
      'Komponen aus lapangan: gigi bucket, cutting edge bilah, pin, bushing, dan seal kit',
      'Komponen undercarriage: track link, roller, sprocket, idler, dan track shoe',
      'Pengemasan aman dan pengiriman darat maupun udara ke lokasi proyek luar pulau',
    ],
    requirements: [
      'Nomor bagian (part number) atau foto pelat nama unit dan komponen yang dibutuhkan',
      'Jumlah permintaan per item dan alamat tujuan pengiriman',
      'Konfirmasi kesesuaian spesifikasi sebelum pengemasan dan pengiriman dilakukan',
    ],
    steps: [
      'Pengiriman daftar kebutuhan suku cadang beserta kode bagian atau foto komponen',
      'Pengecekan ketersediaan stok di gudang Pulogadung dan pencocokan spesifikasi',
      'Penerbitan penawaran harga dan estimasi waktu pengiriman ke lokasi',
      'Pengemasan, pengiriman lewat ekspedisi terpilih, dan konfirmasi penerimaan barang',
    ],
    ctaLabel: 'Cek Stok Suku Cadang',
    ctaHref: '/kontak?kebutuhan=Suku%20Cadang',
    needParam: 'Suku Cadang',
    image: '/images/cat-wheel-loader.jpg',
    imageAlt: 'Foto unit alat berat yang didukung pasokan suku cadang dan komponen aus',
  },
  {
    id: 'pembiayaan',
    number: '05',
    icon: 'layers',
    title: 'Dukungan Pembiayaan Unit',
    shortTitle: 'Pembiayaan Unit',
    summary:
      'Pendampingan pengajuan fasilitas pembiayaan pembelian alat berat bersama mitra lembaga pembiayaan agar arus kas proyek tetap terjaga.',
    details:
      'Bagi perusahaan yang membutuhkan penambahan armada sambil menjaga likuiditas modal kerja, tim penjualan kami membantu menyiapkan kelengkapan dokumen penawaran unit dan menjembatani koordinasi awal dengan perusahaan pembiayaan alat berat.',
    scope: [
      'Penyusunan surat penawaran resmi dan spesifikasi unit sesuai format pengajuan pembiayaan',
      'Koordinasi jadwal survei fisik unit di yard Pulogadung bersama pihak pembiayaan',
      'Opsi pembelian unit baru maupun bekas layak biayai sesuai ketentuan mitra pembiayaan',
      'Pendampingan proses administrasi sampai penerbitan surat persetujuan dan pengiriman unit',
    ],
    requirements: [
      'Legalitas usaha lengkap (akta pendirian, NIB, NPWP perusahaan, dan identitas pengurus)',
      'Laporan keuangan atau mutasi rekening perusahaan sesuai syarat lembaga pembiayaan',
      'Salinan kontrak kerja atau surat perintah kerja proyek yang sedang maupun akan berjalan',
      'Kesiapan uang muka sesuai ketentuan skema pembiayaan yang disetujui',
    ],
    steps: [
      'Pemilihan unit dan penyusunan struktur nilai pengadaan bersama tim penjualan',
      'Pengumpulan dokumen perusahaan untuk diserahkan ke mitra pembiayaan',
      'Proses analisis kredit dan peninjauan fisik unit di yard oleh lembaga pembiayaan',
      'Persetujuan pembiayaan, pelunasan uang muka, dan pengiriman unit ke lokasi proyek',
    ],
    ctaLabel: 'Konsultasi Skema Pembiayaan',
    ctaHref: '/kontak?kebutuhan=Beli',
    needParam: 'Beli',
    image: '/images/cat-dump-truck.jpg',
    imageAlt: 'Foto pengadaan armada dump truck dengan opsi dukungan pembiayaan',
  },
];

/*
 * UBAH: isi tabel perbandingan jujur antara Beli dan Sewa di halaman /layanan.
 * EFEK: memperbarui tabel perbandingan di bawah daftar layanan.
 * CARA: sesuaikan isi kolom `buy` atau `rent` agar tetap objektif sesuai kebijakan perusahaan.
 */
export const buyVsRentComparison: BuyVsRentRow[] = [
  {
    aspect: 'Modal Awal',
    buy: 'Membutuhkan modal pembelian atau uang muka pembiayaan di awal transaksi.',
    rent: 'Pengeluaran awal lebih ringan karena hanya membayar biaya sewa berjalan dan mobilisasi.',
  },
  {
    aspect: 'Lama Pemakaian yang Cocok',
    buy: 'Lebih hemat untuk pekerjaan berkelanjutan atau penggunaan rutin lintas proyek dalam hitungan tahun.',
    rent: 'Lebih masuk akal untuk pekerjaan berdurasi singkat, musiman, atau saat volume kerja naik sementara.',
  },
  {
    aspect: 'Perawatan dan Mekanik',
    buy: 'Pemilik mengatur jadwal perawatan sendiri (bisa memakai kontrak servis Wirabaja).',
    rent: 'Perawatan berkala ditangani penyedia sewa sesuai ketentuan kontrak sehingga beban teknis tim proyek lebih ringan.',
  },
  {
    aspect: 'Fleksibilitas Kelas Unit',
    buy: 'Kapasitas unit tetap; jika medan berubah jauh, perlu menambah attachment atau membeli unit lain.',
    rent: 'Mudah mengganti kelas tonase atau jenis alat mengikuti perubahan tahapan pekerjaan di lapangan.',
  },
  {
    aspect: 'Pengelolaan dan Penyimpanan',
    buy: 'Memerlukan area parkir, penjagaan, dan perawatan saat unit sedang tidak beroperasi antar proyek.',
    rent: 'Unit langsung dikembalikan setelah masa kontrak berakhir tanpa biaya penyimpanan di luar jadwal kerja.',
  },
  {
    aspect: 'Nilai Aset Jangka Panjang',
    buy: 'Unit tercatat sebagai aset perusahaan dan tetap memiliki nilai jual kembali bila dirawat baik.',
    rent: 'Tidak membentuk aset tetap, seluruh biaya masuk sebagai beban operasional proyek.',
  },
];