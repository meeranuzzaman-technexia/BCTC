import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import ArrowButton from "./ui/ArrowButton.jsx";
import ImageCard from "./ui/ImageCard.jsx";
import { CORE_AREAS } from "../data/content.js";

/**
 * SECTION 4 — Core Areas of Care
 * Heading + tagline smoothly reveal on section scroll; cards run in an
 * infinite marquee. Marquee hover pe nahi rukta aur speed tez hai.
 */
export default function CoreAreas() {
  return (
    <section
      id="core-areas"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper"
    >
      <div className="px-site pt-20">
        {/* Heading row — smooth reveal on scroll */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitText
            as="h2"
            lines={CORE_AREAS.title}
            className="t-h2-black max-w-[16ch] text-ink"
          />
          <Reveal delay={0.25} className="lg:max-w-[36ch]" y={40}>
            <p className="t-base-lg text-ink/80">{CORE_AREAS.tagline}</p>
          </Reveal>
        </div>
      </div>

      {/* Infinite marquee: hover pe nahi rukta, speed tez */}
      <div className="marquee mt-10 w-full overflow-hidden md:mt-14">
        <div
          className="marquee-track"
          style={{
            animationPlayState: "running", // hover pause override
            animationDuration: "22s",      // chhota = tez
          }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex" aria-hidden={dup === 1}>
              {CORE_AREAS.cards.map((card) => (
                <ImageCard key={`${dup}-${card.n}`} item={card} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="px-site pb-10">
        {/* View All Facilities */}
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-end">
          <ArrowButton variant="dark" size="lg" href="#facilities">
            {CORE_AREAS.cta}
          </ArrowButton>
        </div>

        {/* Three additional cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
          {CORE_AREAS.additional.map((item, i) => (
            <Reveal
              key={item.n}
              delay={i * 0.12}
              y={48}
              className="dash-top flex flex-col gap-6 py-7"
            >
              <p className="t-small font-medium tracking-[0.08em] text-ink/75">{item.n}</p>
              <div className="flex flex-col gap-3">
                <p className="t-grid-title text-ink">{item.title}</p>
                <p className="t-base max-w-[36ch] font-normal text-ink/70">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}