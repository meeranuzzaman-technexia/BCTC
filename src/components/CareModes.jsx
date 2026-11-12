import ArrowButton from "./ui/ArrowButton.jsx";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { CARE_MODES, MEDIA } from "../data/content.js";
import { useWaitlist } from "../context/WaitlistContext.jsx";

export default function CareModes() {
  const { openModal } = useWaitlist();
  return (
    <section
      id="care-modes"
      data-theme="dark"
      className="relative z-10 h-[min(112vh,1100px)] min-h-[720px] w-full overflow-hidden bg-ink"
    >
      <img
        src={MEDIA.careModes}
        alt="Portrait in soft light"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="px-site absolute inset-0 flex flex-col justify-between py-[52px]">
        <div className="flex flex-col gap-6 lg:w-[46%]">
          <SplitText as="h2" lines={CARE_MODES.title} className="t-tags text-paper" />
          <Reveal delay={0.2} className="flex flex-wrap gap-x-1 gap-y-2 lg:w-[60%]">
            {CARE_MODES.chips.map((c) => (
              <span
                key={c}
                className="t-small rounded-full bg-paper px-4 py-3 text-ink"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col items-start gap-6 lg:ml-auto lg:w-[48%]">
          <Reveal>
            <p className="t-m-side-white max-w-[14ch] text-paper">{CARE_MODES.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ArrowButton variant="white" size="lg" onClick={openModal}>
              {CARE_MODES.cta}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
