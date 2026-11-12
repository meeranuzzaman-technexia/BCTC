import {
  Activity,
  Fingerprint,
  Layers,
  Clock,
  Brain,
  UserRound,
  Radar,
  Target,
  Zap,
  Map,
  TrendingUp,
  LayoutGrid,
  Sprout,
  Timer,
  CalendarDays,
  Moon,
} from "lucide-react";

const MAP = {
  activity: Activity,
  fingerprint: Fingerprint,
  layers: Layers,
  clock: Clock,
  brain: Brain,
  user: UserRound,
  radar: Radar,
  target: Target,
  zap: Zap,
  map: Map,
  trending: TrendingUp,
  grid: LayoutGrid,
  sprout: Sprout,
  timer: Timer,
  calendar: CalendarDays,
  moon: Moon,
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.5 }) {
  const Cmp = MAP[name] || Activity;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}

/** Soft rounded icon tile used across feature lists */
export function IconTile({ name, dark = false, size = 48, className = "" }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[14px] border ${
        dark
          ? "border-white/15 bg-white/10 text-paper backdrop-blur-sm"
          : "border-ink/10 bg-ink/[0.04] text-ink"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon name={name} className="h-[42%] w-[42%]" strokeWidth={1.4} />
    </div>
  );
}
