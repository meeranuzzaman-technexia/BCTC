import Reveal from "./ui/Reveal.jsx";

// Purane project ke tokens (forest/sage/pine/sand) ke hex equivalents,
// kyunki current theme mein ink/paper hain.
const SERIF = "'Instrument Serif', 'Playfair Display', Georgia, serif";
const SAGE = "#b9d9c5";   // badge/seal icon
const PINE = "#1f5240";   // italic accent
const SAND = "#d9c6aa";   // card borders
const MINT = "#d3e6d8";   // tilted backdrop

function ShieldCheck({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Award({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="5" />
      <circle cx="12" cy="9" r="2" />
      <path d="m8.5 13.5-1.7 7.2 5.2-2.7 5.2 2.7-1.7-7.2" />
    </svg>
  );
}

// Original CertificateCard (Sections.jsx) ka port
function CertificateCard({ title }) {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border bg-[#faf8f3] p-3 shadow-xl shadow-black/10"
      style={{ borderColor: `${SAND}99` }}
    >
      <div
        className="flex h-full flex-col items-center justify-between rounded-xl border-2 border-double px-6 py-8 text-center"
        style={{ borderColor: `${SAND}cc` }}
      >
        <div>
          <div
            className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink"
            style={{ color: SAGE }}
          >
            <Award size={26} />
          </div>
          <p
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em]"
            style={{ color: PINE }}
          >
            Sindh Healthcare Commission
          </p>
        </div>

        <div>
          <p
            className="text-3xl italic leading-tight text-ink"
            style={{ fontFamily: SERIF }}
          >
            {title}
          </p>
          <div className="mx-auto my-4 h-px w-16" style={{ background: SAND }} />
          <p className="text-sm font-medium text-ink">Bone Care Trauma Centre</p>
          <p className="text-xs text-ink/60">Hyderabad, Sindh</p>
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <div className="space-y-1.5">
            <div className="h-1 w-20 rounded bg-ink/10" />
            <div className="h-1 w-14 rounded bg-ink/10" />
          </div>
          <ShieldCheck size={30} className="opacity-60" style={{ color: PINE }} />
        </div>
      </div>
    </div>
  );
}

/**
 * SECTION 7 — Licensing / Recognition
 * PinnedLayer ke andar chalta hai: min-h-[100svh], content vertically centred.
 */
export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative flex min-h-[100svh] w-full items-center bg-paper"
    >
      <div className="px-site w-full py-[clamp(72px,9vw,140px)]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Left */}
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span
                className="t-small inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-medium uppercase tracking-[0.16em]"
                style={{ color: SAGE }}
              >
                {/* <ShieldCheck size={15} /> */}
                SHCC Regular License
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="t-h2-black text-ink">
                A Milestone in Healthcare
                <br />
                for{" "}
                <em
                  className="font-normal italic"
                  style={{ fontFamily: SERIF, color: PINE }}
                >
                  Hyderabad
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="t-base-lg max-w-[46ch] text-ink/70">
                Bone Care Trauma Centre is the first hospital in Hyderabad,
                Sindh, licensed by the Sindh Healthcare Commission (SHCC).
              </p>
            </Reveal>
          </div>

          {/* Right: certificate */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="absolute inset-0 -rotate-6 rounded-2xl"
                style={{ background: MINT }}
              />
              <div className="relative rotate-2 transition-transform duration-500 hover:rotate-0">
                <CertificateCard title="Regular License" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}