import ArrowButton from "./ui/ArrowButton.jsx";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { SIDES, MEDIA } from "../data/content.js";
import { useWaitlist } from "../context/WaitlistContext.jsx";

export default function Sides() {
  const { openModal } = useWaitlist();
  return (
    <section className="relative z-10 flex flex-col bg-beige lg:h-[100svh] lg:min-h-[640px] lg:flex-row">
      {/* Image */}
      <div className="h-[60vw] w-full overflow-hidden lg:h-full lg:w-1/2">
        <img
          src={MEDIA.sideImage}
          alt="Hand reaching toward light"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text panel */}
      <div className="flex w-full flex-col bg-beige px-[var(--pad-x)] pt-10 pb-8 lg:h-full lg:w-1/2 lg:pt-[42px] lg:pb-8">
        <SplitText as="h2" lines={SIDES.title} className="t-h2-sides text-ink" />
        <div className="mt-14 flex flex-col items-start gap-8 lg:mt-auto lg:max-w-[61ch]">
          <Reveal>
            <p className="t-m-side max-w-[24ch] text-ink">{SIDES.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ArrowButton variant="dark" size="lg" onClick={openModal}>
              {SIDES.cta}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
