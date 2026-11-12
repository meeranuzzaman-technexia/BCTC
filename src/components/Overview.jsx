import SplitText from "./ui/SplitText.jsx";
import Reveal from "./ui/Reveal.jsx";
import { INTRO } from "../data/content.js";

function ShapeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-paper" fill="none" aria-hidden="true">
      <path
        d="M16 2c2.2 7.2 6.8 11.8 14 14-7.2 2.2-11.8 6.8-14 14-2.2-7.2-6.8-11.8-14-14 7.2-2.2 11.8-6.8 14-14Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * SECTION 3 — Introduction / Hospital Overview
 * Maven's large dark section immediately below the hero:
 * centered heading + short introduction.
 */
export default function Overview() {
  return (
    <section
      id="overview"
      data-theme="dark"
      className="relative z-10 flex min-h-auto flex-col justify-center bg-pure text-paper"
    >
      <div className="px-site flex w-full flex-col items-center gap-8 py-20 text-center">
        {/* <Reveal>
          <ShapeIcon />
        </Reveal> */}
        <SplitText
          as="h2"
          lines={INTRO.title}
          className="t-h2-black max-w-[20ch] text-paper"
        />
        <Reveal delay={0.15}>
          <p className="t-base-lg max-w-[46ch] text-paper/75">{INTRO.sub}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="t-heading max-w-[24ch] text-paper">{INTRO.emphasis}</p>
        </Reveal>
      </div>
    </section>
  );
}
