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
      className="relative min-h-screen min-h-[100svh] w-full overflow-hidden bg-pure"
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
        {/* Halka overlay, taaki video dikhe aur text readable rahe */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="hero-fit px-site relative z-10 flex min-h-screen min-h-[100svh] w-full flex-col pt-[clamp(84px,9vw,150px)] pb-[max(96px,calc(env(safe-area-inset-bottom,0px)+64px))] md:pb-[max(56px,calc(env(safe-area-inset-bottom,0px)+32px))]">
        {/* Heading (top-left) */}
        {HERO.label && (
          <motion.p
            className="t-small mb-4 font-medium uppercase tracking-[0.18em] text-paper/85"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {HERO.label}
          </motion.p>
        )}        <SplitText
          as="h1"
          lines={HERO.title}
          delay={0.25}
          className="t-h1 max-w-[14ch] text-paper"
        />

        {/* Bottom row */}
        <div className="hero-bottom mt-auto flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          {/* Bottom-left: supporting copy */}
          <motion.p
            className="t-base-lg max-w-[46ch] text-paper/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}          >
            {HERO.sub}
          </motion.p>

          {/* Bottom-right: CTAs */}          <motion.div
            className="hero-ctas flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}          >
            <ArrowButton variant="white" size="lg" href="#facilities">
              {HERO.primary}
            </ArrowButton>
            <a
              href="#contact"
              className="t-small inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-[#01CAB8]/70 px-6 font-medium tracking-[0.015em] text-[#01CAB8] transition-colors duration-300 hover:bg-[#01CAB8] hover:text-[#052C29]"
            >
              {HERO.secondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}