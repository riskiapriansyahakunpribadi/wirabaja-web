import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
 * UBAH: alamat domain produksi pada properti `site` di bawah.
 * EFEK: menentukan URL kanonik pada tag meta SEO dan isi sitemap.xml.
 * CARA: ganti 'https://wirabaja.id' dengan domain aktif perusahaan (harus diawali https:// tanpa garis miring di akhir).
 */
export default defineConfig({
  site: 'https://wirabaja-web.vercel.app/',
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap({
      // Halaman 404 tidak perlu masuk ke indeks mesin pencari.
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  build: {
    // Memastikan seluruh CSS keluar sebagai berkas terpisah agar caching dan kebijakan CSP tetap rapi.
    inlineStylesheets: 'never',
  },
  vite: {
    // Tailwind CSS v4 dipasang lewat plugin Vite agar token desain dapat diatur langsung di src/styles/global.css.
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});