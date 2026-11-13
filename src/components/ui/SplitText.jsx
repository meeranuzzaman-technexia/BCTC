import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Splits text into words and slides each word up into view when scrolled into viewport.
 * `lines` can be a string or an array of strings (each rendered on its own line).
 *
 * Scroll-triggered: reveals exactly once, when the (static) heading element
 * crosses into the viewport. No timers — animations play on scroll, not on reload.
 */
export default function SplitText({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.035,
  once = true, // kept for backwards compatibility — reveal is always once
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const arr = Array.isArray(lines) ? lines : [lines];
  let wordIndex = 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} aria-label={arr.join(" ")}>
      {arr.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <span
                key={`${li}-${wi}`}
                className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-top"
              >
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: "110%" }}
                  animate={show ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 0.9,
                    delay: delay + i * stagger,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
                {wi < line.split(" ").length - 1 ? "\u00A0" : ""}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
