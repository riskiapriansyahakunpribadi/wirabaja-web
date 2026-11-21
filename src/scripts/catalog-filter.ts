/*
 * Mengatur filter kategori, status unit (Baru atau Bekas), dan pencarian teks
 * pada halaman Katalog Produk tanpa memuat ulang halaman. Mendukung parameter URL
 * ?kategori=... agar tautan langsung dari Beranda otomatis menyaring unit yang sesuai.
 */

let catalogAbortController: AbortController | null = null;

function initCatalogFilter(): void {
  if (catalogAbortController) {
    catalogAbortController.abort();
  }
  catalogAbortController = new AbortController();
  const { signal } = catalogAbortController;

  const catalogRoot = document.querySelector<HTMLElement>('[data-catalog-root]');
  if (!catalogRoot) return;

  const categoryButtons = Array.from(
    catalogRoot.querySelectorAll<HTMLButtonElement>('[data-filter-category]')
  );
  const statusButtons = Array.from(
    catalogRoot.querySelectorAll<HTMLButtonElement>('[data-filter-status]')
  );
  const searchInput = catalogRoot.querySelector<HTMLInputElement>('[data-catalog-search]');
  const clearSearchBtn = catalogRoot.querySelector<HTMLButtonElement>('[data-search-clear]');
  const resetButtons = Array.from(
    catalogRoot.querySelectorAll<HTMLButtonElement>('[data-catalog-reset]')
  );
  const cards = Array.from(catalogRoot.querySelectorAll<HTMLElement>('[data-product-card]'));
  const resultCountEl = catalogRoot.querySelector<HTMLElement>('[data-catalog-count]');
  const emptyStateEl = catalogRoot.querySelector<HTMLElement>('[data-catalog-empty]');
  const emptyReasonEl = catalogRoot.querySelector<HTMLElement>('[data-empty-reason]');

  const validCategories = new Set(
    categoryButtons.map((btn) => btn.dataset.filterCategory || 'semua')
  );

  let activeCategory = 'semua';
  let activeStatus = 'semua';
  let searchQuery = '';

  // Membaca kategori awal dari URL (misalnya /produk?kategori=excavator).
  const params = new URLSearchParams(window.location.search);
  const initialCategory = (params.get('kategori') || '').toLowerCase().trim();
  if (initialCategory && validCategories.has(initialCategory)) {
    activeCategory = initialCategory;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const syncButtonStates = () => {
    categoryButtons.forEach((btn) => {
      const isSelected = (btn.dataset.filterCategory || 'semua') === activeCategory;
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      btn.dataset.active = isSelected ? 'true' : 'false';
    });

    statusButtons.forEach((btn) => {
      const isSelected = (btn.dataset.filterStatus || 'semua') === activeStatus;
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      btn.dataset.active = isSelected ? 'true' : 'false';
    });

    if (clearSearchBtn) {
      clearSearchBtn.hidden = searchQuery.length === 0;
    }
  };

  const syncUrlQuery = () => {
    const nextUrl = new URL(window.location.href);
    if (activeCategory !== 'semua') {
      nextUrl.searchParams.set('kategori', activeCategory);
    } else {
      nextUrl.searchParams.delete('kategori');
    }
    window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  };

  const applyFilter = (animate = true) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCategory = card.dataset.category || '';
      const cardStatus = card.dataset.status || '';
      const cardSearch = card.dataset.search || '';

      const matchesCategory = activeCategory === 'semua' || cardCategory === activeCategory;
      const matchesStatus = activeStatus === 'semua' || cardStatus === activeStatus;
      const matchesSearch =
        normalizedQuery.length === 0 || cardSearch.includes(normalizedQuery);

      const shouldShow = matchesCategory && matchesStatus && matchesSearch;

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

    if (resultCountEl) {
      resultCountEl.textContent = `Menampilkan ${visibleCount} dari ${cards.length} unit tersedia`;
    }

    if (emptyStateEl) {
      emptyStateEl.hidden = visibleCount > 0;
    }

    if (emptyReasonEl && visibleCount === 0) {
      const reasons: string[] = [];
      if (activeCategory !== 'semua') {
        const activeBtn = categoryButtons.find(
          (btn) => btn.dataset.filterCategory === activeCategory
        );
        if (activeBtn?.dataset.categoryLabel) {
          reasons.push(`kategori ${activeBtn.dataset.categoryLabel}`);
        }
      }
      if (activeStatus !== 'semua') {
        reasons.push(`status ${activeStatus}`);
      }
      if (normalizedQuery.length > 0) {
        reasons.push(`kata kunci "${searchQuery.trim()}"`);
      }

      emptyReasonEl.textContent =
        reasons.length > 0
          ? `Tidak ditemukan unit yang cocok dengan gabungan filter ${reasons.join(', ')}.`
          : 'Tidak ada unit yang cocok dengan kriteria pencarian saat ini.';
    }
  };

  categoryButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        activeCategory = btn.dataset.filterCategory || 'semua';
        syncButtonStates();
        syncUrlQuery();
        applyFilter(true);
      },
      { signal }
    );
  });

  statusButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        activeStatus = btn.dataset.filterStatus || 'semua';
        syncButtonStates();
        applyFilter(true);
      },
      { signal }
    );
  });

  if (searchInput) {
    searchInput.addEventListener(
      'input',
      () => {
        searchQuery = searchInput.value;
        syncButtonStates();
        applyFilter(true);
      },
      { signal }
    );
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener(
      'click',
      () => {
        searchInput.value = '';
        searchQuery = '';
        syncButtonStates();
        applyFilter(true);
        searchInput.focus();
      },
      { signal }
    );
  }

  resetButtons.forEach((btn) => {
    btn.addEventListener(
      'click',
      () => {
        activeCategory = 'semua';
        activeStatus = 'semua';
        searchQuery = '';
        if (searchInput) {
          searchInput.value = '';
        }
        syncButtonStates();
        syncUrlQuery();
        applyFilter(true);
      },
      { signal }
    );
  });

  syncButtonStates();
  applyFilter(false);
}

document.addEventListener('astro:page-load', initCatalogFilter);