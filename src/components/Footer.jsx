import { FOOTER } from "../data/content.js";

/**
 * SECTION 9 — Footer
 * Hospital details and navigation: Hospital / Quick Links /
 * Our Facilities / Contact Information.
 */
export default function Footer() {
  return (
    <footer data-theme="dark" className="relative z-10 w-full bg-pure text-paper">
      <div className="px-site pt-[52px] pb-4 md:pt-[62px] md:pb-5">
        {/* Top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* Column 01 — Hospital */}
          <div className="flex flex-col gap-4 lg:w-[26%]">
            <p className="t-logo text-paper">{FOOTER.logo}</p>
            <p className="t-base text-paper/85">{FOOTER.tagline}</p>
            <p className="t-base font-normal text-paper/65">{FOOTER.since}</p>
          </div>

          {/* Columns 02–04 — Quick Links / Our Facilities / Contact */}
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:ml-auto lg:w-[66%]">
            {FOOTER.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="t-small font-normal text-paper/65">{col.title}</p>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((l, i) => (
                    <li key={l.label + i}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                        className="t-small font-normal text-paper transition-opacity duration-300 hover:opacity-45"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-4 md:mt-24 md:flex-row md:items-center md:justify-between">
          <p className="t-small text-paper/65">{FOOTER.bottom}</p>
          <p className="t-small text-paper/65">{FOOTER.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
