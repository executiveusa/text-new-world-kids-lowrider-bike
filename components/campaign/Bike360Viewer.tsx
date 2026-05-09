"use client";
import dynamic from "next/dynamic";
import "@cloudimage/360-view/css";
import { campaign } from "@/config/campaign";

type ViewerProps = Record<string, unknown>;
const CI360 = dynamic<ViewerProps>(() => import("@cloudimage/360-view/react").then((m) => m.CI360Viewer as never), { ssr: false });

export function Bike360Viewer({ className = "" }: { variant?: "hero" | "wide"; showControls?: boolean; className?: string }) {
  const list = Array.from({ length: campaign.bike360.amountX }, (_, i) => `/assets/bike/360/frame-${String(i + 1).padStart(campaign.bike360.indexZeroBase, "0")}.jpg`);
  return <div className={"rounded-xl border border-white/20 bg-zinc-950 p-4 " + className}><p className="mb-2 text-xs text-zinc-300">Drag to rotate. Keyboard arrows supported.</p><CI360 imageListX={list} draggable swipeable keys fullScreen magnifier lazyload bottomCircle /></div>;
}
