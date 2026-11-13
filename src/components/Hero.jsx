import { motion } from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import SplitText from "./ui/SplitText.jsx";
import { HERO } from "../data/content.js";

const VIDEO_SRC = "/media/5.mp4"; // public/media/5.mp4

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="home"
      data-theme="dark"
      data-logo="colored"
      className="relative z-30 min-h-[calc(100lvh+4rem)] w-full overflow-hidden bg-pure lg:min-h-[100lvh]"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover object-[72%_center] md:object-[62%_center] lg:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Overlay: mobile/tablet pe thoda gehra taake centered text readable rahe */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content
          Mobile + tablet (< lg): sab kuch center me.
          Desktop (lg+): pehle jaisa left/right layout. */}
      <div style={{ minHeight: "100dvh" }} className="hero-fit px-site relative z-10 flex min-h-screen w-full flex-col items-center justify-center pt-[clamp(84px,9vw,150px)] pb-[max(96px,calc(env(safe-area-inset-bottom,0px)+64px))] text-center lg:items-stretch lg:justify-start lg:text-left lg:pb-[max(56px,calc(env(safe-area-inset-bottom,0px)+32px))]">
        {HERO.label && (
          <motion.p
            className="t-small mb-4 pt-5 text-center font-medium uppercase tracking-[0.18em] text-paper/85 sm:pt-0 lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {HERO.label}
          </motion.p>
        )}

        <SplitText
          as="h1"
          lines={HERO.title}
          delay={0.25}
          className="t-h1 mx-auto max-w-[14ch] text-center text-paper lg:mx-0 lg:text-left"
        />

        {/* Bottom row — < lg par `contents` (copy H1 ke neeche, CTAs bottom me).
            lg+ par do-column layout (copy left, CTAs right). */}
        <div className="hero-bottom contents lg:flex lg:mt-auto lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          {/* Supporting copy */}
          <motion.p
            className="t-base-lg mx-auto mt-6 max-w-[46ch] text-center text-paper/90 lg:mx-0 lg:mt-0 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
          >
            {HERO.sub}
          </motion.p>

          {/* CTAs — < lg par center me, dono ek line me */}
          <motion.div
            className="hero-ctas mt-8 flex w-full items-center justify-center gap-2.5 md:gap-4 lg:mt-0 lg:w-auto lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
          >
            <ArrowButton variant="white" size="hero" href="#facilities">
              {HERO.primary}
            </ArrowButton>
            <a
              href="#contact"
              className="t-small inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-full border border-[#01CAB8]/70 px-4 text-[13px] font-medium tracking-[0.015em] text-[#01CAB8] transition-colors duration-300 hover:bg-[#01CAB8] hover:text-[#052C29] md:h-[52px] md:px-6"
            >
              {HERO.secondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}