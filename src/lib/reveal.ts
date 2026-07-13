// Scroll-reveal: rise `.reveal-scroll` elements up once as they enter the viewport.
const revealEls = document.querySelectorAll<HTMLElement>(".reveal-scroll");

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealIO.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  revealEls.forEach((el) => revealIO.observe(el));
}

export {};
