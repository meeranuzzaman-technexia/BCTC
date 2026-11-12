import ArrowButton from "./ui/ArrowButton.jsx";
import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import { CTA as CTA_DATA, CONTACT, MEDIA } from "../data/content.js";

/**
 * SECTION 8 — Final Call to Action
 * Facilities (sticky) ke upar overlay hota hai. z-20 + opaque bg zaroori hai.
 */
export default function CTA() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="relative z-30 min-h-[100svh] w-full overflow-hidden bg-ink shadow-[0_-30px_60px_rgba(0,0,0,0.35)]"
    >
      <img
        src={MEDIA.ctaImage}
        alt="Bone Care Trauma Centre — patient care"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      <div className="px-site relative z-10 flex min-h-[100svh] flex-col items-start justify-center py-[clamp(72px,9vw,140px)]">
        <div className="flex max-w-[64ch] flex-col items-start gap-6">
          <SplitText as="h2" lines={CTA_DATA.title} className="t-h2 max-w-[18ch] text-paper" />
          <Reveal delay={0.2}>
            <p className="t-base-lg max-w-[46ch] text-paper/90">{CTA_DATA.text}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ArrowButton variant="white" size="lg" href={CONTACT.emailHref}>
                {CTA_DATA.primary}
              </ArrowButton>
              <a
                href={CONTACT.phone1Href}
                className="t-small inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-paper/45 px-6 font-medium tracking-[0.015em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                {CTA_DATA.secondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="t-small text-paper/85">
              {CONTACT.phone1} · {CONTACT.phone2} · {CONTACT.mobile}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}