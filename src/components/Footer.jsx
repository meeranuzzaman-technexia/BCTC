import { FOOTER, SOCIAL_LINKS } from "../data/content.js";

/**
 * This project's lucide build ships no brand glyphs, so the four social
 * marks are inlined here (stroke/fill `currentColor`, consistent with the
 * rest of the site's icon style).
 */
const iconProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const InstagramIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    <path d="M13.4 21.2v-5.8h2.2l.32-2.7h-2.5V11c0-.8.22-1.3 1.38-1.3h1.28V7.35c-.68-.09-1.6-.14-2.62-.14-2.65 0-4.42 1.58-4.42 4.5v2H6.3v2.7h2.34v5.8h4.76z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    <path d="M6.4 8.95H3.5V20h2.9V8.95z" />
    <circle cx="4.95" cy="5.3" r="1.75" />
    <path d="M10.7 20V13.6c0-2.12 1.3-3.5 3.2-3.5 1.86 0 2.6 1.3 2.6 3.5V20h2.9v-7.4c0-3.6-1.6-5.3-4.5-5.3-2 0-3.3 1.15-3.9 2.5h-.2V8.95h-2.9V20h2.8z" />
  </svg>
);

const XIcon = () => (
  <svg {...iconProps}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Twitter: XIcon,
};

/**
 * SECTION 9 — Footer
 * Footer7-style layout (logo + description + socials on the left,
 * three link columns on the right, bottom bar with © + attribution),
 * rendered in the Bone Care dark-green brand.
 * Content is unchanged — © line, columns and tagline all from content.js.
 */
export default function Footer() {
  const socials = (SOCIAL_LINKS || []).filter((s) => s.href && s.href !== "");

  return (
    <footer
      data-theme="dark"
      data-logo="white"
      className="relative z-10 w-full bg-pure text-paper"
    >
      <div className="px-site pt-16 pb-4 md:pt-24">
        {/* Top row */}
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Logo + description + socials */}
          <div className="flex w-full flex-col gap-6 lg:max-w-[34%]">
            <a href="#home" aria-label="Bone Care Trauma Centre — Home" className="w-fit">
              <img
                src="/media/bone-care-white.png"
                alt="Bone Care Trauma Centre"
                className="h-auto w-[15%]"
              />
            </a>
            <p className="t-base text-paper/85">{FOOTER.tagline}</p>
            <p className="max-w-[70%] t-small font-normal text-paper/65">{FOOTER.since}</p>

            {socials.length > 0 && (
              <ul className="flex items-center gap-6">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.label];
                  if (!Icon) return null;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        aria-label={s.label}
                        className="text-paper/55 transition-colors duration-300 hover:text-paper"
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Link columns */}
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 lg:max-w-[62%] lg:gap-16">
            {FOOTER.columns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="t-small mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-paper/90">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l, i) => (
                    <li key={l.label + i}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="t-small font-normal text-paper/70 transition-colors duration-300 hover:text-paper"
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 pb-0 md:flex-row md:items-center">
          <p className="t-small text-paper/65">{FOOTER.bottom}</p>
          <p className="t-small text-paper/65">
            Created by{" "}
            <a
              href="https://technexia.com/"
              target="_blank"
              rel="noreferrer"
              className="tx-logo text-paper underline-offset-4 transition-colors duration-300"
            >
              technexia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
