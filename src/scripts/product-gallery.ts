/*
 * Mengatur pergantian gambar utama galeri pada halaman Detail Produk saat
 * pengunjung memilih salah satu thumbnail di bawahnya.
 */

let galleryAbortController: AbortController | null = null;

function initProductGallery(): void {
  if (galleryAbortController) {
    galleryAbortController.abort();
  }
  galleryAbortController = new AbortController();
  const { signal } = galleryAbortController;

  const galleryRoot = document.querySelector<HTMLElement>('[data-product-gallery]');
  if (!galleryRoot) return;

  const mainImage = galleryRoot.querySelector<HTMLImageElement>('[data-gallery-main]');
  const captionEl = galleryRoot.querySelector<HTMLElement>('[data-gallery-caption]');
  const thumbButtons = Array.from(
    galleryRoot.querySelectorAll<HTMLButtonElement>('[data-gallery-thumb]')
  );

  if (!mainImage || thumbButtons.length === 0) return;

  thumbButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        const nextSrc = btn.dataset.src;
        const nextAlt = btn.dataset.alt || '';
        const nextCaption = btn.dataset.caption || '';

        if (!nextSrc) return;

        mainImage.src = nextSrc;
        mainImage.alt = nextAlt;
        if (captionEl) {
          captionEl.textContent = nextCaption;
        }

        thumbButtons.forEach((item) => {
          const isCurrent = item === btn;
          item.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
          item.dataset.active = isCurrent ? 'true' : 'false';
        });
      },
      { signal }
    );
  });
}

document.addEventListener('astro:page-load', initProductGallery);