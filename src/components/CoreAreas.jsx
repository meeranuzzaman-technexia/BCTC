import { Slice, PersonStanding, Pill } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import ArrowButton from "./ui/ArrowButton.jsx";
import ImageCard from "./ui/ImageCard.jsx";
import { CORE_AREAS } from "../data/content.js";

/** Filled icons for the three "additional" cards (Surgical / Physio / Patient Care). */
const ADDITIONAL_ICONS = [Slice, PersonStanding, Pill];

/**
 * SECTION 4 — Core Areas of Care
 * Heading + tagline smoothly reveal on section scroll; cards run in an
 * infinite marquee. Marquee hover pe nahi rukta aur speed tez hai.
 */
export default function CoreAreas() {
  return (
    <section
      id="core-areas"
      data-logo="colored"
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

        {/* Three additional cards — dark green panel, filled white icons,
            no index numbers (reference: image-6.png).
            Spacing kam: no min-height, no mt-auto, chhota gap/padding. */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-[8px] border border-white/10 bg-pure sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {CORE_AREAS.additional.map((item, i) => {
            const Icon = ADDITIONAL_ICONS[i] ?? Pill;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.12}
                y={48}
                className="flex flex-col gap-4 p-5 sm:p-6"
              >
                <Icon
                  size={32}
                  stroke="none"
                  fill="#FFFFFF"
                  aria-hidden="true"
                  className="h-8 w-8"
                />
                <div className="flex flex-col gap-1.5">
                  <p className="t-grid-title text-white">{item.title}</p>
                  <p className="t-base max-w-[36ch] font-normal text-[#BDD2C1]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}