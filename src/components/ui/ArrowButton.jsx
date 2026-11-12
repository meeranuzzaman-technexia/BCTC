import { ArrowUpRight } from "lucide-react";

/**
 * Pill button with a circular arrow that swaps on hover.
 * variant: "dark"  -> black pill, white text, white circle, black arrow
 *          "white" -> white pill, black text, black circle, white arrow
 */
export default function ArrowButton({
  children,
  variant = "dark",
  onClick,
  href,
  className = "",
  size = "md",
}) {
  const isWhite = variant === "white";
  const pill = isWhite ? "bg-paper text-ink" : "bg-pure text-paper";
  const circle = isWhite ? "bg-ink text-paper" : "bg-paper text-ink";
  const h = size === "lg" ? "h-[52px] pl-6" : "h-[48px] pl-5";
  const circleSize = size === "lg" ? "h-[44px] w-[44px]" : "h-[40px] w-[40px]";

  const content = (
    <>
      <span className="t-small whitespace-nowrap font-medium tracking-[0.015em]">
        {children}
      </span>
      <span
        className={`relative flex ${circleSize} shrink-0 items-center justify-center overflow-hidden rounded-full ${circle}`}
      >
        <ArrowUpRight className="arrow-first absolute h-[18px] w-[18px]" strokeWidth={1.8} />
        <ArrowUpRight className="arrow-second absolute h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
    </>
  );

  const classes = `arrow-btn group inline-flex items-center justify-between gap-7 rounded-full p-1 ${h} ${pill} transition-opacity duration-300 hover:opacity-90 ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
