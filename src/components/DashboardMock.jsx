import { motion } from "framer-motion";

const SPARK = [
  "M0 28 C 12 26, 20 20, 32 22 S 52 14, 64 12 S 84 16, 100 8",
  "M0 20 C 14 24, 22 28, 34 24 S 56 10, 68 14 S 86 22, 100 18",
  "M0 26 C 10 18, 20 16, 30 18 S 50 26, 62 20 S 86 6, 100 10",
];

const MARKERS = [
  { name: "Vitamin D", value: "80", unit: "nmol/L", status: "Optimal", pct: 78, tone: "bg-emerald-500" },
  { name: "Ferritin", value: "74", unit: "ng/mL", status: "Watch", pct: 54, tone: "bg-amber-400" },
  { name: "Omega-3 Index", value: "6.2", unit: "%", status: "Optimal", pct: 70, tone: "bg-emerald-500" },
  { name: "Magnesium", value: "0.93", unit: "mmol/L", status: "Low", pct: 32, tone: "bg-rose-400" },
];

const PATTERNS = [
  { name: "Insulin resistance", p: 18 },
  { name: "Methylation dysfunction", p: 41 },
  { name: "Low thyroid output", p: 27 },
  { name: "Histamine intolerance", p: 12 },
];

const HEAT = [
  [1, 2, 2, 3, 3, 4, 4, 4],
  [2, 2, 3, 3, 4, 4, 5, 5],
  [1, 1, 2, 2, 2, 3, 3, 4],
  [3, 3, 3, 4, 4, 4, 5, 5],
  [2, 2, 2, 3, 3, 3, 4, 4],
];
const HEAT_TONES = ["bg-ink/[0.04]", "bg-beige/30", "bg-beige/55", "bg-beige/80", "bg-beige", "bg-ink"];

function Ring({ value = 82 }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-[clamp(96px,9vw,128px)] w-[clamp(96px,9vw,128px)]">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(31,31,31,0.08)" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#1f1f1f"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[clamp(22px,2.2vw,32px)] font-medium leading-none tracking-[-0.03em] text-ink">
          {value}
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.08em] text-ink/50">
          Index
        </span>
      </div>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="mx-auto w-full max-w-[1180px]">
      {/* Tablet frame */}
      <div className="rounded-[26px] bg-[#111] p-[10px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] md:rounded-[34px] md:p-[14px]">
        <div className="overflow-hidden rounded-[18px] bg-paper md:rounded-[24px]">
          <div className="flex min-h-[520px] md:min-h-[600px]">
            {/* Sidebar */}
            <aside className="hidden w-[180px] shrink-0 flex-col border-r border-ink/10 bg-white/60 p-5 md:flex">
              <p className="t-small font-semibold tracking-[0.02em] text-ink">MyHealthPrac</p>
              <nav className="mt-8 flex flex-col gap-1">
                {["Overview", "Biomarkers", "Patterns", "Clients", "Protocols", "Reports"].map((n, i) => (
                  <span
                    key={n}
                    className={`rounded-[8px] px-3 py-2 text-[12px] font-medium ${
                      i === 0 ? "bg-ink text-paper" : "text-ink/60"
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </nav>
              <div className="mt-auto rounded-[10px] bg-ink p-3 text-paper">
                <p className="text-[11px] font-medium opacity-70">Next check-in</p>
                <p className="mt-1 text-[13px] font-medium">Thu, 09:30</p>
              </div>
            </aside>

            {/* Main */}
            <div className="flex-1 p-4 md:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink/45">
                    Client dashboard
                  </p>
                  <p className="mt-1 text-[clamp(16px,1.4vw,22px)] font-medium tracking-[-0.02em] text-ink">
                    Alex Morgan · 34
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-medium text-ink/70">
                    Last 12 months
                  </span>
                  <span className="hidden rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium text-paper sm:inline">
                    Upload labs
                  </span>
                </div>
              </div>

              {/* Row 1 */}
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="flex items-center gap-4 rounded-[12px] border border-ink/10 bg-white p-4">
                  <Ring value={82} />
                  <div>
                    <p className="text-[12px] font-medium text-ink/50">Overall Health Index</p>
                    <p className="mt-1 text-[14px] font-medium text-ink">Trending up</p>
                    <p className="mt-2 text-[11px] font-medium text-emerald-600">+6 since March</p>
                  </div>
                </div>

                <div className="rounded-[12px] border border-ink/10 bg-white p-4 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-medium text-ink/50">Probability of dysfunction</p>
                    <p className="text-[11px] font-medium text-ink/40">250+ patterns</p>
                  </div>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {PATTERNS.map((p) => (
                      <div key={p.name} className="flex items-center gap-3">
                        <span className="w-[46%] truncate text-[12px] font-medium text-ink sm:w-[40%]">
                          {p.name}
                        </span>
                        <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-ink/[0.06]">
                          <motion.div
                            className={`h-full rounded-full ${p.p > 35 ? "bg-amber-400" : "bg-ink"}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.p}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                          />
                        </div>
                        <span className="w-9 text-right text-[12px] font-medium text-ink/70">{p.p}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 — markers */}
              <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {MARKERS.map((m, i) => (
                  <div key={m.name} className="rounded-[12px] border border-ink/10 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-medium text-ink/60">{m.name}</p>
                      <span className={`h-2 w-2 rounded-full ${m.tone}`} />
                    </div>
                    <p className="mt-2 text-[clamp(18px,1.6vw,24px)] font-medium leading-none tracking-[-0.02em] text-ink">
                      {m.value}
                      <span className="ml-1 text-[11px] font-medium text-ink/45">{m.unit}</span>
                    </p>
                    <svg viewBox="0 0 100 32" className="mt-3 h-8 w-full" preserveAspectRatio="none">
                      <motion.path
                        d={SPARK[i % SPARK.length]}
                        fill="none"
                        stroke="#1f1f1f"
                        strokeWidth="1.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                      />
                    </svg>
                    <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-ink/[0.06]">
                      <div className={`h-full rounded-full ${m.tone}`} style={{ width: `${m.pct}%` }} />
                    </div>
                    <p className="mt-2 text-[11px] font-medium text-ink/50">{m.status} range</p>
                  </div>
                ))}
              </div>

              {/* Row 3 — heatmap */}
              <div className="mt-3 rounded-[12px] border border-ink/10 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-medium text-ink/50">Retrospective heatmap</p>
                  <p className="text-[11px] font-medium text-ink/40">Jan → Aug</p>
                </div>
                <div className="mt-3 flex flex-col gap-1.5">
                  {["Energy", "Sleep", "Digestion", "Mood", "Recovery"].map((row, ri) => (
                    <div key={row} className="flex items-center gap-2">
                      <span className="w-16 text-[11px] font-medium text-ink/60">{row}</span>
                      <div className="grid flex-1 grid-cols-8 gap-1.5">
                        {HEAT[ri].map((v, ci) => (
                          <motion.span
                            key={ci}
                            className={`h-4 rounded-[4px] ${HEAT_TONES[v]}`}
                            initial={{ opacity: 0, scale: 0.6 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.02 * (ri * 8 + ci) }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
