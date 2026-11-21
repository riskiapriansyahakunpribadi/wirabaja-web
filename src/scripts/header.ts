/*
 * Mengatur perilaku header saat di-scroll dengan ambang batas terpisah (hysteresis)
 * agar tidak terjadi kedipan di sekitar titik batas, serta mengunci fokus menu ponsel.
 */

let headerAbortController: AbortController | null = null;

function initHeaderControls(): void {
  if (headerAbortController) {
    headerAbortController.abort();
  }
  headerAbortController = new AbortController();
  const { signal } = headerAbortController;

  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const toggleBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  const drawer = document.querySelector<HTMLElement>('[data-menu-drawer]');
  const backdrop = document.querySelector<HTMLElement>('[data-menu-backdrop]');

  // Ambang batas masuk (> 80 px) dan keluar (< 24 px) dipisah agar status scroll stabil.
  let isScrolled = window.scrollY > 80;
  if (header) {
    header.dataset.scrolled = isScrolled ? 'true' : 'false';
  }

  const syncHeaderScroll = () => {
    if (!header) return;
    const y = window.scrollY;
    if (!isScrolled && y > 80) {
      isScrolled = true;
      header.dataset.scrolled = 'true';
    } else if (isScrolled && y < 24) {
      isScrolled = false;
      header.dataset.scrolled = 'false';
    }
  };

  window.addEventListener('scroll', syncHeaderScroll, { passive: true, signal });

  if (!toggleBtn || !closeBtn || !drawer || !backdrop) {
    return;
  }

  let isDrawerOpen = false;
  let closeTimer: number | undefined;

  const getFocusableElements = (): HTMLElement[] => {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    return Array.from(drawer.querySelectorAll<HTMLElement>(selectors));
  };

  const openDrawer = () => {
    if (isDrawerOpen) return;
    isDrawerOpen = true;
    window.clearTimeout(closeTimer);

    drawer.hidden = false;
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');

    requestAnimationFrame(() => {
      drawer.dataset.open = 'true';
      backdrop.style.opacity = '1';
      closeBtn.focus();
    });
  };

  const closeDrawer = (restoreFocus = true) => {
    if (!isDrawerOpen) return;
    isDrawerOpen = false;

    drawer.dataset.open = 'false';
    backdrop.style.opacity = '0';
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? 0 : 280;

    closeTimer = window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, delay);

    if (restoreFocus) {
      toggleBtn.focus();
    }
  };

  toggleBtn.addEventListener(
    'click',
    () => {
      if (isDrawerOpen) {
        closeDrawer(true);
      } else {
        openDrawer();
      }
    },
    { signal }
  );

  closeBtn.addEventListener('click', () => closeDrawer(true), { signal });
  backdrop.addEventListener('click', () => closeDrawer(true), { signal });

  drawer.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => closeDrawer(false), { signal });
  });

  document.addEventListener(
    'keydown',
    (event) => {
      if (!isDrawerOpen) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeDrawer(true);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = getFocusableElements();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    { signal }
  );

  document.addEventListener(
    'astro:before-swap',
    () => {
      document.body.style.overflow = '';
    },
    { signal }
  );
}

document.addEventListener('astro:page-load', initHeaderControls);