import { buildMailtoUrl, buildWhatsAppUrl, siteConfig } from '@/config/site';

/*
 * Validasi formulir permintaan penawaran dan pengiriman langsung lewat WhatsApp atau Email.
 * Seluruh input dibersihkan dari spasi berlebih, dibatasi panjangnya, dicek terhadap karakter kontrol,
 * dan hanya dimasukkan ke DOM melalui textContent agar aman dari injeksi skrip.
 */

type SubmitChannel = 'whatsapp' | 'email';

interface QuoteFields {
  nama: string;
  perusahaan: string;
  telepon: string;
  email: string;
  kebutuhan: string;
  unit: string;
  lokasi: string;
  pesan: string;
}

const CONTROL_CHAR_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED_REGEX = /^[0-9+\s().-]{8,25}$/;

const FIELD_LIMITS: Record<keyof QuoteFields, number> = {
  nama: 80,
  perusahaan: 100,
  telepon: 25,
  email: 120,
  kebutuhan: 40,
  unit: 120,
  lokasi: 120,
  pesan: 800,
};

let quoteFormAbortController: AbortController | null = null;

function validateSingleField(name: keyof QuoteFields, rawValue: string): string {
  if (CONTROL_CHAR_REGEX.test(rawValue)) {
    return 'Isian mengandung karakter tidak valid. Mohon ketik ulang dengan huruf atau angka biasa.';
  }

  const value = rawValue.trim();

  if (value.length === 0) {
    const emptyMessages: Record<keyof QuoteFields, string> = {
      nama: 'Masukkan nama lengkap Anda agar tim penjualan tahu siapa yang dihubungi.',
      perusahaan: 'Masukkan nama perusahaan atau nama proyek Anda.',
      telepon: 'Masukkan nomor telepon atau WhatsApp aktif yang bisa dihubungi.',
      email: 'Masukkan alamat email aktif untuk menerima rincian penawaran.',
      kebutuhan: 'Pilih jenis kebutuhan layanan yang diinginkan.',
      unit: 'Sebutkan jenis atau kelas unit alat berat yang diminati.',
      lokasi: 'Sebutkan kota atau kabupaten lokasi proyek untuk estimasi kirim.',
      pesan: 'Tuliskan rincian singkat kebutuhan unit, jumlah, atau jadwal pemakaian.',
    };
    return emptyMessages[name];
  }

  if (value.length > FIELD_LIMITS[name]) {
    return `Maksimal ${FIELD_LIMITS[name]} karakter untuk kolom ini.`;
  }

  if (name === 'telepon') {
    const digitCount = value.replace(/\D/g, '').length;
    if (!PHONE_ALLOWED_REGEX.test(value) || digitCount < 8 || digitCount > 15) {
      return 'Masukkan nomor telepon Indonesia yang valid (minimal 8 digit, misalnya 081234567890).';
    }
  }

  if (name === 'email' && !EMAIL_REGEX.test(value)) {
    return 'Format email belum tepat. Periksa kembali tanda @ dan nama domain.';
  }

  if (name === 'pesan' && value.length < 10) {
    return 'Tambahkan keterangan minimal 10 karakter agar tim kami dapat menyiapkan penawaran akurat.';
  }

  return '';
}

function formatQuoteMessage(data: QuoteFields): string {
  return [
    `Halo Tim Penjualan ${siteConfig.legalName},`,
    '',
    'Saya ingin mengajukan permintaan penawaran alat berat dengan rincian berikut:',
    `Nama: ${data.nama}`,
    `Perusahaan / Proyek: ${data.perusahaan}`,
    `Telepon / WhatsApp: ${data.telepon}`,
    `Email: ${data.email}`,
    `Jenis Kebutuhan: ${data.kebutuhan}`,
    `Unit yang Diminati: ${data.unit}`,
    `Lokasi Proyek: ${data.lokasi}`,
    `Rincian Tambahan: ${data.pesan}`,
    '',
    'Mohon informasi ketersediaan unit serta estimasi penawarannya. Terima kasih.',
  ].join('\n');
}

