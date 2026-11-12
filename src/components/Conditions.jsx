import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { IconTile } from "./ui/Icon.jsx";
import { DESIGNED, CONDITIONS } from "../data/content.js";

export default function Conditions() {
  return (
    <section id="health-conditions" className="relative z-10 bg-paper">
      <div className="px-site pt-[clamp(72px,10vw,152px)] pb-[clamp(72px,10vw,152px)]">
        {/* Heading + features */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="lg:sticky lg:top-[4.5em] lg:w-[42%] lg:self-start">
            <SplitText as="h2" lines={DESIGNED.title} className="t-h2-black text-ink" />
            <Reveal delay={0.2} className="mt-6">
              <p className="t-base-lg max-w-[40ch] text-ink/80">
                {DESIGNED.sub[0]}
                <br />
                {DESIGNED.sub[1]}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:w-[58%]">
            {DESIGNED.features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 2) * 0.08}
                className="dash-top flex flex-col gap-8 py-7 sm:min-h-[260px] sm:justify-between"
              >
                <IconTile name={f.icon} size={56} />
                <div className="flex flex-col gap-3">
                  <p className="t-grid-title max-w-[18ch] text-ink">{f.title}</p>
                  <p className="t-base max-w-[36ch] font-normal text-ink/70">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Conditions grid */}
        <div className="mt-[clamp(80px,10vw,160px)] grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((cat) => (
            <div key={cat.title} className="relative">
              <h3 className="seo-title t-seo-title sticky top-0 z-[2] max-w-[13ch] pt-[1.2em] pb-[0.8em] text-ink lg:pt-[2em] lg:pb-[1em]">
                {cat.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-[0.35em] lg:mt-[6em]">
                {cat.items.map((c) => (
                  <li key={c} className="t-base text-ink/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
