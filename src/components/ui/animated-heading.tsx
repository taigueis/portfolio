"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Segment = { text: string; className?: string };

/** Headline that sharpens in word by word (blur + rise, staggered). */
export function AnimatedHeading({
  segments,
  className,
  delay = 0.15,
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  let index = 0;

  return (
    <h1 className={cn("select-none", className)}>
      {segments.flatMap((segment, s) =>
        segment.text
          .split(" ")
          .filter(Boolean)
          .map((word, w) => {
            const i = index++;
            return (
              <motion.span
                key={`${s}-${w}`}
                className={cn("mr-[0.26em] inline-block", segment.className)}
                initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            );
          })
      )}
    </h1>
  );
}
