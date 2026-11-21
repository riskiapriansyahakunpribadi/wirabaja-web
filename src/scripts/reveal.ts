/*
 * Menjalankan animasi kemunculan elemen [data-reveal] saat masuk ke area pandang
 * menggunakan IntersectionObserver. Jika pengguna mengaktifkan prefers-reduced-motion,
 * seluruh elemen langsung ditampilkan tanpa pergeseran.
 */

let revealObserver: IntersectionObserver | null = null;
let revealCleanupController: AbortController | null = null;

function initScrollReveal(): void {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
  if (revealCleanupController) {
    revealCleanupController.abort();
  }
  revealCleanupController = new AbortController();
  const { signal } = revealCleanupController;

  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (targets.length === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('js-ready');
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const pendingTargets: HTMLElement[] = [];

  // Elemen yang sudah masuk layar sejak awal langsung ditandai terlihat agar tidak berkedip.
  targets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.96) {
      el.classList.add('is-visible');
    } else {
      el.classList.remove('is-visible');
      pendingTargets.push(el);
    }
  });

  document.documentElement.classList.add('js-ready');

  if (pendingTargets.length === 0) return;

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.08,
    }
  );

  pendingTargets.forEach((el) => revealObserver?.observe(el));

  document.addEventListener(
    'astro:before-swap',
    () => {
      if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
      }
    },
    { signal }
  );
}

document.addEventListener('astro:page-load', initScrollReveal);