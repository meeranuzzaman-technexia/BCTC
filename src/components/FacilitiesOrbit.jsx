import { useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import SplitText from "./ui/SplitText.jsx";
import { FACILITIES } from "../data/content.js";

const STEP = 22;          // degrees between items
const FADE_END = 0.1;     // orbit fade-in finishes here
const ROT_START = 0.12;   // item switching starts here
const ROT_END = 0.76;     // last item yahan tak rehta hai, uske baad overlay phase
const SNAP = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

function OrbitItem({ item, i, active, rotate }) {
  const isActive = i === active;
  const counter = useTransform(rotate, (r) => -(r + i * STEP));

  const fade = {
    opacity: isActive ? 1 : 0,
    transition: {
      duration: isActive ? 0.5 : 0.25,
      delay: isActive ? 0.25 : 0,
      ease: "easeOut",
    },
  };

  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${i * STEP}deg)` }}
    >
      <motion.div
        animate={fade}
        initial={{ opacity: 0 }}
        className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[calc(100%-6px)] flex-col items-center"
      >
        <motion.div
          style={{ rotate: counter }}
          className="t-title flex h-[clamp(36px,2.85vw,48px)] w-[clamp(36px,2.85vw,48px)] items-center justify-center rounded-full border border-white/45 text-paper"
        >
          {item.n}
        </motion.div>
        <div className="mt-3 h-3 w-3 rounded-full bg-paper" />
      </motion.div>

      <motion.div
        animate={fade}
        initial={{ opacity: 0 }}
        className="absolute left-1/2 top-0 flex w-[min(80vw,460px)] -translate-x-1/2 flex-col items-center"
      >
        <div className="mt-[6px] h-[clamp(70px,9vw,140px)] w-px bg-paper/60" />
        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <p className="t-circle-head text-paper">{item.title}</p>
          <p className="t-circle-base max-w-[30ch] text-paper/85">{item.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FacilitiesOrbit() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const items = FACILITIES.cards;
  const n = items.length;

  const rotate = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const orbitOpacity = useTransform(scrollYProgress, [0, FADE_END], [0, 1]);
  const orbitY = useTransform(scrollYProgress, [0, FADE_END], [60, 0]);

  const progress = useTransform(scrollYProgress, [ROT_START, ROT_END], [0, 1], {
    clamp: true,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(1, Math.max(0, (v - ROT_START) / (ROT_END - ROT_START)));
    const idx = Math.min(n - 1, Math.floor(p * n));
    if (idx !== active) {
      setActive(idx);
      animate(rotate, -idx * STEP, SNAP);
    }
  });

  return (
    <section
      id="facilities"
      ref={trackRef}
      data-theme="dark"
      data-logo="white"
      // 550vh = 450vh scroll + 100vh overlay phase
      // -mb-[100svh] = neeche wala section 100svh pehle shuru hota hai, isliye wo upar overlay hota hai
      className="relative -mb-[100svh] h-[550vh] bg-pure"
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden text-paper"
        style={{ "--d": "clamp(620px, 170vw, 1500px)" }}
      >
        <div className="px-site absolute left-0 top-[clamp(88px,7vw,120px)] z-10 max-w-[46ch]">
          <SplitText
            as="h2"
            lines={FACILITIES.title}
            className="t-h2-black max-w-[16ch] text-paper"
          />
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="t-base mt-4 max-w-[46ch] text-paper/75"
          >
            {FACILITIES.sub}
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: orbitOpacity }}
          className="px-site absolute right-0 top-[clamp(96px,7.5vw,128px)] z-10 hidden items-center gap-3 md:flex"
        >
          <span className="t-small text-paper/70">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-paper"
              style={{ scaleX: progress, transformOrigin: "left" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="px-site absolute bottom-[clamp(28px,3.5vw,44px)] left-0 z-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArrowButton variant="white" size="lg" href="#facilities">
            {FACILITIES.cta}
          </ArrowButton>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ opacity: orbitOpacity, y: orbitY }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[clamp(330px,46svh,430px)] lg:top-[clamp(260px,38svh,400px)]"
            style={{
              width: "var(--d)",
              height: "var(--d)",
            }}
          >
            <motion.div className="relative h-full w-full" style={{ rotate }}>
              <div className="absolute inset-0 rounded-full border border-white/35" />
              {items.map((item, i) => (
                <OrbitItem
                  key={item.n}
                  item={item}
                  i={i}
                  active={active}
                  rotate={rotate}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}