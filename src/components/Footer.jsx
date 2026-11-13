import { FOOTER, SOCIAL_LINKS } from "../data/content.js";

/**
 * This project's lucide build ships no brand glyphs, so the social
 * marks are inlined here (stroke/fill `currentColor`, consistent with the
 * rest of the site's icon style).
 *
 * Optical sizing: every brand glyph is normalised into the SAME optical box
 * (18 x 18 units, centred on 12,12 of the 24x24 canvas) so no mark looks
 * bigger/smaller than its neighbours. The transforms below were computed
 * from each glyph's real painted bbox — Instagram was the 18x18 reference.
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
    {/* stroked mark: its painted extent is 18 + strokeWidth(1.75) = 19.75,
        so it is scaled down to land on the same 18-unit optical box */}
    <g transform="translate(1.063 1.063) scale(0.9114)">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    {/* glyph was 9.78 x 15 and sat low → scaled up + re-centred */}
    <g transform="translate(-1.428 -5.652) scale(1.2)">
      <path d="M13.4 21.2v-5.8h2.2l.32-2.7h-2.5V11c0-.8.22-1.3 1.38-1.3h1.28V7.35c-.68-.09-1.6-.14-2.62-.14-2.65 0-4.42 1.58-4.42 4.5v2H6.3v2.7h2.34v5.8h4.76z" />
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    {/* glyph was 16.2 x 16.45 → scaled up to the 18-unit box */}
    <g transform="translate(-0.365 -0.884) scale(1.0942)">
      <path d="M6.4 8.95H3.5V20h2.9V8.95z" />
      <circle cx="4.95" cy="5.3" r="1.75" />
      <path d="M10.7 20V13.6c0-2.12 1.3-3.5 3.2-3.5 1.86 0 2.6 1.3 2.6 3.5V20h2.9v-7.4c0-3.6-1.6-5.3-4.5-5.3-2 0-3.3 1.15-3.9 2.5h-.2V8.95h-2.9V20h2.8z" />
    </g>
  </svg>
);

const XIcon = () => (
  <svg {...iconProps}>
    {/* stroked glyph: 14 geometry + 1.75 stroke = 15.75 ink → scaled to 18 */}
    <g transform="translate(-1.714 -1.714) scale(1.1429)">
      <path d="M5 5l14 14M19 5L5 19" />
    </g>
  </svg>
);

const TikTokIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    {/* glyph was 20.85 x 24 (too big) → scaled down to the 18-unit box */}
    <g transform="translate(3 3) scale(0.75)">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </g>
  </svg>
);

const SOCIAL_ICONS = {
  TikTok: TikTokIcon,
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
