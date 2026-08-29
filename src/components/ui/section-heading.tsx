import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="font-mono text-xs tracking-wide text-accent">
        {`// ${eyebrow}`}
      </span>
      <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-sm leading-relaxed text-foreground-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
