// Lightweight scroll reveal that respects prefers-reduced-motion
export default function initScrollReveal() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // If IntersectionObserver is available, observe reveals and add class when visible.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    // Fallback: make reveals visible if IntersectionObserver not supported.
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // Safety net: if observer doesn't trigger for any reason (e.g. some CSP or runtime quirk on host),
  // ensure reveals become visible after 1s so the page doesn't stay blank.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => el.classList.add('is-visible'));
  }, 1000);
}
