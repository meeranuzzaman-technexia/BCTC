import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import { NAV_LINKS, MOBILE_LINKS } from "../data/content.js";
import { useWaitlist } from "../context/WaitlistContext.jsx";

/** Determines whether the header currently sits above a dark section. */
function useHeaderLight() {
  const [light, setLight] = useState(true);
  useEffect(() => {
    const probeY = 36;
    const check = () => {
      const darks = document.querySelectorAll('[data-theme="dark"]');
      let isLight = false;
      darks.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom >= probeY) isLight = true;
      });
      setLight(isLight);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  return light;
}

export default function Header() {
  const light = useHeaderLight();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useWaitlist();

  useEffect(() => {
    if (menuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const textColor = menuOpen || light ? "text-paper" : "text-ink";
  const dotColor = menuOpen || light ? "bg-paper" : "bg-ink";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[120]">
        <div className="px-site w-full py-[10px] md:py-[12px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`t-logo transition-colors duration-500 ${textColor}`}
            >
              MyHealthPrac
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-7 lg:flex">
              <nav className="flex items-center gap-[14px]">
                {NAV_LINKS.map((l, i) => (
                  <div key={l.label + i} className="flex items-center gap-[14px]">
                    <a
                      href={l.href}
                      className={`t-nav transition-all duration-500 hover:opacity-75 ${textColor}`}
                    >
                      {l.label}
                    </a>
                    {i < NAV_LINKS.length - 1 && (
                      <span className={`h-1 w-1 rounded-full transition-colors duration-500 ${dotColor}`} />
                    )}
                  </div>
                ))}
              </nav>
              <ArrowButton variant={light ? "white" : "dark"} onClick={openModal}>
                Join Waitlist
              </ArrowButton>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex items-center gap-3 lg:hidden transition-colors duration-500 ${textColor}`}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span className="t-title">{menuOpen ? "Close" : "Menu"}</span>
              <span className={`h-[10px] w-[10px] rounded-full transition-colors duration-500 ${dotColor}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[110] bg-pure text-paper lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-full w-full flex-col justify-between overflow-y-auto pt-[22vh] pb-10">
              <div className="flex flex-col gap-5">
                <p className="t-base px-5 text-paper/45 tracking-[0.02em]">Discover</p>
                <div className="flex flex-col">
                  {MOBILE_LINKS.map((l, i) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-5 py-4 text-[clamp(30px,8vw,44px)] font-medium leading-none tracking-[-0.03em] border-t border-white/10 ${
                        i === MOBILE_LINKS.length - 1 ? "border-b" : ""
                      }`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4 px-5">
                  <p className="t-title text-paper">Secure Your Spot</p>
                  <ArrowButton
                    variant="white"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setMenuOpen(false);
                      openModal();
                    }}
                  >
                    Join Waitlist
                  </ArrowButton>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 px-5">
                <div className="flex flex-col gap-3">
                  <p className="t-small text-paper/45 tracking-[0.02em]">Contact</p>
                  <a href="mailto:info@myhealthprac.com" className="t-base text-paper">
                    info@myhealthprac.com
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="t-small text-paper/45 tracking-[0.02em]">Social Media</p>
                  <a
                    href="https://www.instagram.com/myhealthprac/"
                    target="_blank"
                    rel="noreferrer"
                    className="t-base text-paper"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/myhealthprac/"
                    target="_blank"
                    rel="noreferrer"
                    className="t-base text-paper"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