function initQuoteForms(): void {
  if (quoteFormAbortController) {
    quoteFormAbortController.abort();
  }
  quoteFormAbortController = new AbortController();
  const { signal } = quoteFormAbortController;

  const forms = Array.from(document.querySelectorAll<HTMLFormElement>('[data-quote-form]'));
  if (forms.length === 0) return;

  forms.forEach((form) => {
    const statusBox = form.querySelector<HTMLElement>('[data-form-status]');
    const statusTitle = form.querySelector<HTMLElement>('[data-status-title]');
    const statusBody = form.querySelector<HTMLElement>('[data-status-body]');
    const fallbackLink = form.querySelector<HTMLAnchorElement>('[data-status-fallback]');
    const fallbackLabel = form.querySelector<HTMLElement>('[data-status-fallback-label]');
    const honeypotInput = form.querySelector<HTMLInputElement>('input[name="website_perusahaan"]');
    const submitButtons = Array.from(
      form.querySelectorAll<HTMLButtonElement>('[data-submit-channel]')
    );

    const fieldNames: (keyof QuoteFields)[] = [
      'nama',
      'perusahaan',
      'telepon',
      'email',
      'kebutuhan',
      'unit',
      'lokasi',
      'pesan',
    ];

    const getControl = (name: keyof QuoteFields) =>
      form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        `[name="${name}"]`
      );

    const setFieldError = (name: keyof QuoteFields, message: string) => {
      const control = getControl(name);
      const errorEl = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
      if (control) {
        if (message) {
          control.setAttribute('aria-invalid', 'true');
        } else {
          control.removeAttribute('aria-invalid');
        }
      }
      if (errorEl) {
        errorEl.textContent = message;
      }
    };

    const showStatus = (
      type: 'error' | 'success',
      title: string,
      body: string,
      linkHref?: string,
      linkText?: string
    ) => {
      if (!statusBox || !statusTitle || !statusBody) return;
      statusBox.hidden = false;
      statusBox.classList.remove(
        'border-error',
        'bg-error-bg',
        'text-error',
        'border-success',
        'bg-success-bg',
        'text-success'
      );

      if (type === 'error') {
        statusBox.classList.add('border-error', 'bg-error-bg', 'text-error');
      } else {
        statusBox.classList.add('border-success', 'bg-success-bg', 'text-success');
      }

      statusTitle.textContent = title;
      statusBody.textContent = body;

      if (fallbackLink && fallbackLabel) {
        if (linkHref && linkText) {
          fallbackLink.href = linkHref;
          fallbackLabel.textContent = linkText;
          fallbackLink.hidden = false;
        } else {
          fallbackLink.hidden = true;
        }
      }
    };

    // Validasi langsung saat pengguna keluar dari kolom atau memperbaiki kolom yang sempat keliru.
    fieldNames.forEach((name) => {
      const control = getControl(name);
      if (!control) return;

      control.addEventListener(
        'blur',
        () => {
          const message = validateSingleField(name, control.value);
          setFieldError(name, message);
        },
        { signal }
      );

      control.addEventListener(
        'input',
        () => {
          if (control.getAttribute('aria-invalid') === 'true') {
            const message = validateSingleField(name, control.value);
            setFieldError(name, message);
          }
        },
        { signal }
      );
    });

    const handleChannelSubmit = (channel: SubmitChannel, triggerButton: HTMLButtonElement) => {
      // Menolak pengiriman otomatis jika kolom jebakan tersembunyi terisi bot.
      if (honeypotInput && honeypotInput.value.trim().length > 0) {
        showStatus(
          'error',
          'Pengiriman tidak dapat diproses',
          'Muat ulang halaman lalu isi formulir secara langsung.'
        );
        return;
      }

      const values = {} as QuoteFields;
      let firstInvalidControl: HTMLElement | null = null;
      let errorCount = 0;

      fieldNames.forEach((name) => {
        const control = getControl(name);
        const rawValue = control ? control.value : '';
        const errorMessage = validateSingleField(name, rawValue);
        setFieldError(name, errorMessage);

        if (errorMessage) {
          errorCount += 1;
          if (!firstInvalidControl && control) {
            firstInvalidControl = control;
          }
        } else {
          values[name] = rawValue.trim().slice(0, FIELD_LIMITS[name]);
        }
      });

      if (errorCount > 0) {
        showStatus(
          'error',
          `Masih ada ${errorCount} kolom yang perlu diperbaiki`,
          'Periksa keterangan berwarna merah pada kolom yang ditandai, lalu tekan tombol kirim kembali.'
        );
        if (firstInvalidControl) {
          (firstInvalidControl as HTMLElement).focus();
        }
        return;
      }

      const labelEl = triggerButton.querySelector<HTMLElement>('[data-btn-label]');
      const originalLabel =
        channel === 'whatsapp' ? 'Kirim lewat WhatsApp' : 'Kirim lewat Email';

      // Perubahan status tombol: siap -> memproses -> berhasil.
      submitButtons.forEach((btn) => {
        btn.disabled = true;
      });
      if (labelEl) {
        labelEl.textContent = 'Menyiapkan Pesan...';
      }

      const formattedBody = formatQuoteMessage(values);
      const subject = `Permintaan Penawaran (${values.kebutuhan}): ${values.unit} - ${values.perusahaan}`;
      const destinationUrl =
        channel === 'whatsapp'
          ? buildWhatsAppUrl(formattedBody)
          : buildMailtoUrl(subject, formattedBody);

      window.setTimeout(() => {
        if (channel === 'whatsapp') {
          window.open(destinationUrl, '_blank', 'noopener,noreferrer');
          showStatus(
            'success',
            'Pesan WhatsApp berhasil disiapkan',
            'Jendela WhatsApp telah dibuka dengan seluruh rincian permintaan Anda. Jika jendela tidak muncul karena pemblokir pop-up, gunakan tautan langsung di bawah ini.',
            destinationUrl,
            'Buka WhatsApp Sekarang'
          );
        } else {
          window.location.href = destinationUrl;
          showStatus(
            'success',
            'Draf email penawaran berhasil disiapkan',
            'Aplikasi email perangkat Anda akan terbuka berisi rincian permintaan penawaran. Jika belum terbuka, klik tautan di bawah ini.',
            destinationUrl,
            'Buka Aplikasi Email Sekarang'
          );
        }

        if (labelEl) {
          labelEl.textContent =
            channel === 'whatsapp' ? 'Terkirim ke WhatsApp' : 'Draf Email Dibuka';
        }

        window.setTimeout(() => {
          submitButtons.forEach((btn) => {
            btn.disabled = false;
          });
          if (labelEl) {
            labelEl.textContent = originalLabel;
          }
        }, 1600);
      }, 260);
    };

    submitButtons.forEach((button) => {
      button.addEventListener(
        'click',
        () => {
          const channel =
            button.dataset.submitChannel === 'email' ? 'email' : 'whatsapp';
          handleChannelSubmit(channel, button);
        },
        { signal }
      );
    });

    // Jika pengguna menekan Enter di salah satu kolom input, jalankan pengiriman WhatsApp secara teratur.
    form.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        const waButton = form.querySelector<HTMLButtonElement>(
          '[data-submit-channel="whatsapp"]'
        );
        if (waButton) {
          handleChannelSubmit('whatsapp', waButton);
        }
      },
      { signal }
    );
  });
}

document.addEventListener('astro:page-load', initQuoteForms);