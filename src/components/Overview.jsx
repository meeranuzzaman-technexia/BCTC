import { PhoneCall } from "lucide-react";
import ArrowButton from "./ui/ArrowButton.jsx";
import SplitText from "./ui/SplitText.jsx";
import Reveal from "./ui/Reveal.jsx";
import { CONTACT, INTRO } from "../data/content.js";

/**
 * SECTION 3 — Introduction / Hospital Overview
 * Hero-with-image-text-and-two-buttons layout (shadcn reference), rebuilt on
 * Bone Care's own tokens: porcelain on `pure`, Neue Montreal headings, no
 * shadcn primitives — just our Buttons/SplitText. Content, fonts and colors
 * are unchanged; only the layout is converted.
 * Copy left (badge → heading → sub → emphasis → 2 CTAs),
 * building photograph right (square, rounded).
 */
export default function Overview() {
  return (
    <section
      id="overview"
      data-theme="dark"
      data-logo="white"
      className="relative z-10 w-full overflow-hidden bg-pure py-20 text-paper lg:py-32"
    >
      <div className="px-site mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* Copy — badge, heading, sub, emphasis, two CTAs */}
        <div className="flex flex-col gap-6 lg:gap-7">
          <Reveal>
            <span className="inline-flex w-fit items-center rounded-full border border-paper/25 px-4 py-1.5 text-[11px] font-medium uppercase leading-none tracking-[0.18em] text-paper/85">
              {INTRO.label}
            </span>
          </Reveal>

          <SplitText
            as="h2"
            lines={INTRO.title}
            delay={0.1}
            className="t-h2-black max-w-[16ch] text-paper"
          />

          <Reveal delay={0.2}>
            <p className="t-base-lg max-w-md text-paper/80">{INTRO.sub}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="t-heading max-w-[26ch] text-paper">{INTRO.emphasis}</p>
          </Reveal>
        </div>

        {/* Photo — square, rounded, right column (stacks below copy on mobile) */}
        <div className="relative w-full">
          <img
            src={INTRO.image}
            alt={INTRO.imageAlt}
            loading="lazy"
            className="aspect-square w-full rounded-[10px] border border-white/10 object-cover object-[68%_24%]"
          />
        </div>
      </div>
    </section>
  );
}
