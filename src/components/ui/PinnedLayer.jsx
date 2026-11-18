import { useLayoutEffect, useRef, useState } from "react";

/**
 * Child screen par aate hi pin ho jaata hai, aur agla section (-mb ke saath)
 * uske upar overlay hota hai.
 * Child screen se lamba ho to pehle poora scroll hota hai, phir pin hota hai.
 */
export default function PinnedLayer({ children, className = "", style }) {
  const ref = useRef(null);
  const [top, setTop] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () =>
      setTop(Math.min(0, window.innerHeight - el.offsetHeight));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`sticky ${className}`}
      style={{ top, ...style }}
    >
      {children}
    </div>
  );
}