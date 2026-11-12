import { motion } from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import { IconTile } from "./ui/Icon.jsx";
import { HERO, MEDIA } from "../data/content.js";

export default function Hero() {
  return (
    <section
      id="light-header-trigger"
      data-theme="dark"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-pure"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={MEDIA.heroPoster}
        >
          <source src={MEDIA.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="px-site relative z-10 flex h-full w-full flex-col pt-[clamp(84px,9vw,140px)] pb-[28px] md:pb-[42px]">
        <motion.h1
          className="t-h1 text-paper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO.title}
        </motion.h1>

        <div className="mt-auto flex flex-col items-start gap-10 md:flex-row md:items-end">
          {/* Feature list */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
            }}
          >
            {HERO.features.map((f) => (
              <motion.div
                key={f.title}
                className="flex items-center gap-5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <IconTile name={f.icon} dark size={48} />
                <div className="flex flex-col gap-2">
                  <p className="t-title text-paper">{f.title}</p>
                  <p className="t-desc max-w-[36ch] text-paper/75">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subhead + CTA */}
          <motion.div
            className="flex w-full flex-col items-start gap-6 md:ml-auto md:w-[48%]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="t-heading max-w-[16ch] text-paper">{HERO.subhead}</h2>
            <ArrowButton variant="white" size="lg" href="#whats-included" className="w-full sm:w-auto">
              {HERO.cta}
            </ArrowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
