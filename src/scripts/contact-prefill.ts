/*
 * Membaca parameter URL pada halaman Kontak (misalnya /kontak?kebutuhan=Sewa atau ?unit=...)
 * lalu memilihkan nilai awal yang sesuai di formulir permintaan penawaran tanpa skrip inline.
 */

const VALID_NEEDS: Record<string, string> = {
  beli: 'Beli',
  sewa: 'Sewa',
  servis: 'Servis',
  'suku cadang': 'Suku Cadang',
};

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function initContactPrefill(): void {
  const form = document.querySelector<HTMLFormElement>('[data-quote-form]');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const rawNeed = (params.get('kebutuhan') || '').trim().toLowerCase();
  const rawUnit = (params.get('unit') || '').replace(CONTROL_CHARS, '').trim().slice(0, 120);

  if (rawNeed && VALID_NEEDS[rawNeed]) {
    const needSelect = form.querySelector<HTMLSelectElement>('select[name="kebutuhan"]');
    if (needSelect) {
      needSelect.value = VALID_NEEDS[rawNeed];
    }
  }

  if (rawUnit) {
    const unitInput = form.querySelector<HTMLInputElement>('input[name="unit"]');
    if (unitInput && unitInput.value.trim().length === 0) {
      unitInput.value = rawUnit;
    }
  }
}

document.addEventListener('astro:page-load', initContactPrefill);