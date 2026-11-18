import SplitText from "./ui/SplitText.jsx";
import Icon from "./ui/Icon.jsx";
import { TIMELINE } from "../data/content.js";

export default function Timeline() {
  return (
    <section className="relative z-10 bg-grey">
      <div className="px-site pt-[52px] pb-[clamp(96px,14vw,252px)]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          {/* Sticky headline */}
          <div className="lg:sticky lg:top-[5em] lg:w-[48%] lg:self-start">
            <SplitText as="h2" lines={TIMELINE.title} className="t-h2-cards max-w-[16ch] text-ink" />
          </div>

          {/* Stacking cards */}
          <div className="flex flex-col gap-4 lg:ml-auto lg:w-[42%]">
            {TIMELINE.cards.map((card, i) => (
              <article
                key={card.title}
                className="rounded-[6px] border border-white/10 bg-ink text-paper lg:sticky"
                style={{ top: `calc(5em + ${i * 64}px)` }}
              >
                <div className="flex items-center gap-4 p-5 md:p-6">
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-paper/45">
                    <Icon name={card.icon} className="h-7 w-7" strokeWidth={1.3} />
                  </span>
                  <p className="t-cms-title text-paper">{card.title}</p>
                </div>
                <div className="flex flex-col gap-6 border-t border-white/10 p-5 md:p-6 lg:min-h-[300px]">
                  <p className="t-base-lg text-paper/90">{card.sub}</p>
                  <ul className="mt-auto flex flex-col gap-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="t-base flex items-center gap-3 font-normal text-paper/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
