import React, { createContext, useContext, useMemo, useState } from "react";

const ShiftCtx = createContext(null);

export function ShiftProvider({ initial = "day", children }) {
  const [shift, setShift] = useState(initial); // "day" | "night"
  const isNight = shift === "night";
  const value = useMemo(() => ({ shift, setShift, isNight }), [shift, isNight]);
  return <ShiftCtx.Provider value={value}>{children}</ShiftCtx.Provider>;
}

export function useShift() {
  const ctx = useContext(ShiftCtx);
  if (!ctx) throw new Error("useShift must be used within <ShiftProvider/>");
  return ctx;
}
