import { cn } from "@/lib/utils";

export function ContextBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
