import { type ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]",
  secondary:
    "glass text-foreground hover:border-border-hover hover:bg-surface-hover",
  ghost: "text-foreground-muted hover:text-foreground",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.97] whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps & ComponentProps<typeof Link> & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
