import ArrowButton from "./ui/ArrowButton.jsx";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { PageScroll } from "./ui/container-scroll-animation.jsx";
import { JOURNEY, MEDIA } from "../data/content.js";

/**
 * SECTION 5 — Hospital History / Credibility
 * Large visual storytelling section: photograph on one side,
 * text on the other (OUR JOURNEY).
 * Entry: full-bleed container-scroll 3D animation (no card chrome) —
 * the whole section un-tilts and slides flat as it enters the viewport.
 */
export default function Sides() {
  return (
    /* Scoped backdrop: only behind/around the Sides section is paper (#F7F5EE); the rest of the page stays white */
    <PageScroll className="bg-[#F7F5EE]">
      <section
        id="about"
        data-logo="white"
        className="relative z-20 flex min-h-[100svh] flex-col bg-paper lg:h-[100svh] lg:flex-row"      >
      {/* Image */}
      <div className="h-[60vw] w-full overflow-hidden lg:h-full lg:w-1/2">
        <img
          src={MEDIA.sideImage}
          alt="Bone Care Trauma Centre — caring hands and clinical care"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text panel */}
      <div className="flex h-full w-full flex-col bg-beige px-[var(--pad-x)] pt-20 pb-20 lg:w-1/2 lg:pt-[42px] lg:pb-8">        <p className="t-small font-medium uppercase tracking-[0.18em] text-ink/75">
          {JOURNEY.label}
        </p>
        <SplitText as="h2" lines={JOURNEY.title} className="t-h2-sides mt-3 text-ink" />
        <div className="mt-10 flex flex-col items-start gap-8 lg:mt-auto">
          <Reveal>
            <p className="t-base-lg max-w-[56ch] text-ink/85">{JOURNEY.text}</p>
          </Reveal>

          {/* Credibility stats */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {JOURNEY.stats.map((s) => (
              <div key={s.label} className="dash-top flex flex-col gap-2 pt-4">
                <p className="text-[clamp(20px,1.8vw,30px)] font-medium leading-none tracking-[-0.02em] text-ink">
                  {s.value}
                </p>
                <p className="t-small max-w-[16ch] text-ink/80">{s.label}</p>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <ArrowButton variant="dark" size="lg" href="#about">
              {JOURNEY.cta}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
      </section>
    </PageScroll>
  );
}
