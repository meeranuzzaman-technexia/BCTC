import { motion } from "framer-motion";

/**
 * Splits text into words and slides each word up into view when scrolled into viewport.
 * `lines` can be a string or an array of strings (each rendered on its own line).
 */
export default function SplitText({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.035,
  once = true,
}) {
  const arr = Array.isArray(lines) ? lines : [lines];
  let wordIndex = 0;

  return (
    <Tag className={className} aria-label={arr.join(" ")}>
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
                  whileInView={{ y: "0%" }}
                  viewport={{ once, margin: "-10% 0px" }}
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
