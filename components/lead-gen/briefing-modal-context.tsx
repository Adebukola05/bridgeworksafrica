"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface BriefingModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BriefingModalContext = createContext<BriefingModalContextValue | null>(null);

export function BriefingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return <BriefingModalContext.Provider value={value}>{children}</BriefingModalContext.Provider>;
}

export function useBriefingModal() {
  const ctx = useContext(BriefingModalContext);
  if (!ctx) {
    throw new Error("useBriefingModal must be used within a BriefingModalProvider");
  }
  return ctx;
}
