import Reveal from "./ui/Reveal.jsx";
import { PERSONAL, PROFESSIONAL } from "../data/content.js";

function Table({ data, tone = "white", delay = 0 }) {
  const bg = tone === "beige" ? "bg-beige" : "bg-paper";
  return (
    <Reveal delay={delay} className={`w-full rounded-[6px] p-6 md:p-7 ${bg}`}>
      <div className="mb-2 flex w-full items-center justify-between">
        <h3 className="t-h3 text-ink">{data.heading}</h3>
        <span className="h-4 w-4 rounded-full bg-ink" />
      </div>
      <p className="t-base text-ink">{data.sub}</p>

      <ul className="mt-8">
        {data.items.map(([title, desc], i) => (
          <li
            key={title}
            className={`dash-top flex flex-col gap-1.5 py-3 ${
              i === data.items.length - 1 ? "dash-bottom" : ""
            }`}
          >
            <p className="t-list-title text-ink">{title}</p>
            <p className="t-base font-normal text-ink/70">{desc}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Tables() {
  return (
    <section id="personal-professional" className="relative z-10 bg-grey">
      <div className="px-site pt-8 pb-[72px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <Table data={PERSONAL} tone="white" />
          </div>
          <div className="lg:w-1/2">
            <Table data={PROFESSIONAL} tone="beige" delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
}
