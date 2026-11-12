import { motion } from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import { HERO, MEDIA } from "../data/content.js";

const VIDEO_SRC = "/media/5.mp4"; // public/media/5.mp4

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="home"
      data-theme="dark"
      className="relative min-h-[100svh] w-full overflow-hidden bg-pure"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={MEDIA.heroPoster}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Halka overlay, taaki video dikhe aur text readable rahe */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="px-site relative z-10 flex min-h-[100svh] w-full flex-col pt-[clamp(96px,11vw,150px)] pb-[28px] md:pb-[42px]">
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
        )}
        <motion.h1
          className="t-h1 max-w-[14ch] text-paper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          {HERO.title}
        </motion.h1>

        {/* Bottom row */}
        <div className="mt-auto flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          {/* Bottom-left: supporting copy */}
          <motion.p
            className="t-base-lg max-w-[46ch] text-paper/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
          >
            {HERO.sub}
          </motion.p>

          {/* Bottom-right: CTAs */}
          <motion.div
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
          >
            <ArrowButton variant="white" size="lg" href="#facilities">
              {HERO.primary}
            </ArrowButton>
            <a
              href="#contact"
              className="t-small inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-paper/45 px-6 font-medium tracking-[0.015em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              {HERO.secondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}