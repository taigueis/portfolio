"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const STOPS = [
  { id: "top", label: "início" },
  { id: "featured", label: "destaque" },
  { id: "projetos", label: "projetos" },
  { id: "competencias", label: "competências" },
  { id: "sobre", label: "sobre" },
  { id: "contacto", label: "contacto" },
];

/**
 * Vertical rail on the right edge: one dot per section, a line that fills
 * exactly up to the current section, "// label" on hover, click to jump.
 */
export function SectionRail() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    function update() {
      const last = STOPS.length - 1;
      const tops = STOPS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });
      const probe = window.scrollY + window.innerHeight * 0.4;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

      let i = 0;
      for (let k = 0; k <= last; k++) if (tops[k] <= probe) i = k;
      if (atBottom) i = last;

      const frac = i === last ? 0 : Math.min(1, Math.max(0, (probe - tops[i]) / (tops[i + 1] - tops[i])));
      raw.set(i === last ? 1 : (i + frac) / last);
      setActive(i);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [raw]);

  return (
    <nav
      aria-label="Secções da página"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 min-[1280px]:block"
    >
      <div className="relative flex flex-col gap-5">
        <span aria-hidden className="absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-border" />
        <motion.span
          aria-hidden
          style={{ scaleY: reduce ? raw : spring }}
          className="absolute bottom-1 left-1/2 top-1 w-px origin-top -translate-x-1/2 bg-accent"
        />
        {STOPS.map((stop, i) => (
          <a
            key={stop.id}
            href={`#${stop.id}`}
            aria-label={stop.label}
            aria-current={i === active ? "true" : undefined}
            className="group relative flex h-2 w-2 items-center justify-center"
          >
            <span
              className={cn(
                "pointer-events-none absolute right-5 whitespace-nowrap font-mono text-[11px] text-foreground-muted transition-all duration-200",
                "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                i === active && "min-[1536px]:translate-x-0 min-[1536px]:opacity-100"
              )}
            >
              {"// "}
              {stop.label}
            </span>
            <span
              className={cn(
                "block rounded-full border transition-all duration-300",
                i <= active
                  ? "h-2 w-2 border-accent bg-accent"
                  : "h-1.5 w-1.5 border-border-hover bg-background group-hover:border-foreground-muted",
                i === active && "shadow-[0_0_0_4px_rgba(124,108,255,0.2)]"
              )}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
