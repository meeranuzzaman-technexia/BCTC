import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FOOTER } from "../data/content.js";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <footer data-theme="dark" className="relative z-10 w-full bg-pure text-paper">
      <div className="px-site pt-[52px] pb-4 md:pt-[62px] md:pb-5">
        {/* Top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="t-logo text-paper lg:w-[30%]">MyHealthPrac</div>

          {/* Subscribe */}
          <div className="w-full lg:w-[30%]">
            <p className="t-base text-paper">{FOOTER.subscribeTitle}</p>
            {done ? (
              <p className="t-small mt-4 max-w-[40ch] text-paper/80">{FOOTER.success}</p>
            ) : (
              <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
                <label htmlFor="footer-email" className="t-small text-paper/60">
                  {FOOTER.subscribeNote}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-pill t-small h-[50px] w-full max-w-[85%] px-6"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-paper bg-pure text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
                  >
                    <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Link columns */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 lg:ml-auto lg:w-[40%]">
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
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-4 md:mt-24 md:flex-row md:items-center">
          <div className="flex items-center gap-4 md:hidden">
            <a href="#" className="t-small font-normal text-paper hover:opacity-45">
              Privacy Policy
            </a>
            <a href="#" className="t-small font-normal text-paper hover:opacity-45">
              Cookie Policy
            </a>
          </div>
          <p className="t-small text-paper/55">© 2025 MyHealthPrac</p>
          <div className="flex items-center justify-between md:ml-auto md:w-[40%]">
            <div className="hidden items-center gap-4 md:flex">
              <a href="#" className="t-small font-normal text-paper transition-opacity hover:opacity-45">
                Privacy Policy
              </a>
              <a href="#" className="t-small font-normal text-paper transition-opacity hover:opacity-45">
                Cookie Policy
              </a>
            </div>
            <p className="t-small text-paper/55">
              Website by <span className="text-paper">Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
