import type { ReactNode } from "react";

export function SpotlightCard({ children }: { children?: ReactNode }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-blue-300/40 hover:bg-zinc-900">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-cyan-300/0 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
