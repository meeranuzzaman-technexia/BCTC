import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const WaitlistContext = createContext({ open: false, openModal: () => {}, closeModal: () => {} });

export function WaitlistProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(() => ({ open, openModal, closeModal }), [open, openModal, closeModal]);
  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export const useWaitlist = () => useContext(WaitlistContext);
