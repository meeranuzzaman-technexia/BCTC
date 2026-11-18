import { useEffect } from "react";
import { useLenis } from "lenis/react";

/** Route in-page links through the same smooth scroller as the mouse wheel. */
export default function SmoothScrollLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest("a[href]") : null;
      if (!link || link.hasAttribute("download") ||
          (link.target && link.target !== "_self")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin ||
          url.pathname !== window.location.pathname ||
          url.search !== window.location.search || !url.hash) return;

      let id;
      try {
        id = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;

      // Prevent the browser's instant hash jump from fighting Lenis.
      event.preventDefault();
      if (window.location.hash !== url.hash) {
        window.history.pushState(null, "", url.hash);
      }
      lenis.scrollTo(target, {
        duration: 1.4,
        lerp: 0,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        immediate: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}
