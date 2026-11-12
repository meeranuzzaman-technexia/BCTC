import Reveal from "./ui/Reveal.jsx";
import SplitText from "./ui/SplitText.jsx";
import DashboardMock from "./DashboardMock.jsx";
import { HUB } from "../data/content.js";

export default function HealthHub() {
  return (
    <section className="relative z-10 bg-paper">
      <div className="px-site py-[clamp(72px,10vw,152px)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitText as="h2" lines={HUB.title} className="t-h2-black text-ink" />
          <Reveal delay={0.15} className="lg:max-w-[46ch]">
            <p className="t-base-lg text-ink/80">{HUB.text}</p>
          </Reveal>
        </div>

        <Reveal className="mt-12 md:mt-20" y={60}>
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
