import type { ReactNode } from "react";

export function KineticMarquee({ children }: { children?: ReactNode }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-zinc-950/90 py-3">
      <div className="whitespace-nowrap text-sm tracking-[0.18em] text-zinc-400 [animation:marquee_22s_linear_infinite]">
        <span className="mx-8">{children}</span>
        <span className="mx-8">{children}</span>
        <span className="mx-8">{children}</span>
      </div>
    </div>
  );
}
