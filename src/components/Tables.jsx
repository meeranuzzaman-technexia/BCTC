import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import ArrowButton from "./ui/ArrowButton.jsx";
import ImageCard from "./ui/ImageCard.jsx";
import { FACILITIES } from "../data/content.js";

/**
 * SECTION 6 — Facilities Preview
 * Light background, four large image cards, Explore All Facilities button.
 */
export default function Tables() {
  return (
    <section id="facilities" className="relative z-10 bg-grey">
      <div className="px-site py-[clamp(72px,10vw,140px)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitText
            as="h2"
            lines={FACILITIES.title}
            className="t-h2-black max-w-[16ch] text-ink"
          />
          <Reveal delay={0.15} className="lg:max-w-[42ch]">
            <p className="t-base-lg text-ink/80">{FACILITIES.sub}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.cards.map((card) => (
            <ImageCard key={card.n} item={card} />
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <ArrowButton variant="dark" size="lg" href="#facilities">
            {FACILITIES.cta}
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
