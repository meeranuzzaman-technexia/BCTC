import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowButton from "./ui/ArrowButton.jsx";
import { NAV_LINKS, MOBILE_LINKS, CONTACT } from "../data/content.js";
import { cn } from "../lib/utils.js";

/** Reverse-sticky: hides on scroll down, returns on any upward scroll or near the top.
 *  Also reports whether the page has been scrolled at all (for the glass background). */
function useHeaderScroll(menuOpen) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 24 : false
  );
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY || 0;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const diff = y - lastY.current;
        setScrolled(y > 24);
        if (menuOpen || y < 80) {
          setHidden(false);
        } else if (Math.abs(diff) > 5) {
          setHidden(diff > 0 && y > 140);
          lastY.current = y;
        }
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return { hidden, scrolled };
}

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
  const { hidden, scrolled } = useHeaderScroll(menuOpen);
  const solid = menuOpen || scrolled;

  useEffect(() => {
    if (menuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const textColor = menuOpen || light ? "text-paper" : "text-ink";
  const dotColor = menuOpen || light ? "bg-paper" : "bg-ink";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] will-change-transform",
          "border-b backdrop-blur-2xl backdrop-saturate-150",
          "transition-[translate,background-color,border-color,box-shadow] ease-[cubic-bezier(0.22,1,0.36,1)]",
          solid
            ? menuOpen || light
              ? "border-white/10 bg-[#0a241b]/60 shadow-[0_18px_44px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.09)]"
              : "border-black/[0.06] bg-white/65 shadow-[0_18px_44px_rgba(20,59,42,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none backdrop-saturate-100",
          // appear (scroll-up) slower & softer than disappearance — 0.7s vs 0.3s
          hidden ? "-translate-y-[105%] duration-300" : "translate-y-0 duration-700"
        )}
      >
        <div className="px-site w-full py-[10px] md:py-[12px]">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              aria-label="Bone Care Trauma Centre — Home"
              className="shrink-0"
            >
              <img
                src={
                  menuOpen || light
                    ? "/media/bone-care-logo-dark.png"
                    : "/media/bone-care-logo.png"
                }
                alt="Bone Care Trauma Centre"
                className="h-[42px] w-auto transition-all duration-500 md:h-[52px]"
              />
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
              <ArrowButton variant={light ? "white" : "dark"} href="#contact">
                Contact Us
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
            <div className="flex h-full w-full flex-col justify-between overflow-y-auto pt-[18vh] pb-10">
              <div className="flex flex-col gap-5">
                <p className="t-base px-5 text-paper/65 tracking-[0.02em]">Menu</p>
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
                  <p className="t-title text-paper">Get in Touch</p>
                  <ArrowButton
                    variant="white"
                    size="lg"
                    className="w-full"
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </ArrowButton>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 px-5">
                <div className="flex flex-col gap-3">
                  <p className="t-small text-paper/65 tracking-[0.02em]">Contact</p>
                  <a href={CONTACT.emailHref} className="t-base text-paper break-all">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="t-small text-paper/65 tracking-[0.02em]">Phone</p>
                  <a href={CONTACT.phone1Href} className="t-base text-paper">
                    {CONTACT.phone1}
                  </a>
                  <a href={CONTACT.phone2Href} className="t-base text-paper">
                    {CONTACT.phone2}
                  </a>
                  <a href={CONTACT.mobileHref} className="t-base text-paper">
                    {CONTACT.mobile}
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
