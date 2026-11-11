"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GAP = 34; // same pitch as the static .bg-grid texture
const RADIUS = 230;

/** Dot grid that lights up in the accent colour around the cursor. */
export function DotField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    // The wrapper is pointer-events-none, so listen on the whole section instead.
    const host = canvas?.closest("section") ?? canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let strength = 0; // 0 = cursor away, 1 = cursor present (eased)
    let goal = 0;
    const cursor = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (let y = 1; y < h; y += GAP) {
        for (let x = 1; x < w; x += GAP) {
          const t = Math.max(0, 1 - Math.hypot(x - smooth.x, y - smooth.y) / RADIUS) * strength;
          const k = t * t;
          ctx!.beginPath();
          ctx!.arc(x, y, 1 + k * 3.2, 0, Math.PI * 2);
          ctx!.fillStyle =
            k > 0.01 ? `rgba(124,108,255,${0.14 + k * 0.86})` : "rgba(255,255,255,0.14)";
          ctx!.fill();
        }
      }
    }

    function tick() {
      smooth.x += (cursor.x - smooth.x) * 0.16;
      smooth.y += (cursor.y - smooth.y) * 0.16;
      strength += (goal - strength) * 0.12;
      draw();
      const settling =
        Math.abs(goal - strength) > 0.005 ||
        Math.hypot(cursor.x - smooth.x, cursor.y - smooth.y) > 0.5;
      raf = settling ? requestAnimationFrame(tick) : 0;
    }

    function start() {
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      if (goal === 0) {
        smooth.x = cursor.x;
        smooth.y = cursor.y;
      }
      goal = 1;
      start();
    }

    function onLeave() {
      goal = 0;
      start();
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={cn("h-full w-full", className)} />;
}
