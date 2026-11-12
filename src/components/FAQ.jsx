import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitText from "./ui/SplitText.jsx";
import { FAQ as FAQ_DATA, MEDIA } from "../data/content.js";

function Item({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
      >
        <span className="t-base-lg max-w-[49ch] text-ink">{item.q}</span>
        <span
          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-transform duration-300 ease-[cubic-bezier(.165,.84,.44,1)] ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <span className="absolute h-[2px] w-[14px] rounded-full bg-[#2b2b2b]" />
          <span className="absolute h-[14px] w-[2px] rounded-full bg-[#2b2b2b]" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 pb-6 pr-12">
              {item.a.map((p, i) => (
                <p key={i} className="t-base font-medium leading-[1.5] text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="relative z-10 bg-grey">
      <div className="px-site py-5">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
          {/* Sticky image */}
          <div className="lg:w-1/2">
            <div className="h-[60vw] overflow-hidden rounded-[4px] lg:sticky lg:top-[4.8em] lg:h-[88vh]">
              <img
                src={MEDIA.faqImage}
                alt="Hand reaching into light"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Questions */}
          <div className="lg:w-1/2 lg:pt-6 lg:pl-7">
            <SplitText as="h2" lines={FAQ_DATA.title} className="t-h2-black text-ink" />
            <div className="mt-8 lg:w-[90%]">
              {FAQ_DATA.items.map((item, i) => (
                <Item
                  key={item.q}
                  item={item}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
