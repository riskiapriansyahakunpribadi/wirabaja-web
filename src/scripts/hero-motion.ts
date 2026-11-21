/*
 * Menjalankan parallax ringan pada Foto hero saat halaman digulir
 * serta menyalakan garis dan tahapan alur pembelian ketika masuk ke layar.
 * Seluruh gerak otomatis dilewati jika pengguna mengaktifkan prefers-reduced-motion.
 */

let heroMotionController: AbortController | null = null;
let processObserver: IntersectionObserver | null = null;

function initHeroMotion(): void {
  if (heroMotionController) {
    heroMotionController.abort();
  }
  if (processObserver) {
    processObserver.disconnect();
    processObserver = null;
  }

  heroMotionController = new AbortController();
  const { signal } = heroMotionController;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parallaxTarget = document.querySelector<HTMLElement>('[data-hero-parallax]');
  const processFlow = document.querySelector<HTMLElement>('[data-process-flow]');

  // Mengaktifkan garis penghubung dan nyala bertahap pada alur proses 4 langkah.
  if (processFlow) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      processFlow.classList.add('is-visible');
    } else {
      processObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.22 }
      );
      processObserver.observe(processFlow);
    }
  }

  // Parallax hanya aktif di layar tablet/desktop agar perangkat ponsel tetap hemat daya.
  if (!parallaxTarget || prefersReduced) {
    return;
  }

  let ticking = false;

  const updateParallax = () => {
    ticking = false;
    if (window.innerWidth < 768) {
      parallaxTarget.style.transform = '';
      return;
    }

    const scrollTop = window.scrollY;
    const maxOffset = 44;
    const offset = Math.min(scrollTop * 0.085, maxOffset);
    parallaxTarget.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  };

  const onScrollOrResize = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }
  };

  updateParallax();
  window.addEventListener('scroll', onScrollOrResize, { passive: true, signal });
  window.addEventListener('resize', onScrollOrResize, { passive: true, signal });

  document.addEventListener(
    'astro:before-swap',
    () => {
      if (processObserver) {
        processObserver.disconnect();
        processObserver = null;
      }
    },
    { signal }
  );
}

document.addEventListener('astro:page-load', initHeroMotion);