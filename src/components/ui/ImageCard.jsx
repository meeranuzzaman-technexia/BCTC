/**
 * Image card — mirrors the reference layout:
 * large index top-left, name + sub right-aligned top, description bottom-left.
 * Fixed portrait width + shrink-0 for use inside the infinite marquee.
 */
export default function ImageCard({ item }) {
  return (
    <article className="group relative mr-4 h-[clamp(380px,42vw,560px)] w-[clamp(290px,32vw,420px)] shrink-0 overflow-hidden rounded-[8px] bg-ink text-paper">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-black/75" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[clamp(44px,3.7vw,58px)] font-medium leading-none tracking-[-0.03em]">
            {item.n}
          </p>
          <div className="flex flex-col items-end gap-1 pt-1 text-right">
            <p className="t-list-title max-w-[17ch]">{item.title}</p>
            {item.sub && <p className="t-small font-normal text-paper/70">{item.sub}</p>}
          </div>
        </div>
        <p className="t-base max-w-[32ch] font-normal leading-[1.4] text-paper/90">
          {item.desc}
        </p>
      </div>
    </article>
  );
}
