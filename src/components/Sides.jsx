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
    /* Scoped backdrop: paper (#FBFCFA) — same as the page so the 3D entry/exit
       transition from the previous section stays seamless (no cream band).
       No padding on the wrapper — a gap here shows up as a white strip under
       the image/panel before the dark section. The extra bottom space is
       given inside the text panel instead (lg:pb-12). */
    <PageScroll className="bg-paper">
      <section
        id="about"
        data-logo="white"
        className="relative z-20 flex min-h-[100svh] flex-col bg-paper lg:min-h-[100svh] lg:flex-row"      >
      {/* Image — on lg it is absolutely positioned so it always fills the
          section's height, even when the section grows on short screens */}
      <div className="h-[60vw] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1/2">
        <img
          src="media/1.webp"
          alt="Bone Care Trauma Centre — caring hands and clinical care"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text panel — h-full removed: on lg the section height is min-driven
          (indefinite), so a 100% height never resolved; align-items:stretch
          makes the panel fill the section instead */}
      <div className="flex w-full flex-col bg-beige px-[var(--pad-x)] pt-20 pb-20 lg:ml-auto lg:w-1/2 lg:pt-[42px] lg:pb-12">        <p className="t-small font-medium uppercase tracking-[0.18em] text-ink/75">
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
