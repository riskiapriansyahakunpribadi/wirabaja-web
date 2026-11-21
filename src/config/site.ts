/*
 * PENTING SEBELUM PUBLIKASI:
 * Seluruh data perusahaan, nomor WhatsApp, alamat email, alamat workshop, dan tautan media sosial
 * di berkas ini wajib diganti dengan data resmi PT Wirabaja Mesin Nusantara sebelum dipakai untuk
 * operasional bisnis sungguhan. Mengubah nilai di sini akan otomatis memperbarui seluruh halaman.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: 'LinkedIn' | 'Instagram' | 'YouTube';
  href: string;
  handle: string;
}

export interface ServiceArea {
  region: string;
  coverage: string;
}

/*
 * UBAH: identitas perusahaan, alamat, jam layanan, kontak, dan tautan media sosial.
 * EFEK: memperbarui bar atas, header, footer, tombol WhatsApp melayang, formulir kontak,
 *       peta alamat, tag meta SEO, dan data terstruktur Organization di semua halaman.
 * CARA: cukup ganti teks di dalam tanda kutip tanpa menghapus nama properti di sebelah kiri.
 */
export const siteConfig = {
  legalName: 'PT Wirabaja Mesin Nusantara',
  shortName: 'Wirabaja',
  tagline: 'Alat berat siap kerja, dari pengadaan sampai purna jual',
  businessField: 'Penjualan, penyewaan, servis, dan suku cadang alat berat',
  seoDescription:
    'PT Wirabaja Mesin Nusantara menyediakan penjualan, penyewaan, servis berkala, dan suku cadang alat berat untuk proyek konstruksi, pertambangan, perkebunan, dan infrastruktur di Indonesia.',
  siteUrl: 'https://wirabaja-web.vercel.app/',
  locale: 'id_ID',

  address: {
    street: 'Jl. Industri Raya No. 28, Kawasan Industri Pulogadung',
    city: 'Jakarta Timur',
    postalCode: '13920',
    province: 'DKI Jakarta',
    country: 'Indonesia',
    short: 'Kawasan Industri Pulogadung, Jakarta Timur',
    full: 'Jl. Industri Raya No. 28, Kawasan Industri Pulogadung, Jakarta Timur 13920',
    // Tautan langsung ke Google Maps tanpa iframe pihak ketiga agar privasi dan CSP tetap terjaga.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Jl.+Industri+Raya+No.+28,+Kawasan+Industri+Pulogadung,+Jakarta+Timur+13920',
  },

  hours: {
    label: 'Senin sampai Sabtu, 08.00 sampai 17.00 WIB',
    compact: 'Senin s.d. Sabtu, 08.00 s.d. 17.00 WIB',
    days: 'Senin sampai Sabtu',
    time: '08.00 sampai 17.00 WIB',
  },

  contact: {
    /*
     * UBAH: nomor WhatsApp penjualan.
     * EFEK: tombol WhatsApp melayang, tombol CTA WhatsApp, dan pengiriman formulir penawaran.
     * CARA: tulis dalam format kode negara Indonesia tanpa tanda tambah (+) atau spasi, misalnya '6281234567890'.
     */
    whatsappNumber: '6285771191325',
    whatsappDisplay: '+62 857-7119-1325',
    email: 'penjualan@wirabaja.id',
    defaultWhatsappMessage:
      'Halo Tim Penjualan PT Wirabaja Mesin Nusantara, saya ingin berkonsultasi mengenai penawaran unit alat berat.',
  },

  /*
   * UBAH: URL profil media sosial resmi perusahaan.
   * EFEK: daftar tautan media sosial di footer dan data terstruktur Organization.
   * CARA: ganti nilai `href` dan `handle` sesuai akun aktif perusahaan.
   */
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/wirabaja-mesin-nusantara',
      handle: 'PT Wirabaja Mesin Nusantara',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/wirabajamesin',
      handle: '@wirabajamesin',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@wirabajamesin',
      handle: 'Wirabaja Mesin Nusantara',
    },
  ] satisfies SocialLink[],

  /*
   * UBAH / TAMBAH: susunan menu navigasi utama.
   * EFEK: menu bar desktop, menu laci ponsel, dan tautan cepat di footer.
   * CARA: untuk menambah menu baru, salin satu objek { label, href } lalu buat berkas halamannya di src/pages/.
   */
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Produk', href: '/produk' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Kontak', href: '/kontak' },
  ] satisfies NavItem[],

  headerCta: {
    label: 'Minta Penawaran',
    href: '/kontak',
  },

  /*
   * UBAH / TAMBAH: jangkauan pengiriman unit dan dukungan mekanik lapangan.
   * EFEK: bagian area layanan di Beranda dan halaman Layanan.
   * CARA: tambah atau ubah objek { region, coverage } sesuai wilayah operasional terbaru.
   */
  serviceAreas: [
    {
      region: 'Jabodetabek dan Banten',
      coverage: 'Pengiriman langsung dari yard Pulogadung dan kunjungan mekanik cepat',
    },
    {
      region: 'Jawa Barat, Jawa Tengah, dan Jawa Timur',
      coverage: 'Pengiriman lowbed darat untuk proyek konstruksi, jalan, dan kawasan industri',
    },
    {
      region: 'Sumatra',
      coverage: 'Pengiriman antarpulau untuk proyek perkebunan, jalan tol, dan pertambangan',
    },
    {
      region: 'Kalimantan',
      coverage: 'Pasokan unit dan suku cadang untuk lokasi tambang batu bara, nikel, dan kehutanan',
    },
    {
      region: 'Sulawesi dan Kawasan Timur',
      coverage: 'Pengiriman lewat kapal LCT dan kontainer untuk tambang serta infrastruktur pelabuhan',
    },
  ] satisfies ServiceArea[],
} as const;

// Tahun hak cipta dihitung otomatis saat build agar tidak perlu diubah manual tiap pergantian tahun.
export function getCopyrightYear(): number {
  return new Date().getFullYear();
}

// Membersihkan karakter kontrol tersembunyi sebelum teks masuk ke tautan WhatsApp atau email.
export function sanitizeMessageText(input: string, maxLength = 1500): string {
  const cleaned = input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
  return cleaned.slice(0, maxLength);
}

// Membentuk tautan WhatsApp terenkode aman dari nomor terpusat di siteConfig.
export function buildWhatsAppUrl(message?: string): string {
  const safeText = sanitizeMessageText(
    message && message.trim().length > 0 ? message : siteConfig.contact.defaultWhatsappMessage
  );
  const digitsOnly = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(safeText)}`;
}

// Membentuk tautan mailto terenkode aman untuk pengiriman penawaran lewat aplikasi email pengunjung.
export function buildMailtoUrl(subject: string, body: string): string {
  const safeSubject = sanitizeMessageText(subject, 200);
  const safeBody = sanitizeMessageText(body, 2000);
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(safeSubject)}&body=${encodeURIComponent(safeBody)}`;
}