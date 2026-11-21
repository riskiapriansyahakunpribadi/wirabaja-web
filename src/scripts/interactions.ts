/*
 * Menangani efek interaksi tombol global: riak halus dari titik klik dan efek magnet
 * mengikuti kursor pada tombol yang ditandai [data-magnetic="true"].
 * Hanya menganimasikan transform dan opacity, serta otomatis nonaktif saat prefers-reduced-motion.
 */

let interactionsController: AbortController | null = null;

function initGlobalInteractions(): void {
  if (interactionsController) {
    interactionsController.abort();
  }
  interactionsController = new AbortController();
  const { signal } = interactionsController;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Efek riak halus dari titik klik atau sentuhan pada tombol yang memakai data-btn-ripple.
  const rippleControls = Array.from(
    document.querySelectorAll<HTMLElement>('[data-btn-ripple="true"]')
  );

  rippleControls.forEach((control) => {
    control.addEventListener(
      'pointerdown',
      (event) => {
        if (event.button !== 0 && event.pointerType === 'mouse') return;

        const rect = control.getBoundingClientRect();
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.setAttribute('aria-hidden', 'true');
        ripple.style.width = `${diameter}px`;
        ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - rect.left - radius}px`;
        ripple.style.top = `${event.clientY - rect.top - radius}px`;

        control.appendChild(ripple);

        const cleanup = () => {
          ripple.remove();
        };

        ripple.addEventListener('animationend', cleanup, { once: true });
        window.setTimeout(cleanup, 600);
      },
      { signal }
    );
  });

  // Efek magnet hanya aktif di perangkat berkursor presisi agar tidak mengganggu perangkat sentuh.
  const supportsFinePointer = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  ).matches;

  if (!supportsFinePointer) return;

  const magneticControls = Array.from(
    document.querySelectorAll<HTMLElement>('[data-magnetic="true"]')
  );

  magneticControls.forEach((control) => {
    let frameId = 0;

    control.addEventListener(
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse') return;

        const rect = control.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;

        const moveX = Math.max(-6, Math.min(6, relX * 12));
        const moveY = Math.max(-4, Math.min(4, relY * 8));

        if (frameId) {
          window.cancelAnimationFrame(frameId);
        }

        frameId = window.requestAnimationFrame(() => {
          control.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
        });
      },
      { signal }
    );

    const resetTransform = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
      control.style.transform = '';
    };

    control.addEventListener('pointerleave', resetTransform, { signal });
    control.addEventListener('blur', resetTransform, { signal });
  });
}

document.addEventListener('astro:page-load', initGlobalInteractions);