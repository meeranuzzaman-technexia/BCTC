import ArrowButton from "./ui/ArrowButton.jsx";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { CTA as CTA_DATA, MEDIA } from "../data/content.js";
import { useWaitlist } from "../context/WaitlistContext.jsx";

export default function CTA() {
  const { openModal } = useWaitlist();
  return (
    <section
      data-theme="dark"
      className="relative z-10 h-[min(110vh,1150px)] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      <img
        src={MEDIA.ctaImage}
        alt="Portrait with soft light"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      <div className="px-site absolute inset-0 flex flex-col items-start justify-center py-[clamp(80px,10vw,152px)]">
        <div className="flex max-w-[64ch] flex-col items-start gap-6">
          <SplitText as="h2" lines={CTA_DATA.title} className="t-h2 max-w-[18ch] text-paper" />
          <Reveal delay={0.2}>
            <p className="t-base-lg max-w-[46ch] text-paper/90">{CTA_DATA.text}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <ArrowButton variant="white" size="lg" onClick={openModal}>
              {CTA_DATA.cta}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
