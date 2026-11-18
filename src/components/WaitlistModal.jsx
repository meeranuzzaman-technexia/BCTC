import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWaitlist } from "../context/WaitlistContext.jsx";
import { MODAL } from "../data/content.js";

export default function WaitlistModal() {
  const { open, closeModal } = useWaitlist();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setDone(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setDone(false);
      setForm({ name: "", email: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-black/55 backdrop-blur-[9px]"
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={MODAL.title}
            className="relative w-full max-w-[640px] rounded-[10px] bg-paper p-6 shadow-2xl md:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="t-h3 text-ink">{MODAL.title}</h3>
                <p className="t-base text-ink opacity-70">{MODAL.sub}</p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="absolute h-[1.5px] w-4 rotate-45 bg-current" />
                <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current" />
              </button>
            </div>

            {done ? (
              <div className="mt-8 rounded-[8px] border border-ink/10 bg-white p-6">
                <p className="t-base text-ink">{MODAL.success}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="t-small text-ink opacity-70">First Name*</span>
                    <input
                      className="field-input t-base"
                      placeholder="Enter first name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="t-small text-ink opacity-70">Email Address*</span>
                    <input
                      type="email"
                      className="field-input t-base"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </label>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="submit"
                    className="t-base h-[54px] w-full rounded-full bg-ink px-4 text-paper transition-colors hover:bg-pure"
                  >
                    Join Waitlist
                  </button>
                  <p className="t-small text-ink opacity-60">
                    By signing up, you agree to our terms.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
