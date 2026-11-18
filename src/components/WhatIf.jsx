import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { WHAT_IF } from "../data/content.js";

const STEP = 22; // degrees between items on the arc

export default function WhatIf() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const items = WHAT_IF.items;
  const n = items.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0.05, 0.95], [0, -(n - 1) * STEP], {
    clamp: true,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(1, Math.max(0, (v - 0.05) / 0.9));
    const idx = Math.round(p * (n - 1));
    if (idx !== active) setActive(idx);
  });

  return (
    <section
      id="circle-timeline"
      ref={trackRef}
      data-theme="dark"
      className="relative h-[420vh] bg-pure"
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden text-paper"
        style={{
          "--d": "clamp(900px, 92vw, 1500px)",
        }}
      >
        {/* Heading */}
        <div className="px-site absolute left-0 top-[clamp(72px,5.5vw,96px)] z-10">
          <h2 className="t-h2 text-paper">{WHAT_IF.heading}</h2>
        </div>

        {/* Progress indicator */}
        <div className="px-site absolute right-0 top-[clamp(80px,5.8vw,104px)] z-10 hidden items-center gap-3 md:flex">
          <span className="t-small text-paper/60">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-paper"
              style={{ scaleX: useTransform(scrollYProgress, [0.05, 0.95], [0, 1]), transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* Circle */}
        <div
          className="circle-wrap absolute left-1/2 -translate-x-1/2"
          style={{
            width: "var(--d)",
            height: "var(--d)",
            top: "calc(100svh - var(--d) * 0.47)",
          }}
        >
          <motion.div className="relative h-full w-full" style={{ rotate }}>
            <div className="absolute inset-0 rounded-full border border-white/35" />
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={item.n}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${i * STEP}deg)` }}
                >
                  <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[calc(100%-6px)] flex-col items-center">
                    <div
                      className={`t-title flex h-[clamp(36px,2.85vw,48px)] w-[clamp(36px,2.85vw,48px)] items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-paper bg-paper text-pure"
                          : "border-white/45 text-paper/70"
                      }`}
                    >
                      {item.n}
                    </div>
                    <div
                      className={`mt-3 h-3 w-3 rounded-full bg-paper transition-transform duration-300 ${
                        isActive ? "scale-125" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Description (inside circle, below dot) */}
                  <div
                    className={`absolute left-1/2 top-0 flex w-[min(80vw,460px)] -translate-x-1/2 flex-col items-center transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="mt-[6px] h-[clamp(70px,9vw,140px)] w-px bg-paper/60" />
                    <div className="mt-6 flex flex-col items-center gap-3 text-center">
                      <p className="t-circle-head text-paper">{item.title}</p>
                      <p className="t-circle-base max-w-[28ch] text-paper/85">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
