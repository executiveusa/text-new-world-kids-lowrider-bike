import type { ReactNode } from "react";

export function OdometerValue({ children }: { children?: ReactNode }) {
  return <span className="font-mono text-2xl font-bold text-blue-300">{children}</span>;
}
