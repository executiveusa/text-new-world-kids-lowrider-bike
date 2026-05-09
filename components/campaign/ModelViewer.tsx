"use client";
import { createElement, useEffect, useState } from "react";
export function ModelViewer() {
  const [ok, setOk] = useState(false);
  useEffect(() => { import("@google/model-viewer"); fetch('/assets/bike/model/bike.glb', { method: 'HEAD' }).then((r) => setOk(r.ok)).catch(() => setOk(false)); }, []);
  if (!ok) return <div className='rounded-xl border border-dashed p-6 text-zinc-300'>3D model coming after final build scan.</div>;
  return createElement('model-viewer', { src: '/assets/bike/model/bike.glb', 'camera-controls': true, 'auto-rotate': true, ar: true, style: { width: '100%', height: '420px' } });
}
