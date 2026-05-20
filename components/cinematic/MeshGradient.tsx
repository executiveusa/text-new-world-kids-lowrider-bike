import type { ReactNode } from "react";

export function MeshGradient({ children }: { children?: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}
