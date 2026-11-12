import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { IconTile } from "./ui/Icon.jsx";
import { OVERVIEW, BIOMARKERS } from "../data/content.js";

function ShapeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-ink" fill="none" aria-hidden="true">
      <path
        d="M16 2c2.2 7.2 6.8 11.8 14 14-7.2 2.2-11.8 6.8-14 14-2.2-7.2-6.8-11.8-14-14 7.2-2.2 11.8-6.8 14-14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BiomarkerCard({ m }) {
  return (
    <article className="group relative mr-4 h-[clamp(380px,42vw,600px)] w-[clamp(290px,32vw,460px)] shrink-0 overflow-hidden rounded-[8px] bg-ink text-paper">
      <img
        src={m.image}
        alt={m.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[clamp(40px,3.6vw,56px)] font-medium leading-none tracking-[-0.03em]">
              {m.value}
            </p>
            <p className="t-small text-paper/70">{m.unit}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <p className="t-list-title">{m.name}</p>
            <p className="t-small text-paper/70">{m.sub}</p>
          </div>
        </div>
        <p className="t-base max-w-[30ch] font-normal text-paper/90">{m.desc}</p>
      </div>
    </article>
  );
}

// Right-hand dashed divider: 2 columns from `sm`, 4 columns from `lg`
const RIGHT_BORDER = ["sm:dash-right", "lg:dash-right", "sm:dash-right", ""];

function GridItem({ f, index }) {
  return (
    <Reveal
      delay={index * 0.08}
      className={`dash-top flex min-h-[260px] flex-col justify-between gap-10 px-6 py-6 md:px-8 lg:min-h-[320px] ${
        RIGHT_BORDER[index] || ""
      }`}
    >
      <IconTile name={f.icon} size={62} />
      <div className="flex flex-col gap-3">
        <p className="t-grid-title text-ink">{f.title}</p>
        <p className="t-base max-w-[34ch] font-normal text-ink/70">{f.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Overview() {
  return (
    <section id="whats-included" className="bg-paper">
      <div className="px-site pt-[clamp(72px,10vw,152px)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-5">
            <Reveal className="mt-2 shrink-0">
              <ShapeIcon />
            </Reveal>
            <SplitText
              as="h2"
              lines={OVERVIEW.question}
              className="t-h2-black max-w-[16ch] text-ink"
            />
          </div>
          <Reveal delay={0.2} className="lg:max-w-[38ch]">
            <p className="t-base-lg text-ink/80">{OVERVIEW.tagline}</p>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee mt-12 w-full overflow-hidden md:mt-16">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex" aria-hidden={dup === 1}>
              {BIOMARKERS.map((m) => (
                <BiomarkerCard key={`${dup}-${m.name}`} m={m} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Anyone. Anywhere. */}
      <div className="px-site pt-[clamp(72px,9vw,140px)] pb-[clamp(60px,8vw,120px)]">
        <SplitText
          as="h2"
          lines={[OVERVIEW.anyone, OVERVIEW.anyoneSub]}
          className="t-h2-black mb-10 max-w-[18ch] text-ink md:mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 dash-bottom">
          {OVERVIEW.features.map((f, i) => (
            <GridItem key={f.title} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
