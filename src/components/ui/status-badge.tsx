import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  "Em Produção": "border-success/25 bg-success/10 text-success",
  "Em Desenvolvimento": "border-amber-400/25 bg-amber-400/10 text-amber-300",
  "Open Source": "border-sky-400/25 bg-sky-400/10 text-sky-300",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide",
        styles[status],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
