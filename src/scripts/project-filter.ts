/*
 * Mengatur filter sektor pada halaman Proyek tanpa memuat ulang halaman.
 * Jika URL memuat parameter ?sektor=... atau hash #id-proyek (misalnya tautan dari Beranda),
 * skrip otomatis menampilkan kartu tujuan dan membuka panel rinciannya.
 */

let projectFilterController: AbortController | null = null;

function initProjectFilter(): void {
  if (projectFilterController) {
    projectFilterController.abort();
  }
  projectFilterController = new AbortController();
  const { signal } = projectFilterController;

  const root = document.querySelector<HTMLElement>('[data-projects-root]');
  if (!root) return;

  const filterButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-project-filter]')
  );
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-project-card]'));
  const countEl = root.querySelector<HTMLElement>('[data-projects-count]');
  const emptyEl = root.querySelector<HTMLElement>('[data-projects-empty]');
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-projects-reset]');

  const validSectors = new Set(
    filterButtons.map((btn) => btn.dataset.projectFilter || 'semua')
  );

  let activeSector = 'semua';

  const params = new URLSearchParams(window.location.search);
  const initialSector = (params.get('sektor') || '').toLowerCase().trim();
  if (initialSector && validSectors.has(initialSector)) {
    activeSector = initialSector;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const syncButtons = () => {
    filterButtons.forEach((btn) => {
      const isSelected = (btn.dataset.projectFilter || 'semua') === activeSector;
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      btn.dataset.active = isSelected ? 'true' : 'false';
    });
  };

  const syncUrl = () => {
    const nextUrl = new URL(window.location.href);
    if (activeSector !== 'semua') {
      nextUrl.searchParams.set('sektor', activeSector);
    } else {
      nextUrl.searchParams.delete('sektor');
    }
    window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  };

  const applyFilter = (animate = true) => {
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardSector = card.dataset.projectSector || '';
      const shouldShow = activeSector === 'semua' || cardSector === activeSector;

      if (shouldShow) {
        const wasHidden = card.hidden;
        card.hidden = false;
        visibleCount += 1;

        if (animate && wasHidden && !prefersReduced) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '1';
          card.style.transform = '';
        }
      } else {
        card.hidden = true;
      }
    });

    if (countEl) {
      countEl.textContent = `Menampilkan ${visibleCount} dari ${cards.length} ringkasan proyek`;
    }

    if (emptyEl) {
      emptyEl.hidden = visibleCount > 0;
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        activeSector = btn.dataset.projectFilter || 'semua';
        syncButtons();
        syncUrl();
        applyFilter(true);
      },
      { signal }
    );
  });

  if (resetBtn) {
    resetBtn.addEventListener(
      'click',
      () => {
        activeSector = 'semua';
        syncButtons();
        syncUrl();
        applyFilter(true);
      },
      { signal }
    );
  }

  // Jika pengunjung datang lewat anchor proyek tertentu (misalnya /proyek#badan-jalan-jabar),
  // pastikan proyek tersebut terlihat dan buka panel rincian <details> di dalamnya.
  const openTargetedProject = () => {
    const rawHash = window.location.hash.replace(/^#/, '').trim();
    if (!rawHash) return;

    const targetCard = cards.find((card) => card.id === rawHash);
    if (!targetCard) return;

    if (targetCard.hidden) {
      activeSector = 'semua';
      syncButtons();
      applyFilter(false);
    }

    const detailsEl = targetCard.querySelector<HTMLDetailsElement>('details');
    if (detailsEl) {
      detailsEl.open = true;
    }
  };

  syncButtons();
  applyFilter(false);
  openTargetedProject();

  window.addEventListener('hashchange', openTargetedProject, { signal });
}

document.addEventListener('astro:page-load', initProjectFilter);